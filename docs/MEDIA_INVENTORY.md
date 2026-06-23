# SeatFlow Media Inventory & File Size Guide

**Last Updated:** 2026-06-23  
**Total Media Files (Planned):** 67 files  
**MVP Scope:** 28 MUST-HAVE files (~4.5 MB)

---

## ✅ MUST-HAVE FILES (MVP Critical) — 28 Files

### Brand & Identity (3 files) — ~150 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `logo.svg` | SVG | 200×200 | 8–12 KB | `frontend/public/` | Primary logo, vector-based |
| `favicon.ico` | ICO | 32×32 | 5–8 KB | `frontend/public/` | Browser tab icon |
| `favicon.svg` | SVG | 32×32 | 2–4 KB | `frontend/public/` | Modern favicon (fallback) |

### UI Icons & Core Interactions (8 files) — ~180 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `icons.svg` | SVG Sprite | — | 40–60 KB | `frontend/src/assets/icons/` | Combined sprite sheet for all icons |
| `icon-search.svg` | SVG | 24×24 | 1–2 KB | `frontend/src/assets/icons/` | Search functionality |
| `icon-user.svg` | SVG | 24×24 | 1–2 KB | `frontend/src/assets/icons/` | User profile / avatar |
| `icon-calendar.svg` | SVG | 24×24 | 1–2 KB | `frontend/src/assets/icons/` | Event date/calendar |
| `icon-seat.svg` | SVG | 24×24 | 2–3 KB | `frontend/src/assets/icons/` | Seating interaction |
| `icon-ticket.svg` | SVG | 24×24 | 1–2 KB | `frontend/src/assets/icons/` | Booking/ticket |
| `icon-filter.svg` | SVG | 24×24 | 1–2 KB | `frontend/src/assets/icons/` | Filter events |
| `icon-close.svg` | SVG | 24×24 | 0.5–1 KB | `frontend/src/assets/icons/` | Close modal/menu |

### Seat Map Assets (6 files) — ~300 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `seat_available.svg` | SVG | 30×30 | 2–3 KB | `frontend/src/assets/icons/` | Available seat state |
| `seat_reserved.svg` | SVG | 30×30 | 2–3 KB | `frontend/src/assets/icons/` | Reserved seat state |
| `seat_selected.svg` | SVG | 30×30 | 2–3 KB | `frontend/src/assets/icons/` | User-selected seat state |
| `seat_vip.svg` | SVG | 30×30 | 2–3 KB | `frontend/src/assets/icons/` | VIP seat category |
| `seat_standard.svg` | SVG | 30×30 | 2–3 KB | `frontend/src/assets/icons/` | Standard seat category |
| `seat_map_venue_default.svg` | SVG | 600×400 | 280–300 KB | `frontend/src/assets/images/` | Default/template venue layout |

### Hero & Landing Page Images (2 files) — ~1.2 MB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `hero-home.jpg` | JPEG | 1920×1080 | 600–800 KB | `frontend/public/` | Homepage hero banner (lazy-load) |
| `placeholder_event.jpg` | JPEG | 400×300 | 400–500 KB | `frontend/src/assets/images/` | Default event thumbnail fallback |

### Avatar & User Images (2 files) — ~150 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `avatar_default.png` | PNG | 128×128 | 80–100 KB | `frontend/src/assets/images/` | Default user avatar (optimized) |
| `avatar_generic.svg` | SVG | 128×128 | 3–5 KB | `frontend/src/assets/images/` | Fallback avatar vector |

### Empty States & Illustrations (3 files) — ~400 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `illustration_empty_state.svg` | SVG | 300×300 | 40–60 KB | `frontend/src/assets/images/` | No bookings / no events found |
| `illustration_error.svg` | SVG | 300×300 | 30–50 KB | `frontend/src/assets/images/` | Error state / connection issues |
| `illustration_success.svg` | SVG | 300×300 | 30–40 KB | `frontend/src/assets/images/` | Booking confirmation / success |

### Email Templates (2 files) — ~400 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `email_banner_booking.png` | PNG | 600×200 | 200–250 KB | `backend/app/notifications/email_templates/` | Booking confirmation email header |
| `email_logo.png` | PNG | 200×100 | 150–200 KB | `backend/app/notifications/email_templates/` | Email footer / signature logo |

