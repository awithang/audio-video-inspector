
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Calendar } from "lucide-react";

const caseStudies = [
  {
    title: "Voice Identification in Anonymous Threat Case",
    summary: "How forensic audio analysis identified a suspect from anonymous threatening voice messages.",
    date: "June 15, 2023",
    category: "Audio Analysis",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    fullDescription: "In this high-profile case, our forensic team was able to use advanced voice biometrics and spectrographic analysis to match anonymous threatening voicemails to a suspect. The analysis revealed distinct speech patterns and background noise that provided crucial evidence in the case."
  },
  {
    title: "Authentication of Alleged Tampered CCTV Footage",
    summary: "Analysis revealing manipulation in security footage used as court evidence.",
    date: "August 23, 2023",
    category: "Video Authentication",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    fullDescription: "When defense attorneys questioned the authenticity of security camera footage in a robbery case, our forensic analysis uncovered evidence of frame manipulation. Through detailed examination of metadata, compression artifacts, and frame timing, we demonstrated that specific sections of the video had been altered."
  },
  {
    title: "Audio Enhancement in Kidnapping Investigation",
    summary: "Recovering crucial dialogue from poor-quality ransom call recording.",
    date: "March 10, 2023",
    category: "Audio Enhancement",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    fullDescription: "When investigators received a low-quality ransom call recording in a kidnapping case, our team used specialized audio enhancement techniques to improve clarity. By isolating speech frequencies and removing background noise, we were able to recover key details that led to the victim's location."
  },
  {
    title: "License Plate Recovery from Low-Resolution Footage",
    summary: "Advanced image processing techniques revealed obscured vehicle information.",
    date: "October 5, 2023",
    category: "Video Enhancement",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    fullDescription: "Using state-of-the-art super-resolution algorithms and frame integration techniques, our team successfully recovered license plate information from low-quality surveillance footage. This breakthrough provided investigators with crucial evidence in a hit-and-run case that had previously gone cold."
  },
  {
    title: "Authentication of Police Body Camera Footage",
    summary: "Verification of unedited body camera video for court proceedings.",
    date: "January 17, 2023",
    category: "Video Authentication",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    fullDescription: "In a case involving contested police body camera footage, our forensic team conducted a comprehensive authentication analysis. By examining file structure, metadata, and frame continuity, we were able to verify that the footage had not been altered, providing crucial evidence for the court proceedings."
  },
  {
    title: "Gunshot Acoustic Analysis in Murder Trial",
    summary: "Forensic examination of recorded gunshots helped determine shooting sequence.",
    date: "May 30, 2023",
    category: "Audio Analysis",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    fullDescription: "By analyzing the acoustic signatures of recorded gunshots in a murder case, our team was able to determine the precise timing, sequence, and likely positions of multiple shooters. This analysis contradicted witness testimony and provided crucial evidence that changed the direction of the investigation."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-forensic-DEFAULT to-forensic-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">Case Studies</h1>
              <p className="text-xl text-gray-200 mb-8 animate-fadeInUp animation-delay-200">
                Real-world applications of our forensic technologies that have made a difference in investigations and legal proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"
                  alt="Featured Case Study"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="mb-2">
                  <span className="text-sm font-medium text-forensic-accent px-3 py-1 bg-forensic-accent/10 rounded-full">
                    Featured Case
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Audio Tampering Detection in Legal Evidence
                </h2>
                <p className="text-lg text-forensic-secondary mb-6">
                  In a prominent legal case, our team was tasked with analyzing audio evidence that was suspected of being manipulated. Using advanced spectral analysis and audio authentication techniques, we identified several instances of tampering that were not evident to the human ear.
                </p>
                <p className="text-forensic-secondary mb-8">
                  Our findings revealed that specific sections of the recording had been spliced together from different sources, altering the context of the conversation. This discovery was pivotal in the case, leading to the evidence being dismissed and a reconsideration of other testimonies.
                </p>
                <Button className="bg-gray-800 hover:bg-forensic-secondary">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">More Case Studies</h2>
              <p className="text-lg text-forensic-secondary max-w-3xl mx-auto">
                Explore our portfolio of successful forensic analysis projects across a variety of scenarios and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-forensic-accent px-2 py-1 bg-forensic-accent/10 rounded-full">
                        {study.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        {study.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-forensic-DEFAULT">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-forensic-secondary">{study.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-forensic-accent hover:text-forensic-DEFAULT hover:bg-forensic-accent/10 p-0 flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Read case study
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
