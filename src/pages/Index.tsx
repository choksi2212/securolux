
import { Shield, Shield as KeystrokeIcon, Activity as FirewallIcon, Key as PasswordIcon, Image as ForensicsIcon, Zap, Lock, Server } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import FeatureCard from '../components/ui/FeatureCard';
import SectionHeading from '../components/ui/SectionHeading';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const features = [
    {
      title: "Keystroke Dynamics Authentication",
      description: "AI-powered identity verification through unique typing patterns for enhanced security.",
      icon: KeystrokeIcon,
      link: "/keystroke"
    },
    {
      title: "AI-Driven Web Application Firewall",
      description: "Self-learning firewall detecting and blocking cyber threats in real-time.",
      icon: FirewallIcon,
      link: "/firewall"
    },
    {
      title: "ML-Powered Password Analyzer",
      description: "Advanced password strength evaluation using multiple machine learning models.",
      icon: PasswordIcon,
      link: "/password"
    },
    {
      title: "Intelligent Image Forensics",
      description: "AI tools for detecting image manipulation and hidden steganographic attacks.",
      icon: ForensicsIcon,
      link: "/forensics"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-black z-[-1]"></div>
        <div className="absolute inset-0 bg-green-glow z-[-1]"></div>
        
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-8 animate-float">
              <Shield className="h-12 w-12 text-cyber-green animate-glow-pulse" />
              <h1 className="text-3xl font-bold text-cyber-green text-glow">CyberShield</h1>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight mb-6">
              AI-Powered <span className="text-cyber-green text-glow">Cybersecurity</span> For The Modern Age
            </h2>
            
            <p className="text-gray-300 text-xl max-w-2xl mb-10">
              Comprehensive protection with advanced machine learning algorithms against evolving cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/demo" className="cyber-btn">
                Try Demo
              </Link>
              <Link to="/about" className="px-6 py-2 bg-transparent border-2 border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green/10 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 animate-on-scroll opacity-0">
            <SectionHeading
              title="Our Advanced Security Solutions"
              subtitle="Utilizing the latest AI and machine learning technologies to protect your digital assets."
              centered={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                  delay={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CyberShield Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Why Choose CyberShield?"
                subtitle="Our multi-layered approach to cybersecurity provides comprehensive protection beyond traditional solutions."
              />
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-cyber-dark-green bg-opacity-30 border border-cyber-green/30">
                    <Zap className="h-5 w-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cyber-light-green">Multi-Layered Security</h3>
                    <p className="text-gray-400 mt-1">Comprehensive protection combining authentication, web security, and forensic analysis in one toolkit.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-cyber-dark-green bg-opacity-30 border border-cyber-green/30">
                    <Server className="h-5 w-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cyber-light-green">AI-Powered Adaptability</h3>
                    <p className="text-gray-400 mt-1">Our system continuously learns from new threats, becoming more effective over time to stay ahead of attackers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-cyber-dark-green bg-opacity-30 border border-cyber-green/30">
                    <Lock className="h-5 w-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cyber-light-green">Advanced Analysis</h3>
                    <p className="text-gray-400 mt-1">Deep security insights through machine learning models that go beyond conventional security checks.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to="/about" className="cyber-btn">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0">
              <div className="absolute inset-0 bg-green-glow z-0"></div>
              <div className="relative z-10 bg-cyber-dark-gray border border-cyber-green/30 rounded-lg p-8 animate-pulse-glow">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-cyber-light-green mb-4">Protection Against Modern Threats</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Credential Theft Protection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">SQL Injection Defense</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Cross-Site Scripting (XSS) Prevention</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Bot Activity Detection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Digital Evidence Tampering Detection</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-cyber-green/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">System Security Level</span>
                      <span className="text-sm text-cyber-green font-medium">Advanced</span>
                    </div>
                    <div className="w-full bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Digital Assets?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Experience the next generation of AI-powered cybersecurity with CyberShield's comprehensive toolkit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/demo" className="cyber-btn">
                Try Demo
              </Link>
              <Link to="/about" className="px-6 py-2 bg-transparent border-2 border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green/10 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
