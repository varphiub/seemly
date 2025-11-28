import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import seemlyLogo from "@/assets/seemly-logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "1s" }} />
      
      <div className="container-tight section-padding pt-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <img 
              src={seemlyLogo} 
              alt="SEEMLY" 
              className="h-20 md:h-28 w-auto animate-float"
            />
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <span className="text-foreground">Websites. Ads. Leads.</span>
            <br />
            <span className="gradient-text">All in One Agency.</span>
          </h1>
          
          {/* Sub-headline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Helping businesses grow with modern digital solutions that convert visitors into customers.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button variant="hero" size="xl" className="group">
              Get a Website
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 md:gap-16 mt-20 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
