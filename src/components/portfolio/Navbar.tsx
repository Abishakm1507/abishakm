import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, Linkedin, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-display font-bold text-gradient">
          Abisha
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}

          <div className="w-px h-5 bg-border mx-1" />

          <motion.a
            href="https://github.com/Abishakm1507"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abisha-k-m-4a4906290"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={16} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors inline-flex items-center gap-1.5 text-sm"
          >
            <Download size={14} /> Resume
          </motion.a>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a href="https://github.com/Abishakm1507" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/abisha-k-m-4a4906290" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground inline-flex items-center gap-1.5 text-sm">
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
