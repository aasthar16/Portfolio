# Aastha Rathore: Portfolio

Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · Framer Motion · TypeScript

## Run
```bash
npm install
npm run dev        # http://localhost:3000
```
Put your photo at `public/profile.jpg` (a gradient "AR" fallback shows until then).
Deploy: push to GitHub and import into Vercel (zero config).

## Editing content
All copy and metrics live in `lib/data.ts`. Components only render data.

## Architecture tradeoffs
- **Data-driven sections (`lib/data.ts`)** keep content edits out of JSX; cost: less freedom for one-off layouts.
- **Server components by default.** Only Hero, Projects, Contact and Section use `"use client"` (animation/state), keeping JS payload small.
- **Tailwind 3 over 4** for stable, widely documented config; upgrade is straightforward later.
- **Plain `<img>` for the profile photo** so a missing file degrades gracefully via `onError`; `next/image` would give optimisation but breaks on a missing asset.
- **Contact form uses `mailto:`** after client-side validation: zero backend, zero secrets, works on any host. Tradeoff: depends on the visitor having a mail client and gives no delivery tracking. To send server-side, add `app/api/contact/route.ts` (Resend / Formspree / Nodemailer) and `fetch` to it in `Contact.tsx`.
- **No light-mode toggle**: single dark theme to keep the design cohesive and the code small.
