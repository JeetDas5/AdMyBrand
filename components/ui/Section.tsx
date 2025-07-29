import React, { ReactNode } from 'react';
import AnimatedContainer from './AnimatedContainer';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'gradient' | 'pattern' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
  animate?: boolean;
  centerContent?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  background = 'default',
  padding = 'lg',
  maxWidth = '6xl',
  animate = true,
  centerContent = false,
}: SectionProps) {
  // Define background styles
  const backgroundStyles = {
    default: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
    pattern: `
      bg-white dark:bg-gray-900
      bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)]
      bg-[length:20px_20px]
    `,
    glass: 'backdrop-blur-sm bg-white/30 dark:bg-black/30',
  };

  // Define padding styles
  const paddingStyles = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24',
  };

  // Define max width styles
  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-full',
  };

  const content = (
    <section
      id={id}
      className={`
        relative
        ${backgroundStyles[background]}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      <div className={`
        container mx-auto px-4 sm:px-6 lg:px-8
        ${maxWidthStyles[maxWidth]}
        ${centerContent ? 'text-center' : ''}
      `}>
        {children}
      </div>
    </section>
  );

  return animate ? (
    <AnimatedContainer animation="fadeInUp" duration={0.8}>
      {content}
    </AnimatedContainer>
  ) : content;
}

// Section Header component for consistent section titles
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  centered?: boolean;
  animate?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  centered = true,
  animate = true,
}: SectionHeaderProps) {
  const content = (
    <div className={`
      ${centered ? 'text-center' : ''}
      ${className}
    `}>
      {subtitle && (
        <p className={`
          text-sm font-semibold text-blue-600 dark:text-blue-400 
          uppercase tracking-wider mb-2
          ${subtitleClassName}
        `}>
          {subtitle}
        </p>
      )}
      
      <h2 className={`
        text-3xl sm:text-4xl lg:text-5xl font-bold 
        gradient-text-primary mb-4
        ${titleClassName}
      `}>
        {title}
      </h2>
      
      {description && (
        <p className={`
          text-lg text-gray-600 dark:text-gray-300 
          max-w-3xl ${centered ? 'mx-auto' : ''}
          ${descriptionClassName}
        `}>
          {description}
        </p>
      )}
    </div>
  );

  return animate ? (
    <AnimatedContainer animation="fadeInUp" duration={0.8}>
      {content}
    </AnimatedContainer>
  ) : content;
}