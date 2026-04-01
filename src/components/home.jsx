// src/Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Typewriter = ({ text, delay = 1200, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout;
    let isActive = true;

    const tick = () => {
      if (!isActive) return;

      if (!isDeleting) {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
          if (i <= text.length) {
            timeout = setTimeout(tick, speed);
          } else {
            isDeleting = true;
            timeout = setTimeout(tick, 2500); // wait longer when text is fully typed
          }
        }
      } else {
        if (i > 0) {
          i--;
          setDisplayedText(text.slice(0, i));
          if (i > 0) {
            timeout = setTimeout(tick, speed / 2); // delete twice as fast
          } else {
            isDeleting = false;
            timeout = setTimeout(tick, 800); // wait before retyping
          }
        }
      }
    };

    const startTimeout = setTimeout(tick, delay);
    return () => {
      isActive = false;
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return (
    <span className="inline-flex items-center">
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] sm:w-[5px] h-[0.9em] bg-blue-400 ml-1"
        style={{ WebkitTextFillColor: "initial" }}
      />
    </span>
  );
};
import { Link } from "react-router-dom";
import { PROJECTS } from "./services";
import { SiLinkedin, SiGithub, SiInstagram, SiBehance } from "react-icons/si";
import { 
  MonitorSmartphone, 
  PenTool, 
  Layers, 
  Figma, 
  Globe, 
  Smartphone, 
  Users, 
  Library, 
  Paintbrush, 
  LayoutDashboard, 
  Cpu, 
  Search, 
  Box, 
  Code, 
  Target 
} from "lucide-react";

const MARQUEE_ITEMS = [
  { text: "UI/UX DESIGN", Icon: MonitorSmartphone },
  { text: "WIREFRAMING", Icon: PenTool },
  { text: "PROTOTYPING", Icon: Layers },
  { text: "FIGMA", Icon: Figma },
  { text: "WEB DESIGN", Icon: Globe },
  { text: "APP DESIGN", Icon: Smartphone },
  { text: "USER RESEARCH", Icon: Users },
  { text: "DESIGN SYSTEMS", Icon: Library },
];

const ADD_VALUE_ITEMS = [
  { icon: Paintbrush, title: "UI/UX Design", desc: "Designing intuitive, user-centered interfaces for web and mobile applications." },
  { icon: Layers, title: "Product Design", desc: "End-to-end design from research and user flows to high-fidelity, developer-ready solutions." },
  { icon: LayoutDashboard, title: "Dashboard & System Design", desc: "Designing scalable dashboards and complex systems with clear workflows and data visualization." },
  { icon: Cpu, title: "AI-Powered UX", desc: "Creating user experiences for AI-driven platforms, simplifying complex logic into usable interfaces." },
  { icon: Search, title: "UX Research & Testing", desc: "Conducting user research, usability testing, and data-driven design improvements." },
  { icon: Box, title: "Design Systems", desc: "Building scalable design systems, reusable components, and consistent UI frameworks." },
  { icon: Code, title: "Frontend Collaboration", desc: "Working closely with developers to deliver production-ready designs and smooth implementation." },
  { icon: Target, title: "Branding & Visual Design", desc: "Creating logos, visual identities, and digital assets aligned with product goals." }
];

