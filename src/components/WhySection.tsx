import { motion } from "framer-motion";
import { Building2, Bot, Calendar, TrendingUp, Users, Shield } from "lucide-react";

const benefits = [
  { icon: Building2, title: "All Companies, One Place", desc: "Browse 500+ companies with honest reviews and direct career page links." },
  { icon: Bot, title: "AI Tools + Learning", desc: "Curated AI tools and structured learning paths from beginner to advanced." },
  { icon: Users, title: "Real Interview Insights", desc: "Read actual interview experiences, questions, and tips from real people." },
  { icon: Calendar, title: "Events & Workshops", desc: "Stay ahead with hackathons, conferences, and hands-on workshops." },
  { icon: TrendingUp, title: "Career Growth Ecosystem", desc: "Everything you need — skills, connections, and opportunities — in one platform." },
  { icon: Shield, title: "Trusted & Curated", desc: "Every resource, tool, and review is verified and curated for quality." },
];

const WhySection = () => (
  <section id="why" className="py-20 sm:py-28 relative">
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px]" />
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block glass-card px-3 py-1 text-xs text-primary uppercase tracking-widest mb-4">Why NEXUS.HUB</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
          <span className="gradient-text">Your Career</span> Command Center
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">One platform to explore, learn, connect, and grow.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="glass-card p-6 rounded-xl text-center hover:border-primary/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:neon-glow-cyan transition-shadow">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
