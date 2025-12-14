import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/70">
                Creative Technology Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              Transform Your{" "}
              <span className="text-primary">Digital Vision</span> Into Reality
            </h1>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              We're a creative technology agency that builds innovative digital
              experiences. From web design to full-stack development, we bring
              your ideas to life with cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-primary">150+</div>
                <div className="text-sm text-foreground/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl text-primary">50+</div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl text-primary">10+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1759143545924-0ea00615a054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc2NTcwMTM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
