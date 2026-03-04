import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "Computer Vision", level: 88 },
      { name: "NLP / RAG / LLMs", level: 85 },
      { name: "MediaPipe", level: 80 },
      { name: "Reinforcement Learning", level: 70 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Node.js / Express", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 88 },
      { name: "Streamlit", level: 85 },
      { name: "WebSockets", level: 78 },
    ],
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                <h3 className="font-display font-semibold text-sm text-primary mb-5">{cat.title}</h3>
                <div className="space-y-3.5">
                  {cat.skills.map((skill, j) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08 + j * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
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
