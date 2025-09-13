import { Users, Briefcase, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: 'Portrait Photography',
      description: 'Professional headshots, family portraits, and personal branding photography that captures your authentic self.',
      features: ['Professional Headshots', 'Family Portraits', 'Senior Pictures', 'Personal Branding'],
      price: 'Starting at $299'
    },
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Romantic, timeless wedding photography that tells your love story with elegance and artistry.',
      features: ['Full Day Coverage', 'Engagement Sessions', 'Reception Photography', 'Digital Gallery'],
      price: 'Starting at $2,499'
    },
    {
      icon: Briefcase,
      title: 'Commercial Photography',
      description: 'Professional commercial photography for businesses, products, and corporate events.',
      features: ['Product Photography', 'Corporate Events', 'Brand Photography', 'Marketing Content'],
      price: 'Starting at $499'
    },
    {
      icon: Star,
      title: 'Special Events',
      description: 'Memorable event photography for celebrations, parties, and milestone moments.',
      features: ['Birthday Parties', 'Graduations', 'Corporate Events', 'Special Occasions'],
      price: 'Starting at $399'
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From intimate portraits to grand celebrations, we offer comprehensive photography 
              services tailored to capture your most important moments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="premium-card hover-lift p-6 lg:p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow)]">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gradient font-semibold text-lg">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="premium-card p-8 lg:p-12 text-center luxury-gradient text-white animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Ready to Capture Your Story?
              </h3>
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your vision and create something beautiful together. 
                Every great photo starts with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect text-white hover:bg-white hover:text-charcoal transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;