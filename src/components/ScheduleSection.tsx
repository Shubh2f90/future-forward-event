import { motion } from "framer-motion";
import { Clock, Mic, Users, Briefcase, Coffee, Award } from "lucide-react";

const schedule = [
  { time: "08:00", title: "Registration & Check-in", desc: "Badge pickup, welcome kits, and networking breakfast", icon: Clock },
  { time: "09:30", title: "Opening Keynote", desc: "\"The Future of Work\" — Industry visionaries set the stage", icon: Mic },
  { time: "11:00", title: "Interview Sessions", desc: "1-on-1 speed interviews with top companies", icon: Briefcase },
  { time: "13:00", title: "Networking Lunch", desc: "Curated connections over gourmet catering", icon: Coffee },
  { time: "14:30", title: "Panel Discussions", desc: "AI, remote work, and emerging career paths", icon: Users },
  { time: "17:00", title: "Closing & Awards", desc: "Best pitch, top recruiter picks, and after-party", icon: Award },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-20 md:py-32 relative">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[150px]" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-widest">The Agenda</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">Schedule</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

        <div className="space-y-8">
          {schedule.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 sm:gap-6 pl-2"
              >
                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card neon-glow-cyan flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="glass-card p-5 flex-1 hover:border-primary/30 transition-colors">
                  <span className="text-primary text-sm font-heading font-semibold">{item.time}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ScheduleSection;
