import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Event access", "Keynote sessions", "Networking lunch", "Digital badge"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Everything in Basic", "Priority interview slots", "Workshop access", "Resume review", "Swag kit"],
    popular: true,
  },
  {
    name: "VIP",
    price: "$129",
    features: ["Everything in Pro", "1-on-1 mentoring", "VIP lounge access", "Post-event follow-ups", "Certificate", "After-party"],
    popular: false,
  },
];

const TicketsSection = () => (
  <section id="tickets" className="py-20 md:py-32 relative">
    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-widest">Pricing</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mt-3 gradient-text">Get Your Ticket</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className={`glass-card p-8 flex flex-col relative ${
              plan.popular ? "neon-glow-cyan border-primary/40" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-heading font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" /> Most Popular
              </div>
            )}
            <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
              {plan.price !== "Free" && <span className="text-muted-foreground text-sm ml-1">/ person</span>}
            </div>
            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-3 rounded-lg font-heading font-semibold transition-all duration-200 hover:scale-105 ${
                plan.popular
                  ? "gradient-primary text-primary-foreground neon-glow-cyan"
                  : "glass-card text-foreground hover:border-primary/50"
              }`}
            >
              {plan.price === "Free" ? "Register Free" : "Buy Now"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TicketsSection;
