
# SeatFlow - System Design

## High-Level Design
SeatFlow follows a layered, API-first architecture designed strictly for a web-based MVP environment without external hardware dependencies:
1. **Presentation Layer:** React (TypeScript) SPA delivering a fully responsive UI for desktop and mobile browsers.
2. **Application Layer:** FastAPI backend handling core business logic, including JWT authentication, event discovery, seating concurrency, notifications, and analytics.
3. **Data Layer:** AWS DynamoDB (NoSQL) utilizing conditional writes to enforce strict seat-locking and prevent double booking.
4. **Platform Layer:** Dockerized application deployment on AWS ensuring reproducible, consistent environments for execution and academic review.

## Architecture Diagram
```mermaid
flowchart LR
    U[Web User: Guest/Customer/Organizer] --> FE[React TypeScript SPA]
    FE --> API[FastAPI Backend]
    API --> DB[(AWS DynamoDB)]
    API --> NS[Notification Service]
    NS --> DELIV[Delivery Service Provider]
    API --> OBS[Docker/AWS Logs & Metrics]
    API --> AUTH[JWT Auth Module]

```

## Component Diagram

```mermaid
flowchart TD
    subgraph Frontend
        C1[Auth & Profile UI]
        C2[Event Discovery Catalog]
        C3[Seat Selection Grid]
        C4[Booking History Dashboard]
        C5[Organizer Analytics Panel]
    end

    subgraph Backend_FastAPI
        B1[Auth Controller]
        B2[Event Controller]
        B3[Seat & Booking Controller]
        B4[Notification Controller]
        B5[Analytics Controller]
        S1[Event Management Service]
        S2[Booking & Concurrency Service]
        S3[Notification Service]
        S4[Analytics Aggregation Service]
        R1[DynamoDB Repositories]
    end

    C1 --> B1
    C2 --> B2
    C3 --> B3
    C4 --> B3
    C5 --> B5
    B2 --> S1 --> R1
    B3 --> S2 --> R1
    B4 --> S3 --> R1
    B5 --> S4 --> R1

```

## Data Flow

*The following sequence illustrates the critical concurrency flow designed to prevent double booking during checkout.*

```mermaid
sequenceDiagram
    participant User
    participant UI as React UI
    participant API as FastAPI
    participant DB as AWS DynamoDB
    participant Notif as Notification Service

    User->>UI: Selects seats & confirms booking
    UI->>API: POST /api/v1/bookings (with Seat IDs)
    API->>DB: Conditional Write (Lock Seat IF status == 'Available')
    
    alt Lock Successful
        DB-->>API: Success (Seat locked exclusively)
        API->>DB: Create Booking Record (Status: Confirmed)
        API->>Notif: Trigger Booking Confirmation
        Notif-->>User: Dispatch Confirmation Alert
        API-->>UI: 201 Created (Booking Confirmed)
    else Lock Failed (Double Booking Attempt)
        DB-->>API: ConditionalCheckFailedException (Seat already taken)
        API-->>UI: 409 Conflict (Seat unavailable, prompt refresh)
    end

```

## Security Architecture

| Layer | Control |
| --- | --- |
| Identity | JWT-secured sessions (access/refresh tokens) and secure password reset flow |
| API | Route-level authorization and Role-Based Access Control (Customer vs. Organizer vs. Admin) |
| Data | Encryption in transit (TLS 1.2+), hashed passwords, NoSQL table isolation |
| Audit | Tracking of booking transactions, cancellations, and capacity modifications |
| Platform | Environment variables managed via Docker secrets, restricted AWS IAM roles for DynamoDB access |

## Deployment Architecture

```mermaid
flowchart TD
    subgraph AWS Cloud Environment
        ALB[Application Load Balancer]
        ECS[Dockerized ECS / Fargate Service]
        DDB[(Amazon DynamoDB)]
        CW[CloudWatch Monitoring]
        BKP[AWS Backup / PITR]
    end
    Client[Responsive Web Browser] --> ALB --> ECS --> DDB
    ECS --> CW
    DDB --> BKP

```

