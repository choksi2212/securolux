
import { Keyboard, Fingerprint, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const KeystrokeDynamics = () => {
  const [typedText, setTypedText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {confidence: number, match: boolean}>(null);
  const [typingPattern, setTypingPattern] = useState<Array<{key: string, time: number}>>([]);
  
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
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Record keystroke timing
    const newPatternEntry = {
      key: e.key,
      time: performance.now()
    };
    setTypingPattern(prevPattern => [...prevPattern, newPatternEntry]);
  };
  
  const analyzePattern = () => {
    setIsAnalyzing(true);
    // Simulate analysis with timeout
    setTimeout(() => {
      // Mock AI analysis result
      const confidence = Math.random() * 30 + 70; // Random number between 70-100
      const match = confidence > 85;
      
      setResult({
        confidence,
        match
      });
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const resetDemo = () => {
    setTypedText('');
    setTypingPattern([]);
    setResult(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-on-scroll opacity-0">
              <div className="bg-cyber-dark-green bg-opacity-30 p-3 rounded-full border border-cyber-green/40 mb-6">
                <Keyboard className="h-10 w-10 text-cyber-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Keystroke Dynamics Authentication
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                AI-powered authentication that uses your unique typing pattern as a biometric signature, adding an extra layer of security beyond passwords.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#demo" className="cyber-btn">
                  Try Demo
                </a>
                <a href="#how-it-works" className="px-6 py-2 bg-transparent border-2 border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green/10 transition-colors duration-300">
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="animate-on-scroll opacity-0">
            <SectionHeading
              title="How Keystroke Dynamics Works"
              subtitle="Our AI analyzes the unique way you type - the rhythm, pressure, and timing between keystrokes - creating a biometric profile that's nearly impossible to replicate."
              centered={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Fingerprint className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Pattern Recognition</h3>
              </div>
              <p className="text-gray-400">
                Our algorithms analyze your typing cadence, including the duration of key presses and the intervals between keystrokes, creating a unique digital fingerprint.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <UserCheck className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Identity Verification</h3>
              </div>
              <p className="text-gray-400">
                When you log in, your current typing pattern is compared to your stored profile using Random Forest and SVM machine learning models to verify your identity.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <ShieldCheck className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Continuous Learning</h3>
              </div>
              <p className="text-gray-400">
                Our system adapts to subtle changes in your typing pattern over time, maintaining high security while reducing false rejections.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section id="demo" className="py-20 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Experience Keystroke Dynamics"
                subtitle="Type the text below to see how our system analyzes your unique typing pattern."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-dark-gray p-8 rounded-lg border border-cyber-green/30 animate-pulse-glow">
              <div className="mb-6">
                <p className="text-gray-300 mb-3">Type this phrase:</p>
                <p className="text-cyber-light-green font-medium">The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <textarea
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Start typing here..."
                className="w-full h-24 p-4 bg-cyber-black border border-cyber-green/30 rounded-md text-gray-200 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green"
                disabled={isAnalyzing || result !== null}
              ></textarea>
              
              <div className="mt-6">
                {!result && !isAnalyzing && (
                  <button
                    onClick={analyzePattern}
                    disabled={typedText.length < 10}
                    className={`cyber-btn w-full ${typedText.length < 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Analyze Typing Pattern
                  </button>
                )}
                
                {isAnalyzing && (
                  <div className="text-center p-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-cyber-green border-r-2"></div>
                    <p className="text-cyber-light-green mt-3">Analyzing your typing pattern...</p>
                  </div>
                )}
                
                {result && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Match Confidence</span>
                        <span className={`font-medium ${result.match ? 'text-cyber-green' : 'text-red-500'}`}>
                          {result.confidence.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-cyber-black rounded-full h-2.5 border border-cyber-green/20">
                        <div 
                          className={`h-2.5 rounded-full ${result.match ? 'bg-cyber-green' : 'bg-red-500'}`} 
                          style={{ width: `${result.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                      <p className={`text-lg font-medium ${result.match ? 'text-cyber-green' : 'text-red-500'}`}>
                        {result.match 
                          ? '✓ Identity Verified - Your typing pattern matches!' 
                          : '✗ Identity Not Verified - Typing pattern does not match reference profile.'}
                      </p>
                    </div>
                    
                    <button onClick={resetDemo} className="cyber-btn w-full">
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm animate-on-scroll opacity-0">
              <p>Note: This is a simplified demo. In a real implementation, the system would build a profile from multiple typing samples and use more advanced algorithms.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Key Benefits"
                subtitle="Why keystroke dynamics authentication provides superior security for your applications."
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Enhanced Security</h3>
                <p className="text-gray-400">
                  Even if credentials are stolen, attackers can't replicate your unique typing pattern, providing an additional layer of biometric security.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Non-Intrusive</h3>
                <p className="text-gray-400">
                  Unlike other biometric methods, keystroke dynamics requires no additional hardware and doesn't interrupt the user experience.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Continuous Authentication</h3>
                <p className="text-gray-400">
                  Can monitor user identity throughout a session, not just at login, to detect if a different person takes over.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Adaptive Learning</h3>
                <p className="text-gray-400">
                  Our AI models improve over time, adapting to gradual changes in typing patterns while maintaining high security standards.
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Strengthen Your Authentication?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore our complete suite of AI-powered cybersecurity tools for comprehensive protection.
            </p>
            <Link 
              to="/" 
              className="cyber-btn inline-flex items-center"
            >
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KeystrokeDynamics;
