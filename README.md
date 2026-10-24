# Elara — Personal Portfolio

A responsive personal portfolio built with React, Vite, JavaScript, React Router, and Tailwind CSS. The visual direction uses a light canvas, dark typography, and restrained purple accents.

## Stack

- React + Vite
- JavaScript (ES modules)
- React Router for client-side pages
- Tailwind CSS 4 via the Vite plugin
- Static portfolio content in `src/data/portfolio.js`
- Vercel for static deployment

## Local development

PowerShell may block the `npm.ps1` shim depending on your execution policy. On Windows, use the `.cmd` executable:

    npm.cmd install
    npm.cmd run dev

Useful checks:

    npm.cmd run lint
    npm.cmd run build
    npm.cmd run preview

## Project structure

    src/
    ├── app/                 # Router and application setup
    ├── components/
    │   ├── common/          # Navbar, footer, and shared UI
    │   └── projects/        # Reusable project card
    ├── data/
    │   └── portfolio.js     # Profile, skills, experience, education, projects
    ├── layouts/             # Shared page shell
    ├── pages/               # Home, Skills, Experience, Projects, detail, Contact
    └── styles/              # Tailwind entry and styling

## Updating portfolio content

- Edit profile, skills, experience, education, and project information in `src/data/portfolio.js`.
- Update the real contact links in the same file when needed.
- The CV links on the Contact page expect a future PDF at `public/cv.pdf`. Add the file before publishing those links as working downloads.

## Branding

- The site logo is stored at `public/logo.svg`.
- Public assets are referenced from the site root, so use `/logo.svg` in the app, not `/public/logo.svg`.

## Deployment

Import this repository into Vercel. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
