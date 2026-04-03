import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Music,
  Headphones,
  Search,
  User,
  Heart,
  Layout,
  Smartphone,
  Zap,
  Target,
  ShieldAlert,
  Brain,
  Lightbulb,
  Trophy,
  ArrowRight,
  ExternalLink,
  X,
  PlayCircle,
  Layers,
  Palette,
  Timer
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

export default function BeatnestCaseStudy() {
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
            {["UI/UX Designer", "Product Researcher", "Mobile Dev Enthusiast"].map((role, i) => (
              <span key={role} className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
          >
            BEATNEST: <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
              Personalized Music Streaming
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl"
          >
            A modern mobile music streaming app designed to deliver a personalized, 
            immersive, and seamless listening experience.
          </motion.p>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="mb-40 group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-[3rem] opacity-10 blur-[80px] transition duration-1000 group-hover:opacity-20" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/80">
            <img
              src="/projects/UI/BEATNEST.jpg"
              alt="BEATNEST App Mockup"
              className="w-full h-auto object-cover transition duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* --- PROJECT OVERVIEW --- */}
        <Section title="Project Overview" icon={Music}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">The Goal</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-purple-500/40 pl-8 py-2">
                “Building a platform where discovery meets simplicity, allowing users to manage and enjoy their music effortlessly.”
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                BEATNEST was created to bridge the gap between complex music libraries and the user's need for instant, personalized gratification. The focus was on smooth playback, intuitive discovery, and a visually engaging aesthetic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Discover New Music", icon: Search },
                { title: "Personalized Mixes", icon: Zap },
                { title: "Smooth Playback", icon: PlayCircle },
                { title: "Effortless Management", icon: Layout },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* --- THE CHALLENGE --- */}
        <Section title="Problem Statement" icon={ShieldAlert}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Current Market Friction</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Many modern music apps struggle with "Feature Overload," leading to a cluttered experience that hinders discovery and slows down the user journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Overcrowded and confusing interfaces",
                  "Poor music discovery algorithms/UX",
                  "Slow navigation between core features",
                  "Lack of meaningful personalization"
                ].map(text => (
                  <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="bg-gradient-to-br from-red-500/10 to-transparent p-10 rounded-[2rem] border border-red-500/20 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-4">The User Need</h4>
              <p className="text-slate-400 italic">
                "Users want a fast, intuitive, and visually engaging music experience that feels tailored to them."
              </p>
            </div>
          </div>
        </Section>

        {/* --- SOLUTION --- */}
        <Section title="The Solution" icon={Lightbulb}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clean UI", desc: "Visually rich yet simple interface focused on content.", icon: Layout },
              { title: "Personalized", desc: "Top Mixes and tailored recommendations.", icon: Heart },
              { title: "Fast Access", desc: "Recently played and quick navigation shortcuts.", icon: Timer },
              { title: "Immersive Player", desc: "Engaging playback with focus on album art.", icon: Headphones }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="p-8">
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 w-fit mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* --- TARGET AUDIENCE --- */}
        <Section title="Target Audience" icon={Target}>
          <Card className="bg-gradient-to-br from-purple-500/10 via-transparent to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Age Group", val: "18 – 40" },
                { label: "Demographic", val: "Music Lovers" },
                { label: "Lifestyle", val: "Students & Pros" },
                { label: "Interest", val: "Casual to Enthusiasts" }
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-xl font-black text-white">{item.val}</p>
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* --- PERSONAS --- */}
        <Section title="User Personas" icon={Brain}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { src: "/projects/CaseStudy/bn1.png", alt: "User Persona 1" },
              { src: "/projects/CaseStudy/bn2.png", alt: "User Persona 2" }
            ].map((persona, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div 
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] p-4 cursor-zoom-in group-hover:border-purple-500/40 transition-colors"
                  onClick={() => setSelectedImage(persona)}
                >
                  <img
                    src={persona.src}
                    alt={persona.alt}
                    className="w-full h-auto object-contain transition duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* --- DESIGN PROCESS --- */}
        <Section title="Design Process" icon={Layers}>
          <div className="flex flex-wrap gap-4">
            {[
              { step: "01", title: "Research", desc: "Understanding user needs" },
              { step: "02", title: "Ideation", desc: "Planning features & layout" },
              { step: "03", title: "Wireframing", desc: "Structuring the UI" },
              { step: "04", title: "Visual Design", desc: "Creating modern interface" },
              { step: "05", title: "Prototyping", desc: "Interactive flow" }
            ].map((step, i) => (
              <div key={step.title} className="flex-1 min-w-[200px] p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-4xl font-black text-purple-500/20 mb-4">{step.step}</p>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* --- KEY SCREENS --- */}
        <Section title="Key Screens & Features" icon={Smartphone}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <Card>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-400" /> Onboarding & Hero
                </h4>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Strong visual identity with custom headphone illustrations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>High-contrast gradient CTA ("Get Started") for conversion.</span>
                  </li>
                </ul>
             </Card>
             <Card>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-purple-400" /> Modular Home Screen
                </h4>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Personalized greetings and smart search bar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Modular sections: Top Mixes, Recommendations, Recently Played.</span>
                  </li>
                </ul>
             </Card>
             <Card>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-purple-400" /> Immersive Player
                </h4>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Focus on large-scale album artwork and gradients.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Quick actions for Like, Download, and Add to Playlist.</span>
                  </li>
                </ul>
             </Card>
             <Card>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-400" /> Profile & Security
                </h4>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Unified account settings and support management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>Advanced security features like Face ID integration.</span>
                  </li>
                </ul>
             </Card>
          </div>
        </Section>

        {/* --- VISUAL DESIGN --- */}
        <Section title="Visual Identity" icon={Palette}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Color Palette</h4>
                <div className="flex gap-4">
                  {[
                    { bg: "bg-[#2D0063]", label: "Deep Purple" },
                    { bg: "bg-[#FF0080]", label: "Neon Pink" },
                    { bg: "bg-[#00D4FF]", label: "Cyan Blue" },
                  ].map(color => (
                    <div key={color.label} className="group">
                      <div className={`w-20 h-20 rounded-2xl ${color.bg} border border-white/10 mb-2 shadow-2xl transition-transform group-hover:scale-110`} />
                      <p className="text-[10px] font-bold text-slate-500 text-center uppercase">{color.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Typography & Tone</h4>
                <p className="text-3xl font-black text-white leading-tight">
                  Modern + Vibrant. <br />
                  <span className="text-purple-400">Bold headings</span> for hierarchy and clean sans-serif for readability.
                </p>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 border-purple-500/20">
               <h4 className="text-xl font-bold text-white mb-6">UX Design Intent</h4>
               <ul className="space-y-6">
                {[
                  { title: "Bottom Navigation", desc: "Prioritizing thumb-zone access for core actions." },
                  { title: "Card-Based Layout", desc: "Modular chunks for rapid scanning of content." },
                  { title: "Personalized Content", desc: "Dynamically tailored sections for user engagement." }
                ].map(item => (
                  <li key={item.title}>
                    <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
               </ul>
            </Card>
          </div>
        </Section>

        {/* --- CHALLENGES & RESULTS --- */}
        <Section title="Challenges & Results" icon={Trophy}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-orange-500/20">
              <h4 className="text-xl font-bold text-white mb-6">Challenges Faced</h4>
              <ul className="space-y-4">
                {[
                  "Balancing visual richness vs simplicity.",
                  "Organizing large, varied music content.",
                  "Maintaining a performance-friendly UI."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-orange-400 font-bold">0{i+1}</span>
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-green-500/20 bg-green-500/5">
              <h4 className="text-xl font-bold text-white mb-6">Key Results</h4>
              <ul className="space-y-4">
                {[
                  "Higher user engagement through personalization.",
                  "25% faster navigation between core features.",
                  "Enhanced content hierarchy and scannability.",
                  "Highly positive feedback on visual energy."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-sm text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Final Reflection Banner */}
        <Section title="Final Outcome" icon={Trophy}>
          <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 bg-slate-900 shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                  A Personalized Music Experience <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent underline decoration-purple-500/30 underline-offset-8">That Resonates.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  BEATNEST delivers a seamless and immersive listening journey by combining smart personalization with a modern, high-energy visual design.
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
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />
          </div>
        </Section>

        {/* --- REFLECTION --- */}
        <Section title="Reflection" icon={Lightbulb}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <Card className="lg:col-span-8 p-12 bg-white/[0.03]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Learned</h3>
              </div>
              <div className="grid gap-8">
                {[
                  { title: "Personalization is key", desc: "In a world of endless content, curation isn't just a feature—it's the core value proposition for music enthusiasts." },
                  { title: "Visual Energy + Usability", desc: "Vibrant designs should never compromise accessibility. Balancing neon accents with high contrast was a primary focus." },
                  { title: "Modular Scalability", desc: "Building card-based layouts allows the interface to grow with content without feeling overcrowded." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-none w-1 h-auto bg-gradient-to-b from-purple-500/50 to-transparent rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="lg:col-span-4 p-12 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 border-purple-500/20 flex flex-col justify-center text-center">
              <div className="mb-8 inline-flex p-4 rounded-full bg-purple-500/10 text-purple-400 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">Final Insight</h4>
              <p className="text-slate-300 font-medium leading-relaxed italic">
                “This project demonstrates how consistent visual hierarchy and smart navigation can transform a complex music library into a delightful, personalized discovery tool.”
              </p>
            </Card>
          </div>
        </Section>

        <div className="flex justify-center mt-20">
          <a
            href="https://www.figma.com/design/iOYJueNma4wx8M7o2m9Rk5/Untitled?node-id=0-1&t=aE6TvWsKj4ruYErs-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-purple-600/20 border border-purple-500/30 text-white font-black hover:bg-purple-600/30 transition-all hover:scale-[1.03] shadow-2xl shadow-purple-500/10 active:scale-[0.98]"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
              <Layout className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-1">Full Project Design</span>
              <span className="text-xl">View Project in Figma</span>
            </div>
            <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

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
                className="relative max-w-5xl w-full flex items-center justify-center pointer-events-none"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-3xl"
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
