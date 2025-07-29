import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Section, { SectionHeader } from "../ui/Section";
import AnimatedContainer from "../ui/AnimatedContainer";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "AdMyBrand transformed our advertising ROI by 300% in just 3 months. The AI-powered optimization is incredible - it's like having a team of experts working 24/7.",
      name: "Sarah Chen",
      designation: "Marketing Director at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      company: "TechFlow",
      results: "300% ROI increase"
    },
    {
      quote:
        "The cross-platform optimization saved us 20 hours per week. What used to take our team days now happens automatically with better results.",
      name: "Michael Rodriguez",
      designation: "Growth Manager at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      company: "InnovateSphere",
      results: "20 hours saved weekly"
    },
    {
      quote:
        "The AI-generated ad copy performs 40% better than our previous campaigns. The platform understands our brand voice perfectly.",
      name: "Emily Watson",
      designation: "Creative Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      company: "CloudScale",
      results: "40% better performance"
    },
    {
      quote:
        "Implementation was seamless and support is outstanding. We saw immediate improvements in our campaign performance and cost efficiency.",
      name: "James Kim",
      designation: "Performance Marketing Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      company: "DataPro",
      results: "Immediate improvements"
    },
    {
      quote:
        "The budget optimization feature alone pays for the platform. Our cost per acquisition dropped by 45% while scaling our campaigns.",
      name: "Lisa Thompson",
      designation: "VP of Marketing at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      company: "FutureNet",
      results: "45% lower CPA"
    },
  ];

  return (
    <Section 
      id="testimonials" 
      background="pattern" 
      padding="xl"
      className="relative"
    >
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-20 opacity-10">
        <Quote className="w-32 h-32 text-blue-500" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 rotate-180">
        <Quote className="w-32 h-32 text-purple-500" />
      </div>

      {/* Section Header */}
      <AnimatedContainer animation="fadeInUp" className="text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 10,000+ businesses</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Don't just take our word for it. See how AdMyBrand is transforming 
            advertising for businesses of all sizes.
          </p>
        </div>
      </AnimatedContainer>

      {/* Testimonials */}
      <AnimatedContainer animation="fadeInUp" delay={0.3}>
        <AnimatedTestimonials testimonials={testimonials} />
      </AnimatedContainer>

      {/* Trust indicators */}
      <AnimatedContainer animation="fadeInUp" delay={0.6} className="mt-20">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Join thousands of satisfied customers
          </p>
          
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">10k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">$50M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </Section>
  );
}
