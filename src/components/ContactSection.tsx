import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">Contact Us</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-muted/30 border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-muted/30 border border-glass-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                required
                rows={4}
                placeholder="Your message..."
                className="w-full bg-muted/30 border border-glass-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full gradient-primary text-primary-foreground font-heading font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-200 neon-glow-cyan"
          >
            {submitted ? "Message Sent! ✓" : <>Send Message <Send className="w-4 h-4" /></>}
          </button>
        </motion.form>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-10">
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
