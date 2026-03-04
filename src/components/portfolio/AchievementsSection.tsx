import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AI in Education Hackathon",
    org: "Impacteers",
    date: "19 April 2025",
    result: "1st Place",
    project: "MindSpark – Gamified Kids Learning Platform",
    team: "SASIYA ELANGOVAN & SANGEETHA K",
    color: "text-yellow-500",
  },
  {
    icon: Medal,
    title: "HackWithMagnus Hackathon 2026",
    org: "Chennai Institute of Technology",
    date: "2 February 2026",
    result: "Final Round",
    project: "VitalsLens",
    team: "DIVYA K",
  },
  {
    icon: Trophy,
    title: "GRITX 8.0 – WEB VIBE",
    org: "Sri Sairam Engineering College",
    date: "",
    result: "3rd Place",
    project: "",
    team: "Kaviya Priya Sivananthan",
  },
  {
    icon: Award,
    title: "Innovate-X National Hackathon",
    org: "SSN College of Engineering",
    date: "",
    result: "Top 21 Finalists",
    project: "SignSpeak – AI Sign Language Interpreter",
    team: "AUSTIN JOE.T & Barath Kumar.S",
  },
  {
    icon: Medal,
    title: "DesignX – UI/UX Challenge",
    org: "Avinyaa'25, RMD Engineering College",
    date: "17 March 2025",
    result: "Runner-Up",
    project: "",
    team: "KAVYA S",
  },
  {
    icon: Award,
    title: "NeXathon'25",
    org: "VIT Chennai",
    date: "10–11 February 2025",
    result: "Participant",
    project: "SereniFI – Mental Health Wellness Platform",
    team: "Harshini S, Divya Priya & Tarun",
  },
];

const certifications = [
  "Oracle Cloud AI Foundations Associate (2025)",
  "Oracle Data Science Professional (2025)",
  "Oracle AI Vector Search Professional",
  "JLPT N5 – Japanese Language Proficiency",
  "Cloud Computing Certification",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>

          {/* Hackathons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <a.icon size={24} className={a.color || "text-primary"} />
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {a.result}
                  </span>
                </div>
                <h3 className="font-display font-semibold mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{a.org}{a.date ? ` · ${a.date}` : ""}</p>
                {a.project && <p className="text-sm text-foreground mb-1">{a.project}</p>}
                <p className="text-xs text-muted-foreground">Team: {a.team}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-gradient-card shadow-card border border-border/50 text-sm font-medium"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
