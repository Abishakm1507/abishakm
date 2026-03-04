import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer Intern",
    org: "Impacteers, Chennai",
    period: "May 2025 – July 2025",
    points: [
      "Built real-time chat app with React, Next.js, Node.js, PostgreSQL + WebSocket",
      "Implemented JWT auth + role-based authorization",
      "Optimized API performance; load testing with JMeter",
    ],
  },
  {
    type: "work",
    title: "AI Engineer",
    org: "TechSaksham",
    period: "Dec 2024 – Jan 2025",
    points: [
      "Developed CNN Plant Disease Detection system (97% accuracy)",
      "Applied image preprocessing, augmentation, feature extraction",
      "Built & deployed interactive Streamlit web interface",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer Intern",
    org: "Bharat Intern",
    period: "Aug 2024 – Sep 2024",
    points: [
      "Built secure web apps using HTML/CSS/JS, Node.js, MongoDB",
      "Registration system + personal finance tracker with full CRUD",
    ],
  },
  {
    type: "edu",
    title: "B.Tech – AI & Data Science",
    org: "R.M.K Engineering College",
    period: "Sep 2023 – Jun 2027 (Expected)",
    points: [],
  },
  {
    type: "edu",
    title: "HSC – Computer Science with Maths",
    org: "Velammal Matric Hr. Sec. School",
    period: "2023",
    points: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Experience & <span className="text-gradient">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title + exp.org}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    {exp.type === "work" ? (
                      <Briefcase size={18} className="text-primary-foreground" />
                    ) : (
                      <GraduationCap size={18} className="text-primary-foreground" />
                    )}
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50">
                    <span className="text-xs font-medium text-primary">{exp.period}</span>
                    <h3 className="font-display font-semibold text-lg mt-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.org}</p>
                    {exp.points.length > 0 && (
                      <ul className="space-y-1.5">
                        {exp.points.map((p, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span> {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
