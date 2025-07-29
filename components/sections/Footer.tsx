'use client'

import React from 'react';
import Link from 'next/link';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import AnimatedContainer, { StaggerContainer } from '../ui/AnimatedContainer';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Heart,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Guides', href: '#guides' },
      { name: 'API Reference', href: '#api' },
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Cookies', href: '#cookies' },
    ],
  };
  
  const socialLinks = [
    { 
      name: 'Twitter',
      href: '#twitter',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'LinkedIn',
      href: '#linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'GitHub',
      href: '#github',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      name: 'Instagram',
      href: '#instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:text-pink-500'
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'hello@admybrand.com',
      href: 'mailto:hello@admybrand.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'San Francisco, CA',
      href: '#location'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <AnimatedContainer animation="fadeInUp">
              <Link href="/" className="inline-block mb-6 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-bold gradient-text-primary">
                    AdMyBrand
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-md">
                Transform your advertising with AI-powered creativity. AdMyBrand helps businesses 
                create, optimize, and scale their advertising campaigns across all platforms.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                ))}
              </div>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`w-10 h-10 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover-lift`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Links sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <AnimatedContainer 
                  key={category} 
                  animation="fadeInUp" 
                  delay={0.1 * (categoryIndex + 1)}
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-4">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link 
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter section */}
        <AnimatedContainer animation="fadeInUp" delay={0.6}>
          <GlassmorphicCard className="p-8 mb-12" variant="gradient" glowEffect>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text-primary mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get the latest updates on new features, industry insights, and advertising tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
        
        {/* Bottom section */}
        <AnimatedContainer animation="fadeInUp" delay={0.8}>
          <GlassmorphicCard className="p-6" variant="frosted">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span>&copy; {currentYear} AdMyBrand. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in San Francisco
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-wrap gap-4">
                  {footerLinks.legal.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Back to top button */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 group"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </footer>
  );
}