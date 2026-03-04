import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Plant Disease Detection",
    desc: "CNN model achieving 97% accuracy for leaf disease classification in sustainable agriculture.",
    fullDescription: "A deep learning system using Convolutional Neural Networks to detect and classify plant leaf diseases from images. The model was trained on a large dataset of diseased and healthy plant leaves, achieving a remarkable 97% accuracy rate. Deployed via Streamlit for real-time predictions.",
    tech: ["TensorFlow", "Keras", "Streamlit", "Python"],
    repo: "https://github.com/Abishakm1507/Plant-Disease-Detection-System-for-Sustainable-Agriculture",
    featured: true,
    accuracy: "97%",
    category: "AI/ML",
    features: [
      "97% classification accuracy on test dataset",
      "Real-time image upload and prediction",
      "Data augmentation pipeline for robust training",
      "Interactive Streamlit web interface",
    ],
    challenges: [
      "Handling class imbalance across disease categories",
      "Optimizing model size for deployment",
      "Building an intuitive UI for non-technical farmers",
    ],
  },
  {
    title: "RAG PDF Q&A System",
    desc: "FastAPI-based Retrieval-Augmented Generation for PDF Q&A using FAISS + Groq LLaMA 3.3.",
    fullDescription: "A production-ready RAG system that allows users to upload PDFs and ask natural language questions. Uses FAISS for vector similarity search, SentenceTransformers for embeddings, and Groq's LLaMA 3.3 for generating accurate answers grounded in document context.",
    tech: ["FastAPI", "FAISS", "Docker", "Groq", "Hugging Face"],
    repo: "https://github.com/Abishakm1507/RAG",
    featured: true,
    category: "AI/ML",
    features: [
      "PDF parsing and chunking pipeline",
      "FAISS vector store for fast retrieval",
      "Groq LLaMA 3.3 for answer generation",
      "Dockerized for easy deployment",
    ],
    challenges: [
      "Optimizing chunk sizes for retrieval quality",
      "Reducing hallucinations with context grounding",
      "Handling multi-page PDF documents efficiently",
    ],
  },
  {
    title: "AI Fitness Trainer",
    desc: "Real-time posture analysis with TensorFlow MoveNet, auto rep counting, and voice feedback.",
    fullDescription: "An intelligent fitness companion that uses computer vision to analyze workout form in real-time. Leverages TensorFlow MoveNet for pose estimation, automatically counts reps, and provides live voice feedback to correct posture during exercises.",
    tech: ["React", "TensorFlow.js", "Supabase", "TypeScript"],
    repo: "https://github.com/Abishakm1507/ai-fitness-trainer",
    featured: true,
    category: "AI/ML",
    features: [
      "Real-time pose estimation with MoveNet",
      "Automatic rep counting with accuracy tracking",
      "Live voice feedback for form correction",
      "Workout history stored in Supabase",
    ],
    challenges: [
      "Achieving low-latency pose detection in browser",
      "Defining angle thresholds for correct form",
      "Implementing text-to-speech feedback without lag",
    ],
  },
  {
    title: "VitalsLens",
    desc: "Touchless vital signs monitoring (HR, SpO₂, respiratory rate) using smartphone camera rPPG.",
    fullDescription: "A groundbreaking health monitoring app that measures vital signs (heart rate, SpO₂, respiratory rate) using only the smartphone camera. Uses remote photoplethysmography (rPPG) and signal processing to extract physiological data from facial video.",
    tech: ["React", "TensorFlow.js", "MediaPipe", "TypeScript"],
    repo: "https://github.com/Abishakm1507/VitalsLens",
    featured: true,
    category: "AI/ML",
    features: [
      "Contactless heart rate measurement via camera",
      "SpO₂ estimation using rPPG signals",
      "Respiratory rate detection from subtle movements",
      "Real-time signal processing and visualization",
    ],
    challenges: [
      "Extracting clean PPG signals from noisy video",
      "Calibrating measurements for accuracy",
      "Handling varying lighting conditions",
    ],
  },
  {
    title: "AI Resume Analyzer",
    desc: "ATS score calculation, skill-gap analysis, and improvement suggestions using NLP + TF-IDF.",
    tech: ["React", "Flask", "Scikit-learn", "spaCy"],
    repo: "https://github.com/Abishakm1507/AI-Resume-Analyzer",
    category: "AI/ML",
    features: ["ATS score calculation", "Skill gap analysis", "NLP-powered suggestions"],
  },
  {
    title: "GeminiHire",
    desc: "AI job assistant with resume analysis, cover-letter generation, and interview prep.",
    tech: ["React", "Supabase", "Gemini API", "Tailwind"],
    repo: "https://github.com/Abishakm1507/GeminiHire",
    category: "Full-Stack",
    features: ["Resume parsing and analysis", "AI cover letter generation", "Mock interview preparation"],
  },
  {
    title: "AI Speaking Coach",
    desc: "Real-time speech analysis and feedback powered by Gemini AI.",
    tech: ["React", "TypeScript", "Gemini API", "Vite"],
    repo: "https://github.com/Abishakm1507/ai-speaking-coach",
    category: "AI/ML",
  },
  {
    title: "Real-Time Chat App",
    desc: "Full-stack real-time chat with JWT auth and WebSocket communication.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    repo: "https://github.com/Abishakm1507/chat_app",
    category: "Full-Stack",
  },
  {
    title: "AI Metro Scheduler",
    desc: "AI optimizer for Kochi Metro operations using Random Forest + Q-Learning.",
    tech: ["FastAPI", "Streamlit", "Random Forest", "Q-Learning"],
    repo: "https://github.com/Abishakm1507/ai-train-induction-planning-and-scheduling",
    category: "AI/ML",
  },
  {
    title: "YouTube Transcriber",
    desc: "Transcript extraction with structured Gemini-powered summaries.",
    tech: ["Python", "Streamlit", "Gemini", "YouTube API"],
    repo: "https://github.com/Abishakm1507/YouTube-Video-Transcriber",
    category: "AI/ML",
  },
];

const categories = ["All", "AI/ML", "Full-Stack", "Hackathon", "UI/UX"];
const featuredProjects = projects.filter((p) => p.featured);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-play
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            AI-powered applications solving real-world problems
          </p>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto mb-8">
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {featuredProjects.map((project, i) => (
                  <div
                    key={project.title}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer group relative p-6 rounded-xl border border-border/50 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 h-full"
                    >
                      {/* Glow overlay on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />

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

                      <div className="mb-3">
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-lg mb-2 pr-12 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-primary font-medium">
                        View Details <ExternalLink size={12} />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border shadow-card hover:shadow-glow transition-all disabled:opacity-30 z-10 hidden md:flex items-center justify-center"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border shadow-card hover:shadow-glow transition-all disabled:opacity-30 z-10 hidden md:flex items-center justify-center"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>

          {/* View All button */}
          <div className="text-center mb-20">
            <a
              href="#all-projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors text-sm"
            >
              View All Projects <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>

        {/* All Projects - Filterable Grid */}
        <div id="all-projects">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              All <span className="text-gradient">Projects</span>
            </h3>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group relative p-6 rounded-xl border border-border/50 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity" />

                    {project.accuracy && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        <Star size={12} /> {project.accuracy}
                      </div>
                    )}

                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {project.category}
                    </span>

                    <h3 className="font-display font-semibold text-lg mt-3 mb-2 pr-16 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Github size={14} /> GitHub <ExternalLink size={12} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
