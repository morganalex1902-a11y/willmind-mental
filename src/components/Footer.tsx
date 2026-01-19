import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/75 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Austin, Texas 78759<br />
                  Online Only
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:5125991462" className="text-muted-foreground hover:text-primary transition-colors">
                  (512) 599-1462
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@willmindmentalhealth.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@willmindmentalhealth.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Availability</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Online Only</p>
              <p>Telehealth Appointments</p>
              <p>Available by appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WillMind Mental Health. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            {" · "}
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
