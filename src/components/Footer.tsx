import { Mail, Bot } from "lucide-react";
import seemlyLogo from "@/assets/seemly-logo.png";

const Footer = () => {
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo", href: "#demo" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-tight section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={seemlyLogo} alt="SEEMLY" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              AI-powered calling agent that works 24/7 to grow your business.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a 
              href="mailto:deepaksharma.primary@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              deepaksharma.primary@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © SEEMLY 2025 – All Rights Reserved
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bot className="w-4 h-4 text-primary" />
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
