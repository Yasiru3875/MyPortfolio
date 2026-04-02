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
  Activity as ActivityIcon,
  Bell,
  BarChart3,
  Unlock
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
        <Icon className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />
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
    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function FitNexiaCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
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
            {["UI/UX Designer", "Research & Analysis", "Prototyping", "AI Explorer"].map((role, i) => (
              <span key={role} className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            FitNexia: <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              AI-Assisted Fitness App
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            Designing a motivating, data-driven experience to help users track health and 
            stay consistent through intuitive UX and AI-assisted ideation.
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[3rem] opacity-10 blur-[80px] transition duration-1000 group-hover:opacity-20" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/fittness.png"
              alt="FitNexia Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* --- THE CHALLENGE (Problem Statement) --- */}
        <Section title="The Problem Statement" icon={ShieldAlert}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Complexity vs. Simplicity</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-emerald-500/40 pl-8 py-2">
                “Many fitness apps are either too complex for beginners or too basic for advanced users, leading to drops in motivation and clarity.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Users often struggle with cluttered dashboards and understanding their long-term progress clearly. The goal was to build a data-driven app that keeps engagement high without overwhelming the user.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Dashboard Clutter", desc: "Traditional apps overwhelm users with too much raw data at once.", icon: Layout, color: "text-emerald-400" },
                { title: "Motivation Gaps", desc: "Users stop tracking when they don't see clear, visual progress everyday.", icon: Target, color: "text-teal-400" },
                { title: "Cognitive Load", desc: "Complex goal-setting flows prevent users from building lasting habits.", icon: Brain, color: "text-cyan-400" },
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
            <Card className="lg:col-span-2 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent">
              <h3 className="text-2xl font-bold mb-6">Target User Needs</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Focused on users aged 18–40, balancing the needs of both fitness enthusiasts 
                and beginners who require daily motivation and feedback.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Visual progress tracking",
                  "Habit-forming notifications",
                  "Quick insight scanning",
                  "Minimal data friction"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-sm font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20">
                <Brain className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-white mb-2">AI-Assisted Research</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  “AI tools were used to accelerate research by identifying user behavior patterns and exploring motivation through design.”
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-teal-500/10 border border-teal-500/20">
                <Zap className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="font-bold text-white mb-2">How AI Helped</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generated UX patterns and suggested dashboard layouts for better data visualization.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* --- PERSONAS SECTION --- */}
        <Section title="User Personas" icon={UsersRound}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Persona 1: The Beginner */}
            <Card className="flex flex-col h-full border-t-4 border-t-emerald-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nethmi Perera</h3>
                  <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest">The Beginner</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">About</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    University student looking to improve her lifestyle. New to fitness apps and needs simple guidance.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Basic fitness routine</p>
                  </div>
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                    <p className="text-[10px] text-red-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Confusing data</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 italic text-sm text-slate-400 text-center">
                  “Keep UI minimal, guided, and beginner-friendly”
                </div>
              </div>
            </Card>

            {/* Persona 2: The Professional */}
            <Card className="flex flex-col h-full border-t-4 border-t-teal-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Kasun Silva</h3>
                  <p className="text-xs text-teal-500 font-bold uppercase tracking-widest">Busy Professional</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">About</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Software engineer with a busy schedule. Needs quick tracking and staying fit efficiently.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-teal-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Daily consistency</p>
                  </div>
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                    <p className="text-[10px] text-red-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">No time to explore</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 italic text-sm text-slate-400 text-center">
                  “Prioritize speed, clarity, and quick insights”
                </div>
              </div>
            </Card>

            {/* Persona 3: The Enthusiast */}
            <Card className="flex flex-col h-full border-t-4 border-t-indigo-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dinithi Fernando</h3>
                  <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest">Fitness Enthusiast</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">About</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Fitness trainer who tracks performance daily. Needs detailed metrics to improve.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Advanced analysis</p>
                  </div>
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                    <p className="text-[10px] text-red-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Apps too basic</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 italic text-sm text-slate-400 text-center">
                  “Provide advanced insights without clutter”
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* --- KEY UX INSIGHTS --- */}
        <Section title="Key UX Insights" icon={Lightbulb}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Goal Clarity", val: "Simple" },
              { label: "Progress", val: "Visual" },
              { label: "Scanning", val: "Quick" },
              { label: "Feedback", val: "Daily" },
              { label: "Data", val: "Minimal" }
            ].map(insight => (
              <div key={insight.label} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:bg-emerald-500/5 transition-all">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{insight.label}</p>
                <p className="text-lg font-bold text-white">{insight.val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* --- DESIGN GOALS & SOLUTIONS --- */}
        <Section title="Design Solutions" icon={ActivityIcon}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Core Dashboard", desc: "Quick-scan metrics for steps, calories, and heart rate.", icon: ActivityIcon },
              { title: "Goal Tracking", desc: "Easy goal-setting flow with daily and weekly targets.", icon: Target },
              { title: "Visualization", desc: "Clean charts and rings to drive user motivation.", icon: BarChart3 },
              { title: "Smart Alerts", desc: "Timely notifications and achievements for consistency.", icon: Bell }
            ].map(f => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="p-8">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>
          
          <div className="p-12 rounded-[3rem] bg-teal-500/10 border border-teal-500/20 flex flex-col items-center text-center">
            <Cpu className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Assisted Design Process</h3>
            <p className="text-slate-400 max-w-3xl leading-relaxed mb-8">
              “AI-assisted ideation helped me quickly explore multiple dashboard layouts and select the most user-friendly structure.”
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Layout Generation", "Microcopy Refinement", "Usability Validation", "Style Exploration"].map(t => (
                <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-teal-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Final Reflection Banner */}
        <Section title="Final Outcome" icon={Trophy}>
          <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 bg-slate-900 shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  A Clean Experience for <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent underline decoration-emerald-500/30 underline-offset-8">Health Journeys.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  The final design delivers a clean and motivating experience that provides easy-to-understand fitness tracking for every user level.
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
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Learned</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Simplicity is Critical", desc: "In habit-based apps, minimizing friction is the most important UX factor for long-term retention." },
                  { title: "Visual Feedback", desc: "Driving user motivation isn't about raw data; it's about making the user feel their daily progress." },
                  { title: "Behavioral Guidance", desc: "UX is about guiding user behavior through subtle cues, not just displaying metrics on a screen." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="lg:col-span-4 p-12 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 border-emerald-500/20 flex flex-col justify-center text-center">
              <div className="mb-8 inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">AI Reflection</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “AI significantly improved my workflow by helping me generate ideas faster and structure research insights while keeping the final design human-centered.”
              </p>
            </Card>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/z9Cnh8mZ9wCDnG3mtJ4dQ4/Fitnexia?node-id=0-1&t=Qa6GvRtY1ylwx98b-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-emerald-600/20 border border-emerald-500/30 text-white font-black hover:bg-emerald-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-emerald-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Full Documentation</span>
                <span className="text-xl">View Project in Figma</span>
              </div>
              <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Section>

      </div>
    </motion.div>
  );
}
