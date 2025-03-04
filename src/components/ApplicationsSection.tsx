
import { Brain, Briefcase, MessageSquare, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const applications = [
  {
    id: 'hush',
    title: 'HUSH',
    description: 'Crypto Confessions platform where users can anonymously share thoughts and experiences within the blockchain space.',
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    release: 'Q2 2025'
  },
  {
    id: 'seek',
    title: 'SEEK',
    description: 'AI-powered job matching platform connecting talent with opportunities in the evolving tech landscape.',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    release: 'Q3 2025'
  },
  {
    id: 'raze',
    title: 'RAZE',
    description: 'Freelance marketplace reimagined with AI to seamlessly connect clients with the perfect talent for any project.',
    icon: <Brain className="h-10 w-10 text-primary" />,
    release: 'Q4 2025'
  },
  {
    id: 'raqm',
    title: 'RAQM',
    description: 'Next-generation social media platform enhanced by AI to create meaningful connections and quality content.',
    icon: <Users className="h-10 w-10 text-primary" />,
    release: 'Q4 2025/2026'
  }
];

const ApplicationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
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

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.app-card');
      cards.forEach((card, index) => {
        // Type casting to HTMLElement to access style property
        const cardElement = card as HTMLElement;
        cardElement.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="applications" ref={sectionRef} className="py-20 bg-secondary/50 animate-on-scroll">
      <div className="container">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Our AI Suite
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            Transformative AI Applications
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Our ecosystem of AI-powered applications is designed to revolutionize different aspects of how we work and interact.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <Card 
              key={app.id}
              className="app-card border border-border/50 hover:border-primary/20 card-hover animate-on-scroll p-6 flex flex-col h-full rounded-xl overflow-hidden"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {app.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{app.title}</h3>
              <p className="text-muted-foreground flex-grow mb-4">{app.description}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Release: {app.release}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
