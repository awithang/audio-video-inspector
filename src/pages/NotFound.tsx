
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-[#23283a] py-16">
        <div className="text-center px-4">
          <div className="mb-6 inline-block">
            <div className="relative">
              <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-forensic-accent to-forensic-highlight">404</div>
              <div className="absolute -top-4 -right-4 bg-forensic-accent text-white text-sm px-3 py-1 rounded-full">
                Page Not Found
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oops! This page doesn't exist</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-forensic-accent hover:bg-forensic-highlight">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild className="border-forensic-accent text-forensic-accent hover:bg-forensic-accent/10">
              <Link to="/">Search Resources</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
