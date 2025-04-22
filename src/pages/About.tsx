
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Building, MapPin, Trophy, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-forensic-DEFAULT to-forensic-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About ForensicTech
              </h1>
              <p className="text-lg max-w-3xl mx-auto opacity-90">
                Leading providers of advanced audio and video forensic analysis technologies and services for legal and investigative professionals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-forensic-DEFAULT mb-6">Our Mission</h2>
                <p className="text-lg text-forensic-secondary mb-6">
                  At ForensicTech, we're dedicated to advancing the science of audio and video forensics through innovative technology, rigorous methodology, and unwavering commitment to truth and accuracy.
                </p>
                <p className="text-lg text-forensic-secondary mb-6">
                  Our team of expert analysts, engineers, and researchers work tirelessly to develop cutting-edge tools and techniques that help legal and investigative professionals reveal the truth hidden within digital media evidence.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forensic-accent/10 flex items-center justify-center text-forensic-accent">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-forensic-DEFAULT">15+ Years</p>
                      <p className="text-sm text-forensic-secondary">of Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forensic-accent/10 flex items-center justify-center text-forensic-accent">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-forensic-DEFAULT">500+</p>
                      <p className="text-sm text-forensic-secondary">Clients Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forensic-accent/10 flex items-center justify-center text-forensic-accent">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-forensic-DEFAULT">30+</p>
                      <p className="text-sm text-forensic-secondary">Industry Awards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forensic-accent/10 flex items-center justify-center text-forensic-accent">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-forensic-DEFAULT">75+</p>
                      <p className="text-sm text-forensic-secondary">Research Papers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                    alt="ForensicTech headquarters"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-3">
                  <MapPin className="text-forensic-accent" />
                  <span className="font-medium">Headquartered in New York, USA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Chief Executive Officer",
                  bio: "PhD in Digital Signal Processing with 20+ years of experience in audio forensics and leadership.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Chief Technology Officer",
                  bio: "Former FBI forensic expert with expertise in developing video enhancement algorithms.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Dr. James Wilson",
                  role: "Director of Research",
                  bio: "Leading researcher in AI-based audio authentication with multiple patents to his name.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                },
              ].map((person, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={person.image} alt={person.name} />
                        <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl text-center text-forensic-DEFAULT">{person.name}</CardTitle>
                    <CardDescription className="text-center text-forensic-accent font-medium">
                      {person.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-forensic-secondary text-center">{person.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-forensic-DEFAULT mb-6">Join Our Team</h2>
            <p className="text-lg text-forensic-secondary max-w-3xl mx-auto mb-8">
              We're always looking for talented professionals who are passionate about forensic technology and innovation. Explore our current openings and become part of our mission.
            </p>
            <Button asChild className="bg-forensic-accent hover:bg-forensic-highlight">
              <Link to="/careers">View Career Opportunities</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
