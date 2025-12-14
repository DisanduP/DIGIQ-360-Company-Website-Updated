import { Award, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to achieve their goals.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable results and ROI.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjU2NDM2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">About DIGIQ 360</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                We are a creative technology agency dedicated to helping
                businesses thrive in the digital age. With over a decade of
                experience, we've partnered with startups, enterprises, and
                everything in between.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our team of designers, developers, and strategists work together
                to create innovative solutions that drive real business results.
                We believe in the power of technology to transform businesses
                and create meaningful experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg">{value.title}</h4>
                    <p className="text-sm text-foreground/70">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
