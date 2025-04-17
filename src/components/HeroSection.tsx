
import { Button } from "@/components/ui/button";
import { ArrowRight, AudioLines, FileAudio, FileVideo } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-forensic-DEFAULT to-forensic-secondary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 rounded-full border-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 rounded-full border-white"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-2 rounded-full border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
            Advanced Audio & Video Forensic Analysis
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg animate-fadeInUp animation-delay-200">
            Discover the cutting-edge technologies and methodologies used to analyze, authenticate, and enhance audio and video evidence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
            <Button asChild className="bg-forensic-accent hover:bg-forensic-highlight text-white rounded-md">
              <Link to="/technologies">
                Explore Technologies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                <AudioLines className="text-forensic-highlight mb-3 h-10 w-10" />
                <h3 className="text-white font-medium">Audio Analysis</h3>
                <p className="text-sm text-gray-300 mt-2">Forensic examination of audio files</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                <FileVideo className="text-forensic-highlight mb-3 h-10 w-10" />
                <h3 className="text-white font-medium">Video Analysis</h3>
                <p className="text-sm text-gray-300 mt-2">Detailed video evidence examination</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                <FileAudio className="text-forensic-highlight mb-3 h-10 w-10" />
                <h3 className="text-white font-medium">Authentication</h3>
                <p className="text-sm text-gray-300 mt-2">Verify media authenticity</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                <svg className="text-forensic-highlight mb-3 h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="1" fill="currentColor"/>
                </svg>
                <h3 className="text-white font-medium">Enhancement</h3>
                <p className="text-sm text-gray-300 mt-2">Improve media quality for analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
