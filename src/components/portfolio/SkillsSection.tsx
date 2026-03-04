import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "Computer Vision", "NLP", "RAG", "LLMs", "MediaPipe", "Reinforcement Learning"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend & DB",
    skills: ["FastAPI", "Flask", "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Streamlit", "Socket.IO", "JWT", "WebSockets", "Git"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50"
              >
                <h3 className="font-display font-semibold text-sm text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
