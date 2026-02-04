import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Tradecore</h1>
            <p className="text-xs text-muted-foreground">International</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="mailto:Info@tradecoreinternational.com?subject=Quote%20Request&body=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%3A%0A%0AProduct%3A%20%0AQuantity%3A%20%0ACompany%3A%20%0A%0AThank%20you." className="hidden md:flex">
          <Button>Get Quote</Button>
        </a>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {link.name}
                </a>
              ))}
              <a href="mailto:Info@tradecoreinternational.com?subject=Quote%20Request&body=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%3A%0A%0AProduct%3A%20%0AQuantity%3A%20%0ACompany%3A%20%0A%0AThank%20you.">
                <Button className="mt-4 w-full">Get Quote</Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
