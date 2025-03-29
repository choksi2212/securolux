
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import KeystrokeDynamics from "./pages/KeystrokeDynamics";
import Firewall from "./pages/Firewall";
import PasswordAnalyzer from "./pages/PasswordAnalyzer";
import ImageForensics from "./pages/ImageForensics";
import About from "./pages/About";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/keystroke" element={<KeystrokeDynamics />} />
          <Route path="/firewall" element={<Firewall />} />
          <Route path="/password" element={<PasswordAnalyzer />} />
          <Route path="/forensics" element={<ImageForensics />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
