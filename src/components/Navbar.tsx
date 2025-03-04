
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl">RABY</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#applications" className="font-medium hover:text-primary transition-colors">
              Applications
            </a>
            <a href="#roadmap" className="font-medium hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#token" className="font-medium hover:text-primary transition-colors">
              $RABY Token
            </a>
          </div>
          <Button size="sm" className="rounded-full font-medium bg-primary hover:bg-primary/90">
            Coming Soon
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex items-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="container flex flex-col py-8 gap-6">
            <a 
              href="#applications" 
              className="text-lg font-medium py-2 border-b border-gray-100" 
              onClick={() => setIsOpen(false)}
            >
              Applications
            </a>
            <a 
              href="#roadmap" 
              className="text-lg font-medium py-2 border-b border-gray-100" 
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="#token" 
              className="text-lg font-medium py-2 border-b border-gray-100" 
              onClick={() => setIsOpen(false)}
            >
              $RABY Token
            </a>
            <Button className="mt-4 rounded-full font-medium">
              Coming Soon
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
