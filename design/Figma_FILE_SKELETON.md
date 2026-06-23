# Figma File Skeleton — SeatFlow

Purpose: provide a ready-to-follow Figma file structure and frame checklist so designers can start building the design system and pages that map directly to the repo.

Recommended Figma pages (create these top-level pages in this order):

- `Tokens`
  - Contents: color palette, typography styles, spacing tokens, radii, shadows, breakpoints.
  - Export: include a `tokens.json` export (match `design/tokens.json`).

- `Atoms`
  - Contents: primitive elements (Color swatches, Text styles, Icons, Buttons as single components, Inputs as single components, Form labels).
  - Frames: small frames for each atomic element with token references.

- `Components`
  - Contents: composed, reusable components with variants (Button, IconButton, Input with error state, Select, Checkbox, Toggle, Card, Modal, Tooltip, Badge).
  - Variants: size / kind / state properties.

- `Pages`
  - Contents: full-screen page templates and example flows (Home, Events List, Event Detail, Seat Selection, Checkout, Confirmation, Profile, Organizer Dashboard).
  - Create responsive frames for `mobile (375)`, `tablet (768)`, and `desktop (1440)` for each page.

- `Prototypes`
  - Contents: assembled flows and interactive prototypes for key journeys (find event → select seats → pay → confirmation).

- `Assets`
  - Contents: exported images, Lottie placeholders, logos, icon set. Use the naming rules in `COMPONENT_NAMING.md`.

Initial component inventory (start with these):

- Core: `Button`, `Icon`, `Form / Input`, `Form / Select`, `Form / Textarea`, `Avatar`, `Badge`, `Tag`, `Toast`, `Tooltip`.
- Layout: `Header` (with search), `Footer`, `Page / Container`, `Grid / Column`, `Card / EventPreview`, `List / EventItem`.
- Seatflow-specific: `SeatMap` (seat states: available / selected / reserved / sold), `SeatTooltip`, `TicketCard`, `BookingSummary`, `QR Code` placeholder.

Frames & sizes (suggested):

- Mobile frame: 375 x 812 (iPhone-like) — top bar height 56.
- Tablet frame: 768 x 1024 — container width 720, 12-column grid.
- Desktop frame: 1440 x 1024 — container width 1200, 12-column grid.

Variant & naming rules (quick reference):

- Use `Category / Name` (e.g., `Button / Primary`) and variant properties (size, kind, state).
- Reference tokens by name in component properties (e.g., `color.brand.primary`).

Notes for designers:

- Start with `Tokens` and publish styles before building components.
- Build accessible components with focus/keyboard states and annotate `aria-*` expectations on the component description.
- Add exportable icons as SVG when possible; provide 1x and 2x raster images for photos.

Handoff expectations to developers:

- Each component must include: token references, variant table, minimum/maximum sizes, example usage in `Pages` frames, and notes about interactions.
- When ready, export `Assets` and update `design/` with exported filenames.
