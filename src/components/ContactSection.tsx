
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-forensic-DEFAULT mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-forensic-secondary mb-8 max-w-lg">
              Have questions about audio or video forensics? Need expert consultation for your case? Our team of specialists is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-forensic-accent/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-forensic-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-forensic-DEFAULT">Email Us</h3>
                  <p className="text-forensic-secondary">info@forensictech.com</p>
                  <p className="text-forensic-secondary">support@forensictech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-forensic-accent/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-forensic-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-forensic-DEFAULT">Call Us</h3>
                  <p className="text-forensic-secondary">+1 (555) 123-4567</p>
                  <p className="text-forensic-secondary">+1 (555) 765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-forensic-accent/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-forensic-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-forensic-DEFAULT">Visit Us</h3>
                  <p className="text-forensic-secondary">123 Forensic Avenue</p>
                  <p className="text-forensic-secondary">Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-forensic-DEFAULT mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-forensic-DEFAULT">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="border-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-forensic-DEFAULT">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-forensic-DEFAULT">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="border-gray-300" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-forensic-DEFAULT">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="border-gray-300 min-h-[150px]" />
              </div>

              <Button className="w-full md:w-auto bg-forensic-DEFAULT hover:bg-forensic-secondary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

