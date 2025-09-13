import { Camera, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Portrait Photography', href: '#services' },
      { name: 'Wedding Photography', href: '#services' },
      { name: 'Commercial Photography', href: '#services' },
      { name: 'Event Photography', href: '#services' }
    ],
    company: [
      { name: 'About Studio', href: '#about' },
      { name: 'Our Portfolio', href: '#portfolio' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Book Session', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Copyright Info', href: '#' },
      { name: 'Usage Rights', href: '#' }
    ]
  };

  return (
    <footer className="luxury-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
      {/* Main Footer Content */}
      <div className="container-responsive py-16 relative z-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="h-8 w-8 text-accent" />
              <span className="font-display text-2xl font-semibold">
                Aperture Studio
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Capturing life's precious moments with artistry, passion, and technical excellence. 
              Creating timeless memories that you'll treasure forever.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">123 Photography Lane, NY</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@aperturestudio.com</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Aperture Studio. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Crafted with passion for photography excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;