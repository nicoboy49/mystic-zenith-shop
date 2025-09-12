import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Categories from "@/components/sections/Categories";
import ProductGrid from "@/components/sections/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Categories />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
