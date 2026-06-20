# SeatFlow - Entity Relationship Diagram (ERD)

> **Note:** This ERD is a **logical domain model** used for requirements and design communication.  
> The physical persistence implementation is an **AWS DynamoDB single-table NoSQL design** using Partition and Sort keys to handle concurrency, which will be documented in the database design phase.

## Entity Overview
| Entity | Purpose |
|---|---|
| User | Stores account, identity, and role permissions (Customer, Organizer, Admin) |
| Category | Organizes events into distinct, searchable types |
| Event | Core catalog item defining dates, venue, and booking window constraints |
| Seat | Represents physical capacity, categories (VIP/Standard), and concurrency locking |
| Booking | Manages customer reservations, linking users to specific seats |
| Notification | Stores generated booking confirmations, reminders, and event updates |

## Entity Attributes
### User
`id, full_name, email, password_hash, role, is_active, created_at, updated_at`

### Category
`id, name, description, created_at, updated_at`

### Event
`id, organizer_id, category_id, title, description, venue, event_date, price, booking_window_open, created_at, updated_at`

### Seat
`id, event_id, seat_number, category, status, locked_until, created_at, updated_at`

### Booking
`id, user_id, event_id, seat_id, status, created_at, updated_at`

### Notification
`id, user_id, event_id, booking_id, type, message, status, sent_at, created_at`

## Relationship Rules
1. One **User** (Organizer) can organize many **Events**.
2. One **User** (Customer) has many **Bookings** and receives many **Notifications**.
3. One **Category** classifies many **Events**.
4. One **Event** contains many **Seats** and generates many **Bookings** and **Notifications**.
5. One **Seat** is tied to zero or one active **Booking** (enforcing single-occupancy / preventing double booking).
6. One **Booking** triggers many **Notifications** (Confirmations, Reminders, Cancellations).

## Mermaid ER Diagram
```mermaid
erDiagram
    USER ||--o{ EVENT : organizes
    USER ||--o{ BOOKING : creates
    USER ||--o{ NOTIFICATION : receives
    CATEGORY ||--o{ EVENT : classifies
    EVENT ||--o{ SEAT : contains
    EVENT ||--o{ BOOKING : generates
    EVENT ||--o{ NOTIFICATION : triggers
    SEAT ||--o| BOOKING : reserved_by
    BOOKING ||--o{ NOTIFICATION : creates

    USER {
      varchar id PK
      varchar full_name
      varchar email UK
      varchar password_hash
      varchar role
      boolean is_active
      datetime created_at
      datetime updated_at
    }
    CATEGORY {
      varchar id PK
      varchar name
      varchar description
      datetime created_at
      datetime updated_at
    }
    EVENT {
      varchar id PK
      varchar organizer_id FK
      varchar category_id FK
      varchar title
      text description
      varchar venue
      datetime event_date
      decimal price
      boolean booking_window_open
      datetime created_at
      datetime updated_at
    }
    SEAT {
      varchar id PK
      varchar event_id FK
      varchar seat_number
      varchar category
      varchar status
      datetime locked_until
      datetime created_at
      datetime updated_at
    }
    BOOKING {
      varchar id PK
      varchar user_id FK
      varchar event_id FK
      varchar seat_id FK
      varchar status
      datetime created_at
      datetime updated_at
    }
    NOTIFICATION {
      varchar id PK
      varchar user_id FK
      varchar event_id FK
      varchar booking_id FK
      varchar type
      text message
      varchar status
      datetime sent_at
      datetime created_at
    }