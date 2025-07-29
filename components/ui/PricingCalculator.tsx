"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlassmorphicCard from './GlassmorphicCard';
import Button from './Button';
import { 
  Calculator, 
  Users, 
  Zap, 
  TrendingUp, 
  DollarSign,
  ArrowRight,
  Sparkles,
  Target,
  BarChart3
} from 'lucide-react';

interface CalculatorState {
  monthlyAdSpend: number;
  platforms: number;
  campaigns: number;
  teamSize: number;
}

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export default function PricingCalculator() {
  const [values, setValues] = useState<CalculatorState>({
    monthlyAdSpend: 5000,
    platforms: 3,
    campaigns: 10,
    teamSize: 2
  });

  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [savings, setSavings] = useState(0);
  const [roi, setRoi] = useState(0);

  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: 29,
      features: ["Up to 5 campaigns", "2 platforms", "Basic analytics", "Email support"]
    },
    {
      name: "Professional",
      price: 79,
      features: ["Unlimited campaigns", "All platforms", "Advanced analytics", "Priority support"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: 199,
      features: ["Custom solutions", "Dedicated manager", "API access", "24/7 support"]
    }
  ];

  useEffect(() => {
    // Calculate recommended tier based on inputs
    let recommendedTier = tiers[0];
    
    if (values.campaigns > 5 || values.platforms > 2 || values.monthlyAdSpend > 2000) {
      recommendedTier = tiers[1];
    }
    
    if (values.campaigns > 20 || values.platforms > 5 || values.monthlyAdSpend > 10000 || values.teamSize > 5) {
      recommendedTier = tiers[2];
    }

    setSelectedTier(recommendedTier);

    // Calculate potential savings (15-30% improvement)
    const potentialSavings = values.monthlyAdSpend * 0.25 * 12;
    setSavings(potentialSavings);

    // Calculate ROI
    const annualCost = recommendedTier.price * 12;
    const calculatedRoi = ((potentialSavings - annualCost) / annualCost) * 100;
    setRoi(Math.max(calculatedRoi, 150)); // Minimum 150% ROI
  }, [values]);

  const handleSliderChange = (key: keyof CalculatorState, value: number) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const SliderInput = ({ 
    label, 
    value, 
    onChange, 
    min, 
    max, 
    step = 1, 
    prefix = "", 
    suffix = "",
    icon 
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step?: number;
    prefix?: string;
    suffix?: string;
    icon: React.ReactNode;
  }) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          {icon}
        </div>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold gradient-text-primary">
            {prefix}{value.toLocaleString()}{suffix}
          </span>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg"
            style={{ left: `${((value - min) / (max - min)) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{prefix}{min.toLocaleString()}{suffix}</span>
          <span>{prefix}{max.toLocaleString()}{suffix}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <GlassmorphicCard className="p-8" variant="gradient" glowEffect>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold gradient-text-primary">
              Pricing Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Find your perfect plan
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <SliderInput
            label="Monthly Ad Spend"
            value={values.monthlyAdSpend}
            onChange={(value) => handleSliderChange('monthlyAdSpend', value)}
            min={1000}
            max={50000}
            step={500}
            prefix="$"
            icon={<DollarSign className="w-4 h-4 text-blue-500" />}
          />

          <SliderInput
            label="Number of Platforms"
            value={values.platforms}
            onChange={(value) => handleSliderChange('platforms', value)}
            min={1}
            max={10}
            icon={<Target className="w-4 h-4 text-blue-500" />}
          />

          <SliderInput
            label="Active Campaigns"
            value={values.campaigns}
            onChange={(value) => handleSliderChange('campaigns', value)}
            min={1}
            max={50}
            icon={<BarChart3 className="w-4 h-4 text-blue-500" />}
          />

          <SliderInput
            label="Team Size"
            value={values.teamSize}
            onChange={(value) => handleSliderChange('teamSize', value)}
            min={1}
            max={20}
            suffix=" people"
            icon={<Users className="w-4 h-4 text-blue-500" />}
          />
        </div>
      </GlassmorphicCard>

      {/* Results */}
      <div className="space-y-6">
        {/* Recommended Plan */}
        <AnimatePresence mode="wait">
          {selectedTier && (
            <motion.div
              key={selectedTier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassmorphicCard 
                className="p-8 border-2 border-blue-500/30" 
                variant="frosted" 
                glowEffect
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Recommended for you
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold gradient-text-primary">
                      {selectedTier.name} Plan
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text-primary">
                      ${selectedTier.price}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      per month
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {selectedTier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="gradient" 
                  fullWidth 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Get Started with {selectedTier.name}
                </Button>
              </GlassmorphicCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ROI Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <GlassmorphicCard className="p-6 text-center" variant="gradient">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {roi.toFixed(0)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Expected ROI
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6 text-center" variant="gradient">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold gradient-text-primary mb-1">
              ${savings.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Annual Savings
            </div>
          </GlassmorphicCard>
        </div>

        {/* Additional Benefits */}
        <GlassmorphicCard className="p-6" variant="gradient">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Why AdMyBrand?
          </h5>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>25% average improvement in ad performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>Save 15+ hours per week on campaign management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>AI-powered optimization across all platforms</span>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
}