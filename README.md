# AdMyBrand - AI-Powered Advertising Platform

A modern, responsive web application built with Next.js 15 that helps businesses optimize their digital advertising campaigns using AI technology.

## 🚀 Features

- **AI-Powered Ad Creation** - Generate compelling ad content automatically
- **Multi-Platform Integration** - Support for Google Ads, Facebook, Instagram, LinkedIn
- **Advanced Analytics Dashboard** - Real-time campaign performance tracking
- **A/B Testing Automation** - Optimize campaigns with automated testing
- **Responsive Design** - Beautiful UI that works on all devices
- **Dark/Light Mode** - Toggle between themes for better user experience
- **Multi-Step Signup** - Streamlined onboarding process
- **Pricing Calculator** - Interactive pricing with annual/monthly toggle
- **Animated Components** - Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom component library with Glassmorphism design
- **Build Tool**: Next.js built-in bundler

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand.git
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
admybrand/
├── app/                    # Next.js App Router pages
│   ├── login/             # Login page
│   ├── signup/            # Multi-step signup page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   └── ui/               # UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── AnimatedContainer.tsx
│       └── ...
├── lib/                  # Utility functions
├── public/              # Static assets
└── types/              # TypeScript type definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Purple gradient (`from-blue-600 to-purple-600`)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Green for success states, Red for errors

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper contrast
- **Interactive**: Hover states and smooth transitions

### Components
- **Glassmorphism Cards**: Frosted glass effect with backdrop blur
- **Animated Containers**: Smooth entrance animations
- **Interactive Buttons**: Gradient backgrounds with hover effects
- **Form Elements**: Clean inputs with icon integration

## 📱 Pages

### Home Page (`/`)
- Hero section with animated elements
- Features showcase
- Interactive pricing calculator
- Customer testimonials
- FAQ section
- Footer with links and social media

### Login Page (`/login`)
- Simple, clean login form
- Social authentication options (Google, GitHub, Apple)
- Remember me functionality
- Security features highlight

### Signup Page (`/signup`)
- Multi-step registration process:
  1. Personal Information
  2. Company Details
  3. Preferences & Goals
  4. Terms & Completion
- Progress indicator
- Social signup options
- Form validation

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🎯 Key Features Breakdown

### Authentication
- Multi-step signup with progress tracking
- Social login integration
- Form validation and error handling
- Secure password handling

### UI/UX
- Responsive design for all screen sizes
- Smooth animations and micro-interactions
- Glassmorphism design language
- Dark/light mode support
- Loading states and feedback

### Performance
- Next.js 15 with App Router for optimal performance
- Static generation where possible
- Optimized images and assets
- Code splitting and lazy loading

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at support@admybrand.com
- Visit our documentation at [docs.admybrand.com](https://docs.admybrand.com)

---

**Built with ❤️ by the AdMyBrand team**