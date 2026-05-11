# Relo Web — Marketing Site

This is the marketing website for the Relo macOS menu bar app.

## Design System

**Always use the Dimension design system defined in `DESIGN.md`.** Every visual decision — colors, typography, spacing, border radius, shadows, surfaces — must follow those tokens. Never introduce colors, fonts, or values not defined there.

Key rules at a glance:
- **Background:** `#0a0a0a` (Midnight Base). Always dark. Never light.
- **Primary text:** `#e5e5e5` (Ghost White). Secondary: `#b2b2b2` (Ash Text). Muted: `#686868` (Slate Text).
- **Headings font:** Geist (`var(--font-geist)`), weights 400/500/600.
- **Body font:** DM Sans (`var(--font-dm-sans)`), weights 400/500/700.
- **CTA button:** `#ffffff` background, `#161616` text, `9999px` radius (Pill Button).
- **Cards:** `rgba(212,212,212,0.1)` background, `24px` radius, border `rgba(229,229,229,0.08)`.
- **Hero background:** Gradient Aura — `linear-gradient(rgb(72,103,175), rgb(156,175,184), rgb(196,149,119))` at low opacity.
- **Elevation:** `drop-shadow` only (see DESIGN.md Elevation section). No heavy box-shadows.
- **Letter spacing:** `0.35px` at 14px, `0.4px` at 16px, `0.45px` at 18px, `-0.672px` at 48px.
- **Section gap:** 40px. Card padding: 16px. Element gap: 8px.

Read `DESIGN.md` for the full token reference before making any design changes.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript

## Structure

- `app/page.tsx` — main marketing page
- `app/layout.tsx` — root layout with fonts and BottomNav
- `app/components/BottomNav.tsx` — sticky floating pill nav (bottom)
- `app/components/DemoSection.tsx` — scroll-triggered app demo mockup
- `app/components/EmailCapture.tsx` — email waitlist form
- `app/globals.css` — Tailwind @theme with all Dimension tokens

## Nav

Bottom floating pill bar (not top). Contains: Relo brand, Features link, GitHub, LinkedIn, Download CTA.
Update GitHub/LinkedIn URLs in `app/components/BottomNav.tsx` when ready.

## .dmg download

The download link points to `/Relo.dmg`. Drop the built `.dmg` file into the `public/` folder to make it live.
