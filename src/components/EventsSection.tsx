import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Flame, Clock } from "lucide-react";

const events = [
  { id: 1, title: "GenAI Hackathon 2026", date: "2026-05-15", mode: "Online", desc: "48-hour hackathon building with LLMs, agents, and multi-modal AI.", url: "#", trending: true },
  { id: 2, title: "Cloud Native Summit", date: "2026-05-22", mode: "Offline — Bangalore", desc: "Kubernetes, serverless, and infrastructure at scale.", url: "#", trending: false },
  { id: 3, title: "Frontend Masters Live", date: "2026-06-01", mode: "Online", desc: "Deep dive into React 19, signals, and modern UI architecture.", url: "#", trending: false },
  { id: 4, title: "AI Career Workshop", date: "2026-06-10", mode: "Online", desc: "Resume reviews, mock interviews, and career roadmapping with AI leaders.", url: "#", trending: true },
  { id: 5, title: "Startup Demo Day", date: "2026-06-20", mode: "Offline — Delhi", desc: "Watch 20 startups pitch live. Network with founders and VCs.", url: "#", trending: false },
  { id: 6, title: "Data Engineering Bootcamp", date: "2026-07-05", mode: "Online", desc: "4-week intensive on pipelines, Spark, and real-time analytics.", url: "#", trending: false },
];

const featured = events[0];

const calcCountdown = (dateStr: string) => {
  const diff = new Date(dateStr).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
  };
};

const EventsSection = () => {
  const [countdown, setCountdown] = useState(calcCountdown(featured.date));

  useEffect(() => {
    const id = setInterval(() => setCountdown(calcCountdown(featured.date)), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="events" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block glass-card px-3 py-1 text-xs text-primary uppercase tracking-widest mb-4">Events & Workshops</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Upcoming</span> Tech Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Hackathons, conferences, and workshops curated for your growth.</p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto mb-12 border-primary/20 neon-glow-cyan relative overflow-hidden"
        >
          <div className="absolute top-3 right-3 flex items-center gap-1 glass-card px-2 py-1 rounded-full">
            <Flame className="w-3 h-3 text-orange-400" />
            <span className="text-[10px] text-orange-400 uppercase tracking-wider font-body">Trending</span>
          </div>
          <div className="sm:flex items-center gap-8">
            <div className="flex-1 mb-6 sm:mb-0">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">{featured.title}</h3>
              <p className="text-muted-foreground font-body mb-4">{featured.desc}</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1"><MapPin size={14} className="text-secondary" /> {featured.mode}</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { v: countdown.days, l: "Days" },
                { v: countdown.hours, l: "Hrs" },
                { v: countdown.minutes, l: "Min" },
              ].map((u) => (
                <div key={u.l} className="glass-card w-16 h-16 flex flex-col items-center justify-center rounded-xl">
                  <span className="text-xl font-heading font-bold text-primary">{String(u.v).padStart(2, "0")}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">{u.l}</span>
                </div>
              ))}
            </div>
          </div>
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg mt-6 hover:opacity-90 transition-opacity text-sm">
            Register Now <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Event Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {events.slice(1).map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 rounded-xl hover:border-primary/20 transition-all relative"
            >
              {e.trending && (
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-400" />
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={12} className="text-primary" />
                {new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                <span className="glass-card px-2 py-0.5 rounded-full text-[10px]">{e.mode}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{e.desc}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary flex items-center gap-1 hover:underline font-body"
              >
                Register <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
