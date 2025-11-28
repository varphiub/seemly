import { Globe, Megaphone, PhoneCall, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    features: ["Modern UI/UX Design", "Fast & Responsive", "SEO Optimized", "Mobile-First Approach"],
    color: "primary" as const,
  },
  {
    icon: Megaphone,
    title: "Ad Creation",
    description: "High-impact ads that capture attention and drive results.",
    features: ["Social Media Ads", "High-Quality Visuals", "Creative Strategy", "Performance Tracking"],
    color: "secondary" as const,
  },
  {
    icon: PhoneCall,
    title: "Calling Agent Service",
    description: "Professional calling solutions for lead generation and sales.",
    features: ["Lead Calling", "Sales Calls", "Customer Support", "Lead Follow-up"],
    color: "primary" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative">
      <div className="container-tight section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Services That
            <span className="gradient-text"> Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning websites to high-converting ads and professional calling services — 
            we've got everything you need to scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 group hover:bg-muted/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === "primary" 
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                    : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                } transition-all duration-300`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 ${service.color === "primary" ? "text-primary" : "text-secondary"}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
