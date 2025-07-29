import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  animate = true,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // Define variant styles with enhanced animations
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 
      text-white 
      hover:from-blue-700 hover:to-blue-800 
      active:from-blue-800 active:to-blue-900
      shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-blue-500/40
      border border-blue-500/20
    `,
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-200 
      text-gray-900 
      hover:from-gray-200 hover:to-gray-300 
      active:from-gray-300 active:to-gray-400
      shadow-lg shadow-gray-500/10
      hover:shadow-xl hover:shadow-gray-500/20
      border border-gray-300/50
      dark:from-gray-800 dark:to-gray-700
      dark:text-white
      dark:hover:from-gray-700 dark:hover:to-gray-600
      dark:border-gray-600/50
    `,
    outline: `
      border-2 border-blue-500 
      text-blue-600 
      hover:bg-blue-50 hover:border-blue-600
      active:bg-blue-100 active:border-blue-700
      dark:text-blue-400 
      dark:border-blue-400
      dark:hover:bg-blue-950/50
      hover:shadow-lg hover:shadow-blue-500/20
    `,
    ghost: `
      text-blue-600 
      hover:bg-blue-50 hover:text-blue-700
      active:bg-blue-100 active:text-blue-800
      dark:text-blue-400 
      dark:hover:bg-blue-950/50
      hover:shadow-md
    `,
    gradient: `
      bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800
      text-white
      hover:from-blue-700 hover:via-purple-700 hover:to-blue-900
      shadow-lg shadow-purple-500/25
      hover:shadow-xl hover:shadow-purple-500/40
      border border-purple-500/20
      animate-gradient
    `,
  };

  // Define size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded-lg h-8',
    md: 'text-base px-4 py-2 rounded-lg h-10',
    lg: 'text-lg px-6 py-3 rounded-xl h-12',
    xl: 'text-xl px-8 py-4 rounded-xl h-14',
  };

  // Define width style
  const widthStyle = fullWidth ? 'w-full' : '';

  // Define loading state
  const loadingState = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  // Define disabled state
  const disabledState = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Define animation classes
  const animationClasses = animate ? 'hover-lift hover-glow transition-all duration-300 ease-out transform' : 'transition-all duration-200';

  return (
    <button
      className={`
        font-semibold
        ${animationClasses}
        inline-flex
        items-center
        justify-center
        gap-2
        relative
        overflow-hidden
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/50
        focus:ring-offset-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyle}
        ${loadingState}
        ${disabledState}
        ${className}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {/* Ripple effect overlay */}
      <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-inherit"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="inline-block transition-transform duration-200 group-hover:scale-110">{icon}</span>
        )}
        
        <span className="transition-all duration-200">{children}</span>
        
        {icon && iconPosition === 'right' && (
          <span className="inline-block transition-transform duration-200 group-hover:scale-110">{icon}</span>
        )}
      </div>
    </button>
  );
}