"use client";

import React from "react";
import Button from "../ui/Button";
import GlassmorphicCard from "../ui/GlassmorphicCard";
import { motion } from "motion/react";
import { AuroraBackground } from "../ui/aurora-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import AnimatedContainer, { StaggerContainer } from "../ui/AnimatedContainer";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "93%", label: "Conversion Boost", icon: "📈" },
    { value: "2.5x", label: "ROI Increase", icon: "💰" },
    { value: "10k+", label: "Happy Users", icon: "👥" },
  ];

  return (
    <AuroraBackground>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero content */}
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <AnimatedContainer animation="fadeInUp" delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>AI-Powered Advertising Platform</span>
                  </div>
                </AnimatedContainer>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white/90 to-blue-400 bg-clip-text text-transparent">
                  <TextGenerateEffect words="Transform Your Advertising with AI" duration={2} />
                </h1>

                <AnimatedContainer animation="fadeInUp" delay={0.6}>
                  <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  ADmyBRAND is the tech-age solution for omnichannel advertising. It is analytics-driven ad-exchange for advertisement on outdoor media, influencer, mobile, radio, TV and newspaper.
                  </p>
                </AnimatedContainer>

                <AnimatedContainer animation="fadeInUp" delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={<ArrowRight className="w-5 h-5" />}
                      iconPosition="right"
                      className="group"
                    >
                      Get Started Free
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      icon={<Play className="w-5 h-5" />}
                      className="text-white/80 border-white/30 hover:bg-white/10"
                    >
                      Watch Demo
                    </Button>
                  </div>
                </AnimatedContainer>

                {/* Trust indicators */}
                <AnimatedContainer animation="fadeInUp" delay={1.0}>
                  <div className="flex items-center justify-center lg:justify-start gap-6 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>14-day free trial</span>
                    </div>
                  </div>
                </AnimatedContainer>

                {/* Stats */}
                <div className="mt-16">
                  <StaggerContainer staggerDelay={0.2} animation="bounceIn">
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, index) => (
                        <GlassmorphicCard
                          key={index}
                          className="px-4 py-6 text-center hover-lift"
                          variant="frosted"
                          glowEffect
                        >
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <p className="text-3xl font-bold gradient-text-primary mb-1">
                            {stat.value}
                          </p>
                          <p className="text-sm text-white/70">
                            {stat.label}
                          </p>
                        </GlassmorphicCard>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </div>

              {/* Hero image */}
              <AnimatedContainer animation="fadeInRight" delay={0.4}>
                <div className="relative lg:h-[600px] flex items-center justify-center">
                  <GlassmorphicCard
                    className="w-full max-w-lg mx-auto overflow-hidden p-6 relative hover-lift animate-float"
                    variant="gradient"
                    glowEffect
                  >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                      <div className="p-6 relative">
                        <div className="w-full h-full bg-white/95 dark:bg-gray-800/95 rounded-lg p-4 backdrop-blur-sm">
                          {/* Browser chrome */}
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-100"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-200"></div>
                            <div className="ml-2 text-xs text-gray-500 font-medium">
                              AdMyBrand Dashboard
                            </div>
                          </div>

                          {/* Dashboard content */}
                          <div className="space-y-3">
                            <div className="h-8 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-md w-3/4 animate-pulse"></div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg p-3 animate-pulse animation-delay-300">
                                <div className="w-full h-2 bg-blue-300 dark:bg-blue-600 rounded mb-2"></div>
                                <div className="w-2/3 h-2 bg-blue-300 dark:bg-blue-600 rounded"></div>
                              </div>
                              <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg p-3 animate-pulse animation-delay-400">
                                <div className="w-full h-2 bg-purple-300 dark:bg-purple-600 rounded mb-2"></div>
                                <div className="w-2/3 h-2 bg-purple-300 dark:bg-purple-600 rounded"></div>
                              </div>
                            </div>
                            <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg animate-pulse animation-delay-500"></div>
                            <div className="flex gap-2">
                              <div className="h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-1/3 animate-pulse animation-delay-600"></div>
                              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 animate-pulse animation-delay-700"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements with enhanced animations */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse-glow"></div>
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse-glow animation-delay-500"></div>

                    {/* Sparkle effects */}
                    <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-300"></div>
                    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-600"></div>
                  </GlassmorphicCard>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}
