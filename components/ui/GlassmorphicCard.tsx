import React, { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
  opacity?: 'light' | 'medium' | 'heavy';
  border?: boolean;
  hoverEffect?: boolean;
}

export default function GlassmorphicCard({
  children,
  className = '',
  blur = 'md',
  opacity = 'medium',
  border = true,
  hoverEffect = false,
}: GlassmorphicCardProps) {
  // Define blur values
  const blurValues = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  // Define opacity values
  const opacityValues = {
    light: 'bg-white/10 dark:bg-black/10',
    medium: 'bg-white/20 dark:bg-black/20',
    heavy: 'bg-white/30 dark:bg-black/30',
  };

  // Define border
  const borderStyle = border ? 'border border-white/20 dark:border-white/10' : '';

  // Define hover effect
  const hoverStyle = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white/30 dark:hover:bg-black/30' 
    : '';

  return (
    <div 
      className={`
        rounded-xl 
        ${blurValues[blur]} 
        ${opacityValues[opacity]} 
        ${borderStyle} 
        ${hoverStyle} 
        shadow-sm 
        ${className}
      `}
    >
      {children}
    </div>
  );
}