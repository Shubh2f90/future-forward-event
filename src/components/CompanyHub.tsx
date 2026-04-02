import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, ExternalLink, Filter, Building2, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown } from "lucide-react";

const companies = [
  { id: 1, name: "Google", desc: "Leading search & cloud provider with world-class engineering culture.", rating: 4.5, tags: ["Product-based", "MNC"], industry: "Tech", logo: "G", color: "from-blue-500 to-green-500", website: "https://careers.google.com", reviews: [{ title: "Great culture", pros: "Amazing perks, smart peers, cutting-edge tech", cons: "Slow promotions, large org politics", role: "SDE II", rating: 5 }, { title: "Good WLB", pros: "Flexible hours, great benefits", cons: "Can be siloed", role: "Product Manager", rating: 4 }] },
  { id: 2, name: "Microsoft", desc: "Enterprise software giant with strong growth mindset culture.", rating: 4.3, tags: ["Product-based", "MNC"], industry: "Tech", logo: "M", color: "from-blue-600 to-cyan-500", website: "https://careers.microsoft.com", reviews: [{ title: "Solid company", pros: "Great WLB, good pay, growth culture", cons: "Bureaucracy in some teams", role: "SDE", rating: 4 }] },
  { id: 3, name: "Stripe", desc: "Fintech leader building economic infrastructure for the internet.", rating: 4.7, tags: ["Product-based", "Startup"], industry: "Fintech", logo: "S", color: "from-purple-500 to-indigo-500", website: "https://stripe.com/jobs", reviews: [{ title: "Best engineering", pros: "Top-tier engineers, great code quality", cons: "High expectations", role: "Staff Engineer", rating: 5 }] },
  { id: 4, name: "Razorpay", desc: "India's leading payment gateway with rapid growth trajectory.", rating: 4.1, tags: ["Startup", "Fintech"], industry: "Fintech", logo: "R", color: "from-blue-400 to-blue-600", website: "https://razorpay.com/jobs", reviews: [{ title: "Fast-paced", pros: "Great learning, fast growth", cons: "Long hours sometimes", role: "Backend Dev", rating: 4 }] },
  { id: 5, name: "Amazon", desc: "Global e-commerce & cloud computing leader with LP-driven culture.", rating: 3.9, tags: ["Product-based", "MNC"], industry: "Tech", logo: "A", color: "from-orange-500 to-yellow-500", website: "https://amazon.jobs", reviews: [{ title: "Intense but rewarding", pros: "Great pay, career growth, scale", cons: "PIP culture, high pressure", role: "SDE I", rating: 3 }] },
  { id: 6, name: "Notion", desc: "All-in-one workspace tool loved by teams worldwide.", rating: 4.6, tags: ["Product-based", "Startup"], industry: "Productivity", logo: "N", color: "from-gray-400 to-gray-200", website: "https://notion.so/careers", reviews: [{ title: "Dream startup", pros: "Small team, huge impact, great design culture", cons: "Fast pace can be intense", role: "Frontend Dev", rating: 5 }] },
];

const industries = ["All", "Tech", "Fintech", "Productivity"];
const tagFilters = ["All", "Product-based", "Startup", "MNC"];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={14} className={s <= Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground/30"} />
    ))}
    <span className="text-xs text-muted-foreground ml-1">{rating}</span>
  </div>
);

const CompanyHub = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [tag, setTag] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = companies.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = industry === "All" || c.industry === industry;
    const matchTag = tag === "All" || c.tags.includes(tag);
    return matchSearch && matchIndustry && matchTag;
  });

  return (
    <section id="companies" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block glass-card px-3 py-1 text-xs text-primary uppercase tracking-widest mb-4">Company Reviews</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Explore & Review</span> Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Honest reviews, interview experiences, and direct links to career pages.</p>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass-card pl-10 pr-4 py-3 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1 glass-card px-3 py-2 rounded-lg">
              <Filter className="w-4 h-4 text-primary" />
              {industries.map((ind) => (
                <button key={ind} onClick={() => setIndustry(ind)} className={`px-2 py-1 rounded text-xs font-body transition-colors ${industry === ind ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {ind}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 glass-card px-3 py-2 rounded-lg">
              {tagFilters.map((t) => (
                <button key={t} onClick={() => setTag(t)} className={`px-2 py-1 rounded text-xs font-body transition-colors ${tag === t ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0`}>
                    {c.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground text-lg">{c.name}</h3>
                    <StarRating rating={c.rating} />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 font-body">{c.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-muted text-muted-foreground font-body">{t}</span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                    className="flex-1 glass-card text-sm font-heading font-semibold py-2 rounded-lg hover:border-primary/50 transition-colors flex items-center justify-center gap-1 text-foreground"
                  >
                    Reviews {expanded === c.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gradient-primary text-primary-foreground text-sm font-heading font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                  >
                    Visit <ExternalLink size={14} />
                  </a>
                </div>

                <AnimatePresence>
                  {expanded === c.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-glass-border space-y-3">
                        {c.reviews.map((r, i) => (
                          <div key={i} className="bg-muted/30 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-heading font-semibold text-foreground">{r.title}</span>
                              <StarRating rating={r.rating} />
                            </div>
                            <span className="text-[10px] text-primary uppercase tracking-wider">{r.role}</span>
                            <div className="mt-2 space-y-1">
                              <p className="text-xs text-muted-foreground flex gap-1"><ThumbsUp size={12} className="text-green-400 flex-shrink-0 mt-0.5" /> {r.pros}</p>
                              <p className="text-xs text-muted-foreground flex gap-1"><ThumbsDown size={12} className="text-red-400 flex-shrink-0 mt-0.5" /> {r.cons}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">No companies match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyHub;
