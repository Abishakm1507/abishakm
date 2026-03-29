import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Code, Globe, Target } from "lucide-react";

const specializations = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Deep Learning, Computer Vision, NLP, RAG, LLMs" },
  { icon: Code, title: "Full-Stack Development", desc: "React, FastAPI, Node.js, PostgreSQL" },
  { icon: Globe, title: "Global Aspirations", desc: "Pursuing JLPT N3 · Japan's AI ecosystem" },
];

const stats = [
  { value: 10, suffix: "+", label: "AI Projects" },
  { value: 5, suffix: "+", label: "Hackathons" },
  { value: 3, suffix: "", label: "Internships" },
];

const AnimatedCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Artificial Intelligence & Data Science student (RMK Engineering College, 2023–2027) passionate about turning cutting-edge AI into real-world solutions. Multiple hackathon winner/finalist with strong expertise in Computer Vision, LLMs, RAG, and healthcare AI.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl text-sm">
            My standout work includes a <span className="text-primary font-semibold">CNN-based Plant Disease Detection system achieving 97% accuracy</span> and multiple real-time AI-powered applications. I value clean architecture, performance optimization, and practical deployment.
          </p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 rounded-2xl glass"
          >
            {stats.map((s) => (
              <AnimatedCounter key={s.label} {...s} />
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-6 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
