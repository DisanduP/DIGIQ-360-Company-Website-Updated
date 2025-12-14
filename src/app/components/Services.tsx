import { Code2, Palette, Smartphone, Globe, Database, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed to enhance user experience and drive engagement.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies to help your business thrive in the online world.",
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and backend services to power your applications.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description:
      "End-to-end product development from concept to launch and beyond.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70">
            We offer a comprehensive range of digital services to help your
            business succeed in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
