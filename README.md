# Hassan Zahid Portfolio

Personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

This project presents Hassan Zahid as a backend-focused software engineer with experience across scalable applications, APIs, cloud infrastructure, integrations, databases, publishing workflows, production support, and practical UI delivery when needed.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Sections Included

- Personal hero with CV download actions
- Availability section for remote, freelance, full-time, part-time, contract, and project-based work
- Proof-point section for fast profile signal
- Role-fit section for backend, UI-capable backend, integrations, and cloud-ready roles
- Expanded company-to-company experience and skill map
- Categorized technical skill spotlight and accordions
- Categorized soft skills
- Why me section with grounded profile strengths
- Contact section with email, phone, and professional CV download

## Local Development

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content Editing

Most portfolio content lives in [src/app/page.tsx](src/app/page.tsx).

You can update:

- Headline and summary text
- Personal hero copy
- Availability options
- Role-fit cards
- Experience entries and company-specific skill categories
- Overall technical skill groups
- Soft skill groups
- Why me points
- Contact information

Global styles and theme customization live in [src/app/globals.css](src/app/globals.css).

Site metadata such as page title and description live in [src/app/layout.tsx](src/app/layout.tsx).

The downloadable CV is served from [public/Hassan_Zahid_CV.pdf](public/Hassan_Zahid_CV.pdf).

## Current Profile Data

The site currently includes:

- Hassan Zahid
- Rawalpindi, Pakistan
- `hassanisavailable@gmail.com`
- `+92 321 1946159`
- Professional experience from AlphaSquad and Viral Webbs

## Notes

- The original resume files remain in the project root.
- The public PDF copy is used for CV downloads.
- The portfolio content was adapted from the resume into the site UI.
- The project has been verified with both `npm run lint` and `npm run build`.