### Animations (2 files) — ~400 KB
| File Name | Format | Spec | Size | Location | Notes |
|-----------|--------|------|------|----------|-------|
| `loading_lottie.json` | Lottie (JSON) | 24fps, 2–3 sec | 150–200 KB | `frontend/src/assets/animations/` | Page loading spinner |
| `confetti_lottie.json` | Lottie (JSON) | 24fps, 2 sec | 200–250 KB | `frontend/src/assets/animations/` | Booking success celebration |

### Social & SEO (2 files) — ~600 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `og-default.png` | PNG | 1200×630 | 400–500 KB | `frontend/public/` | Open Graph image (social share) |
| `twitter-card.png` | PNG | 1200×675 | 300–400 KB | `frontend/public/` | Twitter card image |

### Documentation Diagrams (2 files) — ~800 KB
| File Name | Format | Dimensions | Size | Location | Notes |
|-----------|--------|-----------|------|----------|-------|
| `system-architecture.png` | PNG | 1600×1200 | 400–500 KB | `docs/` & `MVP/Project Documentation/Diagrams/` | System design reference |
| `er-diagram.png` | PNG | 1400×1000 | 300–400 KB | `docs/` & `MVP/Project Documentation/Diagrams/` | Database schema reference |

---

## **MUST-HAVE SUBTOTAL**
- **Count:** 28 files
- **Total Size:** ~4.5–5.5 MB
- **Storage:** Frontend (2.5 MB) + Backend (0.8 MB) + Docs (0.8 MB)
- **Delivery Strategy:** 
  - Static assets → CDN / S3 (lazy-loaded)
  - Hero images → WebP variant + JPEG fallback
  - SVG sprites → inline or lazy-load
  - Lottie animations → load on-demand

---

## 📌 SHOULD-HAVE FILES (High Priority) — 18 Files

### Additional Hero Variants (2 files) — ~1.2 MB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `hero-concert.jpg` | JPEG (1920×1080) | 600–800 KB | `frontend/public/` |
| `hero-theatre.jpg` | JPEG (1920×1080) | 600–800 KB | `frontend/public/` |

### Extended UI Icons (4 files) — ~20 KB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `icon-edit.svg` | SVG (24×24) | 1–2 KB | `frontend/src/assets/icons/` |
| `icon-delete.svg` | SVG (24×24) | 1–2 KB | `frontend/src/assets/icons/` |
| `icon-download.svg` | SVG (24×24) | 1–2 KB | `frontend/src/assets/icons/` |
| `icon-notification.svg` | SVG (24×24) | 1–2 KB | `frontend/src/assets/icons/` |

### Category Badges (4 files) — ~200 KB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `badge_vip.png` | PNG (40×40) | 50–60 KB | `frontend/src/assets/images/` |
| `badge_standard.png` | PNG (40×40) | 40–50 KB | `frontend/src/assets/images/` |
| `badge_premium.png` | PNG (40×40) | 50–60 KB | `frontend/src/assets/images/` |
| `badge_free.png` | PNG (40×40) | 40–50 KB | `frontend/src/assets/images/` |

### Extended Illustrations (3 files) — ~300 KB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `illustration_no_results.svg` | SVG (300×300) | 40–60 KB | `frontend/src/assets/images/` |
| `placeholder_avatar.jpg` | JPEG (200×200) | 100–150 KB | `frontend/src/assets/images/` |
| `email_banner_reminder.png` | PNG (600×200) | 150–200 KB | `backend/app/notifications/email_templates/` |

### Ticket Template (1 file) — ~150 KB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `ticket_template.svg` | SVG (500×300) | 150–200 KB | `frontend/src/assets/images/` |

### Extended Lottie Animations (2 files) — ~300 KB
| File Name | Format | Size | Location |
|-----------|--------|------|----------|
| `seat_selection_lottie.json` | Lottie | 150–200 KB | `frontend/src/assets/animations/` |
| `loading_spinner_alt.json` | Lottie | 100–150 KB | `frontend/src/assets/animations/` |

**SHOULD-HAVE SUBTOTAL:** ~3.5 MB (28 files)

---

## 💡 NICE-TO-HAVE FILES (Phase 2+) — 21 Files

### Additional Category Heroes (1 file)
- `hero-sports.jpg` (1920×1080) — 600–800 KB

