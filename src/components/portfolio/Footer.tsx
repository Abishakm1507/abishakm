import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-lg font-display font-bold text-gradient">
          Abisha K M
        </a>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/Abishakm1507", icon: Github },
            { href: "https://www.linkedin.com/in/abisha-k-m-4a4906290", icon: Linkedin },
            { href: "mailto:abishakm1507@gmail.com", icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart size={12} className="text-primary" /> React & Tailwind
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
