
import { useEffect, useRef } from 'react';
import { DollarSign, Shield, Zap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const features = [
  {
    title: 'Unified Ecosystem',
    description: 'One token powers all applications in the RABY suite, creating a seamless experience.',
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Utility-Focused',
    description: 'Designed with real utility across our AI applications, not just speculation.',
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Governance Rights',
    description: 'Token holders influence the development roadmap and key decisions.',
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
];

const TokenSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tokenRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Use our custom hook for animations
  useAnimateOnScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (tokenRef.current) {
      observer.observe(tokenRef.current);
    }
    
    if (featuresRef.current) {
      const featureCards = featuresRef.current.querySelectorAll('.feature-card');
      featureCards.forEach((card, index) => {
        // Type casting to HTMLElement to access style property
        const cardElement = card as HTMLElement;
        cardElement.classList.add('opacity-0', 'translate-y-8');
        cardElement.style.transitionDelay = `${0.2 + index * 0.15}s`;
        cardElement.style.transitionProperty = 'opacity, transform';
        cardElement.style.transitionDuration = '0.6s';
        cardElement.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="token" ref={sectionRef} className="py-20 animate-on-scroll bg-gradient-to-b from-background to-blue-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Our Ecosystem Token
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            Introducing $RABY Token
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            The unified currency powering our entire suite of AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={tokenRef}
            className="perspective flex flex-col items-center animate-on-scroll"
          >
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary to-blue-400 token-glow hover:rotate-y rotate-y">
              <div className="absolute inset-2 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <span className="font-display font-bold text-4xl text-primary">RABY</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Contract Address: Coming Soon
              </p>
            </div>
          </div>

          <div ref={featuresRef} className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="feature-card p-6 border border-border/50 hover:border-primary/20 rounded-xl overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
