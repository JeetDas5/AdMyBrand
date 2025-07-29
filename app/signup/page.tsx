"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { useToast, toast } from '@/components/ui/Toast';
import { 
  Mail, 
  Lock, 
  User,
  Building,
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Shield,
  CheckCircle,
  Github,
  Chrome,
  Apple,
  Users,
  Target,
  BarChart3
} from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
}

export default function SignupPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const steps: Step[] = [
    { id: 'personal', title: 'Personal Info', description: 'Tell us about yourself' },
    { id: 'company', title: 'Company Details', description: 'Your business information' },
    { id: 'preferences', title: 'Preferences', description: 'Customize your experience' },
    { id: 'complete', title: 'Complete', description: 'You&apos;re all set!' }
  ];

  const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };

  const ProgressIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <motion.div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  index <= currentStep
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400"
                )}
                whileHover={{ scale: 1.05 }}
              >
                {index < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </motion.div>
              <div className="mt-2 text-center">
                <p className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  index <= currentStep
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-400"
                )}>
                  {step.title}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "h-0.5 w-12 transition-colors duration-300",
                index < currentStep
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              )} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (currentStep < steps.length - 1) {
      handleNext();
      return;
    }

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
      
    } catch {
      addToast(toast.error(
        'Signup failed',
        'Something went wrong. Please try again.',
        { duration: 5000 }
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    addToast(toast.info(
      `${provider} Signup`,
      'Redirecting to authentication...',
      { duration: 3000 }
    ));
  };

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
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
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
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
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
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>
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
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>
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
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>
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
                  name="companyName"
                  type="text"
                  placeholder="Your Company Inc."
                  className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>
            </LabelInputContainer>

            <div className="grid grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="companySize" className="text-gray-700 dark:text-gray-300">
                  Company Size
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <Users className="w-5 h-5" />
                  </div>
                  <select
                    id="companySize"
                    name="companySize"
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-black dark:text-white appearance-none"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300">
                  Industry
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <Target className="w-5 h-5" />
                  </div>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-black dark:text-white appearance-none"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="role" className="text-gray-700 dark:text-gray-300">
                Your Role
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <User className="w-5 h-5" />
                </div>
                <select
                  id="role"
                  name="role"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-black dark:text-white appearance-none"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="marketing-director">Marketing Director</option>
                  <option value="marketing-manager">Marketing Manager</option>
                  <option value="digital-marketer">Digital Marketer</option>
                  <option value="agency-owner">Agency Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </LabelInputContainer>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <LabelInputContainer>
              <Label htmlFor="monthlyAdSpend" className="text-gray-700 dark:text-gray-300">
                Monthly Ad Spend
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <select
                  id="monthlyAdSpend"
                  name="monthlyAdSpend"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-black dark:text-white appearance-none"
                  required
                >
                  <option value="">Select range</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000+">$25,000+</option>
                </select>
              </div>
            </LabelInputContainer>

            <div className="space-y-4">
              <Label className="text-gray-700 dark:text-gray-300">
                Advertising Platforms (select all that apply)
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'google', label: 'Google Ads', icon: <Chrome className="w-4 h-4" /> },
                  { value: 'facebook', label: 'Facebook', icon: <Users className="w-4 h-4" /> },
                  { value: 'instagram', label: 'Instagram', icon: <Target className="w-4 h-4" /> },
                  { value: 'linkedin', label: 'LinkedIn', icon: <Building className="w-4 h-4" /> },
                ].map((platform) => (
                  <label key={platform.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="platforms"
                      value={platform.value}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex items-center gap-2">
                      {platform.icon}
                      <span className="text-sm text-gray-700 dark:text-gray-300">{platform.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-gray-700 dark:text-gray-300">
                Primary Goals (select all that apply)
              </Label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: 'increase-sales', label: 'Increase Sales' },
                  { value: 'brand-awareness', label: 'Brand Awareness' },
                  { value: 'lead-generation', label: 'Lead Generation' },
                  { value: 'reduce-costs', label: 'Reduce Ad Costs' },
                ].map((goal) => (
                  <label key={goal.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="goals"
                      value={goal.value}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Almost Done!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              Review your information and accept our terms to complete your registration.
            </p>

            <div className="space-y-4 text-left">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                  required
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
                  name="acceptMarketing"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  I'd like to receive marketing emails about AdMyBrand updates and tips
                </span>
              </label>
            </div>
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
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-2xl">
        {/* Header */}
        <AnimatedContainer animation="fadeInDown" className="text-center mb-8">
          <Link href="/" className="inline-block mb-6 group">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
        <AnimatedContainer animation="fadeInUp" delay={0.1}>
          <ProgressIndicator />
        </AnimatedContainer>

        {/* Signup Form */}
        <AnimatedContainer animation="scaleIn" delay={0.2}>
          <div className="max-w-2xl w-full mx-auto rounded-2xl p-8 shadow-input bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={cn(
                    "group/btn relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                    currentStep === 0
                      ? "invisible"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group/btn relative flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 dark:to-zinc-900 font-semibold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : currentStep < steps.length - 1 ? (
                    <>
                      Next Step
                      <ArrowRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Create Account
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                  <BottomGradient />
                </button>
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
                    <button
                      type="button"
                      onClick={() => handleSocialSignup('Google')}
                      className="group/social relative p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      <Chrome className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400 transition-colors" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialSignup('GitHub')}
                      className="group/social relative p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/social:text-gray-900 dark:group-hover/social:text-white transition-colors" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialSignup('Apple')}
                      className="group/social relative p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      <Apple className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/social:text-gray-900 dark:group-hover/social:text-white transition-colors" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
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
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
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
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}