import {Header} from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import DemoVideo from '@/components/sections/DemoVideo';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Pricing from '@/components/sections/Pricing';
import BlogResources from '@/components/sections/BlogResources';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <DemoVideo />
        <Testimonials />
        <FAQ/>
        <Pricing/>
        <BlogResources />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}