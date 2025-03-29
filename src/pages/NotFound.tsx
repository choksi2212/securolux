
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Shield } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-16 pb-32">
        <div className="text-center max-w-lg px-4">
          <Shield className="h-20 w-20 text-cyber-green mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-6xl font-bold text-cyber-green mb-6">404</h1>
          <h2 className="text-2xl font-bold text-cyber-light-green mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the home page.
          </p>
          <Link to="/" className="cyber-btn">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
