# Welcome ItzFizz: Scroll-Driven Hero Section

Scroll-driven hero animation inspired by the car-scroll-animation reference.
Built with **Next.js (App Router) + React, Tailwind CSS, GSAP + ScrollTrigger**.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)
```bash
npm run build      # outputs to ./out
```

## Deploy on GitHub Pages
1. Push this folder to a GitHub repo (branch `main`).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Push → the workflow in `.github/workflows/deploy.yml` builds and publishes.
   Live URL: `https://<username>.github.io/<repo-name>/`

## How it works
| Part | Technique |
|---|---|
| Load animation | One GSAP timeline: car drops in, headline letters stagger up, stats appear one by one |
| Scroll animation | `ScrollTrigger` with `pin: true` and `scrub: 1.2` (progress-based, eased catch-up) |
| Car | Outer wrapper = intro tween, inner wrapper = scroll tween (they never conflict) |
| Road | Dashed strip moved with `yPercent` so lines stream past the car |
| Performance | Only `transform` and `opacity` animate; `will-change` hints; no layout reads per scroll event |
| Accessibility | `prefers-reduced-motion` handled via `gsap.matchMedia()`; headline has an `aria-label` |

## Structure
```
app/            layout, global CSS, page
components/     Hero.jsx (all animation logic), CarSvg.jsx (inline SVG car)
.github/        GitHub Pages deploy workflow
```
