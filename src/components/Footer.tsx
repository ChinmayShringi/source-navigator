import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="gradient-text">Source</span>
              <span>Snap</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/ChinmayShringi/sourcesnap" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="https://github.com/ChinmayShringi/sourcesnap/releases" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Changelog
            </a>
            <a href="https://github.com/ChinmayShringi/sourcesnap/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              MIT License
            </a>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ChinmayShringi/sourcesnap"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/sourcesnap"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground/50 mt-8"
        >
          Built with ❤️ for developers who love speed.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
