# Sri Gowri Ganesha Geleyara Balaga — Website

## Tech Stack

| Category | Packages |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, clsx, tailwind-merge |
| Animations | Framer Motion, GSAP |
| Smooth Scroll | Lenis |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Particles | tsParticles |
| Icons | lucide-react, react-icons |
| Carousels | Embla Carousel, Swiper |
| Forms | react-hook-form, zod, @hookform/resolvers |
| Lightbox | yet-another-react-lightbox |
| Count-up | react-countup |
| Scroll Detection | react-intersection-observer |
| Theme | next-themes |
| Backend | Firebase |
| Utilities | date-fns, class-variance-authority |
| Fonts | Playfair Display, Inter (via next/font/google) |
| Dev Tools | ESLint, Prettier, prettier-plugin-tailwindcss |

## Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Start production server
```

## Project Structure

- `src/app/` — Next.js App Router pages (6 routes: /, /about, /gallery, /events, /blog, /contact)
- `src/components/` — React components (19 custom + 11 shadcn/ui)
- `src/components/ui/` — shadcn/ui primitives
- `src/data/` — Static content (content.ts)
- `src/lib/` — Utilities (utils.ts from shadcn)
- `public/images/` — Placeholder images (replace with actual photos)
