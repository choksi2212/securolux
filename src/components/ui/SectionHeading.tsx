
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}) => {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-cyber-light-green'} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-cyber-green rounded ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
