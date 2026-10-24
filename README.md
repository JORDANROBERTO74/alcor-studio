# Alcor Studio

A bilingual portfolio for a fictional creative studio, built as an original front-end with self-hosted imagery.

![Alcor Studio portfolio home page in English, with the headline "Transforming brands with vision & creativity", a background image, and the studio navigation](docs/screenshot.webp)

## What it is

A one-page portfolio for a fictional creative studio: a hero, services, testimonials, stats, selected work, a statement, and a contact section. The whole page is available in English and Spanish.

It is a presentation site, not a business application. There is no CMS, database or contact backend: enquiries open the visitor's email client, and the copy button writes the address to the clipboard.

## Why this over a portfolio template

- **Clean-room build.** Layout, copy, palette and imagery were written for this project; no page template, copied class names or stock assets.
- **Bilingual by default.** `/[locale]` routes, typed dictionaries, automatic browser-language detection, a manual switcher, localized prices and dates, and `hreflang` alternates.
- **Market rules in one file.** Region, currency and contact details live in `lib/site.ts`.
- **No remote media.** All 11 images are local. No third-party image requests.
- **Small dependency surface.** Next.js, React, Tailwind CSS and shared UI primitives. No UI kit, no animation library, no CMS client.

## Quick start

Requirements: Node.js 24 (see `.nvmrc`) and pnpm 11.

```bash
git clone https://github.com/JORDANROBERTO74/alcor-studio.git
cd alcor-studio
pnpm install
pnpm dev
```

Open http://localhost:3000. The proxy redirects to `/en` or `/es` based on your browser's `Accept-Language` and remembers an explicit choice in a cookie.

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server on port 3000 |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run `tsc --noEmit` |

## Internationalization

Copy lives in `lib/i18n.ts` with typed dictionaries for `en` and `es`. The English file defines the `Dictionary` type, so a missing or misspelled key in Spanish fails `tsc` instead of rendering a blank label.

- Browser detection defaults to `en`; explicit selection persists in `localStorage`.
- Every page declares canonical and `hreflang` alternates from `lib/seo.ts`.

## Region and currency

Market rules live in `lib/site.ts`:

```ts
export const site = {
  name: "Alcor Studio",
  domain: "alcor.studio",
  email: "hello@alcor.studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alcor-studio.vercel.app",
} as const;
```

## Artwork

`public/assets/` contains self-hosted images used across the site. No stock photography, third-party logos or remote media remain in the project.

## Project structure

```
app/
  layout.tsx          root layout, metadata, fonts, JSON-LD
  page.tsx            single-page client with i18n and locale switcher
  robots.ts           robots metadata
  sitemap.ts          sitemap metadata
lib/
  i18n.ts             dictionaries, detection, persistence
  site.ts             site identity
  seo.ts              metadata builder and Organization JSON-LD
public/
  assets/             self-hosted images
  icon.svg            favicon
docs/
  screenshot.webp
```

## Deployment

The app uses the default Vercel Next.js preset; no `vercel.json` is required.

1. Import the repository and keep the detected settings (`pnpm install`, `pnpm build`, output `.next`).
2. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
3. Deploy, then verify `/{en,es}`, `/sitemap.xml`, `/robots.txt`, Open Graph image.

`NEXT_PUBLIC_SITE_URL` drives canonical links, `hreflang`, `sitemap.xml`, `robots.txt` and Open Graph URLs. When it is unset, the code falls back to `https://alcor-studio.vercel.app`; the public demo sets it to its Vercel origin.

Live demo: https://alcor-studio.vercel.app

## Status and scope

This is a portfolio reference implementation, maintained but not production-ready for real orders. There is no persistence beyond the browser, no authentication and no payment integration. Verification covers `pnpm lint`, `pnpm typecheck`, `pnpm build` and a manual pass in both locales at desktop and mobile widths.

## License

Proprietary, all rights reserved. See [LICENSE](LICENSE). Third-party dependencies remain under their own licenses.
