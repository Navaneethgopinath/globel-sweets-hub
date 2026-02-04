import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Quality assured products from certified manufacturers",
    "Temperature-controlled logistics and storage",
    "Competitive pricing with flexible payment terms",
    "Dedicated customer support and after-sales service",
    "Compliance with international food safety standards",
    "Custom packaging and private label solutions",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner in Global Confectionery Trade
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tradecore International is a leading import, export, and distribution company 
              specializing in premium sweets and confectionery products. With over 15 years 
              of industry experience, we have established ourselves as a reliable bridge 
              between manufacturers and markets worldwide.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our extensive network spans across 50+ countries, enabling us to source the 
              finest confectionery products and deliver them to your doorstep with 
              uncompromising quality and efficiency.
            </p>
            
            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🍬</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Quality First</h3>
                <p className="text-muted-foreground">Every product meets our rigorous quality standards</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
