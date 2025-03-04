
import { Github, Twitter, Globe } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-secondary/90 border-t border-border/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <div>
              <a href="#" className="font-display font-bold text-2xl">RABY</a>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Building cutting-edge AI applications powered by blockchain technology to transform how we work, connect, and interact in the AI-driven future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="h-9 w-9 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-base mb-4">Applications</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">HUSH</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">SEEK</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">RAZE</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">RAQM</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-base mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Roadmap</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Whitepaper</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Documentation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-base mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Team</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} RABY. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
