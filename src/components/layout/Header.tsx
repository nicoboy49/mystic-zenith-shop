import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full mystic-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">MysticShop</h1>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium transition-quick hover:text-primary">
              Cristaux
            </a>
            <a href="#" className="text-sm font-medium transition-quick hover:text-primary">
              Tarot
            </a>
            <a href="#" className="text-sm font-medium transition-quick hover:text-primary">
              Encens
            </a>
            <a href="#" className="text-sm font-medium transition-quick hover:text-primary">
              Bijoux
            </a>
            <a href="#" className="text-sm font-medium transition-quick hover:text-primary">
              Livres
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher des articles ésotériques..."
                className="pl-10 bg-muted/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs mystic-gradient">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs mystic-gradient">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;