
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MatrixBackground from '../ui/MatrixBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MatrixBackground />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
