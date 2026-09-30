# Escape Ramp Landing Page

<!-- repo-intro:start -->
**Project snapshot:** Escape Ramp Landing is the conversion-focused front door for a SaaS concept helping small businesses move from legacy QuickBooks Desktop workflows toward cloud-based operations.

**What it demonstrates:** Next.js · TypeScript · Tailwind CSS · SaaS landing-page UX · Resend integration.
<!-- repo-intro:end -->

**Last Updated**: July 25, 2024 - 9:15 PM EST
**Deployment Trigger**: Test RESEND_API_KEY after environment variable setup

The fastest way off the old books. Escape Ramp helps small businesses transition painlessly to the cloud with guaranteed data preservation and zero downtime.

## Features

- 🎨 Modern, responsive design with enterprise SaaS aesthetic
- 🌟 Beautiful gradients and animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js
- 🎯 Optimized for conversions with clear CTAs
- 🔧 Component-based architecture

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Email**: Resend (3,000 emails/month free)
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up Resend (Email Service):
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Create a `.env.local` file in the root directory:
   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```
   - Update the admin email in `app/api/send-email/route.ts` (line 20)

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
escapeRamp/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with main CTA
│   ├── Body.tsx             # Main content sections
│   └── Footer.tsx           # Footer with links and contact
├── public/
│   └── PNG image.png        # Company logo
└── package.json
```

## Customization

### Colors

The primary color scheme is defined in `tailwind.config.js`. The main brand color is green (`primary-600`).

### Content

Update the content in each component file:

- `components/Hero.tsx` - Main headline and CTA
- `components/Body.tsx` - Product features and benefits
- `components/Footer.tsx` - Contact information and links

### Logo

Replace `public/PNG image.png` with your updated logo file.

## Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## License

© 2025 Escape Ramp. All rights reserved.
