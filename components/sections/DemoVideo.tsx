"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import Section, { SectionHeader } from '../ui/Section';
import AnimatedContainer, { StaggerContainer } from '../ui/AnimatedContainer';
import Button from '../ui/Button';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface DemoStep {
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
}

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes demo
  const videoRef = useRef<HTMLVideoElement>(null);

  const demoSteps: DemoStep[] = [
    {
      title: "AI Campaign Creation",
      description: "Watch how our AI creates compelling ad copy and visuals in seconds",
      timestamp: "0:15",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Multi-Platform Setup",
      description: "See campaigns automatically optimized for Google, Facebook, and more",
      timestamp: "0:45",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Real-Time Analytics",
      description: "Explore our comprehensive dashboard with live performance metrics",
      timestamp: "1:30",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Automated Optimization",
      description: "Discover how AI continuously improves your campaign performance",
      timestamp: "2:15",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const features = [
    "Complete platform walkthrough",
    "Real campaign examples",
    "Live performance data",
    "Expert tips and best practices"
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Section 
      id="demo" 
      background="pattern" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer animation="fadeInUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            <span>Interactive Demo</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
            See AdMyBrand in Action
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch our 3-minute interactive demo to see how AdMyBrand transforms 
            your advertising workflow with AI-powered automation.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <AnimatedContainer animation="fadeInLeft" delay={0.2}>
              <GlassmorphicCard 
                className="relative overflow-hidden group hover-lift" 
                variant="gradient" 
                glowEffect
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                  {/* Placeholder for actual video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <p className="text-white/80 text-lg font-medium">
                        AdMyBrand Platform Demo
                      </p>
                      <p className="text-white/60 text-sm">
                        3:00 minutes • HD Quality
                      </p>
                    </div>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handlePlayPause}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          )}
                        </button>

                        <button
                          onClick={handleMute}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-white" />
                          )}
                        </button>

                        <span className="text-white/80 text-sm font-medium">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                          <RotateCcw className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                          <Maximize className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Stats */}
                <div className="p-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text-primary">50k+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text-primary">4.9/5</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text-primary">3:00</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </AnimatedContainer>
          </div>

          {/* Demo Steps & Features */}
          <div className="space-y-6">
            {/* Demo Timeline */}
            <AnimatedContainer animation="fadeInRight" delay={0.4}>
              <GlassmorphicCard className="p-6" variant="frosted">
                <h3 className="text-xl font-bold gradient-text-primary mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Demo Timeline
                </h3>
                
                <div className="space-y-4">
                  {demoSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors duration-200">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {step.title}
                          </h4>
                          <span className="text-xs text-blue-500 font-medium">
                            {step.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassmorphicCard>
            </AnimatedContainer>

            {/* What You'll Learn */}
            <AnimatedContainer animation="fadeInRight" delay={0.6}>
              <GlassmorphicCard className="p-6" variant="gradient">
                <h3 className="text-xl font-bold gradient-text-primary mb-6">
                  What You'll Learn
                </h3>
                
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Button 
                    variant="gradient" 
                    fullWidth 
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </GlassmorphicCard>
            </AnimatedContainer>

            {/* Quick Stats */}
            <AnimatedContainer animation="fadeInRight" delay={0.8}>
              <div className="grid grid-cols-2 gap-4">
                <GlassmorphicCard className="p-4 text-center" variant="gradient">
                  <div className="text-lg font-bold gradient-text-primary">15 min</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Setup Time</div>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-4 text-center" variant="gradient">
                  <div className="text-lg font-bold gradient-text-primary">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">AI Monitoring</div>
                </GlassmorphicCard>
              </div>
            </AnimatedContainer>
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedContainer animation="fadeInUp" delay={1.0} className="mt-16 text-center">
          <GlassmorphicCard className="max-w-2xl mx-auto p-8" variant="frosted" glowEffect>
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">
              Ready to Transform Your Advertising?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of businesses already using AdMyBrand to optimize their campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                icon={<Play className="w-5 h-5" />}
              >
                Watch Full Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 dark:border-gray-600"
              >
                Schedule Live Demo
              </Button>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </Section>
  );
}