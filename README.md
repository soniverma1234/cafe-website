# Brew & Bliss Cafe

![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite 5](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

A premium, fully responsive cafe website for **Brew & Bliss Cafe** — "Your Daily Dose of Happiness." Warm espresso-brown, cream and gold palette, elegant serif typography, smooth scroll-reveal animations, a working cart, menu filters, a validated contact form and a photo lightbox. Built with **React 18 + Vite 5 + Tailwind CSS 3 (JavaScript only, no backend required)**.

---

## Features

- **Sticky navbar** with scroll-spy link highlighting, collapsing announcement bar and a slide-down mobile menu
- **Hero** with headline, coffee photography, floating special/rating cards and a scrolling marquee strip
- **Featured menu** — 15 realistic items with prices, ratings, images and descriptions
- **Menu category filters** — All / Espresso / Brews / Iced / Pastries / Desserts with animated re-entry
- **Add-to-cart** — cart drawer with quantity steppers, line totals, subtotal, remove and badge counter with pop animation
- **About section** — story, feature cards and photo collage with experience badge
- **Bestsellers & special offers** — ranked favourites plus three offer cards with promo codes
- **Testimonials** — 4.9/5 rating banner and customer cards
- **Photo gallery** — masonry-style grid with hover captions and a keyboard-navigable lightbox (Esc / ← / →)
- **Contact** — info cards, opening hours, "Get Directions" (Google Maps) and a fully validated contact form
- **Toast notifications** and back-to-top button
- **Graceful image fallbacks** — every remote image degrades to a branded placeholder if it fails to load
- Fully responsive (mobile / tablet / desktop) with `prefers-reduced-motion` support

> **Honest demo note:** the cart and contact form run entirely in the browser. No order, payment, reservation or message is ever sent to a server — wire them to a backend or a form service (e.g. Formspree) to make them real.

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/brew-bliss-cafe.git
cd brew-bliss-cafe

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser. The site hot-reloads as you edit.

> Requires **Node.js 18+** (Node 20+ recommended).

### Available Scripts

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the dev server at `http://localhost:3000`     |
| `npm run build`   | Production build — outputs static files to `dist/`  |
| `npm run preview` | Serve the production build locally at `:3000`       |

---

## Project Structure

```
brew-bliss-cafe/
├── index.html                  # HTML entry: fonts, meta tags, favicon
├── package.json                # Scripts + dependencies
├── vite.config.js              # Vite config (React plugin, port 3000)
├── tailwind.config.js          # Brand palette, fonts, shadows
├── postcss.config.js           # Tailwind + Autoprefixer pipeline
├── public/
│   └── favicon.svg             # Coffee-cup brand mark
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Layout: all sections in order
    ├── index.css               # Tailwind layers, reveal & keyframe animations
    ├── context/
    │   └── CartContext.jsx     # Cart state, totals, toast messaging
    ├── data/
    │   └── data.js             # All content: menu, offers, gallery, hours…
    └── components/
        ├── Navbar.jsx          # Scroll-spy nav + mobile menu + cart badge
        ├── Hero.jsx            # Headline, CTA, floating cards, marquee
        ├── MenuSection.jsx     # Category filters + menu card grid
        ├── About.jsx           # Story + feature cards + photo collage
        ├── Bestsellers.jsx     # Fan favourites + special offer cards
        ├── Testimonials.jsx    # Reviews with rating banner
        ├── Gallery.jsx         # Photo grid + lightbox
        ├── Contact.jsx         # Info cards + validated form
        ├── Footer.jsx          # Links, hours, newsletter, socials
        ├── CartDrawer.jsx      # Slide-in cart with quantity controls
        ├── SectionHeading.jsx  # Shared eyebrow/title/description heading
        ├── SafeImage.jsx       # <img> with branded fallback
        ├── Reveal.jsx          # IntersectionObserver scroll reveal
        ├── Toast.jsx           # Global toast notifications
        └── BackToTop.jsx       # Floating back-to-top button
```

---

## Customization

| Want to change…            | Edit…                                                      |
| -------------------------- | ---------------------------------------------------------- |
| Menu items, prices, images | `src/data/data.js` (single source of truth)                |
| Colors / fonts / shadows   | `tailwind.config.js` (`espresso`, `gold`, `cream` scales)  |
| Opening hours & address    | `contactInfo` / `openingHours` in `src/data/data.js`       |
| Global typography          | Google Fonts link in `index.html` + `fontFamily` in config |
| Animations                 | `src/index.css` (keyframes + `.reveal` classes)            |

---

## Deploy

### 1. Push to GitHub

```bash
cd brew-bliss-cafe
git init
git add .
git commit -m "feat: Brew & Bliss Cafe website"
git branch -M main
git remote add origin https://github.com/<your-username>/brew-bliss-cafe.git
git push -u origin main
```

### 2. Deploy to Vercel

**Dashboard (recommended):**

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** the `brew-bliss-cafe` repo.
2. Vercel auto-detects **Vite**. Confirm settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy** — done. Every push to `main` now auto-deploys.

**CLI alternative:**

```bash
npm install -g vercel
vercel          # first deploy (answer the prompts)
vercel --prod   # promote to production
```

---

## Tech Stack

- [React 18](https://react.dev/) — UI components & hooks
- [Vite 5](https://vitejs.dev/) — dev server & bundler
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling with a custom brand palette
- [lucide-react](https://lucide.dev/) — icon library
- Photography hot-linked from [Unsplash](https://unsplash.com/) with built-in fallbacks

## License

[MIT](./LICENSE)
"# cafe-website" 
