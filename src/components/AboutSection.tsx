import { Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container-tight section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-16 rounded-full border border-primary/30 animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-3xl p-8 text-center glow-primary">
                  <div className="text-5xl font-bold gradient-text mb-2">DKS</div>
                  <div className="text-muted-foreground text-sm">Founder & Creator</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              About the Founder
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building Digital
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Deepak Kumar Sharma J</span>, 
              the creator of SEEMLY. I help businesses build their digital presence through 
              websites, ads, and calling-based lead conversion.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My mission is to deliver fast, clean, and modern solutions for clients who want 
              results. Every project is crafted with attention to detail and a focus on 
              driving real business growth.
            </p>
            
            <a 
              href="mailto:deepaksharma.primary@gmail.com"
              className="inline-flex items-center gap-3 glass rounded-xl px-6 py-4 hover:bg-muted/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Get in touch</div>
                <div className="font-semibold group-hover:text-primary transition-colors">
                  deepaksharma.primary@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
