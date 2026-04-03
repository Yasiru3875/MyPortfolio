import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Utensils,
  ShoppingBag,
  Clock,
  Layout,
  Search,
  Users,
  Target,
  ShieldAlert,
  Lightbulb,
  Trophy,
  ArrowRight,
  ExternalLink,
  X,
  PlusCircle,
  Gift,
  Calendar,
  Mail,
  Palette,
  Timer,
  Zap,
  MousePointer2,
  CheckCircle,
  Pizza,
  Coffee,
  IceCream,
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
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 shadow-lg shadow-rose-500/5">
        <Icon className="w-6 h-6 text-rose-400" strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-rose-400 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-rose-500/30 group ${className}`}
  >
    <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
    {children}
  </motion.div>
);

export default function SrifoodCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#020617] text-slate-200 selection:bg-red-500/30"
    >
      <div className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation / Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mb-16 text-slate-500 hover:text-white transition-all font-medium tracking-wide group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/5 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-all shadow-sm">
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
              <span key={role} className="px-4 py-1.5 rounded-full bg-rose-500/5 border border-rose-500/10 text-rose-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            SRIFOOD: <br />
            <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-rose-400 bg-clip-text text-transparent">
              Elevating the Culinary Journey
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A high-energy food ordering web platform focused on speed, transparency, 
            and appetizing visuals for the modern diner.
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-orange-600 rounded-[3rem] opacity-5 blur-[80px] transition duration-1000 group-hover:opacity-10" />
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/SRIFOOD.png"
              alt="SRIFOOD Landing Page Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={Utensils}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Redefining Food Ordering</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-rose-500/40 pl-8 py-2">
                “SRIFOOD aims to bridge the gap between hungry users and their favorite meals through a zero-friction digital interface.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                The platform is designed to make browsing, selection, and ordering feel as satisfying as the meal itself. By prioritizing visual hierarchy and high-quality food photography, we transformed a simple utility into an engaging culinary experience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Visual Catalog", desc: "Browsing food categories with stunning, high-res presentation.", icon: Search },
                { title: "Ordering Flow", desc: "A streamlined, minimal-step process from cart to checkout.", icon: ShoppingBag },
                { title: "Strategic Promotions", desc: "Dynamic banners and offer cards that drive user action.", icon: Gift },
                { title: "Reservations", desc: "Real-world utility with built-in table booking functionality.", icon: Calendar },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-white/10 transition-all shadow-sm group">
                    <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
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
              <h3 className="text-2xl font-bold text-white mb-6">User Friction in Food Tech</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Most food ordering sites are either visually boring or functionally cluttered, leading to "Decision Fatigue" and lost orders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Cluttered layouts with low hierarchy",
                  "Poor visual presentation of dishes",
                  "Difficult category switching",
                  "Lack of engaging promotional visuals"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <X className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-rose-500/10 border border-rose-500/20 text-white flex flex-col justify-center shadow-xl shadow-rose-500/5">
              <div className="mb-6 p-4 rounded-full bg-rose-500/10 w-fit">
                <Target className="w-8 h-8 text-rose-400" />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-wider text-rose-400">The Mission</h4>
              <p className="text-slate-300 leading-relaxed font-medium italic">
                “Deliver a fast, simple, and visually satisfying way to order food online with minimal cognitive load.”
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="Design Solutions" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clean Hierarchy", desc: "Hero-first approach with logical sectioning.", icon: Layout },
              { title: "Categorization", desc: "Easy scanning for Burgers, Pizza, and Dessert.", icon: Search },
              { title: "Visual-First", desc: "High-quality appetite-triggering food photography.", icon: Palette },
              { title: "Functional Booking", desc: "Simple form for real-world table reservations.", icon: Calendar }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-sm hover:border-rose-500/30 transition-all group">
                  <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-400 w-fit mb-8 group-hover:scale-110 transition-transform">
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
            {/* Persona 1: Kasun */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-rose-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-2xl font-black">KF</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Kasun Fernando</h4>
                  <p className="text-xs font-black text-red-500 uppercase tracking-widest">Hungry & Busy</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Software engineer who orders during tight work shifts. Needs speed and zero distractions.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-rose-400 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Quick ordering flow</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                    <p className="text-[10px] text-rose-400 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-slate-300">Slow checkout</p>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-rose-600/20 border border-rose-500/30 text-rose-100 font-bold text-center text-sm shadow-lg shadow-rose-500/10">
                  “UX Insight: Focus on speed + simplicity”
                </div>
              </div>
            </div>

            {/* Persona 2: Nethmi */}
            <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-2xl font-black">NS</div>
                <div>
                  <h4 className="text-xl font-bold text-white">Nethmi Silva</h4>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest">Food Lover</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                  <p className="text-sm text-slate-400 leading-relaxed">University student who loves exploring dishes. Highly influenced by high-energy food visuals.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-orange-500 font-bold uppercase mb-1">Goal</p>
                    <p className="text-[11px] text-slate-300">Discover new meals</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Pain</p>
                    <p className="text-[11px] text-orange-200">Boring food listings</p>
                  </div>
                </div>
                  <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-rose-100 font-bold text-center text-sm shadow-lg shadow-rose-500/10">
                    “UX Insight: Focus on visual storytelling”
                  </div>
                </div>
              </div>
  
              {/* Persona 3: Dinithi */}
              <div className="flex flex-col p-10 rounded-[3rem] border border-white/10 bg-white/5 shadow-sm hover:border-slate-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black">DP</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Dinithi Perera</h4>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Family Organizer</p>
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">About</p>
                    <p className="text-sm text-slate-400 leading-relaxed">Office manager planning family gatherings. Needs structured booking and dining clarity.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Goal</p>
                      <p className="text-[11px] text-slate-300">Simple book forms</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                      <p className="text-[10px] text-rose-400 font-bold uppercase mb-1">Pain</p>
                      <p className="text-[11px] text-slate-300">No reservation info</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-slate-800 text-white font-bold text-center text-sm shadow-lg shadow-black/20">
                    “UX Insight: Focus on clarity + structure”
                  </div>
                </div>
              </div>
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center italic text-slate-400">
            “The personas revealed three key user types: seekers of speed, visual lovers, and organized planners. This guided the SRIFOOD architecture to balance all three needs seamlessly.”
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
              <div key={p.title} className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center shadow-sm hover:border-rose-500/30 transition-all">
                <span className="absolute top-4 left-4 text-xs font-black text-white/10">{p.step}</span>
                <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white">{p.title}</h4>
              </div>
            ))}
          </div>
        </Section>

        {/* --- KEY FEATURES --- */}
        <Section title="Key Features & Insights" icon={Zap}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div>
                  <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <Pizza className="w-6 h-6 text-rose-400" /> Appetite triggers
                  </h4>
                  <ul className="space-y-6">
                    {[
                      { title: "High-Res Hero", desc: "Using 'Fresh Food' bold headlines paired with appetizing imagery for immediate impact." },
                      { title: "Visual Categories", desc: "Modular cards for Burgers, Pizza, and Desserts for rapid visual scanning." },
                      { title: "Newsletter Hook", desc: "Structured subscription flow for long-term user retention." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-auto bg-rose-500/40 rounded-full" />
                        <div>
                          <p className="font-bold text-white mb-1">{item.title}</p>
                          <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-xl border border-white/5">
                  <Calendar className="w-10 h-10 text-rose-400 mb-6" />
                  <h4 className="text-xl font-bold mb-4">Table Booking</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Real-world reservation logic integrated into a digital ordering flow.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Schedule", "Dine-in", "Pre-order"].map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">{t}</span>
                    ))}
                  </div>
               </div>
               <div className="p-10 rounded-[3rem] bg-rose-500/5 border border-rose-500/10">
                  <Gift className="w-10 h-10 text-rose-400 mb-6" />
                  <h4 className="text-xl font-bold text-rose-100 mb-4">Smart Offers</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Encouraging quick decision making through highlighted Lunch/Breakfast deals.</p>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-rose-500/40" />
                  </div>
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
                        { bg: "bg-red-600", label: "Appetite Red" },
                        { bg: "bg-orange-500", label: "Warm Note" },
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
                      <p className="text-4xl font-black text-white">Bold & Impactful</p>
                      <p className="text-slate-400 leading-relaxed font-medium">Clean sans-serif for high readability across mobile and desktop.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col justify-center h-full">
               <h4 className="text-xl font-bold mb-6">UX Design Intent</h4>
               <ul className="space-y-6">
                {[
                  { title: "Scroll Layout", desc: "Single-page experience for minimal cognitive load." },
                  { title: "Section Separation", desc: "Clear whitespace usage for functional clarity." },
                  { title: "CTA Hierarchy", desc: "Strategic placement of 'Explore Menu' and 'Subscribe'." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CircleCheck className="w-5 h-5 text-rose-500 shrink-0" />
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
          <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 bg-slate-950 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-orange-500/10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  A High-Engagement <br />
                  <span className="bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent underline decoration-rose-500/30 underline-offset-8">Food Interface.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  SRIFOOD delivers a visually rich and user-friendly food ordering experience by combining strong imagery with structured, frictionless navigation.
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
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Learned</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Appetite Logic in UX", desc: "Colors and presentation aren't just aesthetic; in food tech, they are the primary drivers of user conversion." },
                  { title: "Efficiency vs Visuals", desc: "Large imagery can impact performance. Finding the balance between high-res and fast-loading is critical for SEO." },
                  { title: "Utility beyond Ordering", desc: "Adding real-world features like Table Booking transforms a site from a store into a holistic restaurant partner." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-rose-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-rose-500/10 border border-rose-500/20 text-white flex flex-col justify-center text-center shadow-xl shadow-rose-500/5">
              <div className="mb-8 inline-flex p-4 rounded-full bg-rose-500/10 mx-auto">
                <Target className="w-8 h-8 text-rose-400" />
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-rose-400">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “SRIFOOD demonstrates how 'Mood UX' (using color and imagery to trigger specific user feelings) can significantly improve engagement in the food service industry.”
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.figma.com/design/LYpWX9b1cSPHBLUpWcvXui/SRIFOOD?node-id=0-1&t=grFFMRi7BQ2sYvoH-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-rose-600/20 border border-rose-500/30 text-white font-black hover:bg-rose-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-rose-500/10 active:scale-[0.98]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-rose-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-widest mb-1">Full Project Design</span>
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
