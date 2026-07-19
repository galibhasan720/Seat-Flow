## Notifications and Reminders

**Task**
Implement notification generation and delivery flows for booking confirmations, reminders, updates, cancellations, and expired holds.

**Description**
Build the notification model, persistence, and delivery triggers for the MVP’s customer communications. The system should create a durable trail of notifications for confirmations and event changes, and it should support reminder logic for upcoming bookings without requiring external messaging infrastructure beyond the learning-project scope.

**Subtasks**
- [ ] Define notification entities and notification status handling.
- [ ] Generate booking confirmation notifications.
- [ ] Generate pre-event reminder notifications.
- [ ] Generate cancellation, update, and hold-expiration notifications.
- [ ] Add a notifications view or inbox for authenticated users.

**Acceptance Criteria**
- [ ] Booking actions create the expected notification records.
- [ ] Customers can see notification history in the app.
- [ ] Reminder and event-update messages are supported by the data model.
- [ ] Notification behavior is testable with backend integration tests.

**Deliverables**
* Notification data model and service logic.
* Customer notifications UI.
* Trigger map for event, booking, and reminder events.
