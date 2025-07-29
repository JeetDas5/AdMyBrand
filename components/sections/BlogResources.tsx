"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import Section, { SectionHeader } from '../ui/Section';
import AnimatedContainer, { StaggerContainer } from '../ui/AnimatedContainer';
import Button from '../ui/Button';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  Clock,
  User,
  ArrowRight,
  Filter,
  Search,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Zap,
  Users,
  Calendar,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  views: string;
  likes: number;
  featured?: boolean;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video' | 'webinar';
  downloadCount: string;
  category: string;
  icon: React.ReactNode;
}

export default function BlogResources() {
  const [activeTab, setActiveTab] = useState<'blog' | 'resources'>('blog');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Digital Advertising: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping the advertising landscape and what it means for your business growth.',
      category: 'AI & Technology',
      readTime: '8 min read',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      views: '12.5k',
      likes: 234,
      featured: true
    },
    {
      id: '2',
      title: 'How to Optimize Your Facebook Ads for Maximum ROI',
      excerpt: 'Learn proven strategies to improve your Facebook advertising performance and reduce cost per acquisition.',
      category: 'Platform Guides',
      readTime: '6 min read',
      author: 'Mike Chen',
      date: 'Dec 12, 2024',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      views: '8.2k',
      likes: 156
    },
    {
      id: '3',
      title: 'Cross-Platform Campaign Management: Best Practices',
      excerpt: 'Master the art of managing advertising campaigns across multiple platforms for consistent brand messaging.',
      category: 'Strategy',
      readTime: '10 min read',
      author: 'Emily Rodriguez',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      views: '15.1k',
      likes: 298
    },
    {
      id: '4',
      title: 'A/B Testing Your Ad Creative: Complete Guide',
      excerpt: 'Everything you need to know about testing ad variations to find winning combinations that convert.',
      category: 'Optimization',
      readTime: '7 min read',
      author: 'David Park',
      date: 'Dec 8, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      views: '9.8k',
      likes: 187
    },
    {
      id: '5',
      title: 'Google Ads vs Facebook Ads: Which Platform is Right for You?',
      excerpt: 'Compare the strengths and weaknesses of major advertising platforms to make informed decisions.',
      category: 'Platform Guides',
      readTime: '9 min read',
      author: 'Lisa Thompson',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop',
      views: '11.3k',
      likes: 203
    },
    {
      id: '6',
      title: 'Building High-Converting Landing Pages for Your Ads',
      excerpt: 'Design landing pages that complement your ad campaigns and maximize conversion rates.',
      category: 'Conversion',
      readTime: '12 min read',
      author: 'Alex Kim',
      date: 'Dec 3, 2024',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      views: '7.9k',
      likes: 145
    }
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Complete Ad Campaign Planning Template',
      description: 'Comprehensive template to plan, execute, and track your advertising campaigns across all platforms.',
      type: 'template',
      downloadCount: '2.3k',
      category: 'Templates',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: '2',
      title: 'AI-Powered Ad Copy Generator Guide',
      description: 'Step-by-step guide to creating compelling ad copy using artificial intelligence tools.',
      type: 'guide',
      downloadCount: '1.8k',
      category: 'Guides',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: '3',
      title: 'Advanced Facebook Ads Masterclass',
      description: '2-hour comprehensive video course covering advanced Facebook advertising strategies.',
      type: 'video',
      downloadCount: '3.1k',
      category: 'Video Courses',
      icon: <Video className="w-6 h-6" />
    },
    {
      id: '4',
      title: 'ROI Calculation Spreadsheet',
      description: 'Pre-built Excel template to calculate and track return on investment for your ad campaigns.',
      type: 'template',
      downloadCount: '1.5k',
      category: 'Templates',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: '5',
      title: 'Cross-Platform Analytics Dashboard',
      description: 'Unified dashboard template to monitor performance across Google, Facebook, and other platforms.',
      type: 'template',
      downloadCount: '2.7k',
      category: 'Templates',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: '6',
      title: 'Scaling Your Ad Campaigns Webinar',
      description: 'Live webinar recording on how to scale successful campaigns without losing efficiency.',
      type: 'webinar',
      downloadCount: '4.2k',
      category: 'Webinars',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const categories = ['all', 'AI & Technology', 'Platform Guides', 'Strategy', 'Optimization', 'Conversion'];
  const resourceCategories = ['all', 'Templates', 'Guides', 'Video Courses', 'Webinars'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassmorphicCard 
        className={`overflow-hidden hover-lift group cursor-pointer ${
          post.featured ? 'border-2 border-blue-500/30' : ''
        }`}
        variant="gradient"
        hoverEffect
      >
        {post.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              Featured
            </div>
          </div>
        )}

        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Read More
            </Button>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );

  const ResourceCard = ({ resource, index }: { resource: Resource; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassmorphicCard className="p-6 hover-lift group cursor-pointer" variant="gradient" hoverEffect>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {resource.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {resource.title}
              </h3>
              <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full capitalize">
                {resource.type}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {resource.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Download className="w-4 h-4" />
            <span>{resource.downloadCount} downloads</span>
          </div>
          
          <Button 
            variant="gradient" 
            size="sm"
            icon={<Download className="w-4 h-4" />}
          >
            Download
          </Button>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );

  return (
    <Section 
      id="resources" 
      background="gradient" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer animation="fadeInUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Hub</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
            Blog & Resources
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, actionable guides, and free resources 
            to supercharge your advertising performance.
          </p>
        </AnimatedContainer>

        {/* Tab Navigation */}
        <AnimatedContainer animation="fadeInUp" delay={0.2} className="mb-12">
          <div className="flex justify-center">
            <GlassmorphicCard className="p-2" variant="frosted">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'blog'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Blog Posts</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'resources'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Free Resources</span>
                  </div>
                </button>
              </div>
            </GlassmorphicCard>
          </div>
        </AnimatedContainer>

        {/* Search and Filter */}
        <AnimatedContainer animation="fadeInUp" delay={0.4} className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles and resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 appearance-none"
                >
                  {(activeTab === 'blog' ? categories : resourceCategories).map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'blog' ? (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter CTA */}
        <AnimatedContainer animation="fadeInUp" delay={0.8} className="mt-20">
          <GlassmorphicCard className="max-w-4xl mx-auto p-8 text-center" variant="frosted" glowEffect>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-blue-500" />
            </div>
            
            <h3 className="text-3xl font-bold gradient-text-primary mb-4">
              Stay Updated with Latest Insights
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get weekly tips, industry insights, and exclusive resources delivered straight to your inbox. 
              Join 10,000+ marketers who trust our content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
              <Button 
                variant="gradient" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </GlassmorphicCard>
        </AnimatedContainer>
      </div>
    </Section>
  );
}