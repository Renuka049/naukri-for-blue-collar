# Naukri for Blue-Collar — React Challenge

Mobile-first React app built with Vite — a small, thumb-friendly job discovery and phone-based apply flow.

## What is included
- React + Vite project (no external UI libraries)
- Simple Context-based state (`job-context.jsx`) for selection and apply behavior
- Mock job data in `src/jobdata/jobs-data.jsx`
- LocalStorage-backed applications list (simulated apply)
- Mobile-first CSS in `src/index.css`

## Design choices (short)
- Minimal dependencies: keep bundle small and predictable for quick mobile loads
- Plain CSS and simple components for easy maintenance
- Phone-first apply flow to reduce user friction for blue-collar users
- Hindi / English toggle for basic bilingual support

## How to run locally

Prerequisites: Node.js 18+ recommended.

Install and start dev server:

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (workspace)

- `src/`
  - `App.jsx` — top-level app shell
  - `main.jsx` — React entry
  - `index.css` — global mobile-first styles
  - `assets/` — static images/icons
  - `container/`
    - `job-card.jsx`
    - `job-context.jsx`
    - `job-details.jsx`
    - `job-list.jsx`
    - `modal.jsx` (apply modal)
  - `jobdata/`
    - `jobs-data.jsx` (mock jobs)
  - `pages/`

## Approach summary

The app is built for quick, low-friction phone applications. Key decisions:

- Use React + Context to keep the codebase small and easy to reason about.
- Keep UI controls minimal — phone-only apply modal and large, tappable cards.
- Provide Hindi/English toggles and simple content fields to improve accessibility.

Challenges solved:

- Kept styling simple and mobile-first to prioritize performance on low-end devices.
- Simulated persistence with LocalStorage to demonstrate end-to-end flow without backend.

What I'm proud of

- Clear, focused UX optimized for quick actions
- Small, maintainable codebase with straightforward component boundaries



