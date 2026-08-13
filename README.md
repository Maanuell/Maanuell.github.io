# Emmanuel Maduabum — Portfolio

Dark single-page portfolio. React 18 + Vite + TypeScript + Tailwind + GSAP + Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the built output locally
```

## Where the content lives

**Everything you'll want to change is in one file: `src/data/content.ts`.** Name, roles, projects, experience, stats, toolkit, links. No need to touch components to update copy.

To add a project: append to `featured` (bento grid, uses `span` and `aspect`) or `alsoBuilt` (three-across row). Each needs a `visual` — one of `robot`, `hydrogen`, `solar`, `neural`, `chart`, `wave`.

## About the visuals

There are no photographs in this build. Each project card draws a generated SVG from its own subject matter — a boustrophedon coverage path for the mower, an electrolysis flow for hydrogen, an irradiance day-curve with a cloud dip for the forecasting work. They live in `src/components/ProjectVisual.tsx` and are deterministic, so a card looks identical on every render.

**When you have photos**, the swap is straightforward: in `Works.tsx`, replace `<ProjectVisual variant={...} />` with an `<img>` and keep the same wrapper classes. The hover, halftone and gradient layers all still work.

The hero background is a canvas node field rather than the video in the original spec — that spec streamed from a third party's Mux account, which would hotlink their bandwidth and break without warning. If you shoot your own footage later, `HeroBackdrop.tsx` is where it goes.

## Deploying

A Vite app needs a build step, so it can't be pushed to Pages the way a single HTML file can. `.github/workflows/deploy.yml` handles it: push to `main`, the Action builds and publishes.

One-time setup on GitHub: **Settings → Pages → Source → GitHub Actions** (not "Deploy from a branch").

```bash
git init
git add .
git commit -m "Portfolio"
git remote add origin git@github.com:Maanuell/<repo>.git
git push -u origin main
```

If you deploy to a project repo rather than `Maanuell.github.io`, `base: "./"` in `vite.config.ts` already keeps asset paths relative, so nothing else needs changing.

## Structure

```
src/
  App.tsx                    loader gate + section order
  data/content.ts            ← all copy and data
  components/
    LoadingScreen.tsx        000→100 counter, rotating words
    Navbar.tsx               floating pill, scroll-spy, smooth scroll
    Hero.tsx                 GSAP entrance, rotating role
    HeroBackdrop.tsx         canvas node field
    SectionHeader.tsx        shared eyebrow + heading + action
    Works.tsx                bento grid
    ProjectVisual.tsx        generated SVG artwork
    Experience.tsx           timeline pills + toolkit grid
    Stats.tsx                count-up figures
    Contact.tsx              GSAP marquee + footer
```

## Notes

- Forced dark theme; no light mode.
- `prefers-reduced-motion` is respected throughout — the canvas stops drifting, animations collapse.
- The CV lives in `public/` and is served from the site root.
