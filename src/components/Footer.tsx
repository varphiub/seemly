import seemlyLogo from "@/assets/seemly-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-tight section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={seemlyLogo} alt="SEEMLY" className="h-8 w-auto" />

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Email */}
          <a 
            href="mailto:deepaksharma.primary@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            deepaksharma.primary@gmail.com
          </a>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © SEEMLY 2025 – All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
