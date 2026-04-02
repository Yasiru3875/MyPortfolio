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
  ExternalLink
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/5">
        <Icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
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
    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function ConvergeCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-purple-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all">
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
            {["UX Researcher", "Product Designer", "UI Designer", "Workflow Explorer"].map((role, i) => (
              <span key={role} className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            Converge: <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Crisis Simulation Platform
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            Unifying fire, medical, and police responders into a single collaborative system to reduce response time during the critical “Golden Hour.”
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-[3rem] opacity-10 blur-[80px] transition duration-1000 group-hover:opacity-20" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/converge.png"
              alt="Converge High Fidelity Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* --- THE CHALLENGE (Problem Statement) --- */}
        <Section title="The Problem Statement" icon={ShieldAlert} className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Fragmented Digital Blindness</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-red-500/40 pl-8 py-2">
                “Emergency teams rely on disconnected tools, causing delayed decision-making and poor coordination across departments under extreme pressure.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                The primary challenge was to design a real-time, intuitive, and accessible platform that enables seamless collaboration when seconds literally save lives.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Delayed Decisions", desc: "Disconnected tools cause communication gaps in critical moments.", icon: Clock, color: "text-red-400" },
                { title: "Poor Coordination", desc: "Fire, medical, and police units lack a single source of truth.", icon: Users, color: "text-blue-400" },
                { title: "Cognitive Overload", desc: "High-pressure situations create information dumps that paralyze teams.", icon: Activity, color: "text-orange-400" },
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

        {/* --- RESEARCH & INSIGHTS --- */}
        <Section title="Scenario-Based Research" icon={Search}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent">
              <h3 className="text-2xl font-bold mb-6">Analyzing Disaster Workflows</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                To understand the chaos of a multi-agency response, I used technology-assisted research to simulate complex edge cases like urban landslides and industrial floods. This helped identify critical usability risks before moving to high-fidelity design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Global emergency UX benchmarking",
                  "Low-light environment simulation",
                  "Non-tech-savvy user mapping",
                  "Sinhala + English localization"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-[2rem] bg-purple-500/10 border border-purple-500/20">
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold text-white mb-2">AI-Assisted Synthesis</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Used AI tools to accelerate the synthesis of user pain points and uncover patterns in cognitive overload under extreme stress.
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-amber-500/10 border border-amber-500/20">
                <Zap className="w-8 h-8 text-amber-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Key UX Pillar</h4>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Speed {" > "} Feature Richness</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Dark Mode", val: "Mandatory" },
              { label: "Touch Targets", val: "≥48px" },
              { label: "Real-time Sync", val: "Visible" },
              { label: "Typography", val: "Minimal" },
              { label: "Hierarchy", val: "Action-First" }
            ].map(insight => (
              <div key={insight.label} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{insight.label}</p>
                <p className="text-lg font-bold text-white">{insight.val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* --- PERSONAS SECTION --- */}
        <Section title="User Personas" icon={UsersRound}>
          <div className="space-y-16">
            {/* Persona 1: Coordinator */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square bg-white/[0.03] p-8 flex items-center justify-center cursor-zoom-in group-hover:border-purple-500/40 transition-colors"
                  onClick={() => setSelectedImage({ src: "/projects/CaseStudy/c1.png", alt: "High-Stakes Coordinator" })}
                >
                  <img
                    src="/projects/CaseStudy/c1.png"
                    alt="High-Stakes Coordinator"
                    className="w-full h-full object-contain transition duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase">
                  Persona 01: The Multi-Agency Lead
                </div>
                <h3 className="text-5xl font-black text-white">High-Stakes Coordinator</h3>
                <p className="text-2xl text-slate-400 leading-relaxed italic">
                  “I oversee hundreds of moving parts in a dark command center. My eyes are tired, and I need absolute clarity over complexity.”
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Primary Needs</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-purple-400" /> Situational Awareness</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><Target className="w-4 h-4 text-purple-400" /> Multi-department sync</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Pain Points</h4>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Information overload</li>
                      <li className="flex items-center gap-2 text-sm font-medium"><ShieldAlert className="w-4 h-4 text-red-400" /> Eye strain in low light</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2: Specialist */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 lg:text-right">
                <div className="inline-flex px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                  Persona 02: Field Specialist
                </div>
                <h3 className="text-5xl font-black text-white">High-Mobility Specialist</h3>
                <p className="text-2xl text-slate-400 leading-relaxed italic">
                  “I’m on the ground, wearing gloves, in rain or smoke. I don’t have time for tiny buttons. Give me speed.”
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider lg:text-right">Primary Needs</h4>
                    <ul className="space-y-3 text-slate-400 lg:items-end flex flex-col">
                      <li className="flex items-center gap-2 text-sm font-medium">Fast interactions <Target className="w-4 h-4 text-blue-400" /></li>
                      <li className="flex items-center gap-2 text-sm font-medium">Status connectivity <Target className="w-4 h-4 text-blue-400" /></li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider lg:text-right">Pain Points</h4>
                    <ul className="space-y-3 text-slate-400 lg:items-end flex flex-col">
                      <li className="flex items-center gap-2 text-sm font-medium">Small UI elements <ShieldAlert className="w-4 h-4 text-red-400" /></li>
                      <li className="flex items-center gap-2 text-sm font-medium">Unstable environments <ShieldAlert className="w-4 h-4 text-red-400" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square bg-white/[0.03] p-8 flex items-center justify-center cursor-zoom-in group-hover:border-blue-500/40 transition-colors"
                  onClick={() => setSelectedImage({ src: "/projects/CaseStudy/c2.png", alt: "High-Mobility Specialist" })}
                >
                  <img
                    src="/projects/CaseStudy/c2.png"
                    alt="High-Mobility Specialist"
                    className="w-full h-full object-contain transition duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* --- DESIGN PROCESS --- */}
        <Section title="Design Process" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-8">
              {[
                { label: "Night Operations", val: "High Contrast", desc: "WCAG 2.1 AA compliant for extreme low-light visibility." },
                { label: "Glove Friendly", val: "48px+ Targets", desc: "Ensuring precision even with physical obstructions." },
              ].map(stat => (
                <div key={stat.label} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">{stat.label}</h4>
                    <p className="text-3xl font-bold text-white mb-2">{stat.val}</p>
                  </div>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <Card className="lg:col-span-8 flex flex-col justify-center bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Iterative Exploration</h3>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic mb-10">
                “By using technology-assisted exploration, I rapidly iterated through dashboard variations to ensure the optimal hierarchy of critical actions like ‘Go Live’ and ‘End Simulation’.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  "Accessibility validation checks",
                  "Microcopy refinement for stress",
                  "Design system consistency",
                  "High-stakes action visibility"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* --- CORE FEATURES GRID --- */}
        <Section title="Strategic Features" icon={Layout}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Command Dashboard",
                desc: "Live map with filtered threat detection and responder locations.",
                icon: Layout
              },
              {
                title: "Smart Map System",
                desc: "Pulsing markers reflect urgency and life-safety status.",
                icon: Target
              },
              {
                title: "Push-to-Talk (PTT)",
                desc: "Instant voice communication with hands-free support.",
                icon: Smartphone
              },
              {
                title: "Safety Status Bar",
                desc: "One-tap actions: Safe / Injured / Need Help.",
                icon: ShieldAlert
              },
            ].map(f => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="p-8 group hover:bg-white/[0.07] flex flex-col">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-8 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* --- DESIGN SYSTEM SHOWCASE --- */}
        <Section title="Stress-Based Design" icon={Accessibility}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-12 border-l-4 border-l-purple-500">
              <h3 className="text-3xl font-black mb-6">Accessibility Under Pressure</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                In high-stakes environments, standard UX rules change. I prioritized "Stress-Based Design" to ensure the interface remains usable when the user's motor skills and cognitive bandwidth are limited.
              </p>
              <div className="space-y-4">
                {[
                  "Large touch targets (48px+) for precise control",
                  "Minimalist text to reduce cognitive load",
                  "Color-coded alerts (Red = Danger, Green = Safe)",
                  "Iconography + Text labels (No color-only meaning)"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/10 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-950 border-4 border-purple-500 mb-6 shadow-2xl shadow-purple-500/20" />
                <h4 className="font-bold text-white mb-2">Dark Default</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Reduces eye strain in night operations and command centers.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-slate-800 border border-white/10 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 mb-6 shadow-2xl shadow-red-500/20" />
                <h4 className="font-bold text-white mb-2">High Contrast</h4>
                <p className="text-xs text-slate-400 leading-relaxed">WCAG 2.1 AA compliance for maximum field visibility.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Final Reflection Banner */}
        <Section title="Final Outcome" icon={Trophy}>
          <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 bg-slate-900 shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  A High-Contrast Solution That <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent underline decoration-indigo-500/30 underline-offset-8">Saves Lives.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  Converge empowers responders to act faster and more effectively during critical emergencies by reducing cognitive load and enabling seamless, real-time collaboration.
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
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION & LEARNINGS --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <Card className="lg:col-span-8 p-12 bg-white/[0.03]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Learned</h3>
              </div>
              <div className="grid sm:grid-cols-1 gap-8">
                {[
                  { title: "Designing for extremes", desc: "Designing for crisis is fundamentally different from normal apps; environmental stress dictates every UI decision." },
                  { title: "Simplicity saves lives", desc: "Minimalism isn't just an aesthetic choice in emergency systems—it's a safety-critical requirement." },
                  { title: "AI + Human Judgment", desc: "AI can accelerate research and ideation, but human judgment handles the ethical weight of high-stakes systems." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-yellow-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="lg:col-span-4 p-12 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 border-indigo-500/20 flex flex-col justify-center text-center">
              <div className="mb-8 inline-flex p-4 rounded-full bg-indigo-500/10 text-indigo-400 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">Recruiter Takeaway</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “This project demonstrates how AI-assisted UX workflows can enhance research, speed up ideation, and improve design quality in high-stakes systems.”
              </p>
            </Card>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0.4)}
            className="mt-20 flex justify-center"
          >
            <a
              href="https://www.figma.com/design/aakt7RTcJxDJd5mPxf1EVr/Vanguard?node-id=0-1&t=EXDkHjl1d4t8blvD-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-indigo-600/20 border border-indigo-500/30 text-white font-black hover:bg-indigo-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-indigo-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Full Documentation</span>
                <span className="text-xl">View Project in Figma</span>
              </div>
              <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
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
