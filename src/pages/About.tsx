
import { Shield, Cpu, Lock, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "AI Security Expert",
      bio: "Specializes in machine learning for cybersecurity with 10+ years of experience in developing security algorithms."
    },
    {
      name: "Sasha Patel",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in Python and JavaScript, focusing on secure application development."
    },
    {
      name: "Marcus Johnson",
      role: "Forensic Analyst",
      bio: "Digital forensics specialist with background in law enforcement and cybercrime investigation."
    },
    {
      name: "Olivia Wu",
      role: "UX/UI Designer",
      bio: "Creates intuitive security interfaces that make advanced protection accessible to all users."
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
                About CyberShield
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Pioneering AI-driven cybersecurity to protect individuals and organizations from evolving digital threats.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Our Mission"
                subtitle="We're bridging the gap between cybersecurity and artificial intelligence to create safer digital environments for everyone."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-black p-8 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <p className="text-gray-300 leading-relaxed">
                In today's rapidly evolving digital landscape, traditional security measures are no longer sufficient to protect against sophisticated cyber threats. At CyberShield, we believe that the future of cybersecurity lies in the integration of artificial intelligence and machine learning.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our mission is to develop and deploy advanced AI-driven security solutions that adapt and evolve alongside emerging threats, providing proactive protection rather than reactive responses. We aim to make these cutting-edge technologies accessible and usable for individuals, businesses, and security professionals alike.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By combining expertise in cybersecurity, artificial intelligence, and user experience design, we're creating a new standard for digital protection that's both powerful and intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why We Built CyberShield Section */}
      <section className="py-20 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0 opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Why We Built CyberShield"
                subtitle="We identified critical security gaps that traditional solutions weren't addressing effectively."
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-dark-gray p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                    <Lock className="h-6 w-6 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-bold text-cyber-light-green">Inadequate Authentication</h3>
                </div>
                <p className="text-gray-400">
                  Password theft and credential compromise remain leading causes of data breaches, highlighting the need for more sophisticated authentication methods.
                </p>
              </div>
              
              <div className="bg-cyber-dark-gray p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                    <Cpu className="h-6 w-6 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-bold text-cyber-light-green">Evolving Threats</h3>
                </div>
                <p className="text-gray-400">
                  Traditional security tools can't keep pace with rapidly evolving attack vectors, creating an urgent need for self-learning defensive systems.
                </p>
              </div>
              
              <div className="bg-cyber-dark-gray p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                    <Zap className="h-6 w-6 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-bold text-cyber-light-green">Digital Integrity</h3>
                </div>
                <p className="text-gray-400">
                  As AI-generated content becomes more prevalent, verifying the authenticity of digital assets is increasingly crucial for security and trust.
                </p>
              </div>
              
              <div className="bg-cyber-dark-gray p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                    <Shield className="h-6 w-6 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-bold text-cyber-light-green">Fragmented Protection</h3>
                </div>
                <p className="text-gray-400">
                  Most security solutions focus on single areas, leaving gaps in overall protection. We created a comprehensive toolkit to address multiple vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Our Approach: AI-First Security"
                subtitle="We leverage the latest advancements in artificial intelligence to create security solutions that learn, adapt, and evolve."
                centered={true}
              />
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Adaptive Learning</h3>
                <p className="text-gray-400">
                  Rather than relying on static rule sets, our systems continuously learn from new threats and attack patterns, becoming more effective over time without requiring manual updates.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Proactive Defense</h3>
                <p className="text-gray-400">
                  Our AI models are designed to identify potential vulnerabilities and unusual patterns before they can be exploited, shifting security from reactive to proactive protection.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Human-Centered Design</h3>
                <p className="text-gray-400">
                  Advanced security is only effective if people use it. We focus on creating intuitive interfaces that make powerful protection accessible to users with any level of technical expertise.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Multi-Layered Protection</h3>
                <p className="text-gray-400">
                  We believe in defense in depth, creating complementary security tools that work together to provide comprehensive protection against diverse threat vectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0 opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Our Team"
                subtitle="A multidisciplinary group of experts in cybersecurity, artificial intelligence, and product development."
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-cyber-dark-gray p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-cyber-black h-20 w-20 rounded-full border border-cyber-green/30 flex items-center justify-center mb-4">
                      <span className="text-cyber-green text-2xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyber-light-green">{member.name}</h3>
                    <p className="text-cyber-green text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Our Technology Stack"
                subtitle="We leverage cutting-edge frameworks and AI models to build our security solutions."
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-4">Programming Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Python</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">JavaScript</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">C++</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">TypeScript</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-4">Frameworks & Libraries</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">TensorFlow</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">PyTorch</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Scikit-learn</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Flask</span>
                    <div className="w-2/3 bg-cyber-dark-gray rounded-full h-2.5 border border-cyber-green/20">
                      <div className="bg-cyber-green h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-4">AI Models</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    LSTM Networks for anomaly detection
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    Random Forest & SVM for keystroke dynamics
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    Neural Networks for password analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    CNN for image forensics and manipulation detection
                  </li>
                </ul>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-4">Security Standards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    NIST Cybersecurity Framework
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    OWASP Top 10 Security Risks
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    ISO/IEC 27001 Information Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    GDPR Compliance for Data Protection
                  </li>
                </ul>
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
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission for Safer Digital Futures</h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore our AI-powered cybersecurity solutions and take the first step toward enhanced digital protection.
            </p>
            <Link 
              to="/" 
              className="cyber-btn"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
