
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, link, delay = 0 }: FeatureCardProps) => {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <Link
      to={link}
      className="cyber-card group flex flex-col items-center justify-between h-full"
      style={{ animationDelay }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-cyber-dark-green bg-opacity-30 border border-cyber-green/30 group-hover:border-cyber-green/60 transition-all duration-300">
          <Icon className="h-8 w-8 text-cyber-green group-hover:text-cyber-neon-green transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-cyber-light-green group-hover:text-cyber-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>
      <div className="mt-6 w-full">
        <span className="inline-flex items-center text-cyber-green text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          Learn more
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
