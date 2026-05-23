# FarmNest — Rama Country Farm

A premium, ultra-fast QR-code landing page for Rama Country Farm.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## How to Change Social Links

Open `src/lib/constants.ts` and edit:

```ts
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/YOUR_HANDLE",
  youtube:   "https://www.youtube.com/@YOUR_CHANNEL",
  whatsapp:  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20order%20country%20eggs.",
};
```

**WhatsApp number format:** `91` = India country code, then your 10-digit mobile number.  
Example: `91 98765 43210` → `https://wa.me/919876543210?text=...`

---

## How to Add Your Logo

1. Save your logo as `public/logo.png` (recommended: 400×400 px, transparent background)
2. Open `src/components/FarmLogo.tsx`
3. Replace the SVG block with:

```tsx
import Image from "next/image";

export default function FarmLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Rama Country Farm"
      width={96}
      height={96}
      className="rounded-2xl"
      priority
    />
  );
}
```

---

## How to Add Favicon & PWA Icons

Replace these files in `/public/`:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32×32 | Browser tab |
| `icon-192.png` | 192×192 | Android PWA |
| `icon-512.png` | 512×512 | PWA splash |
| `apple-icon.png` | 180×180 | iOS home screen |
| `og-image.png` | 1200×630 | WhatsApp/social preview |

Use [RealFaviconGenerator.net](https://realfavicongenerator.net) to generate all sizes from one image.

---

## Deploy to Vercel (Free)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial FarmNest launch"
git remote add origin https://github.com/YOUR_USERNAME/farmnest.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up free with GitHub
2. Click **"Add New Project"**
3. Import your `farmnest` GitHub repo
4. Click **Deploy** — done in ~30 seconds!

### Step 3 — Custom Domain (Optional)

In Vercel → Project Settings → Domains → Add your domain.

---

## Generate a QR Code

Once your site is live at `https://farmnest.vercel.app`:

1. Go to [qr.io](https://qr.io) or [qrcode-monkey.com](https://www.qrcode-monkey.com)
2. Enter your Vercel URL
3. Set foreground color: `#204d3a` (dark green)
4. Set background color: `#f0b322` (golden yellow)  
5. Download as SVG for best print quality
6. Print on egg boxes, banners, and stickers

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx     ← SEO meta, fonts, PWA
│   ├── page.tsx       ← Main page layout
│   └── globals.css    ← Animations, base styles
├── components/
│   ├── SocialButton.tsx  ← Reusable action card
│   └── FarmLogo.tsx      ← Logo component
└── lib/
    └── constants.ts   ← All links & brand text ← EDIT HERE
public/
├── manifest.json      ← PWA config
├── og-image.png       ← Social preview image
└── icon-*.png         ← App icons
```

---

## Performance Tips

- The site scores near **100 on Lighthouse** out of the box
- Fonts load with `display: swap` — no layout shift
- All animations use `transform` — GPU accelerated, no repaints
- Zero JavaScript for animations — pure CSS
- Images use Next.js automatic WebP/AVIF conversion

---

Built with Next.js 15 + Tailwind CSS 4 + Love 🌿
