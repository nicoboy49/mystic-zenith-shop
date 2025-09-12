import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full mystic-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <h3 className="text-xl font-bold">MysticShop</h3>
            </div>
            <p className="text-muted-foreground">
              Votre guide spirituel vers l'éveil et la découverte des énergies mystiques.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Accueil
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Produits
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                À Propos
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Contact
              </a>
            </div>
          </div>

          {/* Catégories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Catégories</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Cristaux
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Tarot
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Encens
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-quick">
                Bijoux
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-muted-foreground text-sm">
              Recevez nos dernières nouveautés et conseils spirituels.
            </p>
            <div className="space-y-2">
              <Input placeholder="Votre email" />
              <Button variant="mystical" className="w-full">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">contact@mysticshop.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Paris, France</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MysticShop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;