import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  BookOpen,
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
  CheckCircle,
  Activity,
  Calendar,
  Star,
  Layout,
  Layers,
  CircleCheck,
  Video,
  FileText,
  Search,
  Heart,
  Settings,
  User,
  GraduationCap,
  Library,
  Bookmark
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5 transition-transform hover:scale-110">
        <Icon className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function EduCaseStudy() {
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
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all shadow-sm">
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
              <span key={role} className="px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            SL EDU+: <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent underline decoration-emerald-500/30 underline-offset-8">
              Learning Made Simple
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A clean and engaging mobile e-learning experience designed to 
            connect students with organized study materials and interactive tools.
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
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-[3.5rem] opacity-5 blur-[80px] transition duration-1000 group-hover:opacity-10" />
          <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80 bg-slate-900">
            <img
              src="/projects/UI/eduhub.jpg"
              alt="SL EDU+ Mobile Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
            {/* Overlay Elements */}
            <div className="absolute top-12 right-12 hidden lg:block">
               <div className="px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
                     <GraduationCap className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">Status</p>
                    <p className="text-sm">Exam Season Ready</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={BookOpen}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 underline decoration-emerald-500/20 underline-offset-8">Engagement through Accessibility</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-emerald-500/40 pl-8 py-2">
                “SL EDU+ is a mobile e-learning application designed to provide students with easy access to courses, study materials, and interactive learning tools.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg text-justify">
                The objective was to balance simplicity with functionality. In an industry where apps are often over-cluttered, SL EDU+ focuses on structured discovery—bringing Courses, Libraries, and Quizzes together under a minimal UI that supports both school and self-learning journeys.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Minimal UI design", desc: "Clean layout to reduce cognitive load during study sessions.", icon: Palette },
                { title: "Organized Library", desc: "Access to e-books, past papers, and articles in one tap.", icon: Library },
                { title: "Personalized Learning", desc: "Features like Favorites and Personalized progress tracking.", icon: Heart },
                { title: "Interactive Quizzes", desc: "Engaging feedback tools to improve exam performance.", icon: Zap },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all shadow-sm group">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
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
              <h3 className="text-2xl font-bold text-white mb-6">Barriers to Effective Learning</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Many education apps suffer from overloaded and confusing interfaces that distract students from their primary goal: learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Overloaded & confusing interfaces",
                  "Poor organization of study materials",
                  "Lack of personalization in learning",
                  "Limited engagement tools for mastery"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <X className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-emerald-500/10 border border-emerald-500/20 text-white flex flex-col justify-center shadow-xl shadow-emerald-500/5">
              <div className="mb-6 p-4 rounded-full bg-emerald-500/10 w-fit">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-wider text-emerald-400">The Mission</h4>
              <p className="text-slate-300 leading-relaxed font-medium italic">
                “Deliver a simple, structured, and engaging platform where students can learn effectively without interface friction.”
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Minimal UI", desc: "Clean interface focused on content readability.", icon: Layout },
              { title: "Categorized Hubs", desc: "Clear separation of Courses, Library, and Quizzes.", icon: Library },
              { title: "Onboarding", desc: "Smooth introduction to improve user retention.", icon: Timer },
              { title: "Bottom Navigation", desc: "Simplified accessibility for one-handed use.", icon: Zap }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-sm hover:border-emerald-500/30 transition-all group">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-8 group-hover:scale-110 transition-transform">
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
            {/* Persona 1: Ayesha */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl font-black">AR</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Ayesha Rahman</h4>
                  <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">School Student</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Preparing for exams and needs a simple app to access resources without feeling overwhelmed.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Exam performance</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Disorganized content</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-emerald-600/20 border border-emerald-500/30 text-emerald-100 font-bold text-center text-sm shadow-lg shadow-emerald-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Keep UI simple, structured, and friendly”
                </div>
              </div>
            </div>

            {/* Persona 2: Daniel */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl font-black">DF</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Daniel Fernando</h4>
                  <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Busy Learner</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Working professional managing new skills during breaks. Needs high speed and favorites access.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Efficient access</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Slow navigation</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-emerald-600/20 border border-emerald-500/30 text-emerald-100 font-bold text-center text-sm shadow-lg shadow-emerald-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Prioritize speed + accessibility”
                </div>
              </div>
            </div>

            {/* Persona 3: Kavya */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black">KI</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Kavya Iyer</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Advanced Learner</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">University student seeking diverse learning formats like live classes and deep video content.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Explore advanced</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Limited depth</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-800 text-white font-bold text-center text-sm shadow-lg shadow-black/20 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Provide variety + depth without clutter”
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center italic text-slate-400">
            “The personas revealed three key archetypes: seekers of structure, efficiency, and depth. This guided the architecture to balance simplicity, accessibility, and content variety.”
          </div>
        </Section>

        {/* --- KEY SCREENS & FEATURES --- */}
        <Section title="Core Learning Screens" icon={Layers}>
          <div className="space-y-24">
            {/* Discovery Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                  <img src="/projects/UI/eduhub.jpg" className="w-full h-auto scale-110 transition duration-1000 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                     <div className="flex gap-4">
                        <div className="p-4 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30">
                           <Layout className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="p-4 rounded-2xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30">
                           <Video className="w-6 h-6 text-cyan-400" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <h4 className="text-3xl font-bold text-white">Home & Discovery Hub</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Personalized greeting-led interface with a clear hierarchy of Live Classes, Online Quizzes, and e-Library resources for instant orientation.
                  </p>
                  <ul className="space-y-4">
                     {[
                       "All Topics Categorization",
                       "Live Class Integration",
                       "Online Quiz Mastery Hub"
                     ].map(item => (
                       <li key={item} className="flex items-center gap-3 text-emerald-400 font-bold">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
               {[
                 { title: "Smooth Onboarding", icon: Zap, desc: "Step-by-step introduction to improve user retention." },
                 { title: "Digital Library", icon: Library, desc: "Access to E-books, Past Papers, and Articles." },
                 { title: "Favorites Hub", icon: Bookmark, desc: "Encouraging personalized learning through saved items." }
               ].map((item, i) => (
                 <div key={item.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                    <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                       <item.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
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
                        { bg: "bg-emerald-500", label: "Calm Emerald" },
                        { bg: "bg-cyan-500", label: "Educational Blue" },
                        { bg: "bg-white", label: "Pure Focus" },
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
                      <p className="text-4xl font-black text-white">Clear Gothic</p>
                      <p className="text-slate-400 leading-relaxed font-medium">Built for rapid reading and low fatigue during extensive study sessions.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col justify-center h-full border border-white/5 shadow-2xl">
               <h4 className="text-xl font-bold mb-6">UX Design Intent</h4>
               <ul className="space-y-6">
                {[
                  { title: "Friendly Tone", desc: "Using soft educational illustrates for an inviting feel." },
                  { title: "Action Ease", desc: "Bottom-bar navigation for quick mobile accessibility." },
                  { title: "Organization", desc: "Card-based layout to reduce cognitive overload." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CircleCheck className="w-5 h-5 text-emerald-400 shrink-0" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/5" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  Accessible Learning. <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-500/30 underline-offset-8 font-black">Engagement Built In.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  SL EDU+ successfully creates a user-friendly and engaging environment by combining structured content, intuitive navigation, and modern minimal aesthetics.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group text-lg"
                >
                  Start Collaboration
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Insight</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Simplicity as a Driver", desc: "Reducing interface complexity directly correlates to higher cognitive focus on the learning material itself." },
                  { title: "Personalization Value", desc: "The 'Favorites' hub isn't just a bookmarking tool; it empowers students to self-curate their academic growth." },
                  { title: "Hierarchy of Learning", desc: "Organizing multiple content formats into consistent hubs ensures discovery speed even for power users." }
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
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-emerald-500/10 border border-emerald-500/20 text-white flex flex-col justify-center text-center shadow-xl shadow-emerald-500/5">
              <div className="mb-8 inline-flex p-4 rounded-full bg-emerald-500/10 mx-auto">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-emerald-400">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “SL EDU+ proves that a clean, minimal design is the most effective container for complex educational content.”
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/JsYZ7EW0oaCV6ItPzpWWwo/EDU-hub?node-id=0-1&t=mFC2xqVgyv5kLvXN-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-emerald-600/20 border border-emerald-500/30 text-white font-black hover:bg-emerald-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-emerald-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Interactive Showcase</span>
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
