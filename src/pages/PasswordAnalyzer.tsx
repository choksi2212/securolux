
import { Key, Lock, Shield, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PasswordAnalyzer = () => {
  const [password, setPassword] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    strength: string;
    timeToBreak: string;
    suggestions: string[];
    warnings: string[];
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

  const analyzePassword = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Simple password analysis logic for demo purposes
      const length = password.length;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSpecialChars = /[^A-Za-z0-9]/.test(password);
      
      // Calculate base score
      let score = 0;
      
      // Length score (up to 30 points)
      score += Math.min(length * 3, 30);
      
      // Character type scores
      if (hasLowercase) score += 10;
      if (hasUppercase) score += 15;
      if (hasNumbers) score += 15;
      if (hasSpecialChars) score += 20;
      
      // Patterns and common passwords penalty
      if (/^[0-9]+$/.test(password)) score -= 10; // All numbers
      if (/^[a-zA-Z]+$/.test(password)) score -= 5; // All letters
      if (/(.)\1{2,}/.test(password)) score -= 10; // Repeated characters
      
      const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'welcome', 'password123'];
      if (commonPasswords.includes(password.toLowerCase())) score = 10; // Common password
      
      // Normalize score to 0-100
      score = Math.max(0, Math.min(100, score));
      
      // Determine strength category
      let strength, timeToBreak, suggestions = [], warnings = [];
      
      if (score < 20) {
        strength = 'Very Weak';
        timeToBreak = 'Instantly';
        warnings.push('This password could be broken instantly.');
        suggestions.push('Use at least 12 characters with a mix of letters, numbers and symbols.');
        suggestions.push('Avoid using common words or patterns.');
      } else if (score < 40) {
        strength = 'Weak';
        timeToBreak = 'Minutes to Hours';
        warnings.push('This password is vulnerable to basic brute force attacks.');
        suggestions.push('Increase length and complexity by adding different character types.');
      } else if (score < 60) {
        strength = 'Moderate';
        timeToBreak = 'Days to Weeks';
        warnings.push('This password could be broken with determined effort.');
        suggestions.push('Add more special characters or increase length further.');
      } else if (score < 80) {
        strength = 'Strong';
        timeToBreak = 'Months to Years';
        suggestions.push('Consider using a random password generator for even stronger protection.');
      } else {
        strength = 'Very Strong';
        timeToBreak = 'Centuries';
        suggestions.push('Excellent password! Remember to store it securely in a password manager.');
      }
      
      // Add specific warnings
      if (length < 8) {
        warnings.push('Password is too short.');
      }
      if (!hasUppercase) {
        warnings.push('No uppercase letters found.');
      }
      if (!hasNumbers) {
        warnings.push('No numbers found.');
      }
      if (!hasSpecialChars) {
        warnings.push('No special characters found.');
      }
      if (/(.)\1{2,}/.test(password)) {
        warnings.push('Contains repeated character sequences.');
      }
      
      setResult({
        score,
        strength,
        timeToBreak,
        suggestions,
        warnings
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const resetDemo = () => {
    setPassword('');
    setResult(null);
  };
  
  const getScoreColor = (score: number) => {
    if (score < 20) return 'bg-red-600';
    if (score < 40) return 'bg-orange-500';
    if (score < 60) return 'bg-yellow-500';
    if (score < 80) return 'bg-green-400';
    return 'bg-cyber-green';
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
                <Key className="h-10 w-10 text-cyber-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ML-Powered Password Analyzer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Advanced password security analysis using neural networks and decision trees to evaluate strength beyond traditional methods.
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
              title="How Our Password Analysis Works"
              subtitle="We go beyond simple password rules to provide a deeper security assessment using machine learning models."
              centered={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Lock className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Hash Analysis</h3>
              </div>
              <p className="text-gray-400">
                Our system converts passwords into secure hashes and analyzes their cryptographic properties to assess resilience against cracking attempts.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Shield className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Dual ML Models</h3>
              </div>
              <p className="text-gray-400">
                We employ both neural networks and decision trees to analyze different aspects of password security, providing a more comprehensive assessment.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <AlertTriangle className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Pattern Recognition</h3>
              </div>
              <p className="text-gray-400">
                Our algorithms detect sophisticated patterns and common substitutions that attackers are trained to look for when cracking passwords.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <CheckCircle className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Actionable Insights</h3>
              </div>
              <p className="text-gray-400">
                Beyond a simple strength score, we provide specific recommendations to improve password security based on identified weaknesses.
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
                title="Test Your Password Strength"
                subtitle="Enter a password to analyze its security with our ML-powered algorithms."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-dark-gray p-8 rounded-lg border border-cyber-green/30 animate-pulse-glow">
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-300 mb-2">Enter a password to analyze:</label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password to analyze..."
                    className="w-full p-4 bg-cyber-black border border-cyber-green/30 rounded-md text-gray-200 focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green"
                    disabled={isAnalyzing || result !== null}
                  />
                </div>
                <p className="mt-2 text-gray-400 text-sm">
                  <span className="text-cyber-green">*</span> Your password is not stored or transmitted - all analysis happens locally in your browser.
                </p>
              </div>
              
              <div className="mt-6">
                {!result && !isAnalyzing && (
                  <button
                    onClick={analyzePassword}
                    disabled={password.length === 0}
                    className={`cyber-btn w-full ${password.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Analyze Password
                  </button>
                )}
                
                {isAnalyzing && (
                  <div className="text-center p-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-cyber-green border-r-2"></div>
                    <p className="text-cyber-light-green mt-3">Analyzing password strength...</p>
                  </div>
                )}
                
                {result && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Password Strength</span>
                        <span className="font-medium text-cyber-light-green">
                          {result.strength} ({result.score}/100)
                        </span>
                      </div>
                      <div className="w-full bg-cyber-black rounded-full h-2.5 border border-cyber-green/20">
                        <div 
                          className={`h-2.5 rounded-full ${getScoreColor(result.score)}`} 
                          style={{ width: `${result.score}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                      <p className="text-gray-300 text-sm mb-1">Estimated Time to Crack</p>
                      <p className="text-lg font-medium text-cyber-light-green">
                        {result.timeToBreak}
                      </p>
                    </div>
                    
                    {result.warnings.length > 0 && (
                      <div className="p-4 border border-red-500/30 rounded-md bg-red-900/20">
                        <h4 className="text-red-400 font-medium mb-2">Warnings</h4>
                        <ul className="space-y-1">
                          {result.warnings.map((warning, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-start">
                              <AlertTriangle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                      <h4 className="text-cyber-light-green font-medium mb-2">Suggestions</h4>
                      <ul className="space-y-1">
                        {result.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 text-cyber-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button onClick={resetDemo} className="cyber-btn w-full">
                      Analyze Another Password
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm animate-on-scroll opacity-0">
              <p>Note: This is a simplified demo. Our actual password analyzer uses more sophisticated neural networks and decision trees to analyze password strength.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Practices Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Password Security Best Practices"
                subtitle="Follow these guidelines to create strong, secure passwords that will protect your accounts."
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Length Over Complexity</h3>
                <p className="text-gray-400">
                  A longer password using simple words can be more secure than a short complex one. Consider using passphrases of at least 16 characters.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Unique Passwords</h3>
                <p className="text-gray-400">
                  Use a different password for each account. If one service is compromised, your other accounts remain secure.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Use a Password Manager</h3>
                <p className="text-gray-400">
                  A secure password manager allows you to generate and store complex, unique passwords for all your accounts.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Enable Two-Factor Authentication</h3>
                <p className="text-gray-400">
                  Add an extra layer of security beyond passwords by enabling 2FA whenever possible on your accounts.
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
            <h2 className="text-3xl font-bold text-white mb-6">Strengthen Your Digital Security</h2>
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

export default PasswordAnalyzer;
