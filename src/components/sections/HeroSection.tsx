import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Collection d'articles ésotériques - cristaux, tarot, encens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl py-20">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Découvrez la Magie
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Votre Boutique
            <span className="block mystic-gradient bg-clip-text text-transparent">
              Ésotérique
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
            Explorez notre collection soigneusement sélectionnée de cristaux, 
            cartes de tarot, encens et bijoux spirituels pour éveiller votre âme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="mystical" size="lg" className="group">
              Explorer la Collection
              <Star className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Nos Nouveautés
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Produits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2K+</div>
              <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;