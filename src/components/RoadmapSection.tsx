
import { useEffect, useRef } from 'react';
import { StaggeredAnimation } from '@/lib/animations';

const milestones = [
  {
    id: 'hush',
    quarter: 'Q2 2025',
    title: 'HUSH Launch',
    description: 'Our crypto confessions platform goes live, allowing anonymous sharing within the blockchain space.'
  },
  {
    id: 'seek',
    quarter: 'Q3 2025',
    title: 'SEEK Release',
    description: 'The AI job matching platform connects talent with opportunities in the tech landscape.'
  },
  {
    id: 'raze',
    quarter: 'Q4 2025',
    title: 'RAZE Marketplace',
    description: 'Our AI-powered freelance marketplace launches, connecting clients with perfect talent matches.'
  },
  {
    id: 'raqm',
    quarter: 'Q4 2025/Q1 2026',
    title: 'RAQM Beta',
    description: 'The social media platform enters beta testing with AI-enhanced connections and content curation.'
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[80%] h-[60%] rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Our Journey
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            RABY Roadmap
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Our strategic plan for bringing innovative AI applications to market
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10"></div>
          
          <StaggeredAnimation staggerDelay={150}>
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id} 
                className={`relative flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                  <span className="inline-block mb-2 px-4 py-1.5 rounded-full font-medium text-sm bg-primary/10 text-primary">
                    {milestone.quarter}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                
                {/* Circle marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Mobile-only content */}
                <div className="md:hidden pl-8 mb-6">
                  <span className="inline-block mb-2 px-4 py-1.5 rounded-full font-medium text-sm bg-primary/10 text-primary">
                    {milestone.quarter}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
