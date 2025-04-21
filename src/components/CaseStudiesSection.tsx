
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Audio Tampering Detection in Legal Evidence",
    description:
      "How forensic audio analysis revealed evidence tampering in a high-profile court case, identifying edited sections and recovered original recordings.",
    category: "Audio Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Video Enhancement for Surveillance Footage",
    description:
      "Enhancement techniques applied to low-quality CCTV footage helped identify suspects in a robbery case by improving resolution and clarity.",
    category: "Video Enhancement",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Voice Identification in Anonymous Threats",
    description:
      "How voice biometrics and acoustic analysis techniques were used to identify the source of anonymous threatening messages.",
    category: "Speech Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forensic-DEFAULT mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-forensic-secondary max-w-3xl mx-auto">
            Real-world applications of audio and video forensic technologies that have made a difference in investigations and legal proceedings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <span className="text-sm font-medium text-forensic-accent px-2 py-1 bg-forensic-accent/10 rounded-full">
                    {study.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-forensic-DEFAULT">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forensic-secondary">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-forensic-accent hover:text-forensic-DEFAULT hover:bg-forensic-accent/10 p-0"
                >
                  Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-forensic-DEFAULT hover:bg-forensic-secondary">
            <Link to="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

