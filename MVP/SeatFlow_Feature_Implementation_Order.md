# SeatFlow — Feature Implementation Order & Viva Question Map

**Project:** Event Seat Booking and Management System  
**Source:** `SeatFlow_MVP_Document.md`  
**Stack:** React (TypeScript) · FastAPI · Supabase (PostgreSQL + Auth)

This document lists every MVP feature in **implementation order** (dependencies first). Under each feature, the viva questions you can answer by demoing that feature are listed **step by step**.

> **How to use this in viva:** Implement features in the order below. For each feature you demo, walk the examiner through the matching question groups (Frontend → DevTools → React DevTools → Profiler → Backend → API → cURL/Postman → Database → Code Understanding).

## GitHub tracking

| Feature | GitHub issue |
|---------|--------------|
| Epic (all) | [#56](https://github.com/galibhasan720/Seat-Flow/issues/56) |
| 0 MVC foundation | [#55](https://github.com/galibhasan720/Seat-Flow/issues/55) |
| 1 Schema | [#40](https://github.com/galibhasan720/Seat-Flow/issues/40) |
| 2–4 Auth / profile / reset | [#41](https://github.com/galibhasan720/Seat-Flow/issues/41) |
| Shell / audit | [#39](https://github.com/galibhasan720/Seat-Flow/issues/39), [#43](https://github.com/galibhasan720/Seat-Flow/issues/43) |
| OpenAPI | [#42](https://github.com/galibhasan720/Seat-Flow/issues/42) |
| 5 Discovery | [#44](https://github.com/galibhasan720/Seat-Flow/issues/44) |
| 6–7 Organizer + seats | [#48](https://github.com/galibhasan720/Seat-Flow/issues/48) |
| 8 Seat selection | [#45](https://github.com/galibhasan720/Seat-Flow/issues/45) |
| 9–11 Booking lifecycle | [#46](https://github.com/galibhasan720/Seat-Flow/issues/46) |
| 12 Notifications | [#47](https://github.com/galibhasan720/Seat-Flow/issues/47) |
| 13 Analytics | [#49](https://github.com/galibhasan720/Seat-Flow/issues/49) |
| 14 Admin | [#50](https://github.com/galibhasan720/Seat-Flow/issues/50) |
| Tests | [#51](https://github.com/galibhasan720/Seat-Flow/issues/51) |
| 15 Deploy | [#52](https://github.com/galibhasan720/Seat-Flow/issues/52) |

Local issue specs: `project_issues/README.md` · Phased checklist: `MVP/Phase_order(features).md`

---

## Implementation Order Overview

| # | Feature | Depends on |
|---|---------|------------|
| 0 | Project foundation & MVC scaffolding | — |
| 1 | Database schema & models | 0 |
| 2 | Authentication (register, login, logout, JWT) | 0, 1 |
| 3 | Profile view & update | 2 |
| 4 | Password reset | 2 |
| 5 | Event discovery (browse, search, filter, sort) | 0, 1 |
| 6 | Organizer event CRUD & booking windows | 2, 1 |
| 7 | Seat capacity & categories management | 6 |
| 8 | Seat selection UI & double-booking prevention | 5, 7, 2 |
| 9 | Create booking | 8 |
| 10 | Booking history & status tracking | 9 |
| 11 | Cancel booking | 10 |
| 12 | Notification service | 9, 11 |
| 13 | Analytics dashboard | 9–11 |
| 14 | Admin controls (users, categories, oversight) | 2, 6, 13 |
| 15 | Responsive UI polish & deployment wiring | All |

---

## Feature 0 — Project Foundation & MVC Scaffolding

**What to build**
- React + TypeScript app shell (routing, layout, API client)
- FastAPI app with Router → Controller → Service → Repository layers
- CORS for Vercel → Hugging Face
- Env config for Supabase URL / JWT secrets
- Shared error handling and logging

**Why first:** Every later feature plugs into this structure.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature? *(App shell / layout / router)*
2. Explain the component hierarchy for this feature.
3. Which React hooks did you use and why? *(e.g. layout providers)*
4. How is state managed for this feature? *(global providers vs local)*

#### Backend (FastAPI MVC)
5. Why did you separate the Router, Controller, Service, and Repository layers?
6. Show me the complete backend flow in your code. *(empty health/ping route as demo)*
7. Where is the business logic implemented?
8. Where is the database access implemented?

#### API
9. What is the endpoint for this feature? *(e.g. `GET /health`)*
10. Why did you choose this HTTP method?
11. Which HTTP status codes can this endpoint return?

#### Code Understanding
12. Explain this function line by line. *(app factory / router include)*
13. Why did you write this function?
14. Why did you choose this implementation?
15. If you had more time, what improvements would you make?

---

## Feature 1 — Database Schema & Models

**What to build**
- Tables: users (profile), events, seats, bookings, categories, notifications (as needed)
- SQLAlchemy / Supabase models matching ERD
- Constraints for seat uniqueness and booking integrity
- Seed data for demo events/seats

**Why here:** Auth profiles, events, seats, and bookings all need tables before APIs write to them.

### Viva questions covered

#### Backend (FastAPI MVC)
1. Where is the database access implemented?
2. Where is the business logic implemented? *(contrast: models vs services)*

#### Database
3. Which database tables are involved?
4. Explain the database schema related to your feature.
5. Which model represents this table?
6. What CRUD operation is performed? *(migrations / seed)*
7. How is the data saved to the database?

#### Code Understanding
8. Explain this database query (if applicable).
9. Explain this function line by line. *(model definition)*
10. Why did you choose this implementation?
11. If you had more time, what improvements would you make?

---

## Feature 2 — Authentication (Register, Login, Logout, JWT)

**What to build**
- Register / Login / Logout UI (Supabase Auth)
- Store and attach Supabase JWT on API calls
- FastAPI JWT validation middleware / dependency
- Role awareness: Guest vs Registered User vs Organizer vs Admin (as available)

**Why here:** Booking, profile, organizer, and admin routes require authenticated identity.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database *(if profile row is created on register)*
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 3 — Profile View & Update

**What to build**
- Profile page: view name, email, role, contact fields
- Update profile via FastAPI → PostgreSQL
- Auth-guarded route

**Why here:** Extends auth into user management without needing events yet.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 4 — Password Reset Flow

**What to build**
- “Forgot password” UI
- Supabase Auth password-reset email flow
- Reset confirmation page

**Why here:** Completes Authentication & User Management from the MVP.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent. *(Supabase Auth API)*
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### API *(Supabase Auth endpoints or your wrapper)*
20. What is the endpoint for this feature?
21. Why did you choose this HTTP method?
22. What request body does this endpoint accept?
23. What response does it return?
24. Which HTTP status codes can this endpoint return?

#### cURL & Postman
25. Copy the cURL command from Chrome DevTools and explain it.
26. Execute the same request using Postman.
27. Show me the request body in Postman.
28. Show me the response returned by the backend.
29. Modify one value in the request and execute it again.
30. What happens if required data is missing?
31. What happens if invalid data is sent?

#### Code Understanding
32. Explain this function line by line.
33. Why did you write this function?
34. Explain this API call.
35. Why did you choose this implementation?
36. If you had more time, what improvements would you make?

> **Note:** Full FastAPI MVC / database questions apply only if you proxy reset through your own backend. If reset is client → Supabase only, say so clearly in viva.

---

## Feature 5 — Event Discovery (Browse, Search, Filter, Sort)

**What to build**
- Event listing page (guest-accessible)
- Search by keyword
- Filter by category, date, venue, price
- Sort by popularity, date, or availability
- Event detail view (read-only)

**Why here:** Matches the guest journey; can use seeded events even before organizer CRUD UI exists.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input? *(search/filter inputs)*
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept? *(often none — query params)*
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman. *(or query params)*
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again. *(e.g. change filter)*
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed? *(Read)*
45. How is the data saved to the database? *(N/A for browse — explain read path)*
46. What happens if the requested record does not exist? *(empty list / 404 on detail)*

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 6 — Organizer Event CRUD & Booking Windows

**What to build**
- Create / update / delete events (organizer role)
- Open or close booking windows
- Event fields: title, date/time, venue, price, category, capacity metadata

**Why here:** Produces real events for seats and bookings; builds on auth roles.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method? *(POST create, PUT/PATCH update, DELETE)*
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 7 — Seat Capacity & Categories Management

**What to build**
- Define seat map / seat groups per event
- Seat categories (VIP, Standard, etc.)
- Capacity management in organizer panel
- Persist seats in PostgreSQL with uniqueness constraints

**Why here:** Seat selection and booking need seat records tied to events.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 8 — Seat Selection UI & Double-Booking Prevention

**What to build**
- Interactive seat map / seat list for an event
- Show available vs taken seats and categories
- Select preferred seats (client state)
- Server-side prevention of double booking (transactions / unique constraints)

**Why here:** Core booking UX; requires events + seats + auth.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording. *(great demo for re-renders on seat clicks)*

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented? *(availability checks, locking)*
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return? *(e.g. 409 Conflict on double book)*

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 9 — Create Booking

**What to build**
- Confirm selected seats → create booking via FastAPI
- Persist booking in PostgreSQL with status (e.g. Pending / Confirmed)
- Link user, event, and seats
- Trigger booking confirmation notification (hook for Feature 12)

**Why here:** Primary write path of the product after seat selection.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed? *(Create)*
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 10 — Booking History & Status Tracking

**What to build**
- User booking dashboard / history list
- Show status: Pending, Confirmed, Cancelled, Expired
- Booking detail view

**Why here:** Read path after create booking exists.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed? *(Read)*
45. How is the data saved to the database? *(N/A — read path)*
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 11 — Cancel Booking

**What to build**
- Cancel action on a booking
- Update status to Cancelled
- Free seats for rebooking
- Trigger cancellation notification (Feature 12)

**Why here:** Completes booking lifecycle after history exists.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed? *(Update)*
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 12 — Reminder & Notification Service

**What to build**
- Booking confirmation notification
- Event reminder before scheduled date/time
- Cancellation notification
- Event update notification
- Store notification records and/or send email (as MVP allows)

**Why here:** Fired by booking create/cancel and event updates; needs those flows first.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature? *(notification list / toast / inbox)*
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented? *(when to send reminder)*
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 13 — Analytics Dashboard

**What to build**
- Total bookings
- Seats sold vs seats available
- Upcoming events overview
- Cancellation rate
- Basic booking trends
- Scope by role: organizer (own events) / admin (platform)

**Why here:** Needs booking + cancel data to be meaningful.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented? *(aggregations)*
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed? *(Read / aggregate)*
45. How is the data saved to the database? *(N/A — analytics is read)*
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 14 — Admin Controls (Users, Categories, Oversight)

**What to build**
- Oversee users and roles
- Manage event categories
- Handle booking issues (view/force-cancel if needed)
- Platform-level event oversight
- Attendee lists and booking summaries (organizer + admin views)

**Why last among domain features:** Depends on users, events, bookings, and analytics already working.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature?
2. Explain the component hierarchy for this feature.
3. Which function is executed when the user interacts with this feature?
4. Walk me through the frontend flow from the user action until the API request is sent.
5. Which React hooks did you use and why?
6. How is state managed for this feature?
7. How do you validate user input?
8. How do you handle loading states?

#### Browser DevTools
9. Open Chrome DevTools and show me the Network tab for this feature.
10. Trigger the feature and identify the API request in the Network tab.
11. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
12. Show me the HTTP Status Code returned by the API.
13. Show me how long the request took to complete.
14. Which request in the Network tab belongs to your feature?

#### React Developer Tools
15. Open React Developer Tools.
16. Show me the component hierarchy for your feature.

#### React Profiler
17. Open the React Profiler.
18. Start recording a profiling session.
19. Use your feature and stop the recording.

#### Backend (FastAPI MVC)
20. Explain the complete request flow from React to the database and back to React.
21. Which router receives the request?
22. Which controller function is executed?
23. Which service method is called?
24. Which repository method is called?
25. Where is the business logic implemented?
26. Where is the database access implemented?
27. Why did you separate the Router, Controller, Service, and Repository layers?
28. Show me the complete backend flow in your code.

#### API
29. What is the endpoint for this feature?
30. Why did you choose this HTTP method?
31. What request body does this endpoint accept?
32. What response does it return?
33. Which HTTP status codes can this endpoint return?

#### cURL & Postman
34. Copy the cURL command from Chrome DevTools and explain it.
35. Execute the same request using Postman.
36. Show me the request body in Postman.
37. Show me the response returned by the backend.
38. Modify one value in the request and execute it again.
39. What happens if required data is missing?
40. What happens if invalid data is sent?

#### Database
41. Which database tables are involved?
42. Explain the database schema related to your feature.
43. Which model represents this table?
44. What CRUD operation is performed?
45. How is the data saved to the database?
46. What happens if the requested record does not exist?

#### Code Understanding
47. Explain this function line by line.
48. Why did you write this function?
49. Explain this API call.
50. Explain this database query (if applicable).
51. Why did you choose this implementation?
52. If you had more time, what improvements would you make?

---

## Feature 15 — Responsive UI Polish & Deployment Wiring

**What to build**
- Responsive layouts (desktop + mobile)
- CORS verification (Vercel ↔ Hugging Face)
- Frontend on Vercel, API on Hugging Face Spaces (Docker), DB/Auth on Supabase
- Final smoke tests across guest → register → book → cancel journey

**Why last:** Integration hardening after all features exist.

### Viva questions covered

#### React Frontend
1. Which React component contains this feature? *(layout / responsive shell)*
2. Explain the component hierarchy for this feature.
3. How do you handle loading states? *(global error/loading UX)*

#### Browser DevTools
4. Open Chrome DevTools and show me the Network tab for this feature.
5. Trigger the feature and identify the API request in the Network tab.
6. Show me the Request URL, HTTP Method, Request Headers, Request Payload, and Response.
7. Show me the HTTP Status Code returned by the API.
8. Show me how long the request took to complete.
9. Which request in the Network tab belongs to your feature?

#### Backend (FastAPI MVC)
10. Explain the complete request flow from React to the database and back to React. *(end-to-end demo)*
11. Why did you separate the Router, Controller, Service, and Repository layers?

#### API
12. What is the endpoint for this feature? *(pick any live production endpoint)*
13. Which HTTP status codes can this endpoint return?

#### Code Understanding
14. Why did you choose this implementation?
15. If you had more time, what improvements would you make?

---

## Quick Reference — MVP Services → Feature Numbers

| MVP Must-Have Service | Features |
|-----------------------|----------|
| Authentication & User Management | 2, 3, 4 |
| Event Discovery | 5 |
| Seat Selection | 7, 8 |
| Booking Management | 9, 10, 11 |
| Reminder & Notification Service | 12 |
| Analytics Dashboard | 13 |
| Organizer/Admin Controls | 6, 7, 14 |
| Supporting / cross-cutting | 0, 1, 15 |

---

## Suggested Viva Demo Path (Happy Path)

1. **Guest browse** → Feature 5 (discovery + Network + React DevTools)  
2. **Register / Login** → Feature 2 (full stack + JWT headers)  
3. **Select seats & book** → Features 8–9 (double-booking story + Profiler)  
4. **View history / cancel** → Features 10–11 (status + DB update)  
5. **Organizer create event** → Feature 6 (CRUD + role guard)  
6. **Analytics / Admin** → Features 13–14 (aggregations + oversight)  

Use Features **0–1** only if asked about architecture, MVC separation, or schema.

---

## Out of Scope (Do Not Implement for MVP Viva)

- Payment gateway  
- IoT / hardware seat systems  
- Native mobile apps  
- Paid cloud beyond free-tier Vercel + Hugging Face + Supabase  
