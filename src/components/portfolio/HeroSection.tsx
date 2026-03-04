import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Open to AI/ML Engineer roles
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Abisha K M</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">AI & Full-Stack Developer</span> | Building intelligent web applications and real-world ML solutions
          </p>
          <p className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-1">
            <MapPin size={14} /> Gummidipoondi, Tamil Nadu, India
          </p>

          {/* Stat highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-6 mb-10 px-6 py-3 rounded-2xl glass"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">97%</div>
              <div className="text-xs text-muted-foreground">CNN Accuracy</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">10+</div>
              <div className="text-xs text-muted-foreground">AI Projects</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">5+</div>
              <div className="text-xs text-muted-foreground">Hackathons</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-colors inline-flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a href="https://github.com/Abishakm1507" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abisha-k-m-4a4906290" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:abishakm1507@gmail.com" className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
