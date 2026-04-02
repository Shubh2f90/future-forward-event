import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowUpRight } from "lucide-react";

const VenueSection = () => (
  <section id="venue" className="py-20 md:py-32 relative">
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-widest">Location</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">The Venue</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card p-6 md:p-10 grid md:grid-cols-2 gap-8"
      >
        {/* Map placeholder */}
        <div className="relative rounded-xl overflow-hidden min-h-[250px] bg-muted/30 border border-glass-border">
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019551844065!2d-122.3999!3d37.7857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzA4LjUiTiAxMjLCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1700000000000"
            className="absolute inset-0 w-full h-full border-0 opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="font-heading font-bold text-2xl text-foreground">
            TechHub Convention Center
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>450 Innovation Drive, San Francisco, CA 94105</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>May 17, 2026</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>8:00 AM — 8:00 PM</span>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline mt-2"
          >
            Get Directions <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VenueSection;
