import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Bot, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: 500, suffix: "+", label: "Companies" },
  { icon: Bot, value: 120, suffix: "+", label: "AI Tools" },
  { icon: Calendar, value: 80, suffix: "+", label: "Events" },
  { icon: TrendingUp, value: 10, suffix: "K+", label: "Users" },
];

const ticker = [
  "🚀 AI Workshop — Apr 15",
  "🏢 Google Hiring Sprint — Apr 20",
  "🤖 GenAI Bootcamp — May 1",
  "💼 Startup Mixer — May 10",
  "📊 Data Science Hackathon — May 18",
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 animate-grid-move" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-[160px]" />

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block glass-card px-4 py-1.5 text-xs sm:text-sm font-body text-primary tracking-wider uppercase mb-6">
          🚀 Your Career & AI Command Center
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading font-bold leading-tight mb-6">
          <span className="gradient-text">Discover Companies.</span>
          <br />
          <span className="text-foreground">Learn AI.</span>{" "}
          <span className="gradient-text">Join the Future.</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 font-body">
          One premium platform to explore company reviews, master AI tools, join tech events, and accelerate your career — all in a futuristic experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#companies"
            className="gradient-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-all duration-200 hover:scale-105 neon-glow-cyan"
          >
            Explore Companies
          </a>
          <a
            href="#ai-hub"
            className="glass-card text-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg hover:border-primary/50 transition-all duration-200 hover:scale-105"
          >
            Learn AI
          </a>
          <a
            href="#events"
            className="glass-card text-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg hover:border-secondary/50 transition-all duration-200 hover:scale-105"
          >
            View Events
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto mb-12">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-4 sm:p-6 rounded-xl flex flex-col items-center gap-2"
            >
              <s.icon className="w-6 h-6 text-primary" />
              <span className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ticker */}
      <div className="glass-card py-3 overflow-hidden rounded-xl max-w-4xl mx-auto">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap gap-12">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="text-sm text-muted-foreground font-body">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
