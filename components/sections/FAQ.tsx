"use client";

import React, { useState } from "react";
import GlassmorphicCard from "../ui/GlassmorphicCard";

// FAQ item component with collapsible answer
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

  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${index * 100}`;

  return (
    <div className={`animate-fade-in ${animationDelay}`}>
      <GlassmorphicCard
        className={`mb-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "shadow-md" : ""
        }`}
        opacity="light"
        border={true}
      >
        <button
          className="flex justify-between items-center w-full p-5 text-left cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="text-lg font-medium">{question}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-5 h-5 text-primary transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-5 pt-0 text-foreground/80">{answer}</div>
        </div>
      </GlassmorphicCard>
    </div>
  );
};

export default function FAQ() {
  // FAQ data
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
    <section id="faq" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>

      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-blue-400/10 blur-3xl"></div>
        <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white/70 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about AdMyBrand and how it can transform
            your advertising strategy.
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* Additional help CTA */}
        <div className="mt-12 text-center animate-fade-in animation-delay-800">
          <p className="text-foreground/70 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            Contact our support team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
