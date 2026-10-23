# Elara — Personal Portfolio

A responsive personal portfolio built with React, Vite, and JavaScript. The visual direction uses a light canvas with black typography and restrained purple accents.

## Stack

- React + Vite
- JavaScript (ES modules)
- React Router for client-side pages
- Plain CSS split into design tokens, global styles, reusable components, and page-level styling
- Vercel for static deployment

## Local development

PowerShell may block the npm.ps1 shim depending on your execution policy. On Windows, use the .cmd executable:

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
    │   ├── common/          # Shared navigation and footer
    │   └── projects/        # Reusable project presentation
    ├── data/                # Static portfolio content
    ├── layouts/             # Shared page shell
    ├── pages/               # Home, About, Skills, Projects, detail, Contact
    └── styles/              # Design tokens, global styles, component/page styles

## Content to personalize

- Update project details in src/data/projects.js.
- Replace the example email and LinkedIn URL in src/pages/Contact.jsx.
- Replace the abstract monogram visuals with your own photo or project imagery when ready.

## Deployment

Import the GitHub repository into Vercel. For a Vite static site, the standard build command is npm run build and the output directory is dist. Vercel can detect the Vite setup automatically.
