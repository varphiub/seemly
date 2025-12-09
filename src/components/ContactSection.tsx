import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets Web App URL
      const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxKNt6iz9r106pBW-G9gkLCvZQwoAFrcLLWSoUw-5PpUyneM-i04Y3YXuZgynE6RGtG/exec";
      
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", business: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container-tight section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready to Automate
              <span className="gradient-text"> Your Calls?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fill out the form and our team will reach out to discuss how our AI calling agent can transform your business operations.
            </p>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-muted-foreground">Response Time</div>
                <div className="font-semibold">Within 24 hours</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-primary">deepaksharma.primary@gmail.com</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-muted-foreground">Free Trial</div>
                <div className="font-semibold">100 calls included</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass rounded-2xl p-8 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name *</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Business Name</label>
                  <Input
                    placeholder="Your business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message (Optional)</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Started
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
