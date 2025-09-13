import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'events', name: 'Events' }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: 'Executive Portrait Session',
      category: 'portraits',
      description: 'Professional headshot capturing confidence and approachability'
    },
    {
      id: 2,
      image: portfolio2,
      title: 'Romantic Wedding Portrait',
      category: 'weddings',
      description: 'Intimate moment captured in natural lighting'
    },
    {
      id: 3,
      image: portfolio3,
      title: 'Luxury Product Photography',
      category: 'commercial',
      description: 'High-end product photography for premium brand'
    },
    {
      id: 4,
      image: portfolio4,
      title: 'Fashion Editorial',
      category: 'commercial',
      description: 'Creative fashion photography with dramatic lighting'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="container-responsive">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated selection of our finest work, showcasing the artistry and 
              technical excellence that defines Aperture Studio.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-accent text-accent-foreground shadow-[var(--shadow-glow)] scale-105' 
                    : 'border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-glow)] hover:scale-105'
                  }
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="gallery-item group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-card rounded-2xl elegant-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                    <div className="text-center text-white p-6 w-full">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed text-sm lg:text-base">
                        {item.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass-effect text-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Contact CTA */}
          <div className="text-center animate-scale-in">
            <div className="premium-card hover-lift p-8 lg:p-10 inline-block max-w-2xl">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                See More of Our Work
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
                This is just a glimpse of our portfolio. Let's discuss how we can 
                create something beautiful for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  View Full Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;