import React, { useState } from 'react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import Button from '../ui/Button';

// Check icon component
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

// X icon component
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Feature item component
const FeatureItem = ({ 
  included, 
  text 
}: { 
  included: boolean; 
  text: string;
}) => (
  <div className="flex items-center gap-3 py-2">
    {included ? <CheckIcon /> : <XIcon />}
    <span className={included ? "text-foreground" : "text-foreground/50"}>{text}</span>
  </div>
);

// Price card component
const PriceCard = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false,
  index
}: { 
  name: string; 
  price: number; 
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
  index: number;
}) => {
  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${index * 200}`;
  
  return (
    <GlassmorphicCard 
      className={`p-6 flex flex-col h-full animate-fade-in-up ${animationDelay} ${popular ? 'border-primary/30 shadow-lg' : ''}`}
      opacity={popular ? "heavy" : "medium"}
      hoverEffect={true}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-foreground/70 ml-1">/month</span>
        </div>
        <p className="text-sm text-foreground/60">Billed annually (${price * 10}/year)</p>
      </div>
      
      <div className="flex-grow mb-6">
        <div className="border-t border-b border-foreground/10 py-4 mb-4">
          <p className="font-medium">Includes:</p>
        </div>
        <div className="space-y-1">
          {features.map((feature, i) => (
            <FeatureItem 
              key={i} 
              included={feature.included} 
              text={feature.text} 
            />
          ))}
        </div>
      </div>
      
      <Button 
        variant={popular ? "primary" : "outline"} 
        fullWidth={true}
        size="lg"
      >
        Get Started
      </Button>
    </GlassmorphicCard>
  );
};

export default function Pricing() {
  // Toggle between monthly and annual pricing
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Pricing plans data
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      description: "Perfect for small businesses just getting started with digital advertising.",
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
    <section id="pricing" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Choose the plan that&apos;s right for your business and start optimizing your ad campaigns today.
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'font-medium text-foreground' : 'text-foreground/70'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20"
              role="switch"
              aria-checked={isAnnual}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} 
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
              Annual <span className="text-xs text-primary font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <div className="mt-16 text-center animate-fade-in animation-delay-600">
          <p className="text-foreground/70 mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}