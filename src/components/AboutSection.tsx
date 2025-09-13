import { Heart, Eye, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every shot is crafted with genuine passion and attention to the smallest details that make your story unique.'
    },
    {
      icon: Eye,
      title: 'Artistic Vision',
      description: 'We see beyond the lens, capturing not just images but emotions, memories, and the essence of each moment.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'Innovation meets tradition in our approach, blending timeless techniques with modern artistic vision.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Aperture Studio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that every moment deserves to be captured beautifully, 
              we are a team of passionate photographers dedicated to creating timeless art.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Story Content */}
            <div className="animate-slide-up order-2 lg:order-1">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
                <p>
                  What began as a passion project in 2016 has evolved into one of the region's 
                  most trusted photography studios. Our journey started with a simple mission: 
                  to capture the authentic beauty in every person and moment.
                </p>
                <p>
                  Today, we've had the privilege of documenting thousands of precious moments, 
                  from intimate portraits to grand celebrations. Each project teaches us something 
                  new about the art of storytelling through photography.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition in the industry, 
                  but more importantly, the trust of our clients who become part of our extended family.
                </p>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="animate-scale-in order-1 lg:order-2">
              <div className="premium-card hover-lift p-6 lg:p-8 text-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <span className="text-4xl lg:text-6xl text-accent-foreground font-display">AS</span>
                </div>
                <h4 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-2">
                  Alex Sterling
                </h4>
                <p className="text-gradient font-medium mb-4">Lead Photographer & Founder</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Photography is not just about capturing what we see, 
                  but revealing what we feel."
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="premium-card hover-lift p-6 lg:p-8 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;