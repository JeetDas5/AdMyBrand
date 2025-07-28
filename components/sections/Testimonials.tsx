'use client'

import React, { useState, useEffect } from 'react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import Button from '../ui/Button';

// Testimonial card component
const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company,
  avatar,
  isActive
}: { 
  quote: string; 
  author: string; 
  role: string;
  company: string;
  avatar: string;
  isActive: boolean;
}) => {
  return (
    <GlassmorphicCard 
      className={`p-6 h-full ${isActive ? 'animate-scale-in' : 'opacity-0 absolute'}`}
      opacity="medium"
    >
      <div className="flex flex-col h-full">
        {/* Quote */}
        <div className="mb-6 text-foreground/80 italic relative">
          <svg className="absolute -top-4 -left-2 w-8 h-8 text-primary/20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="relative z-10">{quote}</p>
        </div>
        
        {/* Author info */}
        <div className="mt-auto flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-primary/10 flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={author} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold text-primary">{author.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-sm text-foreground/60">{role}, {company}</p>
          </div>
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default function Testimonials() {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Testimonial data
  const testimonials = [
    {
      quote: "AdMyBrand has completely transformed our advertising strategy. We've seen a 93% increase in conversion rates and our ROI has more than doubled in just three months.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechNova",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The AI-powered ad creation saves us countless hours every week. What used to take days now takes minutes, and the results are even better than what our team was producing manually.",
      author: "Michael Chen",
      role: "CEO",
      company: "GrowthLabs",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I was skeptical about AI for our luxury brand, but AdMyBrand understands our voice perfectly. The platform has helped us maintain our premium feel while scaling our campaigns globally.",
      author: "Emma Rodriguez",
      role: "Brand Manager",
      company: "Luxe Collective",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "The cross-platform optimization feature is a game-changer. We're now running cohesive campaigns across six different platforms, all managed from a single dashboard.",
      author: "David Park",
      role: "Digital Marketing Lead",
      company: "Horizon Media",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      quote: "As a small business owner, I never thought advanced AI advertising would be accessible to me. AdMyBrand has leveled the playing field and helped us compete with much larger companies.",
      author: "Sophia Martinez",
      role: "Founder",
      company: "Artisan Collective",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg"
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);
  
  // Navigation functions
  const goToPrevious = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const goToIndex = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
      
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-foreground/70">
            Thousands of businesses are already using AdMyBrand to transform their advertising strategies.
          </p>
        </div>
        
        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Carousel container */}
          <div className="relative h-[300px] sm:h-[250px] md:h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button 
              onClick={goToPrevious}
              className="bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-primary' : 'bg-foreground/20'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Logos */}
        <div className="mt-20 animate-fade-in animation-delay-500">
          <p className="text-center text-foreground/60 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos would go here - using placeholder divs for now */}
            <div className="h-8 w-24 bg-foreground/10 rounded-md"></div>
            <div className="h-8 w-32 bg-foreground/10 rounded-md"></div>
            <div className="h-8 w-28 bg-foreground/10 rounded-md"></div>
            <div className="h-8 w-20 bg-foreground/10 rounded-md"></div>
            <div className="h-8 w-36 bg-foreground/10 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}