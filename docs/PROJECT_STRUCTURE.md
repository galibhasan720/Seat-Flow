# Project Structure — Safe Merge Reference

Generated on 2026-07-01

This file is now a safe-merge guide for the main project structure. It shows which paths should be preserved, merged, replaced, or created when syncing with the main folder tree.

## Legend
- KEEP: the path already exists and should stay as-is.
- MERGE: the path exists and should be combined with incoming changes.
- REPLACE: the path exists but should be overwritten by the main structure if it is more complete or authoritative.
- CREATE: the path is missing and should be added when needed.

## Recommended merge map

```text
Figma FrontEnd/ [KEEP]
├── ATTRIBUTIONS.md [KEEP]
├── default_shadcn_theme.css [KEEP]
├── index.html [KEEP]
├── package.json [MERGE]
├── pnpm-workspace.yaml [MERGE]
├── postcss.config.mjs [MERGE]
├── README.md [KEEP]
├── vite.config.ts [MERGE]
├── guidelines/ [KEEP]
│   └── Guidelines.md [KEEP]
├── plans/ [KEEP]
│   ├── do-this-according-these-toasty-unicorn.md [KEEP]
│   ├── Role You are a Figma design-system.txt [KEEP]
│   └── SeatFlow_MVP_Document.md [KEEP]
└── src/ [MERGE]
    ├── main.tsx [MERGE]
    ├── app/ [MERGE]
    │   ├── App.tsx [MERGE]
    │   └── components/ [MERGE]
    │       ├── figma/ [MERGE]
    │       │   └── ImageWithFallback.tsx [MERGE]
    │       └── ui/ [MERGE]
    │           ├── accordion.tsx [MERGE]
    │           ├── alert-dialog.tsx [MERGE]
    │           ├── alert.tsx [MERGE]
    │           ├── aspect-ratio.tsx [MERGE]
    │           ├── avatar.tsx [MERGE]
    │           ├── badge.tsx [MERGE]
    │           ├── breadcrumb.tsx [MERGE]
    │           ├── button.tsx [MERGE]
    │           ├── calendar.tsx [MERGE]
    │           ├── card.tsx [MERGE]
    │           ├── carousel.tsx [MERGE]
    │           ├── chart.tsx [MERGE]
    │           ├── checkbox.tsx [MERGE]
    │           ├── collapsible.tsx [MERGE]
    │           ├── command.tsx [MERGE]
    │           ├── context-menu.tsx [MERGE]
    │           ├── dialog.tsx [MERGE]
    │           ├── drawer.tsx [MERGE]
    │           ├── dropdown-menu.tsx [MERGE]
    │           ├── form.tsx [MERGE]
    │           ├── hover-card.tsx [MERGE]
    │           ├── input-otp.tsx [MERGE]
    │           ├── input.tsx [MERGE]
    │           ├── label.tsx [MERGE]
    │           ├── menubar.tsx [MERGE]
    │           ├── navigation-menu.tsx [MERGE]
    │           ├── pagination.tsx [MERGE]
    │           ├── popover.tsx [MERGE]
    │           ├── progress.tsx [MERGE]
    │           ├── radio-group.tsx [MERGE]
    │           ├── resizable.tsx [MERGE]
    │           ├── scroll-area.tsx [MERGE]
    │           ├── select.tsx [MERGE]
    │           ├── separator.tsx [MERGE]
    │           ├── sheet.tsx [MERGE]
    │           ├── sidebar.tsx [MERGE]
    │           ├── skeleton.tsx [MERGE]
    │           ├── slider.tsx [MERGE]
    │           ├── sonner.tsx [MERGE]
    │           ├── switch.tsx [MERGE]
    │           ├── table.tsx [MERGE]
    │           ├── tabs.tsx [MERGE]
    │           ├── textarea.tsx [MERGE]
    │           ├── toggle-group.tsx [MERGE]
    │           ├── toggle.tsx [MERGE]
    │           ├── tooltip.tsx [MERGE]
    │           ├── use-mobile.ts [MERGE]
    │           └── utils.ts [MERGE]
    ├── imports/ [MERGE]
    │   ├── SeatFlow_MVP_Document.md [KEEP]
    │   └── pasted_text/ [KEEP]
    │       ├── seatflow-design-system-1.txt [KEEP]
    │       └── seatflow-design-system.txt [KEEP]
    └── styles/ [MERGE]
        ├── fonts.css [MERGE]
        ├── globals.css [MERGE]
        ├── index.css [MERGE]
        ├── tailwind.css [MERGE]
        └── theme.css [MERGE]
```

## Practical guidance
- Keep documentation and existing design assets when they already match the intended structure.
- Merge application code and shared UI folders when both versions contain useful changes.
- Replace a file only when the incoming main structure is clearly the authoritative version.
- Create missing folders only when they are absent from the current workspace and are required by the main structure.

