import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  CreditCard,
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
  Fingerprint,
  Wallet,
  TrendingUp,
  MessageCircle,
  Home,
  User,
  Settings,
  Layout,
  Layers,
  CircleCheck,
  Search,
  ShoppingCart,
  Music,
  Utensils
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/5 transition-transform hover:scale-110">
        <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-orange-500 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function BankingCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-orange-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all shadow-sm">
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
              <span key={role} className="px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            Brando SL Bank: <br />
            <span className="bg-gradient-to-r from-orange-500 via-yellow-200 to-blue-500 bg-clip-text text-transparent underline decoration-blue-500/30 underline-offset-8">
              Plan Today, Richer Tomorrow
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A minimal and highly secure mobile banking experience designed
            to simplify complex financial tasks through fast interactions.
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
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-600 rounded-[3.5rem] opacity-5 blur-[80px] transition duration-1000 group-hover:opacity-10" />
          <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80 bg-slate-900">
            <img
              src="/projects/UI/bankingApp.jpg"
              alt="Brando SL Bank Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
            {/* Security Badge Overlay */}
            <div className="absolute top-12 left-12">
              <div className="px-6 py-4 rounded-[2rem] bg-slate-950/40 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-2xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20">
                  <Fingerprint className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-black">Security Status</p>
                  <p className="text-sm font-bold text-white">Biometric Protected</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={CreditCard}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 underline decoration-blue-500/20 underline-offset-8">Financial Management Redefined</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-orange-500/40 pl-8 py-2">
                “Brando SL Bank is a modern mobile banking application designed to provide users with secure, fast, and intuitive financial management.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg text-justify">
                The objective was to create a digital-first banking experience where trust and speed are the primary values. By utilizing a dark, minimal UI, we reduced cognitive load and prioritized the most frequent financial tasks—transfers, payments, and tracking—all accessible in a single tap.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Dashboard-first approach", desc: "One-glance utility for balance and quick actions.", icon: Layout },
                { title: "Biometric Authentication", icon: Fingerprint, desc: "Face ID and encryption for instant trust." },
                { title: "Integrated Support", icon: MessageCircle, desc: "Real-time chat bridge for support accessibility." },
                { title: "Expense Tracking", icon: TrendingUp, desc: "Categorized spending for financial awareness." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all shadow-sm group">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
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
              <h3 className="text-2xl font-bold text-white mb-6">Complexity in traditional banking</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Existing banking apps often overwhelm users with complex, outdated interfaces and hidden navigation, leading to frustration during time-sensitive tasks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Complex and outdated UI/UX",
                  "Difficult and non-intuitive navigation",
                  "Lack of quick access to core actions",
                  "Poor user trust and engagement levels"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <X className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-orange-500/10 border border-orange-500/20 text-white flex flex-col justify-center shadow-xl shadow-orange-500/5">
              <div className="mb-6 p-4 rounded-full bg-orange-500/10 w-fit">
                <Target className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-wider text-orange-400">The Mission</h4>
              <p className="text-slate-300 leading-relaxed font-medium italic">
                “Deliver a simple, secure, and hyper-efficient banking experience that simplifies everyday financial mobility.”
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sleek Dark Mode", desc: "Focus-driven UI reducing visual noise and fatigue.", icon: Palette },
              { title: "One-Tap Actions", desc: "Instant access to Transfers, Top-ups, and Cards.", icon: Zap },
              { title: "Expense Analysis", desc: "Detailed tracking with smart categorization.", icon: TrendingUp },
              { title: "Biometric Login", desc: "Secure and frictionless access via Face ID.", icon: Fingerprint }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400 w-fit mb-8 group-hover:scale-110 transition-transform">
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
            {/* Persona 1: Amara */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl font-black">AW</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Amara Wijesinghe</h4>
                  <p className="text-xs font-black text-blue-400 uppercase tracking-widest">First-Time Banker</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Undergraduate student new to digital finance. Preferred guided, low-friction experiences.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Simple balance check</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Confusing terms</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-blue-600/20 border border-blue-500/30 text-blue-100 font-bold text-center text-sm shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Keep UI simple, safe, and guided”
                </div>
              </div>
            </div>

            {/* Persona 2: Rohan */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-2xl font-black">RM</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Rohan Perera</h4>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest">Efficiency Seeker</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Business consultant valuing speed and shortcuts above all else. Uses the app multiple times daily.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-orange-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Fast transfers</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Too many steps</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-orange-600/20 border border-orange-500/30 text-orange-100 font-bold text-center text-sm shadow-lg shadow-orange-500/10 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Prioritize speed + accessibility”
                </div>
              </div>
            </div>

            {/* Persona 3: Sofia */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-slate-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black">SM</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Sofia Martinez</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Financial Controller</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Entrepreneur actively tracking detailed spending and account logs. Needs deep financial insights.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Analyze spending</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Lack of data visualization</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-800 text-white font-bold text-center text-sm shadow-lg shadow-black/20 transition-transform group-hover:scale-[1.02]">
                  “UX Insight: Provide insight + control without clutter”
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center italic text-slate-400">
            “Personas revealed beginners need clarity, busy users need speed, and advanced users need insights. This guided the design to balance simplicity, efficiency, and depth.”
          </div>
        </Section>

        {/* --- KEY SCREENS & FEATURES --- */}
        <Section title="Premium Banking Hub" icon={Layers}>
          <div className="space-y-24">
            {/* Intelligent Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl bg-slate-900">
                <img src="/projects/UI/bankingApp.jpg" className="w-full h-auto scale-110 transition duration-1000 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                  <div className="flex gap-4">
                    <div className="p-4 rounded-2xl bg-blue-500 shadow-xl shadow-blue-500/20">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div className="p-4 rounded-2xl bg-orange-500 shadow-xl shadow-orange-500/20">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-white">Intintelligent Dashboard</h4>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Total balance display with hyper-accessible quick actions: Cards, Analysis, Top-up, and Transfer. Fast-transfer contact selection reduces user journey time significantly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Biometric Face ID authentication flow",
                    "One-glance total financial visibility",
                    "Avatar-based quick transfer selector"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-orange-400 font-bold">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Smart Tracking */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-all">
                <ShoppingCart className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-all" />
                <h5 className="text-xl font-bold text-white mb-2">Categorized Spend</h5>
                <p className="text-sm text-slate-500">Automated classification for Shopping, Music, and Dining for awareness.</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-all">
                <MessageCircle className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-all" />
                <h5 className="text-xl font-bold text-white mb-2">Real-time Support</h5>
                <p className="text-sm text-slate-500">Instant chat bridge to resolve financial queries securely and fast.</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-all">
                <Wallet className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-all" />
                <h5 className="text-xl font-bold text-white mb-2">Digital Wallet</h5>
                <p className="text-sm text-slate-500">Hyper-secure card management with instant freeze/unfreeze capability.</p>
              </div>
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
                      { bg: "bg-blue-600", label: "Trust Blue" },
                      { bg: "bg-orange-500", label: "Action Orange" },
                      { bg: "bg-black", label: "Black Base" },
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
                    <p className="text-4xl font-black text-white">Modern Gothic</p>
                    <p className="text-slate-400 leading-relaxed font-medium text-justify">Bold and authoritative typefaces for numeric clarity and secure institutional perception.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col justify-center h-full border border-white/5 shadow-3xl">
              <h4 className="text-xl font-bold mb-6">UX Design Intent</h4>
              <ul className="space-y-6">
                {[
                  { title: "Trust Building", desc: "Using dark theme + blue accents for institutional safety feel." },
                  { title: "Frictionless UI", desc: "Card-based interface for minimal cognitive navigation load." },
                  { title: "One Glance", desc: "Dashboard-first layout for immediate financial status awareness." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CircleCheck className="w-5 h-5 text-orange-400 shrink-0" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/5" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white uppercase italic">
                  Secure Financial. <br />
                  <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent underline decoration-blue-500/30 underline-offset-8">Hyper Efficient.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  Brando SL Bank successfully delivers a secure and user-friendly mobile banking experience through minimal design, fast interactions, and clear financial hubbing.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group text-lg"
                >
                  Bank Collaboration
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Insight</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Security as UX", desc: "Biometric and high-security visual cues act as a psychological foundation for user trust in a digital institution." },
                  { title: "Hierarchy of Speed", desc: "In banking, 'time to task completion' is the primary KPI. Minimizing steps for transfers is the ultimate UX win." },
                  { title: "Financial Literacy Hub", desc: "Providing categorized spending metrics transforms a simple bank app into a proactive financial partner." }
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
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-blue-500/10 border border-blue-500/20 text-white flex flex-col justify-center text-center shadow-xl shadow-blue-500/5">
              <div className="mb-8 inline-flex p-4 rounded-full bg-blue-500/10 mx-auto">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-blue-400">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic text-justify">
                “Brando SL Bank proves that high-security financial institutions can operate within a minimal, hyper-efficient, and user-friendly digital ecosystem.”
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/PQu0DjOyVnTp91Aac6Wi4n/Untitled?node-id=0-1&t=iVFDl2icjpar2fJ6-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-blue-600/20 border border-blue-500/30 text-white font-black hover:bg-blue-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-blue-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Interactive Showcase</span>
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
