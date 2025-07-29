"use client";

import React from "react";
import Button from "../ui/Button";
import GlassmorphicCard from "../ui/GlassmorphicCard";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Section from "../ui/Section";
import AnimatedContainer, { StaggerContainer } from "../ui/AnimatedContainer";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Shield, 
  Clock,
  Sparkles,
  Rocket
} from "lucide-react";

export default function CTA() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Free 14-day trial",
      highlight: true
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "No credit card required",
      highlight: false
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Cancel anytime",
      highlight: false
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      text: "Setup in under 5 minutes",
      highlight: true
    }
  ];

  return (
    <Section 
      id="contact" 
      background="gradient" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer animation="scaleIn" duration={0.8}>
          <GlassmorphicCard
            className="max-w-6xl mx-auto p-8 md:p-12 hover-lift"
            variant="gradient"
            blur="xl"
            glowEffect
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CTA content */}
              <div>
                <AnimatedContainer animation="fadeInLeft" delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Limited Time Offer</span>
                  </div>
                </AnimatedContainer>

                <AnimatedContainer animation="fadeInLeft" delay={0.4}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
                    Ready to Transform Your Advertising?
                  </h2>
                </AnimatedContainer>

                <AnimatedContainer animation="fadeInLeft" delay={0.6}>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Join thousands of businesses already using AdMyBrand to create,
                    optimize, and scale their advertising campaigns with AI.
                  </p>
                </AnimatedContainer>

                {/* Benefits list with stagger animation */}
                <StaggerContainer staggerDelay={0.1} animation="fadeInLeft" className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                          benefit.highlight ? 'bg-blue-500/10 border border-blue-500/20' : ''
                        }`}
                      >
                        <div className={`text-${benefit.highlight ? 'blue' : 'green'}-500`}>
                          {benefit.icon}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </StaggerContainer>

                <AnimatedContainer animation="fadeInLeft" delay={1.0}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="gradient" 
                      size="xl"
                      icon={<ArrowRight className="w-5 h-5" />}
                      iconPosition="right"
                      className="group"
                    >
                      Get Started Free
                    </Button>
                    <Button
                      variant="outline"
                      size="xl"
                      icon={<Calendar className="w-5 h-5" />}
                      className="border-white/30 text-gray-700 dark:text-gray-300 hover:bg-white/10"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                </AnimatedContainer>

                {/* Trust indicators */}
                <AnimatedContainer animation="fadeInLeft" delay={1.2}>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>10,000+ active users</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>4.9/5 rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>99.9% uptime</span>
                      </div>
                    </div>
                  </div>
                </AnimatedContainer>
              </div>

              {/* Enhanced Form */}
              <AnimatedContainer animation="fadeInRight" delay={0.4}>
                <div className="relative">
                  {/* Form background with enhanced glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 dark:from-black/20 dark:to-black/5 rounded-2xl backdrop-blur-xl border border-white/20"></div>
                  
                  <div className="relative p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold gradient-text-primary mb-2">
                        Start Your Free Trial
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Get instant access to all premium features
                      </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <LabelInputContainer>
                          <Label htmlFor="firstname" className="text-gray-700 dark:text-gray-300">
                            First name
                          </Label>
                          <Input 
                            id="firstname" 
                            placeholder="John" 
                            type="text"
                            className="bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300"
                          />
                        </LabelInputContainer>
                        <LabelInputContainer>
                          <Label htmlFor="lastname" className="text-gray-700 dark:text-gray-300">
                            Last name
                          </Label>
                          <Input 
                            id="lastname" 
                            placeholder="Doe" 
                            type="text"
                            className="bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300"
                          />
                        </LabelInputContainer>
                      </div>

                      <LabelInputContainer>
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Work Email
                        </Label>
                        <Input
                          id="email"
                          placeholder="john@company.com"
                          type="email"
                          className="bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300"
                        />
                      </LabelInputContainer>

                      <LabelInputContainer>
                        <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">
                          Company Name
                        </Label>
                        <Input 
                          id="company" 
                          placeholder="Your Company" 
                          type="text"
                          className="bg-white/50 dark:bg-black/50 border-white/30 focus:border-blue-500/50 transition-all duration-300"
                        />
                      </LabelInputContainer>

                      <button
                        className="group/btn relative block h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        type="submit"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Start Free Trial
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </span>
                        <BottomGradient />
                      </button>

                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
