# resparq Website

Modern landing page for resparq - AI-powered exit intent optimization for Shopify stores.

Built with Next.js, Tailwind CSS, and deployed on Vercel.

**Live Site:** https://www.resparq.ai

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v3
- **Deployment:** Vercel
- **Version Control:** GitHub

## Project Structure
```
resparq-website/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles + Tailwind + animations
├── public/
│   └── logo.svg          # resparq logo
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.mjs    # PostCSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## Features

- 🎨 Modern gradient design with animated blobs
- ⚡ Optimized performance with Next.js
- 📱 Fully responsive mobile design
- 🎯 3-tier pricing structure (Starter/Pro/Enterprise)
- 🔥 Smooth animations and hover effects
- 🌐 Custom domain (resparq.ai) with SSL

## Development Workflow

### Initial Setup

1. **Install dependencies:**
```bash
   npm install
```

2. **Run development server:**
```bash
   npm run dev
```
   Opens at http://localhost:3000

3. **Build for production:**
```bash
   npm run build
```

### Making Changes & Deploying

The site is connected to GitHub and auto-deploys via Vercel.

**Standard workflow:**
```bash
# 1. Make your changes to files (page.tsx, globals.css, etc.)

# 2. Add changes to git
git add .

# 3. Commit with a descriptive message
git commit -m "Updated pricing section"

# 4. Push to GitHub
git push

# Vercel automatically deploys to production!
# Check deployment status at: https://vercel.com/dashboard
```

**Manual deployment (if needed):**
```bash
vercel --prod
```

### Key Files to Edit

**`app/page.tsx`** - Main landing page content
- Hero section
- Features section
- Pricing tiers
- CTA sections

**`app/globals.css`** - Custom animations
- Blob animations
- Gradient animations
- Animation delays

**`public/logo.svg`** - Brand logo

## Deployment Setup

### Vercel Configuration

1. **Domain Setup:**
   - Primary: www.resparq.ai
   - Redirects: resparq.ai → www.resparq.ai
   - SSL: Auto-configured by Vercel

2. **DNS (Cloudflare):**
   - A Record: `@` → `216.198.79.1` (DNS only)
   - CNAME: `www` → `843b054f403b2ff0.vercel-dns-017.com` (DNS only)

3. **Auto-Deploy:**
   - Connected to: https://github.com/tjmajewski/resparqwebsite
   - Branch: `main`
   - Deploys on every push

### Environment

- **Node Version:** 18+
- **Build Command:** `next build`
- **Output Directory:** `.next`

## Design System

### Colors

- **Primary Purple:** `#a855f7` to `#ec4899`
- **Background:** Dark slate/purple gradient
- **Text:** White with gray variants
- **Accents:** Purple-500, Pink-500

### Typography

- **Font Family:** Geist Sans, Geist Mono
- **Headings:** Bold, gradient text
- **Body:** Gray-400 for secondary text

### Key Components

**Animated Gradient Blobs:**
```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

**Gradient Text Animation:**
```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## Pricing Structure

### Starter - $19/month
- Manual mode
- 1,000 impressions/month
- 1 campaign
- Basic analytics
- Email support

### Pro - $79/month ⭐ MOST POPULAR
- Everything in Starter
- AI autopilot (8 signals)
- 10,000 impressions/month
- Evolution system
- A/B testing
- Advanced analytics

### Enterprise - $249/month
- Everything in Pro
- Unlimited impressions
- Smarter AI (13 signals)
- Manual variant control
- Custom CSS
- White-label
- Enterprise analytics

## Brand Guidelines

- **Name:** resparq (all lowercase)
- **Tagline:** "Exit Intent Powered by Evolution"
- **Value Prop:** "AI-powered exit intent that automatically applies discount codes at checkout"
- **Key Message:** "No email capture. No friction. Just revenue."

## Troubleshooting

### Styling not loading?
- Check Tailwind config includes all content paths
- Verify globals.css has @tailwind directives
- Run `npm run build` to check for errors

### Deployment failed?
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Ensure no TypeScript/ESLint errors

### Logo not showing?
- Verify `/public/logo.svg` exists
- Check Image component src path
- Clear browser cache

## Resources

- **Live Site:** https://www.resparq.ai
- **Vercel Dashboard:** https://vercel.com/taylormajewski99-8424s-projects/resparq-website
- **GitHub Repo:** https://github.com/tjmajewski/resparqwebsite
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

## License

Copyright © 2025 resparq. All rights reserved.
