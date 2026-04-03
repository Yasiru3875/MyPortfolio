import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Home,
  CheckCircle,
  Users,
  Target,
  ShieldAlert,
  Lightbulb,
  Trophy,
  ArrowRight,
  ExternalLink,
  X,
  Palette,
  Timer,
  Zap,
  MousePointer2,
  CircleCheck,
  Layout,
  Compass,
  Layers,
  Sparkles,
  Search,
  PenTool,
  Settings,
  MessageSquare,
  Phone,
  User,
  Star
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/5 transition-transform hover:scale-110">
        <Icon className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-500 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-amber-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function InteriorDesignCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all shadow-sm">
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
            {["UI/UX Designer", "Product Researcher", "Figma Expert"].map((role, i) => (
              <span key={role} className="px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-500 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white font-serif"
          >
            Interior Design Studio: <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent italic underline decoration-amber-500/30 underline-offset-8">
              Curating Luxury Spaces
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A high-end website designed to showcase premium projects and 
            streamline the design-to-client consultation journey.
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-[3.5rem] opacity-5 blur-[80px] transition duration-1000 group-hover:opacity-10" />
          <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/interiorDesign.jpg"
              alt="Interior Design Studio Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
            {/* Overlay CTA */}
            <div className="absolute bottom-12 left-12">
               <div className="px-6 py-3 rounded-full bg-amber-500/90 backdrop-blur-md text-slate-900 font-black text-sm uppercase tracking-widest shadow-2xl transition-transform group-hover:scale-105">
                 Free Consultation
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={Home}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 font-serif underline decoration-amber-500/20 underline-offset-8">Luxury in Every Pixel</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-amber-500/40 pl-8 py-2">
                “This project is a modern Interior Design Studio website designed to showcase projects, services, and brand identity while converting visitors into clients.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                The goal was to create a luxury, minimal, and visually immersive experience that reflects high-end interior design standards. We focused on bold typography and high-end photography to build instant trust.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Project Showcases", desc: "High-quality, grid-based presentation of premium projects.", icon: Layout },
                { title: "Stages of Work", desc: "Structured explanation of research, ideation, and implementation.", icon: Layers },
                { title: "Services Breakdown", desc: "Clear navigation for design projects and author supervision.", icon: Zap },
                { title: "Luxury Experience", desc: "Visually immersive experience tailored for high-end clients.", icon: Sparkles },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all shadow-sm group">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
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

        {/* --- THE CHALLENGE --- */}
        <Section title="Problem Statement" icon={ShieldAlert}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-12 rounded-[3.5rem] bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Friction in Visual Discovery</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Many interior design websites struggle with poor visual storytelling and weak project presentation, leading to a disconnect between studio quality and digital presence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Poor visual storytelling & image quality",
                  "Weak project presentation & context",
                  "Lack of clear service explanation",
                  "Low conversion / Weak CTA flow"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <X className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-amber-500/10 border border-amber-500/20 text-white flex flex-col justify-center shadow-xl shadow-amber-500/5">
              <div className="mb-6 p-4 rounded-full bg-amber-500/10 w-fit">
                <Target className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-wider text-amber-400">The Mission</h4>
              <p className="text-slate-300 leading-relaxed font-medium italic">
                “Deliver a premium, inspiring, and easy-to-navigate experience to build trust and trust for a luxury design studio.”
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bold Hero", desc: "Strong hero section with high-quality imagery.", icon: Layout },
              { title: "Gallery Grid", desc: "High-quality, immersive project showcases.", icon: Palette },
              { title: "4-Stage Flow", desc: "Structured explanation of the design process.", icon: Timer },
              { title: "Direct Contact", desc: "Integrated booking and consultation forms.", icon: MessageSquare }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-sm hover:border-amber-500/30 transition-all group">
                  <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 w-fit mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* --- USER PERSONAS --- */}
        <Section title="User Personas" icon={Users}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Persona 1: Nimesha */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-amber-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl font-black italic font-serif">NM</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Nimesha Maduwanthi</h4>
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest">New Home Owner</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Marketing executive seeking professional help to design her first apartment. Needs inspiration & guidance.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-amber-500 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Understand process</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <p className="text-[10px] text-amber-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Hard to visualize</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-amber-600/20 border border-amber-500/30 text-amber-100 font-bold text-center text-sm shadow-lg shadow-amber-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Provide guidance + visual clarity”
                </div>
              </div>
            </div>

            {/* Persona 2: Pasindu */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-amber-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl font-black italic font-serif">PG</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Pasindu Gamage</h4>
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest">Busy Professional</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Business owner looking to redesign his office. High value on time and credibility.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-amber-500 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Evaluate credibility</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <p className="text-[10px] text-amber-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Complicated forms</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-amber-600/20 border border-amber-500/30 text-amber-100 font-bold text-center text-sm shadow-lg shadow-amber-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Prioritize clarity + efficiency”
                </div>
              </div>
            </div>

            {/* Persona 3: Dinithi */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-amber-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black italic font-serif">DF</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Dinithi Fernando</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Design Enthusiast</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Architect seeking a studio with deep transparency and high-quality portfolio detailing.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Evaluate workflow</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <p className="text-[10px] text-amber-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Weak portfolios</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-800 text-white font-bold text-center text-sm shadow-lg shadow-black/20 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Provide depth + credibility”
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center italic text-slate-400">
            “The personas revealed three key user types: beginners who need guidance, busy users who need efficiency, and advanced users who need detailed insights. This guided the architecture to balance inspiration, clarity, and trust-building.”
          </div>
        </Section>

        {/* --- DESIGN PROCESS --- */}
        <Section title="Design Process" icon={Timer}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Research", icon: Search },
              { step: "02", title: "Ideation", icon: Lightbulb },
              { step: "03", title: "Wireframing", icon: Layout },
              { step: "04", title: "Visual Design", icon: Palette },
              { step: "05", title: "Refinement", icon: Zap }
            ].map((p, i) => (
              <div key={p.title} className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center shadow-sm hover:border-amber-500/30 transition-all">
                <span className="absolute top-4 left-4 text-xs font-black text-white/10">{p.step}</span>
                <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white">{p.title}</h4>
              </div>
            ))}
          </div>
        </Section>

        {/* --- KEY SECTIONS & FEATURES --- */}
        <Section title="Premium Features" icon={Sparkles}>
          <div className="space-y-16">
            {/* Grid Showcases */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group">
                  <img src="/projects/UI/interiorDesign.jpg" className="w-full h-auto scale-110 transition duration-700 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                     <p className="text-white font-serif italic text-2xl">Project: Modern Dining & Living</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <h4 className="text-3xl font-serif text-white">Visual-First Portfolio</h4>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Real project images (Dining, Bedroom, Kitchen) presented in a visual-heavy grid to build credibility instantly through high-end photography.
                  </p>
                  <div className="flex gap-4">
                     {["Dining", "Bedroom", "Kitchen", "Office"].map(t => (
                       <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase text-amber-500">{t}</span>
                     ))}
                  </div>
               </div>
            </div>

            {/* Stages of Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { stage: "01", title: "Research", icon: Search, desc: "Understanding the client's vision and brand." },
                 { stage: "02", title: "Conceptualization", icon: Lightbulb, desc: "Creating the primary moodboards." },
                 { stage: "03", title: "Detailing", icon: PenTool, desc: "Refining every angle of the design." },
                 { stage: "04", title: "Implementation", icon: Settings, desc: "Final execution and delivery." }
               ].map((s, i) => (
                 <div key={s.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-amber-500/30 transition-all">
                    <span className="text-4xl font-serif italic text-white/10 block mb-6">{s.stage}</span>
                    <s.icon className="w-8 h-8 text-amber-500 mb-6" />
                    <h5 className="text-xl font-bold text-white mb-2">{s.title}</h5>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                 </div>
               ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-white/5">
               {[
                 { label: "Projects Completed", value: "200+" },
                 { label: "Years Experience", value: "10+" },
                 { label: "Meters Designed", value: "30k+" }
               ].map(stat => (
                 <div key={stat.label} className="text-center">
                    <p className="text-5xl font-black text-amber-500 mb-2">{stat.value}</p>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </Section>

        {/* --- VISUAL IDENTITY --- */}
        <Section title="Visual Identity" icon={Palette}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Color Palette</h4>
                    <div className="flex gap-6">
                      {[
                        { bg: "bg-amber-600", label: "Gold Accent" },
                        { bg: "bg-slate-900", label: "Luxury Gray" },
                        { bg: "bg-white", label: "Pure White" },
                      ].map(color => (
                        <div key={color.label} className="group flex flex-col items-center">
                          <div className={`w-20 h-20 rounded-3xl ${color.bg} border-4 border-white/10 shadow-xl transition-transform group-hover:scale-110`} />
                          <p className="mt-3 text-[10px] font-black text-slate-500 uppercase">{color.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Typography</h4>
                    <div className="space-y-4">
                      <p className="text-4xl font-serif italic text-white underline decoration-amber-500/20">Elegant Serif</p>
                      <p className="text-slate-400 leading-relaxed font-medium">Modern sans-serif for functional reading across all luxury devices.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col justify-center h-full border border-white/5">
               <h4 className="text-xl font-bold mb-6">UX Design Intent</h4>
               <ul className="space-y-6">
                {[
                  { title: "Visual-First", desc: "Minimal text to avoid clutter and focus on imagery." },
                  { title: "Smooth Scroll", desc: "Gentle transitions for a premium browsing feel." },
                  { title: "Clarity", desc: "Immediate understanding of studio stages." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CircleCheck className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <p className="font-bold text-sm mb-1">{item.title}</p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
               </ul>
            </div>
          </div>
        </Section>

        {/* Final Reflection Banner */}
        <Section title="Final Outcome" icon={Trophy}>
          <div className="relative rounded-[3.5rem] overflow-hidden p-12 lg:p-20 bg-slate-950 shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/5" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
               <div className="lg:col-span-2">
                 <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white font-serif">
                   Refined Presence. <br />
                   <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent italic underline decoration-amber-500/30 underline-offset-8">Client Discovery.</span>
                 </h3>
                 <p className="text-xl text-slate-400 leading-relaxed font-medium">
                   Interior Design Studio seamlessly blends luxury aesthetics with user-centered structure, creating a visually compelling and conversion-focused digital portfolio.
                 </p>
               </div>
               <div className="flex justify-center lg:justify-end">
                 <Link
                   to="/contact"
                   className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group text-lg"
                 >
                   Design Collaboration
                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                 </Link>
               </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Insight</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Minimalism vs Enrichment", desc: "Balancing high-end minimalism with content richness requires careful structural hierarchy to avoid visual fatigue." },
                  { title: "Transparency Builds Trust", desc: "Explicitly detailing 'Stages of Work' reduces user anxiety and positions the studio as a professional partner." },
                  { title: "Visual-First Conversion", desc: "In industries where design is the product, the website's UI must perform as a direct proof of capability." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-amber-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-amber-500/10 border border-amber-500/20 text-white flex flex-col justify-center text-center shadow-xl shadow-amber-500/5">
              <div className="mb-8 inline-flex p-4 rounded-full bg-amber-500/10 mx-auto">
                <Sparkles className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-amber-400">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “This design successfully combines luxury aesthetics with a user-centered structure, proving that high-end design and high-conversion functionality can coexist.”
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/NTReIxbab436gxsTqxtvs6/Interior-design?node-id=0-1&t=Jyw7g0gP70L98XNd-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-amber-600/20 border border-amber-500/30 text-white font-black hover:bg-amber-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-amber-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">Interactive Prototype</span>
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
