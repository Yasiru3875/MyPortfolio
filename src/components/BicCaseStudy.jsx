import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Brain,
  Target,
  Users,
  Zap,
  Layout,
  Accessibility,
  ShieldAlert,
  UsersRound,
  Trophy,
  Lightbulb,
  Cpu,
  Eye,
  Smartphone,
  Server,
  Activity,
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  X,
  ExternalLink,
  ShoppingCart,
  MousePointer2,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, delay: d, ease: [0.16, 1, 0.3, 1] } },
});

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Section = ({ title, icon: Icon, children, delay = 0, className = "" }) => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp(delay)}
    className={`mb-32 ${className}`}
  >
    <div className="flex items-center gap-4 mb-10">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/5">
        <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function BicCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          Back to Projects
        </Link>

        {/* --- HERO SECTION --- */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mb-24 max-w-5xl"
        >
          <motion.div
            variants={fadeUp(0)}
            className="flex flex-wrap gap-3 mb-8"
          >
            {["UX Researcher", "Product Designer", "UI Designer", "AI Explorer"].map((role, i) => (
              <span key={role} className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            BIC Website: <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              UX Redesign Case Study
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            Evaluating and modernizing a global e-commerce giant to improve navigation, 
            clarity, and accessibility for a diverse user base.
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[3rem] opacity-10 blur-[80px] transition duration-1000 group-hover:opacity-20" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/BIC.png"
              alt="BIC Redesign Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* --- THE CHALLENGE (Problem Statement) --- */}
        <Section title="The Problem" icon={ShieldAlert}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Outdated eCommerce Friction</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-blue-500/40 pl-8 py-2">
                “Although BIC is a trusted brand, the website experience showed several usability weaknesses like unclear navigation, cluttered layout structure, and inconsistent readability.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                The research identified critical issues affecting multiple user groups—from shoppers and educators to corporate clients and job seekers—preventing confident browsing and task completion.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Navigation Complexity", desc: "Unclear menu categories make it harder for users to find essential products.", icon: Layout, color: "text-blue-400" },
                { title: "Cluttered Homepage", desc: "Weak visual hierarchy overwhelms the user during initial brand engagement.", icon: Layers, color: "text-indigo-400" },
                { title: "Accessibility Gaps", desc: "Limited alt-text concerns and text readability issues across key journey steps.", icon: Accessibility, color: "text-purple-400" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all">
                    <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* --- RESEARCH PROCESS --- */}
        <Section title="Research Process" icon={Search}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent">
              <h3 className="text-2xl font-bold mb-6">Traditional UX Research</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Evaluated multiple user groups—Consumers, Teachers, and Corporate Clients—using deep inquiry to map their specific shopping journeys and pain points.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Contextual inquiry with Educators",
                  "Task-based usability testing",
                  "Job seeker interview patterns",
                  "E-commerce benchmarking"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20">
                <Brain className="w-8 h-8 text-indigo-400 mb-4" />
                <h4 className="font-bold text-white mb-2">AI-Assisted Research</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  “AI tools were used to accelerate research by analyzing usability patterns and generating potential user scenarios for e-commerce.”
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-purple-500/10 border border-purple-500/20">
                <Zap className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold text-white mb-2">How AI Helped</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generated usability issue patterns and suggested improvements based on industry best-practices.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* --- PERSONAS SECTION --- */}
        <Section title="User Personas" icon={UsersRound}>
          <div className="space-y-24">
            {/* Persona 1: Expert User */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square bg-white/[0.03] p-8 flex items-center justify-center cursor-zoom-in group-hover:border-blue-500/40 transition-colors"
                  onClick={() => setSelectedImage({ src: "/projects/CaseStudy/b1.jpg", alt: "Expert User - BIC" })}
                >
                  <img
                    src="/projects/CaseStudy/b1.jpg"
                    alt="Expert User"
                    className="w-full h-full object-contain transition duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                  Persona 01: The Power Shopper
                </div>
                <h3 className="text-5xl font-black text-white">Expert User</h3>
                <p className="text-2xl text-slate-400 leading-relaxed italic">
                  “I need to find specific replacement parts and order them in bulk without navigating through endless marketing fluff.”
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Primary Needs</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-blue-400" /> Fast product search</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-blue-400" /> Granular filtering</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Pain Points</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Lack of technical specs</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Slow multi-page navigation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2: Middle User */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 lg:text-right">
                <div className="inline-flex px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase">
                  Persona 02: The Seasonal Browser
                </div>
                <h3 className="text-5xl font-black text-white">Middle User</h3>
                <p className="text-2xl text-slate-400 leading-relaxed italic">
                  “I'm looking for back-to-school essentials. I want to see everything in one place and compare prices easily.”
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider lg:text-right">Primary Needs</h4>
                    <ul className="space-y-3 text-slate-400 lg:items-end flex flex-col">
                      <li className="flex items-center gap-2 text-sm font-medium">Clear visual hierarchy <Target className="w-4 h-4 text-indigo-400" /></li>
                      <li className="flex items-center gap-2 text-sm font-medium">Fast comparison tools <Target className="w-4 h-4 text-indigo-400" /></li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider lg:text-right">Pain Points</h4>
                    <ul className="space-y-3 text-slate-400 lg:items-end flex flex-col">
                      <li className="flex items-center gap-2 text-sm font-medium">Cluttered layout <ShieldAlert className="w-4 h-4 text-red-400" /></li>
                      <li className="flex items-center gap-2 text-sm font-medium">Inconsistent readability <ShieldAlert className="w-4 h-4 text-red-400" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square bg-white/[0.03] p-8 flex items-center justify-center cursor-zoom-in group-hover:border-indigo-500/40 transition-colors"
                  onClick={() => setSelectedImage({ src: "/projects/CaseStudy/b2.jpg", alt: "Middle User - BIC" })}
                >
                  <img
                    src="/projects/CaseStudy/b2.jpg"
                    alt="Middle User"
                    className="w-full h-full object-contain transition duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Persona 3: Native User */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square bg-white/[0.03] p-8 flex items-center justify-center cursor-zoom-in group-hover:border-purple-500/40 transition-colors"
                  onClick={() => setSelectedImage({ src: "/projects/CaseStudy/b3.jpg", alt: "Native User - BIC" })}
                >
                  <img
                    src="/projects/CaseStudy/b3.jpg"
                    alt="Native User"
                    className="w-full h-full object-contain transition duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase">
                  Persona 03: The Casual Explorer
                </div>
                <h3 className="text-5xl font-black text-white">Native User</h3>
                <p className="text-2xl text-slate-400 leading-relaxed italic">
                  “I just need a simple pen, but there are so many options. Help me decide what's best for a gift.”
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Primary Needs</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-purple-400" /> Guided navigation</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-purple-400" /> High-level simplicity</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Pain Points</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Mobile layout friction</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Overwhelming UI choices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* --- AI ANALYSIS SECTION --- */}
        <Section title="AI in Problem Analysis" icon={Cpu}>
          <Card className="bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent p-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <p className="text-xl text-slate-300 leading-relaxed font-medium italic mb-8">
                  “AI was used to cluster usability issues into categories such as navigation, accessibility, and performance. This helped prioritize design improvements more efficiently.”
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "Grouped Issues", desc: "Navigation / UI / Perf" },
                    { label: "Best-Practice", desc: "Fix suggestions" },
                    { label: "User Patterns", desc: "Across demographics" }
                  ].map(stat => (
                    <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">{stat.label}</p>
                      <p className="text-sm text-slate-200">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-8 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse">
                  <Brain className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* --- DESIGN GOALS & SOLUTIONS --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Improved Navigation", desc: "Clear categories & subcategories with better search functionality.", icon: MousePointer2 },
              { title: "Modern UI", desc: "Clean layout, updated color palette, and consistent spacing.", icon: Layout },
              { title: "Performance", desc: "Faster page loading and reduced visual clutter.", icon: Zap },
              { title: "Responsive", desc: "Mobile-friendly layouts with simplified interactions.", icon: Smartphone }
            ].map(f => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="p-8">
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>
          
          <div className="p-12 rounded-[3rem] bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center text-center">
            <Cpu className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Assisted Design Process</h3>
            <p className="text-slate-400 max-w-3xl leading-relaxed mb-8">
              “AI tools were used to rapidly explore UI variations, improve content clarity, and validate accessibility decisions, helping reduce design time while improving quality.”
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Homepage Layouts", "CTA Placement", "UX Writing", "Accessibility Validation"].map(t => (
                <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-indigo-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Final Reflection Banner */}
        <Section title="Final Outcome" icon={Trophy}>
          <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 bg-slate-900 shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  Modernizing the <br />
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent underline decoration-blue-500/30 underline-offset-8">BIC Experience.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  The redesigned BIC website provides a cleaner, faster, and more intuitive user experience by reducing friction in key shopping journeys.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group text-lg"
                >
                  Discuss the Impact
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <Card className="lg:col-span-8 p-12 bg-white/[0.03]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Learned</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Clarity over complexity", desc: "UX design is fundamentally about making tasks clear. Features are only valuable if they don't add to user confusion." },
                  { title: "Research is critical", desc: "Design without research is just decoration. Validating with real users—educators, shoppers—was key." },
                  { title: "AI as an accelerator", desc: "AI can speed up our thinking and synthesis, but it doesn't replace the need for human empathy and judgment." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="lg:col-span-4 p-12 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 border-blue-500/20 flex flex-col justify-center text-center">
              <div className="mb-8 inline-flex p-4 rounded-full bg-blue-500/10 text-blue-400 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">Recruiter Takeaway</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “This project demonstrates how AI-assisted UX workflows can enhance research, speed up ideation, and improve usability outcomes in real-world products.”
              </p>
            </Card>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/Y6zBLShgJcb1W7Oogg9rhe/BIC-Final-1?node-id=0-1&t=E35gSXU3RvMeGm42-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-blue-600/20 border border-blue-500/30 text-white font-black hover:bg-blue-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-blue-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Full Redesign</span>
                <span className="text-xl">View Project in Figma</span>
              </div>
              <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Section>

        {/* --- IMAGE POPUP MODAL --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                className="absolute inset-0 bg-black/80" 
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full aspect-square md:aspect-auto md:h-[80vh] flex items-center justify-center pointer-events-none"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-3xl"
                />
                <button
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors pointer-events-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
