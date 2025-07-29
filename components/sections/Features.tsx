import React from "react";
import GlassmorphicCard from "../ui/GlassmorphicCard";
import { HoverEffect } from "../ui/card-hover-effect";
import { WavyBackground } from "./../ui/wavy-background";
import Section, { SectionHeader } from "../ui/Section";
import { StaggerContainer } from "../ui/AnimatedContainer";
import { 
  Sparkles, 
  Monitor, 
  BarChart3, 
  Zap, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Enhanced Feature card component
const FeatureCard = ({
  icon,
  title,
  description,
  index,
  benefits,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  benefits?: string[];
}) => {
  return (
    <GlassmorphicCard
      className="p-8 h-full group hover-lift"
      variant="gradient"
      glowEffect
      hoverEffect
    >
      <div className="flex flex-col h-full">
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
              {icon}
            </div>
          </div>
          {/* Floating sparkle effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 gradient-text-primary group-hover:scale-105 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Benefits list */}
        {benefits && (
          <div className="space-y-2 mb-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer group/link">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default function Features() {
  // Enhanced feature data with benefits
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Ad Creation",
      description: "Generate high-converting ad copy, images, and videos tailored to your brand voice and target audience in seconds.",
      benefits: ["Smart copy generation", "Brand voice matching", "Multi-format support"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cross-Platform Optimization",
      description: "Automatically optimize your campaigns across Google, Facebook, Instagram, TikTok, and more with real-time performance tracking.",
      benefits: ["Multi-platform sync", "Real-time optimization", "Unified dashboard"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Gain deep insights into campaign performance with AI-driven analytics that identify trends and opportunities for improvement.",
      benefits: ["Predictive insights", "Custom reports", "ROI tracking"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated A/B Testing",
      description: "Continuously test and improve your ads with automated A/B testing that learns and adapts to find the winning combinations.",
      benefits: ["Smart testing", "Auto-optimization", "Statistical significance"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "Leverage AI to identify and target the most valuable audience segments for your business across all advertising platforms.",
      benefits: ["Lookalike audiences", "Behavioral targeting", "Custom segments"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Budget Optimization",
      description: "Maximize ROI with intelligent budget allocation that automatically shifts spending to the best-performing ads and channels.",
      benefits: ["Smart allocation", "Cost optimization", "Performance-based scaling"]
    },
  ];

  return (
    <Section 
      id="features" 
      background="gradient" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>

      {/* Section header */}
      <div className="mb-20">
        <WavyBackground className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Powerful Features to Supercharge Your Advertising
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Our AI-powered platform provides everything you need to create,
            manage, and optimize your advertising campaigns.
          </p>
        </WavyBackground>
      </div>

      {/* Features grid with enhanced animations */}
      <div className="max-w-7xl mx-auto">
        <StaggerContainer staggerDelay={0.15} animation="fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefits={feature.benefits}
                index={index}
              />
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Call to action */}
      <div className="mt-20 text-center">
        <StaggerContainer staggerDelay={0.2} animation="fadeInUp">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">
              Ready to transform your advertising?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of businesses already using AdMyBrand to boost their advertising performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover-lift hover-glow transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </Section>
  );
}
