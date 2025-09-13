import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['123 Photography Lane', 'Creative District', 'New York, NY 10001']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@aperturestudio.com', 'booking@aperturestudio.com']
    },
    {
      icon: Clock,
      title: 'Studio Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM', 'Sun: By Appointment']
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project 
              and discuss how we can capture your story beautifully.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up order-2 lg:order-1">
              <Card className="premium-card hover-lift p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567"
                      className="border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-border/50 rounded-lg focus:border-accent focus:ring-accent/20 focus:ring-2 bg-background text-foreground transition-all duration-300">
                      <option value="">Select a service</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="commercial">Commercial Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Project
                    </label>
                    <Textarea 
                      placeholder="Describe your vision, timeline, and any specific requirements..."
                      rows={5}
                      className="border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow)]">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Social Links */}
                <div className="pt-8 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Follow Our Work</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center text-accent-foreground hover:scale-110 transition-all duration-300 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-premium)]"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <Card className="p-6 luxury-gradient text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
                  <div className="relative z-10">
                    <h4 className="font-display text-xl font-semibold mb-2">
                      Ready to Book?
                    </h4>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      Call us directly for immediate assistance or to schedule your consultation.
                    </p>
                    <Button 
                      variant="outline" 
                      className="glass-effect text-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;