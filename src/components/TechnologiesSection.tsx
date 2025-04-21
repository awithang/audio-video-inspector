
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileAudio2, FileVideo2, AudioLines, Camera, ZoomIn, Volume2, Fingerprint, PenTool } from "lucide-react";

const technologies = [
  {
    title: "Audio Enhancement",
    description: "Advanced filtering and processing techniques to improve audio clarity and isolate sounds of interest.",
    icon: Volume2,
    category: "audio",
  },
  {
    title: "Audio Authentication",
    description: "Identify signs of tampering, editing, or anomalies in audio recordings through spectral analysis.",
    icon: AudioLines,
    category: "audio",
  },
  {
    title: "Speech Recognition",
    description: "Convert spoken words to text and identify speakers using voice biometric technologies.",
    icon: FileAudio2,
    category: "audio",
  },
  {
    title: "Video Enhancement",
    description: "Improve video quality, reduce noise, and correct distortions to reveal critical details.",
    icon: Camera,
    category: "video",
  },
  {
    title: "Video Authentication",
    description: "Detect signs of manipulation or editing in video evidence using forensic analysis tools.",
    icon: FileVideo2,
    category: "video",
  },
  {
    title: "Image Analysis",
    description: "Extract detailed information from video frames using advanced imaging techniques.",
    icon: ZoomIn,
    category: "video",
  },
  {
    title: "Metadata Analysis",
    description: "Extract and analyze hidden data within media files to establish timeline and source information.",
    icon: Fingerprint,
    category: "both",
  },
  {
    title: "Digital Reconstruction",
    description: "Recreate scenes or events based on forensic audio and video evidence.",
    icon: PenTool,
    category: "both",
  },
];

const TechnologiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forensic-DEFAULT mb-4">
            Forensic Technologies
          </h2>
          <p className="text-lg text-forensic-secondary max-w-3xl mx-auto">
            Explore the cutting-edge tools and methodologies used by forensic experts to analyze audio and video evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-forensic-accent"
            >
              <CardHeader className="pb-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    tech.category === "audio"
                      ? "bg-blue-100 text-blue-600"
                      : tech.category === "video"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <tech.icon size={24} />
                </div>
                <CardTitle className="text-forensic-DEFAULT">{tech.title}</CardTitle>
                <CardDescription className="text-sm">
                  {tech.category === "audio" && "Audio Technology"}
                  {tech.category === "video" && "Video Technology"}
                  {tech.category === "both" && "Combined Technology"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-forensic-secondary">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

