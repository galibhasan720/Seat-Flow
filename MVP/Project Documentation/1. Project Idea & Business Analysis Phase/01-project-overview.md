# SeatFlow - Project Overview

## Executive Summary
SeatFlow is a web-based event seat booking platform where users can discover events, select seats, create bookings, manage their reservations, and receive reminders. The MVP is designed specifically for MVP. It intentionally stays within a standard web application scope without incorporating IoT devices or extra tools.

## Project Background
The platform is being developed to connect various users, including guests, registered customers, organizers, and administrators, to a centralized event ecosystem. The project relies on a modern technology stack consisting of FastAPI + JWT, React (TypeScript), AWS DynamoDB, and Dockerized AWS Deployment.

## Business Problem
Guests and users need a reliable way to browse events, compare availability, and secure preferred seats without the risk of double booking. Event organizers require dedicated tools to create events, manage seat capacity, and monitor overall event performance. Administrators lack a centralized system to oversee users, event categories, booking issues, and platform analytics.

## Proposed Solution
The proposed solution is to build a RESTful API-driven web application with a responsive UI for both desktop and mobile screens. The platform will provide:
* Authentication workflows featuring secure JWT sessions and password reset capabilities.
* Event discovery tools allowing users to search by keyword and filter by category, date, venue, and price.
* A seat selection interface that displays available seats, prevents double booking, and shows seat categories like VIP and Standard.
* A comprehensive booking management module to create, view, cancel, and track the status of reservations.
* A notification service to dispatch booking confirmations, event reminders, cancellations, and event updates.

## Project Scope

| In Scope | Description |
|---|---|
| Authentication & User Management | Register, login, logout, profile management, and password reset flows. |
| Event Discovery | Browse upcoming events, keyword search, and filtering/sorting capabilities. |
| Seat Selection | Display availability, select seats, and prevent double booking. |
| Booking Management | Create, view history, cancel, and track booking statuses. |
| Reminders & Notifications | Send confirmations, pre-event reminders, and update notifications. |
| Analytics Dashboard | View total bookings, seats sold versus available, and cancellation rates. |
| Organizer/Admin Controls | Manage events, seat capacities, booking windows, and attendee lists. |

## Stakeholders

| Stakeholder Group | Primary Interest |
|---|---|
| Guest / Visitor | Browse events, compare availability, and decide whether to register. |
| Registered User / Customer | Book seats, manage reservations, receive reminders, and track booking history. |
| Event Organizer | Create events, manage seating, monitor bookings, and view event performance. |
| Administrator | Oversee users, events, categories, booking issues, and platform analytics. |

## Business Value
* Provides customers with the ability to confidently select preferred seats with double booking prevention.
* Equips event organizers with an analytics dashboard to track seats sold versus seats available.
* Improves communication through automated booking confirmations and event reminders.
* Enables organizers to open or close booking windows and manage attendee lists efficiently.

## Success Metrics
* Accurate tracking of total bookings across the platform.
* Measurement of seats sold versus seats available.
* Monitoring of the cancellation rate for events.
* Visibility into basic booking trends and upcoming events overviews.

## Assumptions
* The project requires a simple and maintainable code structure suitable for MVP.
* The deployment will be handled using Docker to ensure consistent environments.
* Data will be persisted using NoSQL with AWS DynamoDB.

## Constraints

| Constraint | Impact |
|---|---|
| No Payment Gateway | MVP does not include payment processing unless added later as an extension. |
| No Native Mobile App | The MVP is restricted to a responsive web interface only. |
| No Hardware Integration | IoT integration and external hardware devices are strictly out of scope. |
| No Real-Time Hardware | Complex real-time seat hardware systems are excluded from this release. |