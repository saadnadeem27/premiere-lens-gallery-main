import { ArrowRight, Award, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional photography studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20 lg:py-32">
        <div className="animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            Capturing Life's
            <span className="text-gradient block mt-2">Precious Moments</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            Professional photography services that transform your vision into timeless art. 
            Specializing in portraits, weddings, and commercial photography.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 border-charcoal"
            >
              Book Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto animate-slide-up">
            <div className="text-center glass-effect rounded-2xl p-4 lg:p-6 hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-5 w-5 lg:h-6 lg:w-6 text-accent mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-display font-bold">500+</span>
              </div>
              <p className="text-white/90 font-medium text-sm lg:text-base">Happy Clients</p>
            </div>
            <div className="text-center glass-effect rounded-2xl p-4 lg:p-6 hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Camera className="h-5 w-5 lg:h-6 lg:w-6 text-accent mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-display font-bold">1000+</span>
              </div>
              <p className="text-white/90 font-medium text-sm lg:text-base">Photo Sessions</p>
            </div>
            <div className="text-center glass-effect rounded-2xl p-4 lg:p-6 hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 lg:h-6 lg:w-6 text-accent mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-display font-bold">8+</span>
              </div>
              <p className="text-white/90 font-medium text-sm lg:text-base">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;