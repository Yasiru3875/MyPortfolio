// src/components/Services.jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Brush,
  Code2,
  MonitorSmartphone,
  Cpu,
  LineChart,
  Layers,
  ExternalLink,
  FileText,
  Search,
  Tag,
  Sparkles,
  PenTool,
  Image,
} from "lucide-react";

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d } },
});

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
    <Tag className="h-3 w-3" aria-hidden />
    {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${className}`}>
    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
    {children}
  </div>
);

/* ----------------------------- D A T A ----------------------------- */
const SERVICES = [
  {
    title: "UI/UX & Design Systems",
    desc: "Wireframes, prototypes, and token-driven components built in Figma / Adobe.",
    icon: Brush,
    bullets: ["User flows, low→hi-fi prototypes","Design tokens & reusable components","Developer handoff: specs, assets", "Accessibility patterns & usability testing"],
  },
  {
    title: "Frontend Engineering",
    desc: "Modern, responsive UIs with HTML, CSS, JavaScript and React where needed.",
    icon: Code2,
    bullets: ["Semantic, accessible markup", "Clean component architecture", "Tailwind styling & utilities", "Performance: code-splitting, lazy routes, CWV."],
  },
  {
    title: "Adobe Photoshop & Illustrator",
    desc: "Brand visuals, hero imagery, and scalable vector assets for web and print.",
    icon: PenTool,
    bullets: [ "Logos, Banners, Cover Pages and vector illustrations", "Brand guidelines & asset kits", "Retouching, compositing, color grading", "Social media creatives(Posters, Banners)"],
  },
];

/* Example projects — replace with your real data */
const PROJECTS = [
  {
    id: "pv-01",
    title: "FitNexia",
    category: "App Design",
    cover:
      "/projects/UI/fittness.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Fitness-tracking app designed for users to seamlessly track, set, and achieve their health goals. Created with Figma, this app combines functionality with motivation to empower fitness enthusiasts and beginners alike!",
    demo: "https://www.figma.com/design/z9Cnh8mZ9wCDnG3mtJ4dQ4/Fitnexia?node-id=0-1&t=Qa6GvRtY1ylwx98b-1",
  },
  
 
  {
    id: "pv-02",
    title: "SRIFOOD",
    category: "Web Design",
    cover:
      "/projects/UI/SRIFOOD.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This website is crafted to captivate food enthusiasts with a seamless interface, delicious visuals, and user-friendly navigation.",
    demo: "https://www.figma.com/design/LYpWX9b1cSPHBLUpWcvXui/SRIFOOD?node-id=0-1&t=grFFMRi7BQ2sYvoH-1",
  
  },
  {
    id: "pv-03",
    title: "BEATNEST",
    category: "App Design",
    cover:
      "/projects/UI/BEATNEST.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Designed for music enthusiasts, BeatNest offers a visually appealing and intuitive interface, delivering seamless access to your favourite tunes.",
    demo: "https://www.figma.com/design/iOYJueNma4wx8M7o2m9Rk5/Untitled?node-id=0-1&t=aE6TvWsKj4ruYErs-1",
  },
  {
    id: "pv-04",
    title: "Login Page",
    category: "Web Design",
    cover:
      "/projects/UI/Login.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Sign in to continue your experience: save favorites, sync progress, track activity, and stay secure everywhere.",
    demo: "https://www.figma.com/proto/nan93HP5YdieJ2exeoYsPE/Login?page-id=0%3A1&node-id=7-88&t=DfTLiUXcyP4sIiWr-1",
 
  },
   {
    id: "pv-05",
    title: "FlavourRush",
    category: "App Design",
    cover:
      "/projects/UI/flavourRush.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This app is designed to provide a seamless and delightful experience, making food ordering faster, easier, and more enjoyable.",
    demo: "https://www.figma.com/design/ucY1AcGVsXnY5QfsZ63Ml2/FlavourRush?node-id=0-1&t=zmFXaPR5zmQIeuZU-1",
    
  },
  
   {
    id: "pv-06",
    title: "Banking App",
    category: "App Design",
    cover:
      "/projects/UI/bankingApp.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This sleek and modern banking app ensures users have a seamless and secure experience managing their finances.",
    demo: "https://www.figma.com/design/PQu0DjOyVnTp91Aac6Wi4n/Untitled?node-id=0-1&t=iVFDl2icjpar2fJ6-1",
  },
   {
    id: "pv-07",
    title: "BIC",
    category: "Web Design",
    cover:
      "/projects/UI/BIC.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Exciting challenge of redesigning the BIC website, focusing on improving user experience and usability across key pages. ",
    demo: "https://www.figma.com/design/Y6zBLShgJcb1W7Oogg9rhe/BIC-Final-1?node-id=0-1&t=E35gSXU3RvMeGm42-1",
  },
   {
    id: "pv-08",
    title: "GYM",
    category: "Web Design",
    cover:
      "/projects/UI/GYM.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This project combines bold visuals, user-friendly navigation, and powerful content sections to help gyms attract new members, showcase their services, and build a strong online presence.",
    demo: "https://www.figma.com/proto/IzSm8A8jCIH3MLV3QYyx2M/GYM?page-id=0%3A1&node-id=1-2&p=f&viewport=353%2C114%2C0.1&t=6rbffTLot1NDVvvO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
   {
    id: "pv-09",
    title: "Education App",
    category: "App Design",
    cover:
      "/projects/UI/eduhub.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "I’m excited to share my latest project—SL Edu+, an E-Learning Mobile App designed to make education accessible, engaging, and seamless for students everywhere.",
    demo: "https://www.figma.com/design/JsYZ7EW0oaCV6ItPzpWWwo/EDU-hub?node-id=0-1&t=mFC2xqVgyv5kLvXN-1",

  },
   {
    id: "pv-10",
    title: "Fashion Web Store",
    category: "Web Design",
    cover:
      "/projects/UI/newFashion.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This website takes users on a stylish, curated journey to effortlessly discover their favourite fashion pieces.",
    demo: "https://www.figma.com/design/QCHhP7AkU0C3w7vpyhj4Bq/Untitled?node-id=0-1&t=BnTVmE80GigrMSfH-1",
  },
   {
    id: "pv-11",
    title: "Next Gen",
    category: "Web Design",
    cover:
      "/projects/UI/Game.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This website guides you into next-gen VR—discover gear, demos, and immersive experiences.",
    demo: "https://www.figma.com/design/p9T77gzUJCOBaXRZFWkmdQ/Game?node-id=0-1&t=1elmy2AzmIyp2oY5-1",
    
  },
   {
    id: "pv-12",
    title: "NIKE STORE",
    category: "Web Design",
    cover:
      "/projects/UI/Nike.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Discover your next favourite Nike sneaker—curated drops, bold design, effortless shopping.",
    demo: "https://www.figma.com/design/8i0talD8cpjLDAFUJI3NZT/SHOES?node-id=0-1&t=4vb7AVq9pWnkTR8k-1",
    
  },
   {
    id: "pv-13",
    title: "Breath Natural",
    category: "Web Design",
    cover:
      "/projects/UI/planto.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "A modern Plant E-Commerce Web UI designed to inspire plant lovers everywhere",
    demo: "https://www.figma.com/design/Sog2K37VRnFgK0fvCeeOU0/Plant?node-id=0-1&t=SU11YQVCOAg7lUiU-1",
   
  },
   {
    id: "pv-14",
    title: "NIKE Website",
    category: "Web Design",
    cover:
      "/projects/UI/shoes.png",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Explore top Nike releases, detailed views, and fast, secure purchases.",
    demo: "https://www.figma.com/proto/8i0talD8cpjLDAFUJI3NZT/SHOES?page-id=0%3A1&node-id=8-123&viewport=509%2C504%2C0.19&t=Mfjcod0eFUvwPuLL-1&scaling=scale-down&content-scaling=fixed",
  },
   {
    id: "pv-15",
    title: "Interior Design Studio",
    category: "Web Design",
    cover:
      "/projects/UI/interiorDesign.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This website guides you through refined interiors to discover your signature space.",
    demo: "https://www.figma.com/design/NTReIxbab436gxsTqxtvs6/Interior-design?node-id=0-1&t=Jyw7g0gP70L98XNd-1",
  },
   {
    id: "pv-16",
    title: "Music App",
    category: "App Design",
    cover:
      "/projects/UI/travel.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Have you ever wondered how simplicity and elegance can enhance the mobile user experience? These screens showcase a seamless design journey—from breathtaking visuals to intuitive navigation.",
    demo: "https://www.figma.com/design/3UYQmQkuCmCuAtGEtg344j/Untitled?node-id=0-1&t=rNUnGUToLaTpW4UX-1",
  },
   {
    id: "pv-17",
    title: "Movie App",
    category: "App Design",
    cover:
      "/projects/UI/movieApp.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "This project focuses on making movie discovery, selection, and watching effortless and enjoyable.",
    demo: "https://www.figma.com/design/DtYziaKIFlix5577zxswgA/Untitled?node-id=0-1&t=ICazRBVNSo7LjQNx-1",
  },
   {
    id: "pv-18",
    title: "Simple Website",
    category: "Web Design",
    cover:
      "/projects/UI/SAPA.jpg",
    stack: ["Figma","Photoshop", "UI","UX"],
    summary:
      "Have you ever wondered how clean layouts, captivating visuals, and intuitive navigation can transform user experiences? These travel UIs are my take on designing for ease, beauty, and functionality.",
    demo: "https://www.figma.com/design/zueiaqWRhUccYCfUJakWbs/Untitled?node-id=0-1&t=bxU1TPG05RLFk92d-1",

  },
   {
    id: "pv-19",
    title: "CookieVerse",
    category: "Web Application",
    cover:
      "/projects/web/cookieVerse.png",
    stack: ["React.js","Vite", "Tailwind CSS","MongoDB","Spring Boot"],
    summary:
      "This is full-stack web application designed for food enthusiasts and aspiring chefs to learn, share, and connect through the joy of cooking.",
    demo: "https://github.com/Sarith-Samarakoon/CookieVerse",

  },
   {
    id: "pv-20",
    title: "Poster",
    category: "Graphic Design",
    cover:
      "/projects/Graphic/p4.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
      {
    id: "pv-21",
    title: "Cover Page",
    category: "Graphic Design",
    cover:
      "/projects/Graphic/b1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
     {
    id: "pv-22",
    title: "Banner",
    category: "Graphic Design",
    cover:
      "/projects/Graphic/banner1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
     {
    id: "pv-23",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover:
      "/projects/Graphic/class2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },   {
    id: "pv-24",
    title: "Logo",
    category: "Graphic Design",
    cover:
      "/projects/Graphic/l5.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
 
   
];

const CATEGORIES = ["All", "Web Design UIs", "App Design UIs", "Graphic Design", "Mobile Application", "Web Application"];

/* --------------------------- C O M P O N E N T --------------------------- */
export default function Services() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const inText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [query, cat]);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade(0)}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Services &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Explore how I research, design, and build thoughtful interfaces then iterate for performance, accessibility, and polish alongside selected projects and case studies that demonstrate process, decisions, and measurable outcomes.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <motion.div variants={fade(0.05 * i)} key={s.title}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                      {s.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade(0)}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-xl px-3 py-2 text-xs font-medium transition ${
                    active
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* search */}
          <div className="relative w-full sm:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects (tech, title, summary)…"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60"
              aria-label="Search projects"
            />
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="projects">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.article key={p.id} variants={fade(0.03 * i)}>
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
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                

                  {/* actions */}
                  <div className="mt-5 flex gap-3">
                   
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300"
                      aria-label={`Open live demo for ${p.title}`}
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center text-slate-400">
            No projects match your filters. Try a different category or search term.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="contact">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)}>
          <Card className="flex flex-col items-center p-8 text-center sm:p-12">
            <h3 className="text-xl font-semibold">Let’s build something exceptional</h3>
            <p className="mt-3 max-w-2xl text-slate-300">
              I focus on building elegant, fast, and maintainable interfaces. Reach out for
              consulting, collaboration, or full-time opportunities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-800/20"
              >
                Email Me
              </a>
            </div>
          </Card>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Yasiru Nuwan — All rights reserved
      </footer>
    </main>
  );
}
