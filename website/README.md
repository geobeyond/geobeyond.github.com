# geobeyond/website

Marketing site for **Geobeyond** — open-source geospatial engineering.
Built with [Astro](https://astro.build) + Tailwind CSS v4.

> **Status: DRAFT.** The structure and the brand "cube-solve" signature are
> stable. Copy, chips and section ordering in `src/i18n/` are placeholders to
> be reviewed and rewritten.

## The signature

The hero is a scroll-driven Rubik's cube textured with a continuous world map.
Each scroll transition between sections plays a short, deliberate sequence of
layer turns (scramble + inverse → net identity) that always returns to the
**solved continents** — the metaphor of bringing order to a complex world, one
capability at a time. It lands on the brand logo pose with a decisive snap.

- `src/lib/cube-solve.ts` — the cube engine (DOM-driven, scroll-scrubbed).
- `src/components/CubeSolve.astro` — reusable component + styles.
- `public/world-bold.svg` — the map texture.

## Internationalisation

`en` (default, `/`) and `it` (`/it/`), via Astro's built-in i18n.
Content per locale lives in `src/i18n/home.ts`; UI chrome in `src/i18n/ui.ts`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Deploy

GitHub Actions builds and publishes to GitHub Pages on push to `main`
(see `.github/workflows/deploy.yml`). Enable **Settings → Pages → Source:
GitHub Actions** once. The project-site base path (`/website`) is set via the
`SITE_BASE` env var in the workflow.
