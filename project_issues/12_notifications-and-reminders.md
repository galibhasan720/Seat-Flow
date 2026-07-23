# Feature 12 — Notifications & Reminders

**Phase:** F — Extras  
**Priority:** P1  
**GitHub:** #47  
**Depends on:** Features 9–11 (and event updates from Feature 6)  
**Blocks:** —

## Task

Booking confirmation, cancellation, pre-event reminder, and event-update notifications. MVP may start with in-app notification rows; email via free-tier if available.

## Subtasks

- [ ] Notifications table + model
- [ ] Create notification on booking confirm/cancel
- [ ] Event update notification when organizer edits material fields
- [ ] Reminder strategy (scheduled job / manual trigger / documented cron)
- [ ] Optional inbox/toast UI

## Acceptance criteria

- [ ] Confirmation recorded/sent after booking
- [ ] Cancel and update notices work
- [ ] Reminder path documented even if scheduling is simple

## Out of scope

- SMS / paid push providers
