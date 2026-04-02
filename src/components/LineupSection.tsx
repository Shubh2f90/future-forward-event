import { motion } from "framer-motion";
import { Building2, User } from "lucide-react";

const lineup = [
  { name: "Sarah Chen", role: "Head of Talent", company: "NovaTech AI", highlight: "Hiring 50+ engineers" },
  { name: "Marcus Wright", role: "CEO & Founder", company: "Quantum Labs", highlight: "Series B, $40M raised" },
  { name: "Priya Sharma", role: "VP Engineering", company: "CloudScale", highlight: "Remote-first culture" },
  { name: "James Okafor", role: "Recruiter Lead", company: "MetaVerse Corp", highlight: "Global expansion" },
  { name: "Elena Petrova", role: "CTO", company: "DataPulse", highlight: "AI/ML opportunities" },
  { name: "David Kim", role: "HR Director", company: "FutureStack", highlight: "Intern to C-suite pipeline" },
];

const LineupSection = () => (
  <section id="lineup" className="py-20 md:py-32 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px]" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-widest font-body">Who's Coming</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">The Lineup</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Industry leaders, top recruiters, and innovative companies — all under one roof.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lineup.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 group hover:neon-glow-purple transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-lg text-foreground">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <div className="flex items-center gap-1.5 mt-1 text-primary text-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  {person.company}
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-glass-border">
              <span className="text-xs text-neon-purple font-medium uppercase tracking-wider">
                ✦ {person.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LineupSection;
