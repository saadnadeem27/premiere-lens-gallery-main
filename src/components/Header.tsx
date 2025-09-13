import { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-accent" />
            <span className="font-display text-2xl font-semibold text-foreground">
              Aperture Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-4 self-start"
              >
                Book Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;