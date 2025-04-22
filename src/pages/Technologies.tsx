
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologiesSection from "@/components/TechnologiesSection";
import { Button } from "@/components/ui/button";
import { FileAudio2, FileVideo2, Fingerprint } from "lucide-react";

const Technologies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-forensic-DEFAULT to-forensic-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">Forensic Technologies</h1>
              <p className="text-xl text-gray-200 mb-8 animate-fadeInUp animation-delay-200">
                Our comprehensive suite of audio and video forensic technologies provides cutting-edge solutions for evidence examination, authentication, and enhancement.
              </p>
            </div>
          </div>
        </section>

        {/* Main Technology Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <FileAudio2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Audio Forensics</h2>
                <p className="text-forensic-secondary mb-6">
                  Specialized techniques for audio enhancement, authentication, and analysis to extract critical evidence from audio recordings.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <FileVideo2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Forensics</h2>
                <p className="text-forensic-secondary mb-6">
                  Advanced video analysis tools for enhancement, frame-by-frame examination, and authentication of video evidence.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                  <Fingerprint size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication</h2>
                <p className="text-forensic-secondary mb-6">
                  Tools and methodologies to verify the authenticity of digital media and detect signs of tampering or manipulation.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Technologies List */}
        <TechnologiesSection />

        {/* Equipment Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                State-of-the-Art Equipment
              </h2>
              <p className="text-lg text-forensic-secondary max-w-3xl mx-auto">
                Our laboratory uses the latest equipment and software to ensure the most accurate and reliable forensic analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                    alt="Audio Analysis Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Audio Analysis Suite</h3>
                  <p className="text-forensic-secondary mb-4">
                    Professional-grade equipment for capturing, processing, and analyzing audio evidence with precision.
                  </p>
                  <ul className="space-y-2 text-forensic-secondary">
                    <li>• High-definition audio recording equipment</li>
                    <li>• Spectral analysis software</li>
                    <li>• Advanced noise reduction tools</li>
                    <li>• Voice biometric systems</li>
                    <li>• Multi-channel audio processing stations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                    alt="Video Analysis Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Video Processing Laboratory</h3>
                  <p className="text-forensic-secondary mb-4">
                    Cutting-edge video analysis tools and software for detailed examination of video evidence.
                  </p>
                  <ul className="space-y-2 text-forensic-secondary">
                    <li>• 4K+ resolution capture and processing</li>
                    <li>• Frame-by-frame analysis software</li>
                    <li>• Video enhancement workstations</li>
                    <li>• Forensic image comparison tools</li>
                    <li>• AI-assisted object recognition systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;