const CAROUSEL_ICONS = [
  { icon: Figma, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: MonitorSmartphone, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: PenTool, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { icon: LayoutDashboard, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Globe, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
  { icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Code, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
];
const duplicatedIcons = [...CAROUSEL_ICONS, ...CAROUSEL_ICONS];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {title && (
        <motion.div

          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(0)}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base/7 text-slate-300">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 ${className}`}>
    {/* glow */}
    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
    {children}
  </div>
);

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen text-white"
    >
      <header className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-[78vh]">
        {/* left content grid */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] flex flex-wrap items-baseline gap-x-3 sm:gap-x-5"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {["I’m", "Yasiru", "Nuwan,"].map((word, i) => (
                <motion.span key={i} className="overflow-hidden block line-clamp-1 pb-2">
                  <motion.span
                    className="block"
                    variants={{
                      hidden: { y: "110%", opacity: 0 },
                      show: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
              <motion.span className="overflow-hidden block line-clamp-1 pb-2">
                <motion.span
                  className="block pb-1"
                  variants={{
                    hidden: { y: "110%", opacity: 0, scale: 0.95 },
                    show: { y: "0%", opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  <motion.span className="block bg-gradient-to-r from-purple-400 via-blue-300 to-blue-600 bg-clip-text text-transparent min-h-[1.2em]">
                    <Typewriter text="UI/UX Engineer" delay={1000} speed={100} />
                  </motion.span>
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              I’m a UI/UX Engineer with 1+ year of experience designing intuitive, user-centered digital products. I turn complex ideas into clear <span className="font-semibold text-slate-200">user flows</span>, <span className="font-semibold text-slate-200">wireframes</span>, and <span className="font-semibold text-slate-200">high-fidelity designs</span>.
              <br />

              I’ve worked on <span className="font-semibold text-purple-300">AI-powered platforms</span>, <span className="font-semibold text-purple-300">real-time systems</span>, and <span className="font-semibold text-purple-300">data-driven dashboards</span>, improving usability and simplifying workflows.
              <br />

              Open to opportunities to build <span className="font-semibold text-blue-300">impactful digital products</span>.
            </motion.p>

            <br></br>

            {/* The "Screenshot Layout" */}
            <div className="mt-10 flex flex-col gap-5 xl:max-w-[42rem]">

              {/* Row 1: Actions & Social Dock */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 sm:justify-between w-full">

                {/* Buttons (Left Side) */}
                <div className="flex items-center gap-3">
                  <a
                    href="/images1/Yasiru_Nuwan_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-purple-800/20 transition-all hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
                  >
                    Download CV
                  </a>
                  <Link
                    to="/contact"
                    className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 sm:px-6 text-sm font-bold text-slate-300 transition-all hover:bg-white/10 hover:scale-105"
                  >
                    Contact Me
                  </Link>
                </div>

                {/* Social Dock (Right Side) */}
                <div className="flex items-center gap-2">
                  {[
                    { href: "https://linkedin.com/in/yasiru-nuwan-a6193a2b8", label: "LinkedIn", Icon: SiLinkedin },
                    { href: "https://www.behance.net/yasirunuwan", label: "Behance", Icon: SiBehance },
                    { href: "https://github.com/Yasiru3875", label: "GitHub", Icon: SiGithub },
                    { href: "https://www.instagram.com/yasiru_vithanage?igsh=eW9leDMweXFnMXk1&utm_source=qr", label: "Instagram", Icon: SiInstagram },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Row 2: The Three Stat Cards */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {[
                  { k: "10+", v: "Certifications" },
                  { k: "10+", v: "Skills" },
                  { k: "20+", v: "Projects" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="flex flex-1 flex-col items-center justify-center gap-1 min-w-[100px] sm:min-w-[120px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-6 px-4 shadow-sm transition-all hover:bg-white/10 hover:-translate-y-1"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">{s.k}</span>
                    <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-slate-400">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT-SIDE SPLINE (frameless, large) */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 4.0, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="pointer-events-none lg:pointer-events-auto lg:absolute lg:inset-y-0 lg:-right-0 xl:-right-40 lg:w-[52%]"
        >
          {/* height scales with viewport; tweak if you like */}
          <div className="h-[42vh] sm:h-[50vh] md:h-[56vh] lg:h-full">
            <Spline scene="https://prod.spline.design/rBvQb49je71cJr2W/scene.splinecode" />
          </div>
        </motion.div>

      </header>

      {/* Cinematic Marquee Split (Option Y) */}
      <div
        className="relative z-20 mx-auto w-full overflow-hidden py-10 sm:py-16 my-4 sm:my-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >

        {/* Glow */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-[80px] w-full max-w-4xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-[60px] pointer-events-none" />

        <div className="flex flex-col gap-6 sm:gap-8 relative z-0">
          {/* TRACK 1 (Moving Left) */}
          <div className="flex w-max">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-6 pr-6 w-max"
            >
              {[...MARQUEE_ITEMS.slice(0, 4), ...MARQUEE_ITEMS.slice(0, 4), ...MARQUEE_ITEMS.slice(0, 4), ...MARQUEE_ITEMS.slice(0, 4)].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={`t1-${i}`}
                    className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer"
                  >
                    <Icon className="h-5 w-5 text-purple-400" strokeWidth={2} />
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* TRACK 2 (Moving Right) */}
          <div className="flex w-max">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-6 pr-6 w-max"
            >
              {[...MARQUEE_ITEMS.slice(4, 8), ...MARQUEE_ITEMS.slice(4, 8), ...MARQUEE_ITEMS.slice(4, 8), ...MARQUEE_ITEMS.slice(4, 8)].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={`t2-${i}`}
                    className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer"
                  >
                    <Icon className="h-5 w-5 text-blue-400" strokeWidth={2} />
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>

      {/* HIGHLIGHTS */}
      <Section
        id="highlights"
        title="What’s inside"
        subtitle="A fast tour of my work, process, and credentials built for clarity, speed, and motion."
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              t: "About Me",
              d: "I’m Yasiru Nuwan, an Associate UI/UX Engineer focused on designing intuitive, scalable, and user-centered digital products."
            },
            {
              t: "Projects",
              d: "Real-world products across AI platforms, dashboards, and web/mobile systems, built with strong UX thinking and clean UI."
            },
            {
              t: "Certificates",
              d: "Continuous learning through industry-relevant certifications, strengthening both design thinking and technical skills."
            },
            {
              t: "Contact",
              d: "Open to opportunities and collaborations; let’s build impactful digital experiences together."
            },
          ].map((item, i) => (
            <motion.div variants={fadeUp(0.05 * i)} key={item.t}>
              <Card>
                <h3 className="text-lg font-semibold">{item.t}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.d}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* HOW I ADD VALUE */}
      <Section
        id="value"
        title="How I Add Value"
        subtitle="Delivering user-centered, scalable, and impactful design solutions across digital products and platforms."
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ADD_VALUE_ITEMS.map((item, i) => (
            <motion.div key={i} variants={fadeUp(0.05 * i)} className="flex">
              <Card className="flex flex-1 flex-col p-8 group transition-all hover:-translate-y-2 hover:border-purple-500/30">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                  <item.icon className="h-6 w-6 text-slate-300 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 font-medium flex-1">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* INFINITE ICON CAROUSEL (Transparent Wavy Design) */}
      <section className="relative w-full overflow-hidden py-8 sm:py-12">
        {/* CSS Keyframes for the loop, hover pauses, and vertical sine-wave float */}
        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes float-y {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg) scale(1); 
            }
            25% { 
              transform: translateY(-32px) rotate(-8deg) scale(1.08); /* Surge upward: tilt backward and enlarge */
            } 
            75% { 
              transform: translateY(32px) rotate(8deg) scale(0.92);  /* Plunge downward: tilt forward and shrink */
            } 
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
            width: max-content;
          }
          .animate-infinite-scroll:hover, .animate-infinite-scroll:hover .animate-float {
            animation-play-state: paused;
          }
          .animate-float {
            animation: float-y 4s ease-in-out infinite;
          }
          /* CSS based mask works universally on everything beneath it */
          .mask-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}</style>

        {/* Global Edge Mask Wrapper (eliminates strict bg-fade gradients) */}
        <div className="mask-edges relative z-10 w-full overflow-hidden">
          <div className="relative flex w-max animate-infinite-scroll items-center gap-4 sm:gap-6 pr-4 sm:pr-6 py-12">

            {/* SVG line removed as requested. Only floating icons remain. */}

            {/* Icons Array with Sine-Wave Float Stagger */}
            {duplicatedIcons.map((item, idx) => (
              <div
                key={idx}
                className="animate-float relative z-10"
                style={{ animationDelay: `${(idx % CAROUSEL_ICONS.length) * 0.3}s` }}
              >
                <div
                  className={`flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 cursor-pointer items-center justify-center rounded-[2rem] border backdrop-blur-md transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] ${item.bg} ${item.border}`}
                >
                  <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 drop-shadow-lg ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Projects where design clarity, performance, and maintainability come together"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.slice(0, 6).map((p, i) => (
            <motion.article key={p.id} variants={fadeUp(0.05 * i)}>
              <Card className="p-0">
                {/* media */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Pill>{p.category}</Pill>
                  </div>
                </div>

                {/* body */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-purple-400 hover:text-purple-300"
                        aria-label={`Open live demo for ${p.title}`}
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* SKILLS & CERTS */}
      <Section
        id="skills"
        title="Skills & Certifications"
        subtitle="Skills sharpened in practice, supported by recognized industry certifications."
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp(0)} className="h-full">
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Adobe XD",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Canva",
                  "Android Studio",
                  "Python",
                  "Java",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Flutter",
                  "Kotlin",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp(0.05)} className="h-full">
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Strengths</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Designing intuitive, user-centered interfaces with strong UX principles</li>
                <li>• Translating complex systems into clear workflows and dashboards</li>
                <li>• End-to-end product design: research → wireframes → high-fidelity UI</li>
                <li>• UX research, usability testing, and data-driven design decisions</li>
                <li>• Collaboration with developers to deliver production-ready designs</li>
                <li>• Strong problem-solving, attention to detail, and design consistency</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp(0.1)} className="h-full">
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• FutureLearn Certified : User Experience</li>
                <li>• IBM Certified : User Experience Design</li>
                <li>• Great Learning Certified : UI/UX for Beginners</li>
                <li>• IBM Certified :  Web Development Fundamentals</li>
                <li>• CODL Certified : Web Design for Beginners</li>
                <li>• Great Learning Certified : Front End Development</li>

              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* CONTACT CTA */}
      <Section
        id="contact"
        title="Let’s collaborate"
        subtitle="Have a project, idea, or role in mind? I’d love to hear about it."
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(0)}
        >
          <Card className="flex flex-col items-center p-8 text-center sm:p-12">
            <p className="max-w-2xl text-slate-300">
              I focus on building elegant, fast, and maintainable interfaces. Reach out for
              consulting, collaboration, or full-time opportunities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:yasiruln215@gmail.com"
                className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-800/20"
              >
                Email Me
              </a>

            </div>
          </Card>
        </motion.div>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Yasiru Nuwan — All rights reserved
      </footer>
    </motion.main>
  );
}
