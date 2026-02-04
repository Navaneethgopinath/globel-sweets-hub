const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tradecore</h3>
                <p className="text-xs text-primary-foreground/70">International</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Your trusted partner in global confectionery trade. Import, export, 
              and distribution of premium sweets and confectionery products worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Chocolates</span></li>
              <li><span className="text-primary-foreground/80">Hard Candies</span></li>
              <li><span className="text-primary-foreground/80">Gummies & Jellies</span></li>
              <li><span className="text-primary-foreground/80">Biscuits & Cookies</span></li>
              <li><span className="text-primary-foreground/80">Traditional Sweets</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Tradecore International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
