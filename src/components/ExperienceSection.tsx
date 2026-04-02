import { motion } from "framer-motion";
import { Zap, Target, Network, Lightbulb } from "lucide-react";

const features = [
  { icon: Target, title: "Direct Interviews", desc: "Skip the queue — meet recruiters face-to-face and land interviews on the spot." },
  { icon: Network, title: "Elite Networking", desc: "Connect with 500+ professionals, founders, and industry leaders." },
  { icon: Lightbulb, title: "Skill Exposure", desc: "Live workshops, portfolio reviews, and career coaching sessions." },
  { icon: Zap, title: "Instant Offers", desc: "Top performers receive same-day offers from participating companies." },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-blue/5 blur-[200px]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-widest">Why Attend</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">The Experience</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          This isn't just an event — it's a launchpad for your career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:neon-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
