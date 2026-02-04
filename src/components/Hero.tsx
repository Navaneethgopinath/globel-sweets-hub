import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Truck, Package } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Global Confectionery Distribution
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium Sweets & Confectionery
            <span className="text-primary block mt-2">Import & Export</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted partner in global confectionery trade. We import, export, and distribute 
            premium quality sweets and confectionery products worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Product Varieties</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
