import React, { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: 'light' | 'medium' | 'heavy' | 'ultra';
  border?: boolean;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  animate?: boolean;
  variant?: 'default' | 'gradient' | 'frosted';
}

export default function GlassmorphicCard({
  children,
  className = '',
  blur = 'md',
  opacity = 'medium',
  border = true,
  hoverEffect = true,
  glowEffect = false,
  animate = true,
  variant = 'default',
}: GlassmorphicCardProps) {
  // Define blur values
  const blurValues = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  // Define opacity values based on variant
  const opacityValues = {
    default: {
      light: 'bg-white/10 dark:bg-black/10',
      medium: 'bg-white/20 dark:bg-black/20',
      heavy: 'bg-white/30 dark:bg-black/30',
      ultra: 'bg-white/40 dark:bg-black/40',
    },
    gradient: {
      light: 'bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5',
      medium: 'bg-gradient-to-br from-white/20 to-white/10 dark:from-black/20 dark:to-black/10',
      heavy: 'bg-gradient-to-br from-white/30 to-white/15 dark:from-black/30 dark:to-black/15',
      ultra: 'bg-gradient-to-br from-white/40 to-white/20 dark:from-black/40 dark:to-black/20',
    },
    frosted: {
      light: 'bg-gradient-to-br from-blue-50/20 to-purple-50/10 dark:from-blue-950/20 dark:to-purple-950/10',
      medium: 'bg-gradient-to-br from-blue-50/30 to-purple-50/20 dark:from-blue-950/30 dark:to-purple-950/20',
      heavy: 'bg-gradient-to-br from-blue-50/40 to-purple-50/30 dark:from-blue-950/40 dark:to-purple-950/30',
      ultra: 'bg-gradient-to-br from-blue-50/50 to-purple-50/40 dark:from-blue-950/50 dark:to-purple-950/40',
    },
  };

  // Define border styles
  const borderStyle = border 
    ? variant === 'frosted' 
      ? 'border border-blue-200/30 dark:border-blue-800/30' 
      : 'border border-white/20 dark:border-white/10'
    : '';

  // Define hover effects
  const hoverStyle = hoverEffect 
    ? `
      transition-all duration-500 ease-out
      hover:shadow-2xl 
      hover:shadow-blue-500/10
      hover:scale-[1.02] 
      hover:bg-white/40 
      dark:hover:bg-black/40
      hover:border-white/30 
      dark:hover:border-white/20
      hover:-translate-y-1
    ` 
    : animate 
    ? 'transition-all duration-300 ease-out'
    : '';

  // Define glow effect
  const glowStyle = glowEffect 
    ? 'shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30' 
    : 'shadow-lg shadow-black/5 dark:shadow-black/20';

  // Define animation classes
  const animationClasses = animate 
    ? 'transform-gpu will-change-transform' 
    : '';

  return (
    <div 
      className={`
        rounded-2xl 
        relative
        overflow-hidden
        ${blurValues[blur]} 
        ${opacityValues[variant][opacity]} 
        ${borderStyle} 
        ${hoverStyle} 
        ${glowStyle}
        ${animationClasses}
        ${className}
      `}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated border gradient (only visible on hover) */}
      {hoverEffect && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-blue-400/10" />
        </div>
      )}
    </div>
  );
}