
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToApplications = () => {
    document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Building Web3 AI Applications
            </span>
          </div>
          
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
            We build with AI for a <span className="relative">
              <span className="relative z-10">world of AI</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10"></span>
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-fade-in [animation-delay:300ms]">
            RABY is building a suite of cutting-edge AI applications powered by blockchain technology, designed to transform how we work, connect, and interact in the AI-driven future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:500ms]">
            <Button size="lg" className="rounded-full font-medium px-8 bg-primary hover:bg-primary/90">
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full font-medium px-8"
              onClick={scrollToApplications}
            >
              Explore Applications
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
