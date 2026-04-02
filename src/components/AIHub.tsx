import { motion } from "framer-motion";
import { ExternalLink, Bot, Code, Palette, FileText, MessageSquare, Sparkles, Brain, Cpu, Layers, ArrowRight } from "lucide-react";

const aiTools = [
  { name: "ChatGPT", desc: "Conversational AI for writing, brainstorming & coding", icon: MessageSquare, url: "https://chat.openai.com", category: "Chatbot" },
  { name: "GitHub Copilot", desc: "AI-powered code completion & generation", icon: Code, url: "https://github.com/features/copilot", category: "Code AI" },
  { name: "Midjourney", desc: "Create stunning visuals from text prompts", icon: Palette, url: "https://midjourney.com", category: "Design AI" },
  { name: "Claude", desc: "Advanced AI assistant for analysis & writing", icon: Bot, url: "https://claude.ai", category: "Chatbot" },
  { name: "Jasper", desc: "AI content generation for marketing teams", icon: FileText, url: "https://jasper.ai", category: "Resume AI" },
  { name: "Cursor", desc: "The AI-first code editor for developers", icon: Sparkles, url: "https://cursor.com", category: "Code AI" },
];

const learningTopics = [
  { title: "Machine Learning Basics", desc: "Foundations of supervised and unsupervised learning", icon: Brain, color: "text-neon-cyan" },
  { title: "Natural Language Processing", desc: "Text analysis, transformers, and language models", icon: MessageSquare, color: "text-neon-purple" },
  { title: "Generative AI", desc: "LLMs, diffusion models, and prompt engineering", icon: Sparkles, color: "text-primary" },
  { title: "Computer Vision", desc: "Image recognition, object detection, and CNNs", icon: Cpu, color: "text-accent" },
];

const roadmap = [
  { step: 1, title: "Python & Math", desc: "Learn Python, linear algebra, statistics" },
  { step: 2, title: "ML Fundamentals", desc: "Regression, classification, clustering" },
  { step: 3, title: "Deep Learning", desc: "Neural networks, CNNs, RNNs, transformers" },
  { step: 4, title: "Specialize", desc: "NLP, CV, GenAI — pick your path" },
  { step: 5, title: "Build & Ship", desc: "Projects, portfolio, and deploy" },
];

const AIHub = () => (
  <section id="ai-hub" className="py-20 sm:py-28 relative">
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px]" />
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block glass-card px-3 py-1 text-xs text-primary uppercase tracking-widest mb-4">AI Tools & Learning</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
          <span className="gradient-text">Master AI</span> with the Best Tools
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Curated AI tools, learning paths, and a step-by-step roadmap to build your AI career.</p>
      </motion.div>

      {/* AI Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
        {aiTools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card p-5 rounded-xl group hover:border-primary/30 transition-all duration-300 block"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <tool.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground flex items-center gap-1">
                  {tool.name}
                  <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <span className="text-[10px] text-primary uppercase tracking-wider">{tool.category}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body">{tool.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* Learning Topics */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">Start Learning</h3>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {learningTopics.map((t, i) => (
            <motion.div
              key={t.title}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 rounded-xl flex items-start gap-4 hover:border-primary/20 transition-all"
            >
              <t.icon className={`w-8 h-8 ${t.color} flex-shrink-0`} />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
                <button className="text-xs text-primary mt-2 flex items-center gap-1 hover:underline font-body">
                  Start Learning <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Roadmap */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">
          <Layers className="inline w-6 h-6 text-primary mr-2" />
          AI Roadmap for Beginners
        </h3>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden sm:block" />
          <div className="space-y-4">
            {roadmap.map((r, i) => (
              <motion.div
                key={r.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 sm:pl-0"
              >
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold flex-shrink-0 z-10">
                  {r.step}
                </div>
                <div className="glass-card p-4 rounded-xl flex-1">
                  <h4 className="font-heading font-semibold text-foreground">{r.title}</h4>
                  <p className="text-sm text-muted-foreground font-body">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AIHub;
