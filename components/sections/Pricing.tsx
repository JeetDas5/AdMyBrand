'use client'

import React, { useState } from 'react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import Button from '../ui/Button';
import Section, { SectionHeader } from '../ui/Section';
import AnimatedContainer, { StaggerContainer } from '../ui/AnimatedContainer';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Enhanced Check icon component
const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
    <Check className="w-3 h-3 text-green-500" />
  </div>
);

// Enhanced X icon component
const XIcon = () => (
  <div className="w-5 h-5 rounded-full bg-gray-300/20 flex items-center justify-center">
    <X className="w-3 h-3 text-gray-400" />
  </div>
);

// Enhanced Feature item component
const FeatureItem = ({ 
  included, 
  text 
}: { 
  included: boolean; 
  text: string;
}) => (
  <div className="flex items-center gap-3 py-2 group">
    {included ? <CheckIcon /> : <XIcon />}
    <span className={`transition-colors duration-200 ${
      included 
        ? "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" 
        : "text-gray-400 dark:text-gray-500"
    }`}>
      {text}
    </span>
  </div>
);

// Enhanced Price card component
const PriceCard = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false,
  icon,
  badge,
  index
}: { 
  name: string; 
  price: number; 
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
  icon: React.ReactNode;
  badge?: string;
  index: number;
}) => {
  return (
    <div className="relative">
      <GlassmorphicCard 
        className={`p-8 flex flex-col h-full hover-lift group transition-all duration-500 ${
          popular ? 'scale-105 border-blue-500/30 shadow-2xl shadow-blue-500/20' : ''
        }`}
        variant={popular ? "frosted" : "gradient"}
        glowEffect={popular}
        hoverEffect
      >
        {/* Popular badge */}
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </div>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold py-1 px-3 rounded-full">
              {badge}
            </div>
          </div>
        )}
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              popular 
                ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                : 'bg-gradient-to-br from-gray-500/20 to-gray-600/20'
            }`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary">{name}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline mb-2">
            <span className="text-5xl font-bold gradient-text-primary">${price}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2 text-lg">/month</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Billed annually (${price * 10}/year)
          </p>
        </div>
        
        {/* Features */}
        <div className="flex-grow mb-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
            <p className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Everything included:
            </p>
          </div>
          <div className="space-y-3">
            {features.map((feature, i) => (
              <FeatureItem 
                key={i} 
                included={feature.included} 
                text={feature.text} 
              />
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          variant={popular ? "gradient" : "outline"} 
          fullWidth={true}
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          iconPosition="right"
          className="group/btn"
        >
          Get Started
        </Button>

        {/* Additional info */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          14-day free trial • No credit card required
        </p>
      </GlassmorphicCard>
    </div>
  );
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      description: "Perfect for small businesses just getting started with digital advertising.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      features: [
        { text: "AI-powered ad creation", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Up to 5 ad campaigns", included: true },
        { text: "Single platform integration", included: true },
        { text: "Email support", included: true },
        { text: "Advanced audience targeting", included: false },
        { text: "A/B testing automation", included: false },
        { text: "Custom reporting", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      popular: false
    },
    {
      name: "Professional",
      price: isAnnual ? 79 : 99,
      description: "Ideal for growing businesses looking to scale their advertising efforts.",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      badge: "SAVE 20%",
      features: [
        { text: "AI-powered ad creation", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Unlimited ad campaigns", included: true },
        { text: "Multi-platform integration", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Advanced audience targeting", included: true },
        { text: "A/B testing automation", included: true },
        { text: "Custom reporting", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: isAnnual ? 199 : 249,
      description: "For established businesses requiring maximum performance and customization.",
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      features: [
        { text: "AI-powered ad creation", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Unlimited ad campaigns", included: true },
        { text: "Multi-platform integration", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Advanced audience targeting", included: true },
        { text: "A/B testing automation", included: true },
        { text: "Custom reporting", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      popular: false
    }
  ];

  return (
    <Section 
      id="pricing" 
      background="pattern" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>

      {/* Section header */}
      <AnimatedContainer animation="fadeInUp" className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          <span>Transparent Pricing</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
          Simple, Transparent Pricing
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Choose the plan that's right for your business and start optimizing your ad campaigns today.
        </p>
        
        {/* Enhanced Pricing toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Annual
                {isAnnual && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </AnimatedContainer>
      
      {/* Pricing cards */}
      <StaggerContainer staggerDelay={0.2} animation="fadeInUp" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              icon={plan.icon}
              badge={plan.badge}
              index={index}
            />
          ))}
        </div>
      </StaggerContainer>
      
      {/* Enterprise CTA */}
      <AnimatedContainer animation="fadeInUp" delay={0.8} className="mt-20 text-center">
        <GlassmorphicCard className="max-w-2xl mx-auto p-8" variant="gradient" glowEffect>
          <h3 className="text-2xl font-bold gradient-text-primary mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Get a tailored plan with custom features, dedicated support, and flexible pricing 
            designed specifically for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient" 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Contact Sales
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 dark:border-gray-600"
            >
              Schedule Demo
            </Button>
          </div>
        </GlassmorphicCard>
      </AnimatedContainer>
    </Section>
  );
}