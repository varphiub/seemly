import { Upload, Settings, Phone, BarChart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Leads",
    description: "Import your contact list or connect your CRM. We support all major platforms and file formats.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure Your Agent",
    description: "Set your script, tone, and objectives. Customize how your AI agent handles different scenarios.",
  },
  {
    icon: Phone,
    number: "03",
    title: "Start Calling",
    description: "Launch your campaign and let the AI handle calls. It adapts to each conversation in real-time.",
  },
  {
    icon: BarChart,
    number: "04",
    title: "Track Results",
    description: "Monitor performance with detailed analytics. See call recordings, transcripts, and conversion metrics.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-tight section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Get Started in
            <span className="gradient-text"> Minutes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple setup, powerful results. Your AI calling agent is ready to work in just four steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 relative z-10">
                {/* Number Badge */}
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
