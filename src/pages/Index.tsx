
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import RoadmapSection from '@/components/RoadmapSection';
import TokenSection from '@/components/TokenSection';
import FooterSection from '@/components/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const Index = () => {
  useAnimateOnScroll();

  useEffect(() => {
    // Set smooth scroll behavior for the whole page
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ApplicationsSection />
        <RoadmapSection />
        <TokenSection />
      </main>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
