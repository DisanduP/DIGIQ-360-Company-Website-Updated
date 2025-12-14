import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

const footerLinks = {
  Services: ["Web Development", "UI/UX Design", "Mobile Apps", "Cloud Solutions"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Documentation", "Support", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">DQ</span>
              </div>
              <span className="text-xl tracking-tight">DIGIQ 360</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              A creative technology agency transforming digital visions into
              reality with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2024 DIGIQ 360. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
