import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Shield } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AI in Education Hackathon",
    org: "Impacteers",
    date: "19 April 2025",
    result: "🥇 1st Place",
    project: "MindSpark – Gamified Kids Learning Platform",
    team: "SASIYA ELANGOVAN & SANGEETHA K",
    ribbon: "bg-gradient-to-r from-yellow-500 to-amber-400",
  },
  {
    icon: Medal,
    title: "HackWithMagnus 2026",
    org: "Chennai Institute of Technology",
    date: "2 Feb 2026",
    result: "🏆 Finalist",
    project: "VitalsLens",
    team: "DIVYA K",
    ribbon: "bg-gradient-to-r from-primary to-accent",
  },
  {
    icon: Trophy,
    title: "GRITX 8.0 – WEB VIBE",
    org: "Sri Sairam Engineering College",
    date: "",
    result: "🥉 3rd Place",
    project: "",
    team: "Kaviya Priya Sivananthan",
    ribbon: "bg-gradient-to-r from-orange-400 to-amber-500",
  },
  {
    icon: Award,
    title: "Innovate-X National Hackathon",
    org: "SSN College of Engineering",
    date: "",
    result: "🏅 Top 21 / 100+",
    project: "SignSpeak – AI Sign Language Interpreter",
    team: "AUSTIN JOE.T & Barath Kumar.S",
    ribbon: "bg-gradient-primary",
  },
  {
    icon: Medal,
    title: "DesignX – UI/UX Challenge",
    org: "Avinyaa'25, RMD Engineering College",
    date: "17 March 2025",
    result: "🥈 Runner-Up",
    project: "",
    team: "KAVYA S",
    ribbon: "bg-gradient-to-r from-slate-400 to-slate-300",
  },
  {
    icon: Award,
    title: "NeXathon'25",
    org: "VIT Chennai",
    date: "10–11 Feb 2025",
    result: "🔬 Participant",
    project: "SereniFI – Mental Health Platform",
    team: "Harshini S, Divya Priya & Tarun",
    ribbon: "bg-gradient-primary",
  },
  {
    icon: Award,
    title: "ImpactX 2.0",
    org: "St. Joseph's Institute of Technology",
    date: "24–25 Jan 2025",
    result: "🎯 Participant",
    project: "Gamified Mental Health Platform",
    team: "Team Phoenix",
    ribbon: "bg-gradient-primary",
  },
];

const certifications = [
  { name: "Oracle Cloud AI Foundations Associate", icon: Shield },
  { name: "Oracle Data Science Professional", icon: Shield },
  { name: "Oracle AI Vector Search Professional", icon: Shield },
  { name: "JLPT N5 – Japanese Language", icon: Star },
  { name: "Cloud Computing", icon: Star },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Hackathon wins, finalists, and industry certifications
          </p>

          {/* Hackathons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                {/* Ribbon */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${a.ribbon}`} />

                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <a.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {a.result}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {a.org}{a.date ? ` · ${a.date}` : ""}
                </p>
                {a.project && (
                  <p className="text-sm text-foreground/80 mb-1 font-medium">{a.project}</p>
                )}
                <p className="text-xs text-muted-foreground">w/ {a.team}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">
              Certifications
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-card shadow-card border border-border/50 hover:shadow-glow transition-all inline-flex items-center gap-2 text-sm font-medium cursor-default"
                >
                  <cert.icon size={14} className="text-primary" />
                  {cert.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
