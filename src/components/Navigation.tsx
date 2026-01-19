import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
const logo = "https://cdn.builder.io/api/v1/image/assets%2F8c5319227ec44fd9bdef2d63efcb9acb%2Ff0a52497499b4b638d5e432734eacbc6?format=webp&width=800";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ServicesDropdown = ({ servicesLinks }: { servicesLinks: Array<{ name: string; path: string }> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="text-sm font-medium transition-colors hover:text-primary text-foreground flex items-center gap-1"
        onMouseEnter={() => setIsOpen(true)}
      >
        SERVICES <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56" onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)}>
        {servicesLinks.map((service) => (
          <DropdownMenuItem key={service.path} asChild>
            <Link to={service.path} className="cursor-pointer">
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MEET THE PROVIDERS", path: "/team" },
    { name: "ABOUT US", path: "/about" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const servicesLinks = [
    { name: "Anxiety", path: "/services#anxiety" },
    { name: "Depression", path: "/services#depression" },
    { name: "Phobias", path: "/services#phobias" },
    { name: "PTSD", path: "/services#ptsd" },
    { name: "OCD", path: "/services#ocd" },
    { name: "ADHD/ADD", path: "/services#adhd" },
    { name: "Bipolar Disorders", path: "/services#bipolar" },
    { name: "Eating Disorders", path: "/services#eating" },
    { name: "Preceptorship for PMHNP Students", path: "/services#preceptorship" },
    { name: "Surgical Clearance Evaluations", path: "/services#surgical" },
    { name: "Insomnia & Sleep Disorders", path: "/services#insomnia" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border flex justify-center">
      <div className="w-full max-w-full 2xl:max-w-[1400px] mx-auto px-4">
        {/* First Layer - Logo and Business Name Centered */}
        <div className={`flex items-center justify-center border-b border-border transition-all duration-300 ${isScrolled ? "py-1" : "py-3"}`}>
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="WillMind Mental Health"
              className={`transition-all duration-300 group-hover:scale-105 object-contain ${isScrolled ? "h-10" : "h-16"}`}
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-decorative font-bold text-primary transition-all duration-300 ${isScrolled ? "text-xl" : "text-3xl"}`}>
                WillMind
              </span>
              <span className={`font-medical font-medium text-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"}`}>
                Mental Health
              </span>
            </div>
          </Link>
        </div>

        {/* Second Layer - All Centered */}
        <div className="flex items-center justify-center h-12 gap-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              HOME
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary text-foreground flex items-center gap-1">
                SERVICES <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {servicesLinks.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                REQUEST APPOINTMENT
              </Button>
            </Link>
            <a href="tel:5125991462">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                (512) 599-1462
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              <p className="text-sm font-medium text-foreground mb-2 px-0">SERVICES</p>
              {servicesLinks.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="space-y-3 mt-4">
              <a href="tel:5125991462" className="block">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (512) 599-1462
                </Button>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  REQUEST APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
