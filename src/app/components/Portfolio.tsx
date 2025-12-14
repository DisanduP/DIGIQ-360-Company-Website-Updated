import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NzMyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1686749115547-897913fe1b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwdXJwbGV8ZW58MXx8fHwxNzY1NzEzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "API", "Security"],
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1759143545924-0ea00615a054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc2NTcwMTM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Analytics", "Design", "Cloud"],
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjU2NDM2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Branding", "Design", "Strategy"],
  },
  {
    title: "AI-Powered CRM",
    category: "Enterprise Solution",
    image: "https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NzMyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI", "Machine Learning", "CRM"],
  },
  {
    title: "Social Media Platform",
    category: "Web & Mobile",
    image: "https://images.unsplash.com/photo-1686749115547-897913fe1b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwdXJwbGV8ZW58MXx8fHwxNzY1NzEzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Full-Stack", "Real-time", "Scalable"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Work</h2>
          <p className="text-lg text-foreground/70">
            Explore our portfolio of successful projects that have helped
            businesses transform digitally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="text-sm text-primary">{project.category}</div>
                <h3 className="text-xl">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
