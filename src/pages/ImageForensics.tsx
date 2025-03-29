
import { Image, Search, AlertTriangle, FileWarning, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const ImageForensics = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    manipulated: boolean;
    confidenceScore: number;
    detectedAreas: Array<{x: number, y: number, width: number, height: number, type: string}>;
    analysisDetails: string[];
  }>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
  
  useEffect(() => {
    if (result && imageRef.current && canvasRef.current) {
      const image = imageRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Set canvas dimensions to match image
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        
        // Draw image on canvas
        ctx.drawImage(image, 0, 0);
        
        // Draw detection areas on the canvas
        result.detectedAreas.forEach(area => {
          // Set style based on manipulation type
          if (area.type === 'splicing') {
            ctx.strokeStyle = 'red';
          } else if (area.type === 'copy-move') {
            ctx.strokeStyle = 'orange';
          } else if (area.type === 'aiGenerated') {
            ctx.strokeStyle = 'purple';
          } else {
            ctx.strokeStyle = 'yellow';
          }
          
          ctx.lineWidth = 3;
          ctx.strokeRect(
            area.x * canvas.width, 
            area.y * canvas.height, 
            area.width * canvas.width, 
            area.height * canvas.height
          );
        });
      }
    }
  }, [result]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };
  
  const analyzeImage = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with timeout
    setTimeout(() => {
      // For demo purposes, randomly decide if the image is manipulated
      const isManipulated = Math.random() > 0.5;
      
      const detectedAreas = [];
      
      if (isManipulated) {
        // Generate some random detection areas
        const numAreas = Math.floor(Math.random() * 3) + 1;
        const types = ['splicing', 'copy-move', 'aiGenerated', 'steganography'];
        
        for (let i = 0; i < numAreas; i++) {
          detectedAreas.push({
            x: Math.random() * 0.7, // Random position
            y: Math.random() * 0.7,
            width: Math.random() * 0.25 + 0.05, // Random size
            height: Math.random() * 0.25 + 0.05,
            type: types[Math.floor(Math.random() * types.length)] // Random type
          });
        }
      }
      
      // Generate analysis details based on the detection
      const analysisDetails = [];
      
      if (isManipulated) {
        analysisDetails.push('Image inconsistencies detected in highlighted regions');
        
        const manipulationTypes = new Set(detectedAreas.map(area => area.type));
        
        if (manipulationTypes.has('splicing')) {
          analysisDetails.push('Detected image splicing from different sources');
        }
        
        if (manipulationTypes.has('copy-move')) {
          analysisDetails.push('Identified copy-move forgery within the image');
        }
        
        if (manipulationTypes.has('aiGenerated')) {
          analysisDetails.push('Portions of this image may be AI-generated');
        }
        
        if (manipulationTypes.has('steganography')) {
          analysisDetails.push('Potential hidden data detected (steganography)');
        }
      } else {
        analysisDetails.push('No significant manipulation detected');
        analysisDetails.push('Image appears to be authentic');
        analysisDetails.push('No signs of splicing or copy-move forgery');
        analysisDetails.push('No hidden data detected');
      }
      
      setResult({
        manipulated: isManipulated,
        confidenceScore: isManipulated ? Math.random() * 30 + 70 : Math.random() * 30,
        detectedAreas,
        analysisDetails
      });
      
      setIsAnalyzing(false);
    }, 2500);
  };
  
  const resetDemo = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
                <Image className="h-10 w-10 text-cyber-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Image Forensics Tool
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Advanced AI-powered tool that detects image manipulations, hidden anomalies, and steganographic content for enhanced digital forensics.
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
              title="How Our Image Forensics Technology Works"
              subtitle="Our AI-driven analysis combines multiple detection techniques to identify various types of image manipulation."
              centered={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <Search className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">CNN Analysis</h3>
              </div>
              <p className="text-gray-400">
                Convolutional Neural Networks scan for pixel-level inconsistencies, compression artifacts, and unnatural patterns that indicate manipulation.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <AlertTriangle className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Metadata Inspection</h3>
              </div>
              <p className="text-gray-400">
                Our algorithms analyze EXIF data and other metadata to identify inconsistencies and flag potential alterations or source discrepancies.
              </p>
            </div>
            
            <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-cyber-dark-green bg-opacity-30 p-2 rounded-full border border-cyber-green/30">
                  <FileWarning className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-light-green">Steganography Detection</h3>
              </div>
              <p className="text-gray-400">
                Advanced detection techniques reveal hidden data or messages embedded within images that might indicate malicious intent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section id="demo" className="py-20 bg-cyber-black relative">
        <div className="absolute inset-0 bg-green-glow z-0 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Test Our Image Forensics Tool"
                subtitle="Upload an image to analyze it for manipulations, edits, or hidden content."
                centered={true}
              />
            </div>
            
            <div className="mt-12 bg-cyber-dark-gray p-8 rounded-lg border border-cyber-green/30 animate-pulse-glow">
              <div className="mb-6">
                {!imagePreview ? (
                  <div 
                    className="border-2 border-dashed border-cyber-green/30 rounded-lg p-12 text-center cursor-pointer hover:border-cyber-green/60 transition-colors duration-300"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <Image className="h-12 w-12 text-cyber-green mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Drag and drop an image here, or click to browse</p>
                    <p className="text-gray-400 text-sm">Supports JPEG, PNG, and WebP formats</p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="text-right mb-2">
                      <button 
                        onClick={resetDemo}
                        className="text-gray-400 hover:text-cyber-green text-sm flex items-center justify-end ml-auto"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Change image
                      </button>
                    </div>
                    <div className="relative max-h-[400px] overflow-hidden rounded-lg flex justify-center items-center bg-cyber-black">
                      <img 
                        src={imagePreview} 
                        alt="Selected" 
                        className="max-h-[400px] max-w-full object-contain"
                        ref={imageRef}
                      />
                      <canvas 
                        ref={canvasRef} 
                        className={`absolute top-0 left-0 w-full h-full ${result ? 'block' : 'hidden'}`}
                      />
                    </div>
                    
                    {selectedImage && (
                      <div className="mt-2 text-sm text-gray-400">
                        {selectedImage.name} ({Math.round(selectedImage.size / 1024)} KB)
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                {imagePreview && !result && !isAnalyzing && (
                  <button
                    onClick={analyzeImage}
                    className="cyber-btn w-full"
                  >
                    Analyze Image
                  </button>
                )}
                
                {isAnalyzing && (
                  <div className="text-center p-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-cyber-green border-r-2"></div>
                    <p className="text-cyber-light-green mt-3">AI analyzing image for manipulations...</p>
                  </div>
                )}
                
                {result && (
                  <div className="space-y-6 mt-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Manipulation Detection</span>
                        <span className={`font-medium ${result.manipulated ? 'text-red-500' : 'text-cyber-green'}`}>
                          {result.confidenceScore.toFixed(1)}% {result.manipulated ? 'Likelihood of Manipulation' : 'Authentic'}
                        </span>
                      </div>
                      <div className="w-full bg-cyber-black rounded-full h-2.5 border border-cyber-green/20">
                        <div 
                          className={`h-2.5 rounded-full ${result.manipulated ? 'bg-red-500' : 'bg-cyber-green'}`} 
                          style={{ width: `${result.confidenceScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-cyber-green/20 rounded-md bg-cyber-black bg-opacity-70">
                      <h4 className="text-cyber-light-green font-medium mb-2">Analysis Results</h4>
                      <ul className="space-y-1">
                        {result.analysisDetails.map((detail, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {result.manipulated && result.detectedAreas.length > 0 && (
                      <div className="p-4 border border-red-500/30 rounded-md bg-red-900/20">
                        <h4 className="text-red-400 font-medium mb-2">Detected Manipulations</h4>
                        <p className="text-gray-300 text-sm mb-2">
                          The highlighted areas above show regions where potential manipulations were detected.
                        </p>
                        <ul className="space-y-1">
                          {Array.from(new Set(result.detectedAreas.map(area => area.type))).map((type, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-start">
                              <span className="inline-block w-3 h-3 rounded-full mr-2 mt-1" style={{ 
                                backgroundColor: type === 'splicing' ? 'red' : 
                                  type === 'copy-move' ? 'orange' : 
                                  type === 'aiGenerated' ? 'purple' : 'yellow' 
                              }}></span>
                              <span>
                                {type === 'splicing' ? 'Image splicing detected' : 
                                  type === 'copy-move' ? 'Copy-move forgery detected' : 
                                  type === 'aiGenerated' ? 'AI-generated content detected' : 
                                  'Potential steganography detected'}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button onClick={resetDemo} className="cyber-btn w-full">
                      Test Another Image
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm animate-on-scroll opacity-0">
              <p>Note: This is a simplified demo. Our actual image forensics tool uses advanced convolutional neural networks for more accurate detection.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-20 bg-cyber-dark-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <SectionHeading
                title="Applications of Image Forensics"
                subtitle="Our technology has wide-ranging applications across industries requiring image verification."
                centered={true}
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Digital Evidence Verification</h3>
                <p className="text-gray-400">
                  Helps legal teams and law enforcement verify the authenticity of digital evidence in investigations and court proceedings.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Media Authentication</h3>
                <p className="text-gray-400">
                  Allows news organizations and publishers to verify the authenticity of images before publication, combating fake news.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">Insurance Claim Verification</h3>
                <p className="text-gray-400">
                  Helps insurance companies detect fraudulent claims by analyzing submitted images for tampering or manipulation.
                </p>
              </div>
              
              <div className="bg-cyber-black p-6 rounded-lg border border-cyber-green/20 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-cyber-light-green mb-3">AI-Generated Content Detection</h3>
                <p className="text-gray-400">
                  Identifies deepfakes and AI-generated images, protecting against identity fraud and misinformation campaigns.
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
            <h2 className="text-3xl font-bold text-white mb-6">Enhance Your Digital Forensics Capabilities</h2>
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

export default ImageForensics;
