# AdMyBrand - Modern SaaS Landing Page

A modern, responsive landing page for AdMyBrand, an AI-powered advertising platform. This project showcases modern UI/UX design trends including glassmorphism, subtle animations, and mobile-first responsive design.

![AdMyBrand Landing Page](https://example.com/screenshot.png)

## Features

- **Modern Design**: Implements 2025 design trends including glassmorphism, subtle animations, and modern typography
- **Responsive Layout**: Fully responsive design that works flawlessly on all devices
- **Smooth Animations**: Elements animate in on scroll for an engaging user experience
- **Dark Mode Support**: Seamless experience in both light and dark modes
- **Accessibility**: Built with accessibility in mind for all users

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- **Typography**: Bricolage Grotesque from Google Fonts
- **Animations**: Custom CSS animations with Intersection Observer API

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
  - `ui/` - UI components like buttons, cards, etc.
  - `sections/` - Page sections like header, hero, features, etc.
- `lib/` - Utility functions and helpers
  - `utils/` - General utility functions

## Components

### UI Components

- **GlassmorphicCard**: Reusable component for creating glassmorphic UI elements
- **Button**: Versatile button component with various styles and states

### Section Components

- **Header**: Navigation bar with mobile responsiveness
- **Hero**: Main banner section with call-to-action
- **Features**: Showcase of product features
- **Testimonials**: Customer testimonials and social proof
- **CTA**: Call-to-action section with form
- **Footer**: Site footer with links and information

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Colors

The primary colors can be customized in `app/globals.css` by modifying the CSS variables in the `:root` section.

### Content

The content for each section can be modified in the respective component files in the `components/sections/` directory.

### Animations

Animation classes are defined in `app/globals.css` and can be customized as needed. The animation initialization is handled by the `AnimationInitializer` component.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
