
import { Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  
  useEffect(() => {
    // Intersection Observer for scroll animations
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

  const demos = [
    {
      id: 'keystroke',
      title: 'Keystroke Dynamics Authentication',
      description: 'Experience how our AI analyzes your typing patterns to create a unique biometric signature for secure authentication.',
      linkText: 'Try Keystroke Demo',
      link: '/keystroke#demo'
    },
    {
      id: 'firewall',
      title: 'AI-Driven Web Application Firewall',
      description: 'See how our self-learning firewall detects and blocks cyber threats like SQL injections and XSS attacks in real-time.',
      linkText: 'Try Firewall Demo',
      link: '/firewall#demo'
    },
    {
      id: 'password',
      title: 'ML-Powered Password Analyzer',
      description: 'Test the strength of your passwords with our advanced machine learning models that go beyond traditional checkers.',
      linkText: 'Try Password Analyzer',
      link: '/password#demo'
    },
    {
      id: 'forensics',
      title: 'Intelligent Image Forensics',
      description: 'Upload images to our AI tool to detect manipulations, edits, or hidden content for enhanced digital forensics.',
      linkText: 'Try Image Forensics',
      link: '/forensics#demo'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-on-scroll opacity-0">
              <div className="bg-cyber-dark-green bg-opacity-30 p-3 rounded-full border border-cyber-green/40 mb-6">
                <Shield className="h-10 w-10 text-cyber-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Try CyberShield
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Experience our AI-powered cybersecurity tools firsthand through interactive demos of our key features.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Selection Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="animate-on-scroll opacity-0">
            <SectionHeading
              title="Select a Demo"
              subtitle="Choose from our range of cybersecurity features to explore their capabilities."
              centered={true}
            />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {demos.map((demo, index) => (
              <div 
                key={demo.id}
                className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300 cursor-pointer animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.location.href = demo.link}
              >
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">{demo.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{demo.description}</p>
                <Link 
                  to={demo.link} 
                  className="inline-flex items-center text-cyber-green text-sm font-medium hover:translate-x-1 transition-transform duration-300"
                >
                  {demo.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-20 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0 opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="About Our Demos"
                subtitle="What to expect when trying our cybersecurity features."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-dark-gray p-8 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <p className="text-gray-300 leading-relaxed">
                Our interactive demos are simplified versions of our full security suite, designed to showcase the core functionality of each feature. These demonstrations run in your browser and do not require any installation or account creation.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                For security and privacy reasons, all data processing happens locally and no information is stored or transmitted to our servers. These demos are intended for educational purposes to help you understand the capabilities of our AI-driven security tools.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                To experience the full power of CyberShield's comprehensive security suite with advanced features and integration capabilities, please contact us for information about our complete solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Common questions about our demo experiences."
                centered={true}
              />
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Are the demos using real AI models?</h3>
                <p className="text-gray-400">
                  The browser-based demos use simplified versions of our AI models optimized for client-side execution. Our full implementations utilize more sophisticated models running on dedicated servers for enhanced performance and accuracy.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Is my data safe when using the demos?</h3>
                <p className="text-gray-400">
                  Yes. All demo processing happens locally in your browser. No data is sent to our servers or stored beyond your current session. When you close the page, all information is automatically cleared.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">How do I get access to the full features?</h3>
                <p className="text-gray-400">
                  Our full CyberShield solution offers enhanced capabilities, customization options, and integration with your existing security infrastructure. Contact us through the website for information about our complete security suite.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Can I integrate these tools with my own systems?</h3>
                <p className="text-gray-400">
                  Yes. Our production solutions are designed to integrate seamlessly with existing security infrastructure through APIs and plugins. The demos are for demonstration purposes only and don't include integration capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cyber-gradient relative">
        <div className="absolute inset-0 bg-green-glow z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience CyberShield?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Select a demo from above to see our AI-powered cybersecurity tools in action.
            </p>
            <Link 
              to="/" 
              className="cyber-btn inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
