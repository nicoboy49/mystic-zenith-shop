import { Card, CardContent } from "@/components/ui/card";
import { Gem, Zap, Flame, Sparkles, BookOpen, Heart } from "lucide-react";

const categories = [
  {
    name: "Cristaux & Pierres",
    description: "Énergies naturelles",
    icon: Gem,
    color: "text-primary",
    count: "120+ produits"
  },
  {
    name: "Tarot & Oracle",
    description: "Guidance spirituelle",
    icon: Zap,
    color: "text-accent",
    count: "45+ jeux"
  },
  {
    name: "Encens & Sauge",
    description: "Purification énergétique",
    icon: Flame,
    color: "text-destructive",
    count: "80+ variétés"
  },
  {
    name: "Bijoux Spirituels",
    description: "Protection & style",
    icon: Sparkles,
    color: "text-primary",
    count: "65+ créations"
  },
  {
    name: "Livres Ésotériques",
    description: "Sagesse ancestrale",
    icon: BookOpen,
    color: "text-accent",
    count: "30+ titres"
  },
  {
    name: "Soins Énergétiques",
    description: "Harmonie intérieure",
    icon: Heart,
    color: "text-destructive",
    count: "25+ services"
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explorez Nos Catégories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque catégorie a été soigneusement sélectionnée pour accompagner 
            votre parcours spirituel et énergétique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-mystical hover:-translate-y-2 shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-quick">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-primary">
                    {category.count}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;