# Tanseer Khan — Portfolio

A Netflix-themed personal portfolio built with a modern React stack.

## Tech stack

- **Vite 7** — build tool / dev server
- **React 18** + **TypeScript 5.6**
- **Tailwind CSS v4** — styling
- **React Router v6** — client-side routing
- **react-icons** — icon set

## Getting started

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev      # start dev server on http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build locally
npm run lint     # type-check only
```

## Project layout

```
v2/
├── index.html              # entry HTML (favicon, title, root div)
├── public/                 # static assets served as-is
│   ├── favicon.ico
│   └── netflix-sound.mp3   # the "ta-dum" intro sound
├── src/
│   ├── main.tsx            # React + Router bootstrap
│   ├── App.tsx             # route definitions
│   ├── index.css           # global styles + Tailwind import
│   └── pages/
│       ├── NetflixIntro.tsx  # splash: letter reveal → click/auto → /browse
│       ├── NetflixIntro.css
│       └── Browse.tsx        # "Who's watching?" (placeholder)
├── vite.config.ts
├── tsconfig.json (+ app/node references)
└── .nvmrc
```

## Routes

| Path      | Component       | Purpose                                          |
| --------- | --------------- | ------------------------------------------------ |
| `/`       | `NetflixIntro`  | Animated Netflix-style intro with name reveal    |
| `/browse` | `Browse`        | Placeholder for the "Who's watching?" screen     |
