# Portfolio Project

A personal portfolio project built with a modern React and Next.js stack. It presents a single-page portfolio with sections for a hero summary, availability, experience, skills, work style, and contact actions.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

- `src/app/page.tsx` contains the page content and section data.
- `src/app/globals.css` contains the global styling and theme tokens.
- `src/app/layout.tsx` contains app metadata, fonts, and layout setup.
- `public/` contains static assets served by the app.

## Editing Content

Most portfolio text is stored as arrays and constants in `src/app/page.tsx`. Update those values to change the hero copy, availability cards, experience entries, skill groups, work-style points, and contact actions.

Theme colors, spacing, cards, buttons, and responsive behavior live in `src/app/globals.css`.

## Build

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```
