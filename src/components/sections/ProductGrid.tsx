import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock product data
const products = [
  {
    id: 1,
    name: "Cristal d'Améthyste",
    price: "29.99",
    originalPrice: "39.99",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1631890365833-5d17ba4cf96c?w=400&h=400&fit=crop",
    badge: "Populaire",
    badgeVariant: "default" as const
  },
  {
    id: 2,
    name: "Jeu de Tarot Rider-Waite",
    price: "24.99",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    badge: "Nouveau",
    badgeVariant: "secondary" as const
  },
  {
    id: 3,
    name: "Sauge Blanche Premium",
    price: "15.99",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1506905668547-8cf36eca165e?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Bracelet Chakras",
    price: "19.99",
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Pierre de Lune",
    price: "34.99",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1601745846207-f15c8e5b715b?w=400&h=400&fit=crop",
    badge: "Coup de Cœur",
    badgeVariant: "destructive" as const
  },
  {
    id: 6,
    name: "Encens Dragon's Blood",
    price: "12.99",
    rating: 4.5,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop"
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-mystical hover:-translate-y-1 shadow-card">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.badge && (
            <Badge 
              variant={product.badgeVariant}
              className="absolute top-3 left-3"
            >
              {product.badge}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 hover:bg-background transition-quick"
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="mystical" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Ajouter au panier
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-quick">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-accent fill-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">
                €{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  €{product.originalPrice}
                </span>
              )}
            </div>
            <Button variant="earth" size="sm">
              Voir Détails
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Nos Produits Populaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits ésotériques les plus appréciés 
            par notre communauté spirituelle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir Tous les Produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;