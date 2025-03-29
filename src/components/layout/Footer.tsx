
import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark-gray border-t border-cyber-green/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group">
              <Shield className="h-6 w-6 text-cyber-green" />
              <span className="text-lg font-bold text-cyber-green group-hover:text-glow transition-all duration-300">
                CyberShield
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Advanced AI-driven cybersecurity toolkit providing multi-layered protection against evolving threats.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyber-light-green mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/keystroke" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Keystroke Dynamics
                </Link>
              </li>
              <li>
                <Link to="/firewall" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  AI Web Firewall
                </Link>
              </li>
              <li>
                <Link to="/password" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Password Analyzer
                </Link>
              </li>
              <li>
                <Link to="/forensics" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Image Forensics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyber-light-green mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyber-light-green mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyber-green transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-green/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CyberShield. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Powered by advanced artificial intelligence and machine learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
