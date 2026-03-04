import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Star, Zap, BookOpen } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  repo: string;
  featured?: boolean;
  accuracy?: string;
  category?: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-glow z-10"
        >
          {/* Hero area */}
          <div className="relative h-48 bg-gradient-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/20" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-display font-bold text-primary-foreground z-10 px-6 text-center"
            >
              {project.title}
            </motion.h2>
            {project.accuracy && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-bold"
              >
                <Star size={14} /> {project.accuracy} Accuracy
              </motion.div>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Category badge */}
            {project.category && (
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {project.category}
              </span>
            )}

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription || project.desc}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                <Zap size={14} className="text-primary" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Star size={14} className="text-primary" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary mt-0.5">▸</span> {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" /> Challenges & Learnings
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent mt-0.5">▸</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm"
              >
                <Github size={16} /> View on GitHub
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2 text-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
