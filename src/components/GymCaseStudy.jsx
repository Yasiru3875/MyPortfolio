import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Dumbbell,
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
  Calculator,
  Flame,
  TrendingUp,
  Heart,
  Calendar,
  Star,
  Layout,
  Layers,
  CircleCheck
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 shadow-lg shadow-orange-500/5 transition-transform hover:scale-110">
        <Icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
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
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-orange-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function GymCaseStudy() {
  const [bmi, setBmi] = useState({ height: "", weight: "", result: null });

  const calculateBMI = () => {
    if (bmi.height && bmi.weight) {
      const h = parseFloat(bmi.height) / 100;
      const w = parseFloat(bmi.weight);
      const res = (w / (h * h)).toFixed(1);
      setBmi({ ...bmi, result: res });
    }
  };

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
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all shadow-sm">
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
              <span key={role} className="px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-500 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white uppercase italic"
          >
            Fitness Club: <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 bg-clip-text text-transparent underline decoration-orange-500/30 underline-offset-8">
              Believe in yourself
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A high-energy, motivational platform designed to convert 
            resolutions into results through interactive tools and clean layouts.
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
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-[3.5rem] opacity-5 blur-[80px] transition duration-1000 group-hover:opacity-10" />
          <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80 bg-slate-900">
            <img
              src="/projects/UI/GYM.png"
              alt="Fitness Club Landing Page Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
            {/* Motivational Quote Overlay */}
            <div className="absolute bottom-12 right-12 text-right hidden lg:block">
               <p className="text-white text-3xl font-black italic uppercase leading-none mb-2">You only fail when</p>
               <p className="text-orange-500 text-4xl font-black italic uppercase tracking-tighter">You stop trying</p>
            </div>
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={Dumbbell}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 uppercase italic">High-Impact Hybrid Coaching</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-orange-500/40 pl-8 py-2">
                “Fitness Club is a modern gym website designed to motivate users, showcase services, and convert visitors into members.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                The goal was to create a high-energy, motivational, and action-driven experience. We prioritized strong visual storytelling and interactive features like the BMI calculator to build instant engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Trainers", value: "200+", icon: Users },
                { label: "Members", value: "1300+", icon: Trophy },
                { label: "Programs", value: "120+", icon: Target },
                { label: "Growth", value: "85k+", icon: TrendingUp },
              ].map((item, i) => (
                <div key={item.label} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                   <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                   <p className="text-4xl font-black text-white mb-2">{item.value}</p>
                   <p className="text-xs text-slate-500 uppercase font-black">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- THE CHALLENGE --- */}
        <Section title="Problem Statement" icon={ShieldAlert}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-12 rounded-[3.5rem] bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Friction in Fitness Journey</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Many gym websites suffer from a lack of engagement and overly complicated membership structures, making it difficult for beginners to take the first step.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Weak motivation and low engagement",
                  "Poor presentation of training programs",
                  "Complicated subscription / payment plans",
                  "Lack of interactive tools / ROI value"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 whitespace-nowrap overflow-hidden text-ellipsis">
                    <X className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-400 truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-orange-500/10 border border-orange-500/20 text-white flex flex-col justify-center shadow-xl shadow-orange-500/5">
              <div className="mb-6 p-4 rounded-full bg-orange-500/10 w-fit">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-wider text-orange-400">The Mission</h4>
              <p className="text-slate-300 leading-relaxed font-medium italic">
                “Deliver a motivating, clear, and action-driven platform that makes joining a gym as energetic as the workout itself.”
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Energy Hero", desc: "Bold headlines and athlete imagery for motivation.", icon: Layout },
              { title: "BMI Utility", desc: "Interactive tool to provide immediate health value.", icon: Calculator },
              { title: "Plan Comparison", desc: "Visual cards for effortless membership selection.", icon: Layers },
              { title: "Direct Action", desc: "Strategically placed CTAs for instant signups.", icon: Zap }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 w-fit mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* --- INTERACTIVE BMI CALCULATOR --- */}
        <Section title="Interactive BMI Utility" icon={Calculator}>
           <Card className="max-w-4xl mx-auto border-orange-500/10 bg-orange-500/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-4">Calculate Your BMI</h4>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                      This small interactive tool helps users understand their current physical baseline, 
                      providing an immediate "Return on Attention" before they ever join.
                    </p>
                    <div className="space-y-4">
                       <input 
                         type="number" 
                         placeholder="Height (cm)" 
                         className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/40 transition-all"
                         onChange={(e) => setBmi({...bmi, height: e.target.value})}
                       />
                       <input 
                         type="number" 
                         placeholder="Weight (kg)" 
                         className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/40 transition-all"
                         onChange={(e) => setBmi({...bmi, weight: e.target.value})}
                       />
                       <button 
                         onClick={calculateBMI}
                         className="w-full py-4 rounded-2xl bg-orange-500 text-slate-900 font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                       >
                         Calculate Now
                       </button>
                    </div>
                 </div>
                 <div className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] bg-slate-900 border border-white/5 text-center">
                    {bmi.result ? (
                       <motion.div
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         key={bmi.result}
                       >
                         <p className="text-xs font-black text-slate-500 uppercase mb-2">Your Result</p>
                         <p className="text-7xl font-black text-orange-500 mb-2">{bmi.result}</p>
                         <p className="text-sm font-bold text-white/60">Healthy Zone Calculation</p>
                       </motion.div>
                    ) : (
                       <Activity className="w-20 h-20 text-white/10 animate-pulse" />
                    )}
                 </div>
              </div>
           </Card>
        </Section>

        {/* --- USER PERSONAS --- */}
        <Section title="User Personas" icon={Users}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Persona 1: Oshadhi */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-2xl font-black italic">OA</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Oshadhi Anjana</h4>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest">The Beginner</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">University student who wants to start but feels overwhelmed. Needs simple guidance and motivation.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-orange-500 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Join gym easily</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Fear of starting</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-orange-600/20 border border-orange-500/30 text-orange-100 font-bold text-center text-sm shadow-lg shadow-orange-500/10">
                  “UX Insight: Keep UI simple, guided, and motivational”
                </div>
              </div>
            </div>

            {/* Persona 2: Kasun */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-2xl font-black italic">KS</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Kasun Silva</h4>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest">The Professional</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Software engineer who values efficiency. Needs a quick way to compare plans and maintain consistency.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-orange-500 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Efficient routine</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Limited time info</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-orange-600/20 border border-orange-500/30 text-orange-100 font-bold text-center text-sm shadow-lg shadow-orange-500/10">
                  “UX Insight: Prioritize speed + clarity”
                </div>
              </div>
            </div>

            {/* Persona 3: Dinithi */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black italic">DF</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Dinithi Fernando</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">The Enthusiast</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Fitness trainer who wants detailed programming and high-performance tracking metrics.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Explore advanced</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Basic content</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-800 text-white font-bold text-center text-sm shadow-lg shadow-black/20">
                  “UX Insight: Provide advanced without clutter”
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center italic text-slate-400">
            “Personas revealed beginners need guidance while enthusiasts need depth. This guided the architecture to balance motivational imagery with high-utility functionality.”
          </div>
        </Section>

        {/* --- PROGRAMS --- */}
        <Section title="High-Impact Programs" icon={Zap}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Strength Training", icon: Dumbbell, color: "rose" },
                { title: "Physical Fitness", icon: Activity, color: "blue" },
                { title: "Fat Loss Focus", icon: Flame, color: "orange" },
                { title: "Weight Gain", icon: TrendingUp, color: "emerald" }
              ].map((p, i) => (
                <div key={p.title} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-orange-500 transition-all">
                      <p.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                   <p className="text-xs text-slate-500 uppercase font-black">Join Program</p>
                </div>
              ))}
           </div>
        </Section>

        {/* --- MEMBERSHIP PLANS --- */}
        <Section title="Membership Options" icon={Layers}>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Daily Pass", price: "$10", features: ["Single Entry", "Basic Equipment", "Locker Room"], primary: false },
                { title: "Monthly Member", price: "$49", features: ["Unlimited Entry", "Free Guest Pass", "Fitness Analysis", "Group Classes"], primary: true },
                { title: "Yearly Pro", price: "$499", features: ["Priority Access", "Personal Trainer", "Meal Updates", "All Clubs Access"], primary: false }
              ].map((plan, i) => (
                <div key={plan.title} className={`p-12 rounded-[3.5rem] border ${plan.primary ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-white/5'} transition-transform hover:scale-[1.02]`}>
                   <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                   <p className="text-5xl font-black text-orange-500 mb-8">{plan.price}</p>
                   <ul className="space-y-4 mb-12">
                     {plan.features.map(f => (
                       <li key={f} className="flex items-center gap-3 text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                          {f}
                       </li>
                     ))}
                   </ul>
                   <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm ${plan.primary ? 'bg-orange-500 text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'} transition-all`}>
                      Join Now
                   </button>
                </div>
              ))}
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
                        { bg: "bg-orange-500", label: "Energy Orange" },
                        { bg: "bg-slate-900", label: "Deep Steel" },
                        { bg: "bg-white", label: "Clean White" },
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
                      <p className="text-4xl font-black text-white italic uppercase tracking-tighter italic font-black">Impact Heading</p>
                      <p className="text-slate-400 leading-relaxed font-medium">Strong, bold typefaces to maintain motivation across all touchpoints.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col justify-center h-full border border-white/5">
               <h4 className="text-xl font-bold mb-6">UX Design Intent</h4>
               <ul className="space-y-6">
                {[
                  { title: "Psychological Trigger", desc: "Using energy colors to reduce the psychological barrier to exercise." },
                  { title: "Decision Speed", desc: "Clear tier lists for membership to increase conversion speed." },
                  { title: "User ROI", desc: "Tools like the BMI calculator prove instant web value." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CircleCheck className="w-5 h-5 text-orange-500 shrink-0" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white uppercase italic">
                  Results Driven. <br />
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent underline decoration-orange-500/30 underline-offset-8">Engagement Focused.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  Fitness Club successfully combines motivation with high-end functionality to create an impact-driven digital companion for healthy lifestyles.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group text-lg uppercase tracking-widest"
                >
                  Start The Journey
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-600/5 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Insight</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Motivation as a Mechanic", desc: "Energy colors and bold type aren't just styling; they act as a psychological catalyst for user commitment." },
                  { title: "Utility beyond Cataloging", desc: "Interactive tools (BMI) transform a static portfolio into a functional utility, increasing session length." },
                  { title: "Frictionless Conversion", desc: "Simplifying complex membership data into a 3-tier comparison significantly decreases decision fatigue." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-orange-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-orange-500/10 border border-orange-500/20 text-white flex flex-col justify-center text-center shadow-xl shadow-orange-500/5">
              <div className="mb-8 inline-flex p-4 rounded-full bg-orange-500/10 mx-auto">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-orange-400">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “This project demonstrates that high-energy aesthetics and functional health tools are the key to building a high-conversion fitness platform.”
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/proto/IzSm8A8jCIH3MLV3QYyx2M/GYM?page-id=0%3A1&node-id=1-2&p=f&viewport=353%2C114%2C0.1&t=6rbffTLot1NDVvvO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-orange-600/20 border border-orange-500/30 text-white font-black hover:bg-orange-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-orange-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-1">Interactive Prototype</span>
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
