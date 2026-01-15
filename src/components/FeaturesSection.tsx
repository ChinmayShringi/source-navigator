import { motion } from "framer-motion";
import { Layers, Monitor, Settings, Feather } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Framework Support",
    description: "React, Vue, Svelte, SolidJS, Preact – works seamlessly with your favorite frameworks.",
  },
  {
    icon: Monitor,
    title: "Multi-Editor Support",
    description: "VS Code, Cursor, WebStorm, Sublime, Vim, and 10+ more editors supported.",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Works out of the box – no bundler plugins or complex setup needed.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "Pure browser extension with no build-time dependencies. Fast and efficient.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">SourceSnap</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who value speed and simplicity. Get from browser to code in milliseconds.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
