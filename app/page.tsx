import {Header} from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import FAQ from '@/components/sections/FAQ';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ/>
        <Pricing/>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}