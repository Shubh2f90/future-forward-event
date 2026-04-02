import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 45);

const calcTimeLeft = () => {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="glass-card neon-glow-cyan w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-heading font-bold text-primary">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{label}</span>
  </div>
);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid-move" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block glass-card px-4 py-1.5 text-xs sm:text-sm font-body text-primary tracking-wider uppercase mb-6">
            🚀 The Future of Professional Networking
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading font-bold leading-tight mb-6">
            <span className="gradient-text">NEXUS</span>
            <br />
            <span className="text-foreground">CONNECT 2026</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-body">
            Where ambition meets opportunity. Direct interviews, elite networking,
            and career-defining moments — all in one electrifying experience.
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 sm:gap-5 mb-10">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Mins" />
            <CountdownUnit value={timeLeft.seconds} label="Secs" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#tickets"
              className="gradient-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-all duration-200 hover:scale-105 neon-glow-cyan"
            >
              Register Now
            </a>
            <a
              href="#schedule"
              className="glass-card text-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg hover:border-primary/50 transition-all duration-200 hover:scale-105"
            >
              View Schedule
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
