
import { useEffect, useState, useRef, ReactNode } from 'react';

// Animated element with fade in animation
export const FadeIn = ({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0,
  threshold = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);
  
  const getAnimationClass = () => {
    switch (direction) {
      case 'up': return 'animate-fade-in';
      case 'down': return 'animate-fade-in-down';
      case 'left': return 'animate-fade-in-right';
      case 'right': return 'animate-fade-in-left';
      default: return 'animate-fade-in';
    }
  };
  
  return (
    <div 
      ref={elementRef}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Utility hook for element animation on scroll
export const useElementAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentElement = ref.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Enhanced staggered animations for multiple children
export const StaggeredAnimation = ({
  children,
  className = '',
  staggerDelay = 100,
  threshold = 0.1
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    const currentElement = containerRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div 
          className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
