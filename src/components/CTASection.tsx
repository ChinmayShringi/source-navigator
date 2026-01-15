import { motion } from "framer-motion";
import { MousePointer2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-primary/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="glass-card p-12 md:p-16">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Snap</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of developers who have already supercharged their workflow.
              Install SourceSnap and start jumping to code instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Install for Chrome
                  <MousePointer2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                Star on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
