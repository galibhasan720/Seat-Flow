# SeatFlow Figma → Code Component Naming Convention

Purpose: ensure consistent component names, variant keys, and export filenames so designers and developers map components directly into React (TypeScript) and Storybook.

1. File & Page structure
- Figma pages: `Tokens`, `Atoms`, `Components`, `Pages`, `Prototypes`, `Assets`

2. Component naming (Figma layers & component names)
- Use `Category / Name` with TitleCase for categories and PascalCase for names.
  - Examples: `Button / Primary`, `Form / Input`, `Icon / Search`, `Card / EventPreview`

3. Variants and states
- Use variant properties: `size`, `kind`, `state`, `intent`.
- Variant naming pattern in Figma: `size:sm | kind:primary | state:default`
- Recommended variant values:
  - size: `sm`, `md`, `lg`
  - kind: `primary`, `secondary`, `ghost`, `tertiary`
  - state: `default`, `hover`, `active`, `disabled`, `loading`

4. Layer naming inside components
- Keep root layer as `Root`.
- Sub-layers: `Icon`, `Label`, `Badge`, `Meta`, `Media`.

5. Token usage
- Reference tokens from `Tokens` page via exact names (e.g., `color.brand.primary`, `spacing.md`, `fontSize.md`).

6. Export naming for assets
- Use kebab-case with descriptive prefixes: `logo-seatflow.svg`, `hero-events-1200x600.jpg`, `icon-search-24.svg`.
- Lottie files: `anim-loading.json`, `anim-confetti.json`.

7. Storybook / Code mapping
- Storybook path: `components/<Category>/<Name>.stories.tsx` (example: `components/Button/Primary.stories.tsx`).
- Component folder: `src/components/<Category>/<Name>/` with `index.tsx`, `<Name>.tsx`, `<Name>.styles.ts`, `<Name>.test.tsx`.

8. Accessibility
- Include `a11y` variants where applicable (e.g., `Button / Primary` should document `aria-label` expectations).

9. Examples
- Figma: `Components > Button / Primary` → Code: `src/components/Button/Primary/index.tsx` → Story: `components/Button/Primary.stories.tsx`
- Exported asset: `assets/icons/icon-search-24.svg`

10. Handoff checklist
- Ensure each exported component has:
  - token references in properties
  - accessible name / behavior notes
  - example states (hover/active/disabled)

If you want, I can now scaffold the corresponding `src/components` folders and Storybook stories in the repo.
