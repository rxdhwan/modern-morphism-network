
import { useEffect, useState, ReactNode } from 'react';

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
  const [elementId] = useState(`fade-${Math.random().toString(36).substring(2, 8)}`);
  
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
    
    const currentElement = document.getElementById(elementId);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, elementId]);
  
  const getAnimationClass = () => {
    switch (direction) {
      case 'up': return 'animate-fade-in';
      case 'left': return 'animate-fade-in-right';
      case 'right': return 'animate-fade-in-left';
      default: return 'animate-fade-in';
    }
  };
  
  return (
    <div 
      id={elementId}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated element with blur in animation
export const BlurIn = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  threshold?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementId] = useState(`blur-${Math.random().toString(36).substring(2, 8)}`);
  
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
    
    const currentElement = document.getElementById(elementId);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, elementId]);
  
  return (
    <div 
      id={elementId}
      className={`${className} ${isVisible ? 'animate-blur-in' : 'opacity-0 blur-md'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
