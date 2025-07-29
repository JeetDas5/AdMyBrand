"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { useToast, toast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Github,
  Chrome,
  Apple
} from 'lucide-react';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    // Store current value before type change
    const currentValue = passwordRef.current?.value || '';
    setShowPassword(!showPassword);
    console.log('pass');
    
    // Restore value after React re-renders the input
    setTimeout(() => {
      if (passwordRef.current) {
        passwordRef.current.value = currentValue;
      }
    }, 0);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  
  // Use refs for form inputs to avoid controlled component issues
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock successful login
      addToast(toast.success(
        'Welcome back!',
        'You have been successfully logged in.',
        { duration: 4000 }
      ));

      // Redirect to dashboard
      setTimeout(() => {
        router.push('/');
      }, 1000);

    } catch (error) {
      addToast(toast.error(
        'Login failed',
        'Please check your credentials and try again.',
        { duration: 5000 }
      ));
    } finally {
      setIsLoading(false);
    }
  };



  const handleSocialLogin = (provider: string) => {
    addToast(toast.info(
      `${provider} Login`,
      'Redirecting to authentication...',
      { duration: 3000 }
    ));
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="w-full max-w-md">
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
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Sign in to your account to continue
          </p>
        </AnimatedContainer>

        {/* Login Form */}
        <AnimatedContainer animation="scaleIn" delay={0.2}>
          <GlassmorphicCard className="p-8" variant="gradient" glowEffect>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Remember me
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                fullWidth
                isLoading={isLoading}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              <span className="px-4 text-sm text-gray-500 dark:text-gray-400">Or continue with</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Chrome className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-black/70 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Apple className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </button>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>

        {/* Sign Up Link */}
        <AnimatedContainer animation="fadeInUp" delay={0.4} className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Sign up for free
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

            <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Two-factor authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>GDPR compliant</span>
              </div>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </div>
  );
}