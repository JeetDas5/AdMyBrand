"use client";

import React from "react";
import Button from "../ui/Button";
import GlassmorphicCard from "../ui/GlassmorphicCard";
import { motion } from "motion/react";
import { AuroraBackground } from "../ui/aurora-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white/70 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                  <TextGenerateEffect words="Transform Your Advertising with AI"/>
                </h1>
                <p className="text-xl text-foreground/80 mb-8 animate-fade-in animation-delay-200">
                  AdMyBrand uses cutting-edge AI to create, optimize, and manage
                  your advertising campaigns across all platforms, delivering
                  better results with less effort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
                  <Button variant="outline" size="lg" className="text-white/80 cursor-pointer hover:text-white">
                    Get Started Free
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 animate-fade-in animation-delay-600">
                  <GlassmorphicCard className="px-4 py-6 text-center">
                    <p className="text-3xl font-bold text-primary">93%</p>
                    <p className="text-sm text-foreground/70">
                      Conversion Boost
                    </p>
                  </GlassmorphicCard>
                  <GlassmorphicCard className="px-4 py-6 text-center">
                    <p className="text-3xl font-bold text-primary">2.5x</p>
                    <p className="text-sm text-foreground/70">ROI Increase</p>
                  </GlassmorphicCard>
                  <GlassmorphicCard className="px-4 py-6 text-center">
                    <p className="text-3xl font-bold text-primary">10k+</p>
                    <p className="text-sm text-foreground/70">Happy Users</p>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in animation-delay-300">
                <GlassmorphicCard className="w-full max-w-lg mx-auto overflow-hidden p-6 relative">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10"></div>
                    <div className="p-6 relative">
                      <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="ml-2 text-xs text-gray-500">
                            AdMyBrand Dashboard
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-24 bg-primary/20 rounded-md"></div>
                            <div className="h-24 bg-blue-400/20 rounded-md"></div>
                          </div>
                          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                          <div className="flex gap-2">
                            <div className="h-10 bg-primary rounded-md w-1/3"></div>
                            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}
