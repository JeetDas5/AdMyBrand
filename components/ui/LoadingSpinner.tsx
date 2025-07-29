import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  return (
    <div className={`inline-block ${className}`}>
      <svg
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

// Skeleton loader component
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

export function Skeleton({ 
  className = '', 
  variant = 'text',
  width,
  height,
  animation = true
}: SkeletonProps) {
  const baseClasses = `bg-gray-200 dark:bg-gray-700 ${animation ? 'animate-pulse' : ''}`;
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full'
  };

  const style = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1rem' : undefined)
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

// Loading overlay component
interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
}

export function LoadingOverlay({ 
  isLoading, 
  children, 
  className = '',
  spinnerSize = 'lg',
  message = 'Loading...'
}: LoadingOverlayProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-inherit">
          <div className="text-center">
            <LoadingSpinner size={spinnerSize} />
            {message && (
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}