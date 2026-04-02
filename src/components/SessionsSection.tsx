import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const categories = ["All", "Interview Prep", "DSA", "Web Dev", "AI/ML"];

const sessions = [
  { title: "System Design Crash Course", category: "Interview Prep", thumbnail: "🎯", duration: "45 min", platform: "YouTube", url: "https://youtube.com" },
  { title: "Graph Algorithms Deep Dive", category: "DSA", thumbnail: "📊", duration: "1h 20m", platform: "YouTube", url: "https://youtube.com" },
  { title: "React 19 — What's New", category: "Web Dev", thumbnail: "⚛️", duration: "35 min", platform: "YouTube", url: "https://youtube.com" },
  { title: "Transformers Explained", category: "AI/ML", thumbnail: "🤖", duration: "55 min", platform: "Course", url: "https://youtube.com" },
  { title: "Behavioral Interview Mastery", category: "Interview Prep", thumbnail: "💼", duration: "30 min", platform: "Webinar", url: "https://youtube.com" },
  { title: "Building REST APIs with Node", category: "Web Dev", thumbnail: "🔧", duration: "1h", platform: "YouTube", url: "https://youtube.com" },
  { title: "Dynamic Programming Patterns", category: "DSA", thumbnail: "🧩", duration: "1h 10m", platform: "Course", url: "https://youtube.com" },
  { title: "Fine-tuning LLMs", category: "AI/ML", thumbnail: "🧠", duration: "50 min", platform: "Webinar", url: "https://youtube.com" },
];

const SessionsSection = () => {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? sessions : sessions.filter((s) => s.category === cat);

  return (
    <section id="sessions" className="py-20 sm:py-28 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-neon-blue/5 blur-[100px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block glass-card px-3 py-1 text-xs text-primary uppercase tracking-widest mb-4">Online Sessions</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Learn from</span> the Best
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Curated videos, courses, and recorded webinars to level up your skills.</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-lg text-sm font-body transition-all ${cat === c ? "gradient-primary text-primary-foreground neon-glow-cyan" : "glass-card text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.a
                key={s.title}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl overflow-hidden group block"
              >
                <div className="relative h-32 bg-muted/30 flex items-center justify-center text-5xl">
                  {s.thumbnail}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center neon-glow-cyan">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] text-primary uppercase tracking-wider font-body">{s.category}</span>
                    <span className="text-[10px] text-muted-foreground">{s.duration}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{s.title}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 font-body">
                    {s.platform} <ExternalLink size={10} />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
