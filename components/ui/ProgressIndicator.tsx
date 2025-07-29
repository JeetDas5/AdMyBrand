"use client";

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'minimal' | 'detailed';
  className?: string;
  onStepClick?: (stepIndex: number) => void;
}

export default function ProgressIndicator({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  className = '',
  onStepClick
}: ProgressIndicatorProps) {
  const isStepCompleted = (stepIndex: number) => stepIndex < currentStep;
  const isStepActive = (stepIndex: number) => stepIndex === currentStep;
  const isStepClickable = (stepIndex: number) => onStepClick && stepIndex <= currentStep;

  if (orientation === 'vertical') {
    return (
      <div className={`space-y-4 ${className}`}>
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-4">
            {/* Step Indicator */}
            <div className="flex flex-col items-center">
              <motion.button
                onClick={() => isStepClickable(index) && onStepClick?.(index)}
                disabled={!isStepClickable(index)}
                className={`
                  relative w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 border-2
                  ${isStepCompleted(index)
                    ? 'bg-green-500 border-green-500 text-white'
                    : isStepActive(index)
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400'
                  }
                  ${isStepClickable(index) ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
                `}
                whileHover={isStepClickable(index) ? { scale: 1.1 } : {}}
                whileTap={isStepClickable(index) ? { scale: 0.95 } : {}}
              >
                {isStepCompleted(index) ? (
                  <CheckCircle className="w-5 h-5" />
                ) : step.icon ? (
                  step.icon
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </motion.button>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 mt-2 bg-gray-300 dark:bg-gray-600" />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 pb-8">
              <h3 className={`
                font-semibold transition-colors duration-300
                ${isStepActive(index)
                  ? 'text-blue-600 dark:text-blue-400'
                  : isStepCompleted(index)
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400'
                }
              `}>
                {step.title}
              </h3>
              {variant === 'detailed' && step.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal orientation
  return (
    <div className={`flex items-center ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step */}
          <div className="flex flex-col items-center">
            <motion.button
              onClick={() => isStepClickable(index) && onStepClick?.(index)}
              disabled={!isStepClickable(index)}
              className={`
                relative w-10 h-10 rounded-full flex items-center justify-center
                transition-all duration-300 border-2 mb-2
                ${isStepCompleted(index)
                  ? 'bg-green-500 border-green-500 text-white'
                  : isStepActive(index)
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400'
                }
                ${isStepClickable(index) ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
              `}
              whileHover={isStepClickable(index) ? { scale: 1.1 } : {}}
              whileTap={isStepClickable(index) ? { scale: 0.95 } : {}}
            >
              {isStepCompleted(index) ? (
                <CheckCircle className="w-5 h-5" />
              ) : step.icon ? (
                step.icon
              ) : (
                <span className="text-sm font-semibold">{index + 1}</span>
              )}
            </motion.button>

            {/* Step Label */}
            {variant !== 'minimal' && (
              <div className="text-center max-w-24">
                <p className={`
                  text-xs font-medium transition-colors duration-300
                  ${isStepActive(index)
                    ? 'text-blue-600 dark:text-blue-400'
                    : isStepCompleted(index)
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400'
                  }
                `}>
                  {step.title}
                </p>
                {variant === 'detailed' && step.description && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {step.description}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Connector */}
          {index < steps.length - 1 && (
            <div className="flex-1 flex items-center px-4">
              <div className={`
                h-0.5 flex-1 transition-colors duration-300
                ${isStepCompleted(index + 1)
                  ? 'bg-green-500'
                  : isStepActive(index + 1)
                  ? 'bg-blue-500'
                  : 'bg-gray-300 dark:bg-gray-600'
                }
              `} />
              {variant === 'detailed' && (
                <ArrowRight className={`
                  w-4 h-4 mx-2 transition-colors duration-300
                  ${isStepCompleted(index + 1)
                    ? 'text-green-500'
                    : isStepActive(index + 1)
                    ? 'text-blue-500'
                    : 'text-gray-300 dark:text-gray-600'
                  }
                `} />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Preset configurations for common use cases
export const progressPresets = {
  onboarding: [
    { id: 'welcome', title: 'Welcome', description: 'Get started' },
    { id: 'setup', title: 'Setup', description: 'Configure your account' },
    { id: 'integration', title: 'Integration', description: 'Connect your platforms' },
    { id: 'complete', title: 'Complete', description: 'You\'re all set!' }
  ],
  
  campaign: [
    { id: 'create', title: 'Create', description: 'Campaign details' },
    { id: 'target', title: 'Target', description: 'Audience selection' },
    { id: 'creative', title: 'Creative', description: 'Ad content' },
    { id: 'review', title: 'Review', description: 'Final check' },
    { id: 'launch', title: 'Launch', description: 'Go live' }
  ],
  
  checkout: [
    { id: 'cart', title: 'Cart', description: 'Review items' },
    { id: 'shipping', title: 'Shipping', description: 'Delivery details' },
    { id: 'payment', title: 'Payment', description: 'Billing info' },
    { id: 'confirmation', title: 'Confirm', description: 'Order complete' }
  ]
};