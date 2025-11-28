import { ExternalLink } from "lucide-react";

const portfolioItems = [
  { title: "E-commerce Platform", category: "Website", color: "from-primary/20 to-primary/5" },
  { title: "Social Media Campaign", category: "Ad Creation", color: "from-secondary/20 to-secondary/5" },
  { title: "Brand Identity", category: "Website", color: "from-primary/20 to-secondary/10" },
  { title: "Lead Generation", category: "Calling Service", color: "from-secondary/20 to-primary/10" },
  { title: "Landing Page", category: "Website", color: "from-primary/20 to-primary/5" },
  { title: "Performance Ads", category: "Ad Creation", color: "from-secondary/20 to-secondary/5" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container-tight section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our recent work. Each project is crafted with precision and 
            designed to deliver exceptional results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground) / 0.1) 1px, transparent 0)`,
                  backgroundSize: "24px 24px"
                }} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          More projects coming soon. Stay tuned for updates!
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
