import { motion } from "framer-motion";

const frameworks = [
  { name: "React", color: "#61DAFB" },
  { name: "Vue", color: "#4FC08D" },
  { name: "Svelte", color: "#FF3E00" },
  { name: "SolidJS", color: "#2C4F7C" },
  { name: "Preact", color: "#673AB8" },
];

const editors = [
  "VS Code",
  "Cursor",
  "Windsurf",
  "Zed",
  "WebStorm",
  "PhpStorm",
  "IntelliJ IDEA",
  "PyCharm",
  "Sublime Text",
  "MacVim",
  "Emacs",
  "Custom URL",
];

const FrameworksSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Works With Your <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Native support for popular frameworks with automatic detection.
          </p>

          {/* Framework logos */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card px-8 py-4 cursor-default"
                style={{
                  borderColor: `${framework.color}20`,
                }}
              >
                <span
                  className="text-lg font-semibold"
                  style={{ color: framework.color }}
                >
                  {framework.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Editors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Supported <span className="text-primary">Editors</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {editors.map((editor, index) => (
              <motion.span
                key={editor}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium text-foreground/80 border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                {editor}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworksSection;
