
# SeatFlow - API Design

## API Standards
| Item | Standard |
|---|---|
| Base URL | `/api/v1` |
| Format | JSON |
| Auth | Bearer JWT |
| Error Model | `error_code`, `message`, `trace_id`, `details` |
| Time Format | ISO-8601 UTC |

> **Path Convention:** Endpoints listed below are relative to `/api/v1`.  
> Example: `POST /auth/register` means `POST /api/v1/auth/register`.

## Authentication APIs
| Endpoint | Method | Description | Auth |
|---|---|---|---|
| `/auth/register` | POST | Register customer or organizer | Public |
| `/auth/login` | POST | Login and issue JWT tokens | Public |
| `/auth/refresh` | POST | Refresh access token | Public (refresh token) |
| `/auth/logout` | POST | Revoke access/refresh tokens | Bearer |
| `/auth/password-reset/request` | POST | Request password reset token | Public |
| `/auth/password-reset/confirm` | POST | Reset password using token | Public |

### Example: POST `/auth/register`
**Request**
```json
{
  "full_name": "Tarik Hasan",
  "email": "tarik@example.com",
  "password": "StrongPass!123",
  "role": "Customer"
}

```

**Response 201**

```json
{
  "user_id": "u_9021",
  "email": "tarik@example.com",
  "role": "Customer",
  "message": "Registration successful"
}

```

## User and Account Lifecycle APIs

| Endpoint | Method | Description | Auth |
| --- | --- | --- | --- |
| `/users/me` | GET | View current user profile | Bearer |
| `/users/me` | PATCH | Update current user profile | Bearer |
| `/admin/users/{user_id}/status` | PATCH | Suspend/reactivate user account | Bearer (Admin) |

## Event Discovery & Catalog APIs

| Endpoint | Method | Description | Auth |
| --- | --- | --- | --- |
| `/events` | GET | List events (search/filter/sort/pagination) | Public |
| `/events/{event_id}` | GET | Get event details | Public |
| `/events` | POST | Create new event | Bearer (Organizer) |
| `/events/{event_id}` | PATCH | Update event metadata/capacity | Bearer (Organizer) |
| `/events/{event_id}` | DELETE | Delete event | Bearer (Organizer) |
| `/events/{event_id}/booking-window` | PATCH | Open/close booking window | Bearer (Organizer) |
| `/categories` | GET | List event categories | Public |
| `/categories` | POST | Create global event category | Bearer (Admin) |

### List Events Query Parameters

`q, category_id, date_from, date_to, venue, max_price, sort_by (popularity, date, availability), page, page_size`

### Example: POST `/events`

**Request**

```json
{
  "title": "University Tech Symposium 2026",
  "description": "Annual tech gathering for CS students.",
  "category_id": "cat_05",
  "venue": "Main Auditorium",
  "event_date": "2026-08-15T09:00:00Z",
  "price": 0.00,
  "capacity": {
    "vip": 50,
    "standard": 200
  }
}

```

**Response 201**

```json
{
  "id": "evt_7742",
  "status": "Published",
  "booking_window_open": false,
  "created_at": "2026-06-20T08:00:00Z"
}

```

## Seat & Booking APIs

| Endpoint | Method | Description | Auth |
| --- | --- | --- | --- |
| `/events/{event_id}/seats` | GET | Display available seats/categories | Public |
| `/events/{event_id}/seats/lock` | POST | Lock seat temporarily for checkout | Bearer |
| `/bookings` | POST | Confirm locked seat and create booking | Bearer |
| `/bookings` | GET | View booking history | Bearer |
| `/bookings/{booking_id}` | GET | Track specific booking status | Bearer |
| `/bookings/{booking_id}/cancel` | PATCH | Cancel booking and release seat | Bearer |
| `/events/{event_id}/attendees` | GET | View attendee list and booking summary | Bearer (Organizer) |

### Example: POST `/events/{event_id}/seats/lock`

**Request**

```json
{
  "seat_id": "st_A12",
  "category": "VIP"
}

```

**Response 200**

```json
{
  "message": "Seat locked successfully",
  "locked_until": "2026-06-20T08:15:00Z"
}

```

## Notification APIs

| Endpoint | Method | Description | Auth |
| --- | --- | --- | --- |
| `/notifications` | GET | List user notifications (reminders/confirmations) | Bearer |
| `/notifications/{notification_id}/read` | POST | Mark notification as read | Bearer |

## Analytics APIs

| Endpoint | Method | Description | Auth |
| --- | --- | --- | --- |
| `/analytics/events/{event_id}` | GET | Dashboard: seats sold vs available, cancellations | Bearer (Organizer) |
| `/analytics/platform` | GET | Basic booking trends and total ecosystem metrics | Bearer (Admin) |

## Validation Rules

| Area | Rule |
| --- | --- |
| Auth | Email format validation; password complexity policy. |
| Event | `event_date` must be a future timestamp; capacity > 0. |
| Seat Lock | Target seat `status` must exactly equal `Available`. |
| Pagination | `page >= 1`, `1 <= page_size <= 100`. |

## Status Codes

| Code | Meaning | Typical Usage |
| --- | --- | --- |
| 200 | OK | Successful reads/updates |
| 201 | Created | Resource created (Event, Booking) |
| 204 | No Content | Deletion success |
| 400 | Bad Request | Input validation failure |
| 401 | Unauthorized | Invalid/expired JWT |
| 403 | Forbidden | Access denied (e.g., Customer accessing Organizer routes) |
| 404 | Not Found | Resource missing |
| 409 | Conflict | Double-booking attempt; seat already locked |
| 422 | Unprocessable Entity | Semantic validation failure |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unhandled server failure |

## Error Response Contract (Double-Booking Conflict)

```json
{
  "error_code": "SEAT_UNAVAILABLE",
  "message": "The selected seat was booked or locked by another user. Please select a different seat.",
  "trace_id": "9f8c2a61-5c0a-4dbd-9d6b-3f7f9f112233",
  "details": [
    {"field": "seat_id", "issue": "ConditionalCheckFailed - Seat status is not 'Available'"}
  ]
}

```

## API-to-Requirement Mapping Snapshot

| API Domain | Requirement IDs |
| --- | --- |
| Auth & User Lifecycle | FR-001..FR-008, FR-044 |
| Event Discovery | FR-009..FR-010, FR-018..FR-020, FR-022..FR-026, FR-046, FR-048 |
| Seats & Bookings | FR-011..FR-013, FR-015..FR-016, FR-021, FR-031..FR-033 |
| Notifications | FR-017, FR-029..FR-030, FR-034..FR-036 |
| Analytics & Governance | FR-037..FR-041 |