### Alternative Logos (2 files)
- `logo-dark.svg` — 8–12 KB
- `logo-white.svg` — 8–12 KB
- `wordmark.svg` — 10–15 KB

### User Avatar Variants (4 files)
- `avatar_male.png` (128×128) — 50–80 KB
- `avatar_female.png` (128×128) — 50–80 KB
- `avatar_{userId}.png` (pattern) — S3 / dynamic storage
- `thumbnail_event_120x80.jpg` (pattern) — generated on-demand

### Extended Seat Maps (pattern)
- `seat_map_venue_{venueId}.svg` (per venue) — 200–350 KB each

### Additional Email Templates (2 files)
- `email_banner_cancellation.png` — 150–200 KB
- `email_footer.png` — 100–150 KB

### Additional Illustrations (2 files)
- `ticket_barcode_{bookingId}.png` (pattern) — generated dynamically
- `ticket_qr_{bookingId}.png` (pattern) — generated dynamically

### Demo & Promo (2 files)
- `promo_video.mp4` (720p, 30sec) — 5–8 MB
- `demo_walkthrough.mp4` (720p, 2min) — 20–30 MB

### Additional Diagrams (2 files)
- `dfd-diagram.png` — 400–600 KB
- `user-flow.png` — 300–500 KB

### Social Media & OG Images (pattern)
- `og-event_{eventId}.png` — generated per event
- `analytics_export_{date}.png` — generated on-demand

**NICE-TO-HAVE SUBTOTAL:** ~35–40 MB (21+ files, many dynamic)

---

## 📊 PRIORITY SUMMARY

| Priority | File Count | Total Size | Timing | Purpose |
|----------|-----------|-----------|--------|---------|
| **MUST-HAVE** ✅ | 28 | 4.5–5.5 MB | Launch (Week 1–2) | Core UI, branding, email |
| **SHOULD-HAVE** 📌 | 18 | 3.5 MB | Pre-launch (Week 2–3) | UX polish, additional variants |
| **NICE-TO-HAVE** 💡 | 21+ | 35–40 MB | Post-launch (Phase 2) | Marketing, advanced features |
| **DYNAMIC** (patterns) | — | ~50–100 MB | Runtime | Event thumbnails, user avatars, tickets |

---

## 🗂️ Storage & Delivery Strategy

### Frontend Assets
- **Static SVG icons** → Inline or sprite sheet (reduce HTTP requests)
- **JPEG hero images** → CDN with WebP variant (lazy-load on first scroll)
- **PNG images** → Optimize with TinyPNG / ImageOptim before upload
- **Lottie animations** → Load on interaction (not critical path)

### Backend Assets
- **Email templates** → Stored in `backend/app/notifications/email_templates/`
- **QR/Barcode tickets** → Generated dynamically, store references in DynamoDB

### Dynamic Assets (S3 / CDN)
- Event thumbnails (`event_{eventId}.jpg`)
- User avatars (`avatar_{userId}.png`)
- Generated tickets, barcodes, QR codes
- Analytics exports

---

## 📝 Checklist: Create MUST-HAVE Files First

- [ ] `logo.svg` + `favicon.*`
- [ ] Icon sprite (`icons.svg` + 8 individual SVG icons)
- [ ] Seat state icons (6 files)
- [ ] Hero images (2 JPEG)
- [ ] Avatar + empty state illustrations (5 files)
- [ ] Email templates (2 PNG)
- [ ] Lottie animations (2 JSON)
- [ ] OG images (2 PNG)
- [ ] Architecture diagrams (2 PNG)

**Total: 28 files → ~4.5 MB**

---

## 📦 Delivery Commands (Examples)

```bash
# Optimize hero images before uploading to S3
imageoptim frontend/public/hero-*.jpg

# Create WebP variants for modern browsers
cwebp frontend/public/hero-home.jpg -o frontend/public/hero-home.webp

# Validate SVG syntax
svgo frontend/src/assets/icons/*.svg

# Minify Lottie animations
npm run minify-lottie
```

---

**Next Steps:**
1. Create MUST-HAVE files first (28 files, ~5 MB)
2. Test on staging with CDN configuration
3. Plan SHOULD-HAVE files for pre-launch polish
4. Reserve NICE-TO-HAVE + dynamic assets for Phase 2
