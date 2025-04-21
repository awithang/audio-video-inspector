import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1A1F2C] text-white py-4 shadow-md sticky top-0 z-50"> {/* solid dark bg */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-forensic-accent flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 14L12 12L8 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold hidden sm:inline-block">ForensicTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-forensic-highlight transition-colors">Home</Link>
            <Link to="/technologies" className="font-medium hover:text-forensic-highlight transition-colors">Technologies</Link>
            <Link to="/case-studies" className="font-medium hover:text-forensic-highlight transition-colors">Case Studies</Link>
            <Link to="/resources" className="font-medium hover:text-forensic-highlight transition-colors">Resources</Link>
            <Link to="/about" className="font-medium hover:text-forensic-highlight transition-colors">About</Link>
            <Button variant="outline" className="border-forensic-accent text-forensic-accent hover:bg-forensic-accent hover:text-white">
              <Search className="w-4 h-4 mr-2" /> Search
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-forensic-secondary" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-forensic-secondary rounded-md py-2 px-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="py-2 hover:text-forensic-highlight transition-colors">Home</Link>
              <Link to="/technologies" className="py-2 hover:text-forensic-highlight transition-colors">Technologies</Link>
              <Link to="/case-studies" className="py-2 hover:text-forensic-highlight transition-colors">Case Studies</Link>
              <Link to="/resources" className="py-2 hover:text-forensic-highlight transition-colors">Resources</Link>
              <Link to="/about" className="py-2 hover:text-forensic-highlight transition-colors">About</Link>
              <div className="pt-2">
                <Button variant="outline" className="w-full border-forensic-accent text-forensic-accent hover:bg-forensic-accent hover:text-white">
                  <Search className="w-4 h-4 mr-2" /> Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
