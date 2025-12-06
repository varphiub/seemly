import { Phone, Bot, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <LampContainer className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center text-center max-w-5xl mx-auto px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
          <Bot className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Calling Agent</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-foreground">AI That</span>
          <br />
          <span className="bg-gradient-to-br from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            Calls For You
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Automate lead qualification, appointment scheduling, customer support, and sales outreach with our intelligent AI calling agent. Available 24/7.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="xl" className="group gap-2" asChild>
            <a href="tel:+918792631321">
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" className="gap-2 bg-green-600 hover:bg-green-700 border-green-600 text-white" asChild>
            <a href="https://wa.me/918792631321" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" className="gap-2" asChild>
            <a href="#demo">
              <Zap className="w-5 h-5" />
              Watch Demo
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mt-20">
          {[
            { value: "10K+", label: "Calls Made" },
            { value: "98%", label: "Success Rate" },
            { value: "24/7", label: "Always On" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
};

export default HeroSection;
