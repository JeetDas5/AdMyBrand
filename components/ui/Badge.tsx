import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  animate?: boolean;
  glow?: boolean;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  animate = false,
  glow = false
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-full border transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',
    primary: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    secondary: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
    success: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
    error: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const animationClasses = animate ? 'animate-pulse' : '';
  const glowClasses = glow ? 'shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40' : '';

  return (
    <span className={cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      animationClasses,
      glowClasses,
      className
    )}>
      {icon && (
        <span className="inline-block">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

// Notification badge for counters
interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'red' | 'blue' | 'green' | 'yellow';
}

export function NotificationBadge({ 
  count, 
  max = 99, 
  className = '',
  size = 'md',
  color = 'red'
}: NotificationBadgeProps) {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  const sizeClasses = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-xs',
    lg: 'w-6 h-6 text-sm'
  };

  const colorClasses = {
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-black'
  };

  if (count === 0) return null;

  return (
    <span className={cn(
      'absolute -top-1 -right-1 flex items-center justify-center rounded-full font-bold animate-bounce-in',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      {displayCount}
    </span>
  );
}

// Status badge for different states
interface StatusBadgeProps {
  status: 'online' | 'offline' | 'busy' | 'away' | 'active' | 'inactive';
  showText?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ 
  status, 
  showText = false, 
  className = '',
  size = 'md'
}: StatusBadgeProps) {
  const statusConfig = {
    online: { color: 'bg-green-500', text: 'Online', textColor: 'text-green-700 dark:text-green-300' },
    offline: { color: 'bg-gray-400', text: 'Offline', textColor: 'text-gray-700 dark:text-gray-300' },
    busy: { color: 'bg-red-500', text: 'Busy', textColor: 'text-red-700 dark:text-red-300' },
    away: { color: 'bg-yellow-500', text: 'Away', textColor: 'text-yellow-700 dark:text-yellow-300' },
    active: { color: 'bg-blue-500', text: 'Active', textColor: 'text-blue-700 dark:text-blue-300' },
    inactive: { color: 'bg-gray-400', text: 'Inactive', textColor: 'text-gray-700 dark:text-gray-300' }
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const config = statusConfig[status];

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <div className={cn(
        'rounded-full animate-pulse',
        config.color,
        sizeClasses[size]
      )} />
      {showText && (
        <span className={cn('text-sm font-medium', config.textColor)}>
          {config.text}
        </span>
      )}
    </div>
  );
}