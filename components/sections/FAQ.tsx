"use client";

import React, { useState } from "react";
import GlassmorphicCard from "../ui/GlassmorphicCard";
import Section, { SectionHeader } from "../ui/Section";
import AnimatedContainer, { StaggerContainer } from "../ui/AnimatedContainer";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

// Enhanced FAQ item component with collapsible answer
const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassmorphicCard
      className={`mb-4 overflow-hidden transition-all duration-500 hover-lift group ${
        isOpen ? "shadow-xl shadow-blue-500/10" : ""
      }`}
      variant="gradient"
      hoverEffect
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left cursor-pointer group/button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
            <HelpCircle className="w-4 h-4 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/button:text-blue-600 dark:group-hover/button:text-blue-400 transition-colors duration-200">
            {question}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-blue-500 transition-all duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          } group-hover/button:scale-110`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="pl-12 pr-4">
            <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How does AdMyBrand's AI technology work?",
      answer:
        "AdMyBrand uses advanced machine learning algorithms to analyze your brand, target audience, and industry to generate highly effective ad creatives. Our AI continuously learns from performance data to optimize campaigns in real-time, ensuring you get the best possible results from your advertising budget.",
    },
    {
      question: "Can I use AdMyBrand for multiple platforms?",
      answer:
        "Yes! AdMyBrand is designed to work across all major advertising platforms including Google Ads, Facebook, Instagram, TikTok, LinkedIn, and more. Our system automatically optimizes and adapts your campaigns for each platform's specific requirements and audience behaviors.",
    },
    {
      question: "Do I need technical skills to use AdMyBrand?",
      answer:
        "Not at all. AdMyBrand is designed with a user-friendly interface that requires no technical expertise. Our AI handles the complex parts of ad creation and optimization, while you maintain full control over your brand voice and campaign goals through an intuitive dashboard.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Many customers see improvements in their ad performance within the first week of using AdMyBrand. However, as our AI continues to learn and optimize based on your specific audience and campaign data, results typically improve significantly over the first 30-60 days of use.",
    },
    {
      question: "Can I integrate AdMyBrand with my existing marketing tools?",
      answer:
        "Absolutely. AdMyBrand offers seamless integration with popular marketing tools, CRMs, and analytics platforms. We provide API access on Professional and Enterprise plans, allowing you to connect AdMyBrand with your existing marketing stack for a unified workflow.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All plans include access to our comprehensive knowledge base and community forum. The Starter plan includes email support, while Professional plans add priority email and chat support. Enterprise customers receive 24/7 priority support and a dedicated account manager to ensure your success.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with no credit card required. This gives you full access to the platform so you can experience the benefits of AI-powered advertising before committing to a subscription.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. For monthly plans, your access will continue until the end of your current billing cycle. For annual plans, you can continue using the service until the end of your annual term.",
    },
  ];

  return (
    <Section 
      id="faq" 
      background="gradient" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section header */}
        <AnimatedContainer animation="fadeInUp" className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Everything you need to know about AdMyBrand and how it can transform
            your advertising strategy.
          </p>
        </AnimatedContainer>

        {/* FAQ items with stagger animation */}
        <div className="max-w-4xl mx-auto mb-16">
          <StaggerContainer staggerDelay={0.1} animation="fadeInUp">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </StaggerContainer>
        </div>

        {/* Enhanced help CTA */}
        <AnimatedContainer animation="scaleIn" delay={0.8}>
          <GlassmorphicCard className="max-w-2xl mx-auto p-8 text-center" variant="frosted" glowEffect>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </div>
            
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">
              Still have questions?
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our support team is here to help you get the most out of AdMyBrand. 
              Get in touch and we'll respond within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="border-gray-300 dark:border-gray-600"
              >
                Browse Help Center
              </Button>
            </div>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
