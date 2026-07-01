# Figma Export Guidelines — SeatFlow

Purpose: consistent export settings, file names, and asset formats for developers and CDN uploads.

General rules
- Vector assets (logos, icons): export as SVG. Filename pattern: `icon-<name>-<size>.svg` (e.g., `icon-search-24.svg`).
- Raster images (photos, hero banners): export as `jpg` or `webp` for photos; use `png` for images requiring transparency.
- Provide 1x and 2x (retina) raster exports where used in UI: e.g., `hero-events-1200x600.jpg` and `hero-events-2400x1200.jpg`.
- Lottie animations: export `.json` with descriptive names (`anim-loading.json`, `anim-confetti.json`).

Hero & marketing images
- Desktop hero: export `1200 x 600` and `2400 x 1200`.
- Email banner: `600 x 200` (optimized for email), filename `email_banner_booking-600x200.jpg`.

Icons
- Size grid: 16, 20, 24, 32. Export separate files per pixel size.
- All icons should be optimized and combined into an icon sprite or served individually as SVGs.

Seat map assets
- Seat icons: export as `svg` for vector seats; fallback PNG 2x for compatibility.

Export settings in Figma
- SVG: set "Outline text" only when necessary; prefer preserving text for easy editing.
- JPEG: quality 80, export at 1x and 2x for retina.
- PNG: use 24-bit PNG with transparency when needed.

Optimization & delivery
- After export, run assets through an optimizer (SVGO for SVGs, ImageOptim or `sharp` for raster) before uploading to S3.
- Store originals in `design/Assets/source/` and exported/optimized files in `design/Assets/exports/`.

Versioning
- Include version or date suffix when replacing production images (e.g., `hero-events-1200x600-v1.jpg`) to avoid CDN cache issues.

Handoff checklist for each exported asset
- Source frame/component exists in `Assets` page.
- Filename follows naming convention.
- Exported 1x and 2x present (where applicable).
- Optimization performed and file sizes recorded in `docs/MEDIA_INVENTORY.md`.
