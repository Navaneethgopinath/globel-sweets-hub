import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Warehouse, FileCheck, Users, Globe2, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Import & Export",
      description: "Seamless international trade with full documentation and customs clearance support.",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Temperature-controlled storage facilities ensuring product freshness and quality.",
    },
    {
      icon: FileCheck,
      title: "Quality Assurance",
      description: "Rigorous quality checks and compliance with international food safety standards.",
    },
    {
      icon: Users,
      title: "Distribution",
      description: "Efficient nationwide and regional distribution networks for timely delivery.",
    },
    {
      icon: Globe2,
      title: "Sourcing",
      description: "Expert product sourcing from certified manufacturers globally.",
    },
    {
      icon: TrendingUp,
      title: "Market Entry",
      description: "Strategic support for brands looking to enter new markets.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Trade Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sourcing to delivery, we provide end-to-end solutions for your 
            chocolates and sweets import, export, and distribution needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
