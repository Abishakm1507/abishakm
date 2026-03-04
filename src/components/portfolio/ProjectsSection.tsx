import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Plant Disease Detection",
    desc: "CNN model achieving 97% accuracy for leaf disease classification in sustainable agriculture.",
    tech: ["TensorFlow", "Keras", "Streamlit"],
    repo: "https://github.com/Abishakm1507/Plant-Disease-Detection-System-for-Sustainable-Agriculture",
    featured: true,
    accuracy: "97%",
  },
  {
    title: "RAG PDF Q&A System",
    desc: "FastAPI-based Retrieval-Augmented Generation for PDF Q&A using FAISS + Groq LLaMA 3.3.",
    tech: ["FastAPI", "FAISS", "Docker", "Groq"],
    repo: "https://github.com/Abishakm1507/RAG",
    featured: true,
  },
  {
    title: "AI Fitness Trainer",
    desc: "Real-time posture analysis with TensorFlow MoveNet, auto rep counting, and voice feedback.",
    tech: ["React", "TensorFlow.js", "Supabase"],
    repo: "https://github.com/Abishakm1507/ai-fitness-trainer",
    featured: true,
  },
  {
    title: "VitalsLens",
    desc: "Touchless vital signs monitoring (HR, SpO₂, respiratory rate) using smartphone camera rPPG.",
    tech: ["React", "TensorFlow.js", "MediaPipe"],
    repo: "https://github.com/Abishakm1507/VitalsLens",
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    desc: "ATS score calculation, skill-gap analysis, and improvement suggestions using NLP + TF-IDF.",
    tech: ["React", "Flask", "Scikit-learn", "spaCy"],
    repo: "https://github.com/Abishakm1507/AI-Resume-Analyzer",
  },
  {
    title: "GeminiHire",
    desc: "AI job assistant with resume analysis, cover-letter generation, and interview prep.",
    tech: ["React", "Supabase", "Gemini API"],
    repo: "https://github.com/Abishakm1507/GeminiHire",
  },
  {
    title: "AI Speaking Coach",
    desc: "Real-time speech analysis and feedback powered by Gemini AI.",
    tech: ["React", "TypeScript", "Gemini API"],
    repo: "https://github.com/Abishakm1507/ai-speaking-coach",
  },
  {
    title: "Real-Time Chat App",
    desc: "Full-stack real-time chat with JWT auth and WebSocket communication.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    repo: "https://github.com/Abishakm1507/chat_app",
  },
  {
    title: "AI Metro Scheduler",
    desc: "AI optimizer for Kochi Metro operations using Random Forest + Q-Learning.",
    tech: ["FastAPI", "Streamlit", "Random Forest"],
    repo: "https://github.com/Abishakm1507/ai-train-induction-planning-and-scheduling",
  },
  {
    title: "YouTube Transcriber",
    desc: "Transcript extraction with structured Gemini-powered summaries.",
    tech: ["Python", "Streamlit", "Gemini"],
    repo: "https://github.com/Abishakm1507/YouTube-Video-Transcriber",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            AI-powered applications solving real-world problems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative p-6 rounded-xl border border-border/50 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 ${
                  project.featured ? "ring-1 ring-primary/20" : ""
                }`}
              >
                {project.accuracy && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    <Star size={12} /> {project.accuracy}
                  </div>
                )}
                {project.featured && !project.accuracy && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Featured</span>
                  </div>
                )}

                <h3 className="font-display font-semibold text-lg mb-2 pr-16">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> View on GitHub <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
