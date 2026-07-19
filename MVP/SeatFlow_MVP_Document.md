Event Seat Booking System

MVP Document

Technology Stack: React (TypeScript) on Vercel, FastAPI + Uvicorn on Hugging Face Spaces (Docker), Supabase (PostgreSQL + Auth)


1. Project Overview

This MVP describes a web-based event seat booking platform where users can discover events, select seats, create bookings, manage their reservations, and receive reminders. The system is designed for a university project and intentionally stays within a standard web application scope without IoT devices or extra tools.

The practical free deployment setup is:

• Frontend → Vercel (React + TypeScript)

• API → Hugging Face Space (Docker + FastAPI + Uvicorn)

• Database + Authentication → Supabase (PostgreSQL + Supabase Auth / JWT)


2. User Types and Why They Use the App

Guest / Visitor: Browse events, compare availability, and decide whether to register.

Registered User / Customer: Book seats, manage reservations, receive reminders, and track booking history.

Event Organizer: Create events, manage seating, monitor bookings, and view event performance.

Administrator: Oversee users, events, categories, booking issues, and platform analytics.


3. MVP Scope

The MVP should include only the essential services needed for a complete and functional booking platform.

3.1 Must-Have Services

Authentication & User Management

• Register, login, and logout via Supabase Auth

• JWT-secured sessions (Supabase-issued tokens validated by FastAPI)

• Profile view and profile update

• Password reset flow (Supabase Auth)

Event Discovery

• Browse upcoming events

• Search by keyword

• Filter by category, date, venue, and price

• Sort by popularity, date, or availability

Seat Selection

• Display available seats or seat groups

• Select preferred seats

• Prevent double booking (PostgreSQL constraints / transactions)

• Show seat categories such as VIP and Standard

Booking Management

• Create booking

• View booking history

• Cancel booking

• Track booking status such as Pending, Confirmed, Cancelled, and Expired

Reminder & Notification Service

• Booking confirmation notification

• Event reminder before the scheduled date/time

• Cancellation notification

• Event update notification

Analytics Dashboard

• Total bookings

• Seats sold vs seats available

• Upcoming events overview

• Cancellation rate

• Basic booking trends

Organizer/Admin Controls

• Create, update, and delete events

• Open or close booking windows

• Manage seat capacity and categories

• View attendee lists and booking summaries


4. Typical User Journey

• A guest visits the site and browses events.

• The guest registers and logs in securely via Supabase Auth.

• The user searches and filters events.

• The user selects seats and confirms the booking through the FastAPI backend.

• The system stores the booking in Supabase PostgreSQL and sends a confirmation.

• The user receives a reminder before the event.

• The user can review or cancel bookings from the dashboard.


5. Non-Functional Expectations

• Responsive UI for desktop and mobile screens.

• RESTful API design (FastAPI).

• Secure JWT authentication via Supabase Auth, validated by the API.

• Relational persistence with Supabase PostgreSQL (SQL).

• Dockerized API deployment on Hugging Face Spaces for a consistent runtime.

• Frontend hosted on Vercel; API hosted on Hugging Face; DB and Auth on Supabase.

• Zero credit-card requirement for the student free-tier setup.

• Simple and maintainable code structure suitable for a university project.


6. Suggested Frontend and Backend Modules

• Frontend: authentication pages, event listing pages, seat selection UI, booking dashboard, organizer panel, analytics dashboard (deployed on Vercel).

• Backend: JWT validation (Supabase), user module, event module, seat module, booking module, notification module, analytics module (FastAPI + Uvicorn in Docker on Hugging Face Spaces).

• Data: relational tables in Supabase PostgreSQL for users, events, seats, bookings, and related records.


7. Deployment Architecture (Practical Free Setup)

• Frontend (React + TypeScript) → Vercel

• Backend API (FastAPI + Uvicorn, containerized) → Hugging Face Space

• Database (PostgreSQL) → Supabase

• Authentication (JWT) → Supabase Auth

CORS must allow the Vercel frontend origin to call the Hugging Face API. Booking writes should go through the API so seat uniqueness and transactions remain enforced in PostgreSQL.


8. Out of Scope for MVP

• No IoT integration.

• No external hardware devices.

• No payment gateway, unless added later as an extension.

• No complex real-time seat hardware systems.

• No mobile app required for MVP; responsive web only.

• No AWS DynamoDB or paid cloud hosting required for the MVP free tier.


9. Recommended MVP Title

Event Seat Booking and Management System
