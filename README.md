# AnimeHub

AnimeHub is a Next.js 16 anime discovery app that lets users browse anime, search by title, and explore top-ranked shows using the Jikan API.

## Features

- Full-page hero section with custom Bebas Neue branding
- Live anime search with debounced API requests
- Browse a general anime list
- View top anime rankings
- Modal-style anime detail exploration
- About and contact sections for a landing-page style experience

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Heroicons
- Jikan API

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
NEXT_PUBLIC_BASE_API=https://api.jikan.moe/v4
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the app for production
- `npm run start` - run the production build
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  app/
  components/
    layout/
    sections/
  lib/
  types/
public/
  fonts/
  images/
```

## Environment Variables

- `NEXT_PUBLIC_BASE_API` - base URL for the anime API

The current project is configured for:

```bash
https://api.jikan.moe/v4
```

## Notes

- Remote images are configured in `next.config.ts` for `myanimelist.net`
- Custom fonts are loaded from `public/fonts`
- This app uses the App Router structure under `src/app`
