/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import ProgressIndicator from '@/components/ui/ProgressIndicator';
import { useToast, toast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Github,
  Chrome,
  Apple,
  Users,
  Target,
  BarChart3
} from 'lucide-react';

interface SignupForm {
  // Step 1: Basic Info
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  // Step 2: Company Info
  companyName: string;
  companySize: string;
  industry: string;
  role: string;

  // Step 3: Preferences
  monthlyAdSpend: string;
  platforms: string[];
  goals: string[];

  // Terms
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

export default function SignupPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    // Store current value before type change
    const currentValue = passwordRef.current?.value || '';
    setShowPassword(!showPassword);

    // Restore value after React re-renders the input
    setTimeout(() => {
      if (passwordRef.current) {
        passwordRef.current.value = currentValue;
      }
    }, 0);
  };

  const toggleConfirmPasswordVisibility = () => {
    // Store current value before type change
    const currentValue = confirmPasswordRef.current?.value || '';
    setShowConfirmPassword(!showConfirmPassword);

    // Restore value after React re-renders the input
    setTimeout(() => {
      if (confirmPasswordRef.current) {
        confirmPasswordRef.current.value = currentValue;
      }
    }, 0);
  };
  const [isLoading, setIsLoading] = useState(false);

  // Use refs for form inputs to avoid controlled component issues
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);

  // State for non-text inputs
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [monthlyAdSpend, setMonthlyAdSpend] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);

  const [errors, setErrors] = useState<Partial<SignupForm>>({});

  const steps = [
    { id: 'personal', title: 'Personal', description: 'Basic information' },
    { id: 'company', title: 'Company', description: 'Business details' },
    { id: 'preferences', title: 'Preferences', description: 'Your goals' },
    { id: 'complete', title: 'Complete', description: 'All set!' }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<SignupForm> = {};

    if (step === 0) {
      const firstName = firstNameRef.current?.value || '';
      const lastName = lastNameRef.current?.value || '';
      const email = emailRef.current?.value || '';
      const password = passwordRef.current?.value || '';
      const confirmPassword = confirmPasswordRef.current?.value || '';

      if (!firstName) newErrors.firstName = 'First name is required';
      if (!lastName) newErrors.lastName = 'Last name is required';
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (step === 1) {
      const companyName = companyNameRef.current?.value || '';

      if (!companyName) newErrors.companyName = 'Company name is required';
      if (!companySize) newErrors.companySize = 'Company size is required';
      if (!industry) newErrors.industry = 'Industry is required';
      if (!role) newErrors.role = 'Role is required';
    }

    if (step === 2) {
      if (!monthlyAdSpend) newErrors.monthlyAdSpend = 'Monthly ad spend is required';
      if (platforms.length === 0) newErrors.platforms = 'Select at least one platform' as any;
      if (goals.length === 0) newErrors.goals = 'Select at least one goal' as any;
    }

    if (step === 3) {
      if (!acceptTerms) newErrors.acceptTerms = 'You must accept the terms' as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      addToast(toast.success(
        'Account created successfully!',
        'Welcome to AdMyBrand. Check your email to verify your account.',
        { duration: 5000 }
      ));

      // Redirect to dashboard or login
      setTimeout(() => {
        router.push('/login');
      }, 1000);

    } catch (error) {
      addToast(toast.error(
        'Signup failed',
        'Something went wrong. Please try again.',
        { duration: 5000 }
      ));
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleArrayToggle = (field: 'platforms' | 'goals', value: string) => {
    if (field === 'platforms') {
      const newArray = platforms.includes(value)
        ? platforms.filter(item => item !== value)
        : [...platforms, value];
      setPlatforms(newArray);
    } else if (field === 'goals') {
      const newArray = goals.includes(value)
        ? goals.filter(item => item !== value)
        : [...goals, value];
      setGoals(newArray);
    }

    // Clear errors when user makes a selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={`flex w-full flex-col space-y-2 ${className || ''}`}>
        {children}
      </div>
    );
  };

  const SelectField = ({
    label,
    value,
    onChange,
    options,
    placeholder,
    icon,
    error
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder: string;
    icon: React.ReactNode;
    error?: string;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full pl-10 pr-4 py-3 rounded-xl 
            bg-white/50 dark:bg-black/50 
            border transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            appearance-none
            ${error
              ? 'border-red-300 dark:border-red-600'
              : 'border-gray-200 dark:border-gray-700 focus:border-blue-500/50'
            }
          `}
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );

  const CheckboxGroup = ({
    label,
    options,
    selectedValues,
    onChange,
    error
  }: {
    label: string;
    options: { value: string; label: string; icon?: React.ReactNode }[];
    selectedValues: string[];
    onChange: (value: string) => void;
    error?: string;
  }) => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-3">
        {options.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              p-3 rounded-xl border-2 transition-all duration-300 text-left
              ${selectedValues.includes(option.value)
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {option.icon}
              <span className="text-sm font-medium">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
                  First Name
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    id="firstName"
                    ref={firstNameRef}
                    type="text"
                    placeholder="John"
                    className={`pl-10 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.firstName ? 'border-red-300 dark:border-red-600' : ''
                      }`}
                    onChange={() => {
                      if (errors.firstName) {
                        setErrors(prev => ({ ...prev, firstName: undefined }));
                      }
                    }}
                  />
                </div>
                {errors.firstName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">
                  Last Name
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    id="lastName"
                    ref={lastNameRef}
                    type="text"
                    placeholder="Doe"
                    className={`pl-10 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.lastName ? 'border-red-300 dark:border-red-600' : ''
                      }`}
                    onChange={() => {
                      if (errors.lastName) {
                        setErrors(prev => ({ ...prev, lastName: undefined }));
                      }
                    }}
                  />
                </div>
                {errors.lastName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <Mail className="w-5 h-5" />
                </div>
                <Input
                  id="email"
                  ref={emailRef}
                  type="email"
                  placeholder="john@company.com"
                  className={`pl-10 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.email ? 'border-red-300 dark:border-red-600' : ''
                    }`}
                  onChange={() => {
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: undefined }));
                    }
                  }}
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 dark:text-red-400"
                >
                  {errors.email}
                </motion.p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                Password
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <Lock className="w-5 h-5" />
                </div>
                <Input
                  id="password"
                  ref={passwordRef}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  className={`pl-10 pr-12 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.password ? 'border-red-300 dark:border-red-600' : ''
                    }`}
                  onChange={() => {
                    if (errors.password) {
                      setErrors(prev => ({ ...prev, password: undefined }));
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 dark:text-red-400"
                >
                  {errors.password}
                </motion.p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                Confirm Password
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <Lock className="w-5 h-5" />
                </div>
                <Input
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className={`pl-10 pr-12 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.confirmPassword ? 'border-red-300 dark:border-red-600' : ''
                    }`}
                  onChange={() => {
                    if (errors.confirmPassword) {
                      setErrors(prev => ({ ...prev, confirmPassword: undefined }));
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 dark:text-red-400"
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </LabelInputContainer>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <LabelInputContainer>
              <Label htmlFor="companyName" className="text-gray-700 dark:text-gray-300">
                Company Name
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <Building className="w-5 h-5" />
                </div>
                <Input
                  id="companyName"
                  ref={companyNameRef}
                  type="text"
                  placeholder="Your Company Inc."
                  className={`pl-10 bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300 ${errors.companyName ? 'border-red-300 dark:border-red-600' : ''
                    }`}
                  onChange={() => {
                    if (errors.companyName) {
                      setErrors(prev => ({ ...prev, companyName: undefined }));
                    }
                  }}
                />
              </div>
              {errors.companyName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 dark:text-red-400"
                >
                  {errors.companyName}
                </motion.p>
              )}
            </LabelInputContainer>

            <div className="grid grid-cols-2 gap-4">
              <SelectField
                label="Company Size"
                value={companySize}
                onChange={(value) => {
                  setCompanySize(value);
                  if (errors.companySize) {
                    setErrors(prev => ({ ...prev, companySize: undefined }));
                  }
                }}
                placeholder="Select size"
                icon={<Users className="w-5 h-5" />}
                error={errors.companySize}
                options={[
                  { value: '1-10', label: '1-10 employees' },
                  { value: '11-50', label: '11-50 employees' },
                  { value: '51-200', label: '51-200 employees' },
                  { value: '201-1000', label: '201-1000 employees' },
                  { value: '1000+', label: '1000+ employees' }
                ]}
              />

              <SelectField
                label="Industry"
                value={industry}
                onChange={(value) => {
                  setIndustry(value);
                  if (errors.industry) {
                    setErrors(prev => ({ ...prev, industry: undefined }));
                  }
                }}
                placeholder="Select industry"
                icon={<Target className="w-5 h-5" />}
                error={errors.industry}
                options={[
                  { value: 'technology', label: 'Technology' },
                  { value: 'ecommerce', label: 'E-commerce' },
                  { value: 'healthcare', label: 'Healthcare' },
                  { value: 'finance', label: 'Finance' },
                  { value: 'education', label: 'Education' },
                  { value: 'other', label: 'Other' }
                ]}
              />
            </div>

            <SelectField
              label="Your Role"
              value={role}
              onChange={(value) => {
                setRole(value);
                if (errors.role) {
                  setErrors(prev => ({ ...prev, role: undefined }));
                }
              }}
              placeholder="Select your role"
              icon={<User className="w-5 h-5" />}
              error={errors.role}
              options={[
                { value: 'ceo', label: 'CEO/Founder' },
                { value: 'marketing-director', label: 'Marketing Director' },
                { value: 'marketing-manager', label: 'Marketing Manager' },
                { value: 'digital-marketer', label: 'Digital Marketer' },
                { value: 'agency-owner', label: 'Agency Owner' },
                { value: 'other', label: 'Other' }
              ]}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <SelectField
              label="Monthly Ad Spend"
              value={monthlyAdSpend}
              onChange={(value) => {
                setMonthlyAdSpend(value);
                if (errors.monthlyAdSpend) {
                  setErrors(prev => ({ ...prev, monthlyAdSpend: undefined }));
                }
              }}
              placeholder="Select range"
              icon={<BarChart3 className="w-5 h-5" />}
              error={errors.monthlyAdSpend}
              options={[
                { value: '0-1000', label: '$0 - $1,000' },
                { value: '1000-5000', label: '$1,000 - $5,000' },
                { value: '5000-10000', label: '$5,000 - $10,000' },
                { value: '10000-25000', label: '$10,000 - $25,000' },
                { value: '25000+', label: '$25,000+' }
              ]}
            />

            <CheckboxGroup
              label="Advertising Platforms (select all that apply)"
              options={[
                { value: 'google', label: 'Google Ads', icon: <Chrome className="w-4 h-4" /> },
                { value: 'facebook', label: 'Facebook', icon: <Users className="w-4 h-4" /> },
                { value: 'instagram', label: 'Instagram', icon: <Target className="w-4 h-4" /> },
                { value: 'linkedin', label: 'LinkedIn', icon: <Building className="w-4 h-4" /> },
                { value: 'tiktok', label: 'TikTok', icon: <Zap className="w-4 h-4" /> },
                { value: 'twitter', label: 'Twitter', icon: <BarChart3 className="w-4 h-4" /> }
              ]}
              selectedValues={platforms}
              onChange={(value) => handleArrayToggle('platforms', value)}
              error={typeof errors.platforms === 'string' ? errors.platforms : undefined}
            />

            <CheckboxGroup
              label="Primary Goals (select all that apply)"
              options={[
                { value: 'increase-sales', label: 'Increase Sales', icon: <BarChart3 className="w-4 h-4" /> },
                { value: 'brand-awareness', label: 'Brand Awareness', icon: <Target className="w-4 h-4" /> },
                { value: 'lead-generation', label: 'Lead Generation', icon: <Users className="w-4 h-4" /> },
                { value: 'reduce-costs', label: 'Reduce Ad Costs', icon: <Zap className="w-4 h-4" /> }
              ]}
              selectedValues={goals}
              onChange={(value) => handleArrayToggle('goals', value)}
              error={typeof errors.goals === 'string' ? errors.goals : undefined}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <h3 className="text-2xl font-bold gradient-text-primary">
              Almost Done!
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Review your information and accept our terms to complete your registration.
            </p>

            <div className="space-y-4 text-left">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => {
                    setAcceptTerms(e.target.checked);
                    if (errors.acceptTerms) {
                      setErrors(prev => ({ ...prev, acceptTerms: undefined }));
                    }
                  }}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptMarketing}
                  onChange={(e) => setAcceptMarketing(e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  I&apos;d like to receive marketing emails about AdMyBrand updates and tips
                </span>
              </label>
            </div>

            {errors.acceptTerms && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 dark:text-red-400"
              >
                {typeof errors.acceptTerms === 'string' ? errors.acceptTerms : ''}
              </motion.p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="w-full max-w-2xl">
        {/* Header */}
        <AnimatedContainer animation="fadeInDown" className="text-center mb-8">
          <Link href="/" className="inline-block mb-6 group">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold gradient-text-primary">
                AdMyBrand
              </span>
            </div>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Join thousands of businesses transforming their advertising
          </p>
        </AnimatedContainer>

        {/* Progress Indicator */}
        <AnimatedContainer animation="fadeInUp" delay={0.1} className="mb-8">
          <ProgressIndicator
            steps={steps}
            currentStep={currentStep}
            variant="detailed"
            className="max-w-md mx-auto"
          />
        </AnimatedContainer>

        {/* Signup Form */}
        <AnimatedContainer animation="scaleIn" delay={0.2}>
          <GlassmorphicCard className="p-8" variant="gradient" glowEffect>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                icon={<ArrowLeft className="w-5 h-5" />}
                className={currentStep === 0 ? 'invisible' : ''}
              >
                Previous
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button
                  variant="gradient"
                  onClick={handleNext}
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  variant="gradient"
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  icon={<CheckCircle className="w-5 h-5" />}
                  iconPosition="right"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              )}
            </div>

            {/* Social Signup - Only on first step */}
            {currentStep === 0 && (
              <>
                <div className="my-8 flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                  <span className="px-4 text-sm text-gray-500 dark:text-gray-400">Or sign up with</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                    <Chrome className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                    <Apple className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </button>
                </div>
              </>
            )}
          </GlassmorphicCard>
        </AnimatedContainer>

        {/* Login Link */}
        <AnimatedContainer animation="fadeInUp" delay={0.4} className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </AnimatedContainer>

        {/* Security Features */}
        <AnimatedContainer animation="fadeInUp" delay={0.6} className="mt-8">
          <GlassmorphicCard className="p-6" variant="frosted">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Your data is secure
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>SSL encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>No spam ever</span>
              </div>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </div>
  );
}