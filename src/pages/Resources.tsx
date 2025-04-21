
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent,

  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ArrowRight, Download, FileText, Video, Headphones, BookOpen } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const resources = [
  {
    title: "Audio Forensic Analysis Guide",
    description: "A comprehensive guide to audio forensic techniques, methodologies, and best practices for investigators.",
    type: "PDF Guide",
    icon: FileText,
    url: "#",
  },
  {
    title: "Video Enhancement Techniques Webinar",
    description: "Recorded webinar demonstrating advanced video enhancement techniques for surveillance footage.",
    type: "Video",
    icon: Video,
    url: "#",
  },
  {
    title: "Voice Identification Methodology",
    description: "Technical paper on current methodologies for voice identification and speaker recognition in forensic contexts.",
    type: "Research Paper",
    icon: Headphones,
    url: "#",
  },
  {
    title: "Forensic Technology Standards Handbook",
    description: "Official handbook outlining international standards and protocols for forensic technology applications.",
    type: "Handbook",
    icon: BookOpen,
    url: "#",
  },
  {
    title: "Audio Authentication Toolkit",
    description: "Open-source software toolkit for basic audio authentication and analysis tasks.",
    type: "Software",
    icon: Download,
    url: "#",
  },
  {
    title: "Video Evidence Best Practices",
    description: "Guidelines for handling, processing, and presenting video evidence in legal proceedings.",
    type: "Guidelines",
    icon: FileText,
    url: "#",
  },
];

const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
  const Icon = resource.icon;
  
  return (
    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-card">
      <CardHeader className="pb-2">
        <div className="mb-3 w-12 h-12 rounded-full bg-forensic-accent/10 flex items-center justify-center text-forensic-accent">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl text-forensic-DEFAULT">{resource.title}</CardTitle>
        <div className="mt-1">
          <span className="text-sm font-medium text-forensic-accent px-2 py-1 bg-forensic-accent/10 rounded-full">
            {resource.type}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <CardDescription className="text-forensic-secondary">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-forensic-accent hover:text-forensic-DEFAULT hover:bg-forensic-accent/10 p-0">
          Access resource <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-[#1A1F2C] to-forensic-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center text-forensic-light">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Forensic Resources
              </h1>
              <p className="text-lg max-w-3xl mx-auto opacity-90 text-gray-200">
                Access our collection of guides, research papers, software tools, and educational materials for audio and video forensic professionals.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-[#23283a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
            
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
