import { motion } from "framer-motion";
import { Brain, Code, Globe } from "lucide-react";

const specializations = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Deep Learning, Computer Vision, NLP, RAG, LLMs" },
  { icon: Code, title: "Full-Stack Development", desc: "React, FastAPI, Node.js, PostgreSQL" },
  { icon: Globe, title: "Global Aspirations", desc: "Pursuing JLPT N3 · Japan's AI ecosystem" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Artificial Intelligence & Data Science student focused on designing intelligent systems that solve real-world problems with efficiency and precision. Through hands-on internships as a Full Stack Developer and AI Engineer, I have built scalable web applications and production-ready machine learning models.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{s.title}</h3>
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
