import { CalendarCheck, Users, Headphones, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Automatically qualify and score leads through intelligent conversations. Filter out unqualified prospects before they reach your sales team.",
    color: "text-primary",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description: "Book meetings directly into your calendar. The AI handles scheduling, rescheduling, and confirmations automatically.",
    color: "text-secondary",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Provide 24/7 customer support without the overhead. Handle inquiries, FAQs, and route complex issues to your team.",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Sales Outreach",
    description: "Scale your outbound efforts with personalized AI calls. Follow up on leads, nurture prospects, and close more deals.",
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss an opportunity. Your AI agent works around the clock, handling calls across time zones without breaks.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Compliant & Secure",
    description: "Built with privacy and compliance in mind. All calls are recorded and transcribed for quality assurance.",
    color: "text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative">
      <div className="container-tight section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-2">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Everything You Need to
            <span className="gradient-text"> Automate Calls</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Our AI calling agent handles the entire call lifecycle, from initial outreach to conversion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/50 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-card flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
