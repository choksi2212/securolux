
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Keystroke Dynamics", path: "/keystroke" },
    { name: "AI Firewall", path: "/firewall" },
    { name: "Password Analyzer", path: "/password" },
    { name: "Image Forensics", path: "/forensics" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-black/90 backdrop-blur-md border-b border-cyber-green/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <Shield className="h-8 w-8 text-cyber-green animate-glow-pulse" />
            <span className="text-xl font-bold text-cyber-green group-hover:text-glow transition-all duration-300">
              CyberShield
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyber-green ${
                  location.pathname === link.path
                    ? "text-cyber-green text-glow"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/demo" 
              className="cyber-btn"
            >
              Try Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cyber-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark-gray border-t border-cyber-green/20 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium py-2 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-cyber-green text-glow"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/demo" 
              className="cyber-btn w-full text-center mt-4"
            >
              Try Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
