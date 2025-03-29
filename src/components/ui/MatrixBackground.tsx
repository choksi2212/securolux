
import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Matrix chars
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    // Get container dimensions
    const container = containerRef.current;
    const width = container.offsetWidth;
    
    // Create columns
    const numberOfColumns = Math.floor(width / 20); // Adjust for density
    
    // Remove any existing columns
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Create each column
    for (let i = 0; i < numberOfColumns; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${i * 20}px`; // Adjust for even spacing
      column.style.animationDelay = `${Math.random() * 15}s`; // Random delay
      column.style.animationDuration = `${15 + Math.random() * 10}s`; // Random duration
      
      // Create random matrix characters
      const charCount = 15 + Math.floor(Math.random() * 15); // Random length
      for (let j = 0; j < charCount; j++) {
        const char = document.createElement('div');
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.opacity = `${Math.random() * 0.8 + 0.2}`; // Random opacity
        column.appendChild(char);
      }
      
      container.appendChild(column);
    }
    
    // Recreate on window resize
    const handleResize = () => {
      if (containerRef.current) {
        // Clear existing columns on resize
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        
        // Create new columns
        const newWidth = containerRef.current.offsetWidth;
        const newNumberOfColumns = Math.floor(newWidth / 20);
        
        for (let i = 0; i < newNumberOfColumns; i++) {
          const column = document.createElement('div');
          column.className = 'matrix-column';
          column.style.left = `${i * 20}px`;
          column.style.animationDelay = `${Math.random() * 15}s`;
          column.style.animationDuration = `${15 + Math.random() * 10}s`;
          
          const charCount = 15 + Math.floor(Math.random() * 15);
          for (let j = 0; j < charCount; j++) {
            const char = document.createElement('div');
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.opacity = `${Math.random() * 0.8 + 0.2}`;
            column.appendChild(char);
          }
          
          containerRef.current.appendChild(column);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="matrix-background" />;
};

export default MatrixBackground;
