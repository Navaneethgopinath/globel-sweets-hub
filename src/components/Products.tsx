import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      name: "Chocolates",
      description: "Premium chocolates from renowned manufacturers worldwide",
      icon: "🍫",
    },
    {
      name: "Hard Candies",
      description: "Traditional and modern hard candy varieties",
      icon: "🍬",
    },
    {
      name: "Gummies & Jellies",
      description: "Soft, chewy treats in various flavors and shapes",
      icon: "🧸",
    },
    {
      name: "Biscuits & Cookies",
      description: "Crispy, cream-filled, and specialty cookies",
      icon: "🍪",
    },
    {
      name: "Marshmallows",
      description: "Fluffy marshmallows in multiple sizes and flavors",
      icon: "☁️",
    },
    {
      name: "Lollipops",
      description: "Colorful lollipops and novelty candy items",
      icon: "🍭",
    },
    {
      name: "Traditional Sweets",
      description: "Authentic regional and ethnic confections",
      icon: "🎀",
    },
    {
      name: "Sugar-Free Options",
      description: "Health-conscious alternatives without compromising taste",
      icon: "💚",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Premium Confectionery Range
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of premium chocolates and sweets 
            sourced from trusted manufacturers around the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
