
import { useEffect, useRef, useState } from 'react';
import { DollarSign, Shield, Zap, Globe, Copy, Check, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FadeIn, StaggeredAnimation } from '@/lib/animations';

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

const tokenomics = [
  { category: 'Presale', percentage: 40, color: 'bg-blue-500' },
  { category: 'Liquidity', percentage: 25, color: 'bg-green-500' },
  { category: 'Team', percentage: 15, color: 'bg-purple-500' },
  { category: 'Marketing', percentage: 10, color: 'bg-orange-500' },
  { category: 'Development', percentage: 10, color: 'bg-red-500' }
];

const CONTRACT_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';

const TokenSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-20 bg-gradient-to-b from-background to-blue-50/50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="flex flex-col items-center" direction="left">
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary to-blue-400 token-glow hover:rotate-y rotate-y">
              <div className="absolute inset-2 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <span className="font-display font-bold text-4xl text-primary">RABY</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center w-full max-w-md">
              <div className="flex items-center justify-center rounded-lg border bg-card p-3 mb-4">
                <span className="text-sm font-mono mr-2 truncate flex-1">{CONTRACT_ADDRESS}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="flex-shrink-0"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </Button>
              </div>
              
              <div className="flex justify-center gap-4 mt-4">
                <Button variant="outline" className="gap-2">
                  <ExternalLink size={16} />
                  <a href="https://t.me/rabytoken" target="_blank" rel="noopener noreferrer">
                    Join Telegram
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <div>
            <StaggeredAnimation>
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 border border-border/50 hover:border-primary/20 rounded-xl overflow-hidden mb-6 last:mb-0"
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
            </StaggeredAnimation>
          </div>
        </div>
        
        {/* Tokenomics Section */}
        <FadeIn className="mt-24" delay={300}>
          <h3 className="text-center font-display font-bold text-2xl md:text-3xl mb-8">
            Tokenomics
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex h-10 w-full overflow-hidden rounded-lg mb-8">
              {tokenomics.map((item) => (
                <div 
                  key={item.category}
                  className={`h-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {tokenomics.map((item) => (
                <div key={item.category} className="text-center">
                  <div className={`h-3 w-6 ${item.color} rounded mx-auto mb-2`}></div>
                  <div className="font-medium">{item.category}</div>
                  <div className="text-lg font-bold">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              The $RABY token is designed with a balanced distribution to ensure long-term sustainability, 
              fair launch, and adequate resources for continuous development and growth.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TokenSection;
