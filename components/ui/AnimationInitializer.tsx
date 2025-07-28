'use client';

import { useEffect } from 'react';
import { initScrollAnimations, initSmoothScrolling } from '@/lib/utils/animations';

export default function AnimationInitializer() {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling with 80px offset (to account for fixed header)
    initSmoothScrolling(80);
    
    // Log initialization
    console.log('Animations initialized');
  }, []);
  
  // This component doesn't render anything
  return null;
}