import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Database, Lock, Eye, Code, Users, FileText, Mail } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "1. Data Collection and Processing",
      content: `SourceSnap does not collect, process, transmit, or store any personal data.

The Extension does not collect:
• Personally identifiable information
• Browsing history
• Authentication credentials
• Website content
• Usage analytics or telemetry
• Any other user data

All functionality is performed locally within the user's browser environment.`
    },
    {
      icon: Lock,
      title: "2. Local Processing",
      content: `The Extension operates entirely on the user's device. When activated by a user-initiated action such as an Alt or Option click, SourceSnap inspects the current webpage's JavaScript execution context to detect source location metadata provided by development frameworks or tooling.

This information is used solely to construct a local editor URL to open the corresponding source file. No data is transmitted outside the user's browser at any time.`
    },
    {
      icon: Eye,
      title: "3. Permissions and Access",
      content: `SourceSnap requests only the minimum permissions necessary to perform its single, narrowly defined purpose.

• Active Tab Access: Used only after explicit user interaction to analyze the currently active webpage.
• Host Permissions: Used to inject scripts into user-enabled pages for detecting framework-specific source metadata.
• Storage Access: Used exclusively to store local configuration settings such as preferred editor, keyboard modifier, and enabled domains.

These permissions are never used to collect, monitor, or transmit user data.`
    },
    {
      icon: Database,
      title: "4. Data Storage",
      content: `Any data stored by the Extension consists solely of non-personal configuration preferences and is retained locally using Chrome's extension storage mechanisms. This data remains on the user's device and is not shared with the developer or any third party.`
    },
    {
      icon: Code,
      title: "5. Third-Party Services",
      content: `SourceSnap does not integrate with, rely on, or communicate with any third-party services, analytics providers, advertising networks, or external APIs.`
    },
    {
      icon: Shield,
      title: "6. Remote Code",
      content: `The Extension does not load or execute remote code. All executable code is packaged within the extension at the time of installation.`
    },
    {
      icon: Users,
      title: "7. Children's Privacy",
      content: `SourceSnap is intended for use by developers and is not directed toward children under the age of 13. The Extension does not knowingly collect data from children.`
    },
    {
      icon: FileText,
      title: "8. Changes to This Policy",
      content: `This Privacy Policy may be updated if the Extension's functionality changes in a way that affects data handling practices. Any updates will be published at the same location as this policy.`
    },
    {
      icon: Mail,
      title: "9. Contact Information",
      content: `For questions or concerns regarding this Privacy Policy, please contact the developer through the Chrome Web Store listing or the project's public repository.`
    }
  ];

  return (
    <div className="relative min-h-screen bg-cosmic overflow-x-hidden">
      <ParticlesBackground />

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Privacy</span> Policy
              </h1>
            </div>
            <p className="text-muted-foreground mb-12">
              Effective Date: January 2025
            </p>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                SourceSnap is a browser extension designed to assist software developers in identifying
                the source code location associated with elements rendered in a web page during local development.
                This Privacy Policy explains how the Extension handles data and outlines the privacy practices
                applicable to its use.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
