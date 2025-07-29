"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { useToast, toast } from '@/components/ui/Toast';
import {
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  CheckCircle,
  Github,
  Chrome,
  Apple
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      addToast(toast.success(
        'Welcome back!',
        'You have been successfully logged in.',
        { duration: 4000 }
      ));

      // Redirect to dashboard
      setTimeout(() => {
        router.push('/');
      }, 1000);

    } catch {
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
          <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-input bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    className="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
              </LabelInputContainer>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
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

              <button
                className="group/btn relative block h-12 w-full rounded-xl bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 dark:to-zinc-900 font-semibold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                <div className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </div>
                <BottomGradient />
              </button>
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
                className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Chrome className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Apple className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </AnimatedContainer>

        {/* Sign Up Link */}
        <AnimatedContainer animation="fadeInUp" delay={0.4} className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300">
            Don&apos;t have an account?{' '}
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
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
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
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}