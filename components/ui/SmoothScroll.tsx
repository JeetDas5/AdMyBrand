"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

// Scroll to top button component
export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 group"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 mx-auto group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}