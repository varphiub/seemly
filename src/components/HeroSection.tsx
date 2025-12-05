import { ArrowRight, Phone, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/25 rounded-full blur-[130px] animate-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "2s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container-tight section-padding pt-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Calling Agent</span>
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <span className="text-foreground">AI That</span>
            <br />
            <span className="gradient-text">Calls For You</span>
          </h1>
          
          {/* Sub-headline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Automate lead qualification, appointment scheduling, customer support, and sales outreach with our intelligent AI calling agent. Available 24/7.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button variant="hero" size="xl" className="group gap-2">
              <Phone className="w-5 h-5" />
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2">
              <Zap className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 md:gap-16 mt-20 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {[
              { value: "10K+", label: "Calls Made" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Always On" },
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
