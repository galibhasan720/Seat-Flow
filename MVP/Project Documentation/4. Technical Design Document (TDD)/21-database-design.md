
# SeatFlow - Database Design

## Database Overview
- Engine: **Amazon DynamoDB**
- Model: **NoSQL key-value/document**
- Table strategy: **Single-table design** for core application entities
- Time handling: UTC timestamps (ISO-8601), timezone conversion managed in the React presentation layer

## Table Design
### Primary Table: `seatflow_core`
| Key | Type | Purpose |
|---|---|---|
| `PK` | String | Partition key (event or user centered access boundaries) |
| `SK` | String | Sort key (entity type + hierarchical order patterns) |

### Item Types in Single Table
| Entity | PK Pattern | SK Pattern | Notes |
|---|---|---|---|
| User Profile | `USER#{user_id}` | `PROFILE` | One profile per registered user/organizer/admin |
| Event Category | `CATEGORY#{category_id}` | `METADATA` | Global platform categories |
| Event | `EVENT#{event_id}` | `METADATA` | Core event details and booking window controls |
| Seat | `EVENT#{event_id}` | `SEAT#{seat_id}` | Physical capacity units tied to an event |
| Booking | `USER#{user_id}` | `BOOKING#{booking_id}` | Customer reservation records |
| Notification | `USER#{user_id}` | `NOTIF#{created_at}#{notif_id}` | Confirmations and event reminders |

## Attribute Dictionary
| Attribute | Type | Used By |
|---|---|---|
| `entity_type` | String | All items (`USER`, `EVENT`, `SEAT`, `BOOKING`, etc.) |
| `user_id` | String | User partitioning and booking ownership |
| `event_id` | String | Event, seat, and booking relational mapping |
| `seat_id` | String | Booking-to-Seat linkage |
| `status` | String | Seat status (`Available`, `Locked`, `Booked`) / Booking status (`Pending`, `Confirmed`, `Cancelled`) |
| `category` | String | Seat categorization (`VIP`, `Standard`) or Event classification |
| `event_date` | String (ISO datetime) | Event scheduling and reminder triggering |
| `locked_until` | Number (Epoch) | TTL for temporary checkout locks to prevent double booking |
| `created_at` | String (ISO datetime) | Ordering, analytics, and audit tracking |
| `updated_at` | String (ISO datetime) | Change tracking |
| `gsi1pk`, `gsi1sk` | String | GSI-1 access pattern (Event Catalog Discovery) |
| `gsi2pk`, `gsi2sk` | String | GSI-2 access pattern (Organizer Analytics / Attendee Lists) |
| `gsi3pk`, `gsi3sk` | String | GSI-3 access pattern (Notification/Reminder Scheduling) |

## Global Secondary Indexes (GSI)
| Index | Partition Key | Sort Key | Access Pattern |
|---|---|---|---|
| GSI-1 (`gsi1pk-gsi1sk`) | `CATALOG#EVENTS` | `STATUS#{status}#DATE#{event_date}` | Event discovery, keyword search, and filtering by date/category |
| GSI-2 (`gsi2pk-gsi2sk`) | `EVENT#{event_id}#BOOKINGS` | `STATUS#{status}#CREATED#{created_at}` | Organizer dashboard metrics (seats sold vs available, cancellation rates) |
| GSI-3 (`gsi3pk-gsi3sk`) | `EVENT#{event_id}#REMINDERS` | `EVENT_DATE#{event_date}#USER#{user_id}` | Background worker scans for dispatching pre-event reminders |

## Data Integrity Strategy (NoSQL)
1. **Concurrency Control (Crucial MVP Feature):** **Conditional writes** are strictly enforced on `SEAT` items during checkout. The condition `attribute_equals(status, 'Available')` ensures that a seat is exclusively locked, strictly preventing double booking.
2. **TransactWriteItems:** Used when converting a `Pending` booking to `Confirmed`. The system updates the `BOOKING` status and the corresponding `SEAT` status in a single, all-or-nothing transaction.
3. **Application-Level Integrity:** FastAPI services manage relational links (e.g., verifying an event's booking window is open before allowing a seat lock).
4. **Capacity Releases:** Cancelling a booking updates the `BOOKING` item to `Cancelled` and immediately reverts the `SEAT` item status back to `Available`.

## Sample Item (Seat - Demonstrating Concurrency Control)
```json
{
  "PK": "EVENT#evt_9901",
  "SK": "SEAT#st_A12",
  "entity_type": "SEAT",
  "event_id": "evt_9901",
  "seat_id": "st_A12",
  "seat_number": "A-12",
  "category": "VIP",
  "status": "Locked",
  "locked_by_user_id": "usr_404",
  "locked_until": 1718880000,
  "created_at": "2026-06-10T08:00:00Z",
  "updated_at": "2026-06-19T10:15:00Z"
}

```

## Capacity and Performance

| Area | Strategy |
| --- | --- |
| Read/Write Mode | On-demand pricing to handle variable traffic spikes during popular event booking windows |
| Hot Partition Mitigation | Partitioning active checkout sessions by `USER` and `EVENT` IDs; using GSIs to aggregate heavy read queries |
| Discovery Queries | Event lists are queried via GSI-1 using `begins_with` conditions to avoid expensive full table scans |
| Pagination | Leveraging DynamoDB `LastEvaluatedKey` for paginating large event catalogs and attendee lists |

## Backup, Recovery, and Security

| Control | Approach |
| --- | --- |
| Backup | AWS Point-in-time recovery (PITR) enabled for continuous 35-day protection |
| Isolation | Single-table design isolates core transactional data away from standard public web logs |
| Encryption | AWS managed KMS keys (SSE-KMS) for data at rest |
| Access Control | Strict, least-privilege AWS IAM roles configured for the Dockerized FastAPI containers |
| Compliance | Explicit exclusion of payment gateway data from this table simplifies regulatory scoping |

## NoSQL Modeling Discussion

* The schema is highly optimized for the MVP's primary requirement: **fast, conflict-free seat selection**.
* Denormalization allows organizers to pull an entire event's seating map simply by querying `PK = EVENT#{event_id} AND SK begins_with("SEAT#")`.
* Real-time analytics (total bookings, seats sold vs available) for the Organizer Dashboard are calculated rapidly using `Count` queries on GSI-2 without bogging down the primary seat-locking partition.
