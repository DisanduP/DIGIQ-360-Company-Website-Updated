import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@digiq360.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70">
            Ready to start your next project? Let's talk about how we can help
            you achieve your digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-4">Contact Information</h3>
              <p className="text-foreground/70 mb-6">
                Fill out the form or reach out to us directly. We'll get back to
                you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 bg-white shadow-md">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">
                          {info.label}
                        </div>
                        <div className="text-foreground">{info.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="pt-4">
              <h4 className="mb-4">Office Hours</h4>
              <div className="space-y-2 text-foreground/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-input-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
