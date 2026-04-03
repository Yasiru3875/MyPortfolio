// src/components/Services.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Brush, Code2, ExternalLink, Search, Tag, PenTool, X, ChevronRight, Maximize2 } from "lucide-react";

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
    title: "UI/UX & Product Design",
    desc: "End-to-end product design focused on intuitive, scalable, and user-centered digital experiences.",
    icon: Brush,
    bullets: [
      "User flows, wireframes, and high-fidelity prototypes",
      "Design systems, tokens, and reusable components",
      "AI-powered interfaces, dashboards, and workflow design",
      "Developer handoff with specs, assets, and design documentation",
    ],
  },
  {
    title: "Frontend & Interaction",
    desc: "Building responsive, accessible interfaces with modern frontend technologies.",
    icon: Code2,
    bullets: [
      "React, HTML5, CSS3, JavaScript, Tailwind CSS",
      "Component-based architecture and scalable UI structure",
      "Responsive design and cross-device optimization",
      "Performance-focused development and clean UI implementation",
    ],
  },
  {
    title: "Visual & Brand Design",
    desc: "Creating visual identities and digital assets aligned with product and brand goals.",
    icon: PenTool,
    bullets: [
      "Logo design, branding, and visual identity systems",
      "UI visuals, banners, and social media creatives",
      "Vector illustration and scalable asset creation",
      "Image editing, compositing, and visual refinement",
    ],
  },
];

/* Export projects so Home.jsx can consume the first 6 */
export const PROJECTS = [
  {
    id: "pv-64",
    title: "Converge",
    category: "Web Application",
    cover: "/projects/UI/converge.png",
    stack: ["Figma", "UI/UX", "Dashboard Design"],
    summary:
      "A real-time crisis platform enabling coordinated emergency response through a centralized dashboard and efficient communication.",
    demo: "https://www.figma.com/design/aakt7RTcJxDJd5mPxf1EVr/Converge?node-id=0-1&t=t0gxZNyb3dB8yF0w-1",
    caseStudy: "/case-study/converge",
  },
  {
    id: "pv-63",
    title: "HashBaze Logo Design",
    category: "Graphic Design",
    cover: "/projects/Graphic/HashBaze_logo.jpeg",
    stack: ["Illustrator", "Photoshop", "Branding", "Logo Design"],
    summary:
      "Designed the official logo for HashBaze, creating a modern and scalable visual identity aligned with the company’s digital and tech-focused brand. Focused on simplicity, versatility, and strong visual recognition across platforms.",
  },
  {
    id: "pv-01",
    title: "FitNexia",
    category: "Mobile Application",
    cover: "/projects/UI/fittness.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Fitness-tracking app designed for users to seamlessly track, set, and achieve their health goals. Created with Figma, this app combines functionality with motivation to empower fitness enthusiasts and beginners alike!",
    demo: "https://www.figma.com/design/z9Cnh8mZ9wCDnG3mtJ4dQ4/Fitnexia?node-id=0-1&t=Qa6GvRtY1ylwx98b-1",
    caseStudy: "/case-study/fitnexia",
  },
  {
    id: "pv-02",
    title: "SRIFOOD",
    category: "Web Application",
    cover: "/projects/UI/SRIFOOD.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This website is crafted to captivate food enthusiasts with a seamless interface, delicious visuals, and user-friendly navigation.",
    demo: "https://www.figma.com/design/LYpWX9b1cSPHBLUpWcvXui/SRIFOOD?node-id=0-1&t=grFFMRi7BQ2sYvoH-1",
    caseStudy: "/case-study/srifood",
  },
  {
    id: "pv-03",
    title: "BEATNEST",
    category: "Mobile Application",
    cover: "/projects/UI/BEATNEST.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Designed for music enthusiasts, BeatNest offers a visually appealing and intuitive interface, delivering seamless access to your favourite tunes.",
    demo: "https://www.figma.com/design/iOYJueNma4wx8M7o2m9Rk5/Untitled?node-id=0-1&t=aE6TvWsKj4ruYErs-1",
    caseStudy: "/case-study/beatnest",
  },
  {
    id: "pv-65",
    title: "Tuition Class Poster Design",
    category: "Graphic Design",
    cover: "/projects/Graphic/m65.jpg",
    stack: ["Photoshop", "Social Media Marketing", "Poster Design"],
    summary:
      "Designed a promotional poster for A/L 2028 Communication & Media Studies tuition classes, optimized for Facebook boosting. The design emphasizes clear information hierarchy, engaging visuals, and a professional, student-friendly appeal.It effectively presents class details such as dates, times, and subject information while ensuring strong visual impact and readability across digital platforms.",
  },
  {
    id: "pv-04",
    title: "Login Page",
    category: "Web Application",
    cover: "/projects/UI/Login.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Sign in to continue your experience: save favorites, sync progress, track activity, and stay secure everywhere.",
    demo:
      "https://www.figma.com/proto/nan93HP5YdieJ2exeoYsPE/Login?page-id=0%3A1&node-id=7-88&t=DfTLiUXcyP4sIiWr-1",
  },
  {
    id: "pv-05",
    title: "FlavourRush",
    category: "Mobile Application",
    cover: "/projects/UI/flavourRush.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This app is designed to provide a seamless and delightful experience, making food ordering faster, easier, and more enjoyable.",
    demo: "https://www.figma.com/design/ucY1AcGVsXnY5QfsZ63Ml2/FlavourRush?node-id=0-1&t=zmFXaPR5zmQIeuZU-1",
  },
  {
    id: "pv-06",
    title: "Banking App",
    category: "Mobile Application",
    cover: "/projects/UI/bankingApp.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This sleek and modern banking app ensures users have a seamless and secure experience managing their finances.",
    demo: "https://www.figma.com/design/PQu0DjOyVnTp91Aac6Wi4n/Untitled?node-id=0-1&t=iVFDl2icjpar2fJ6-1",
    caseStudy: "/case-study/banking",
  },
  {
    id: "pv-07",
    title: "BIC",
    category: "Web Application",
    cover: "/projects/UI/BIC.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Exciting challenge of redesigning the BIC website, focusing on improving user experience and usability across key pages. ",
    demo: "https://www.figma.com/design/Y6zBLShgJcb1W7Oogg9rhe/BIC-Final-1?node-id=0-1&t=E35gSXU3RvMeGm42-1",
    caseStudy: "/case-study/bic",
  },
  {
    id: "pv-08",
    title: "GYM",
    category: "Web Application",
    cover: "/projects/UI/GYM.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This project combines bold visuals, user-friendly navigation, and powerful content sections to help gyms attract new members, showcase their services, and build a strong online presence.",
    demo:
      "https://www.figma.com/proto/IzSm8A8jCIH3MLV3QYyx2M/GYM?page-id=0%3A1&node-id=1-2&p=f&viewport=353%2C114%2C0.1&t=6rbffTLot1NDVvvO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    caseStudy: "/case-study/gym",
  },
  {
    id: "pv-09",
    title: "Education App",
    category: "Mobile Application",
    cover: "/projects/UI/eduhub.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "SL Edu+, an E-Learning Mobile App designed to make education accessible, engaging, and seamless for students everywhere.",
    demo: "https://www.figma.com/design/JsYZ7EW0oaCV6ItPzpWWwo/EDU-hub?node-id=0-1&t=mFC2xqVgyv5kLvXN-1",
    caseStudy: "/case-study/eduhub",
  },
  {
    id: "pv-10",
    title: "Fashion Web Store",
    category: "Web Application",
    cover: "/projects/UI/newFashion.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This website takes users on a stylish, curated journey to effortlessly discover their favourite fashion pieces.",
    demo: "https://www.figma.com/design/QCHhP7AkU0C3w7vpyhj4Bq/Untitled?node-id=0-1&t=BnTVmE80GigrMSfH-1",
  },
  {
    id: "pv-11",
    title: "Next Gen",
    category: "Web Application",
    cover: "/projects/UI/Game.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This website guides you into next-gen VR—discover gear, demos, and immersive experiences.",
    demo: "https://www.figma.com/design/p9T77gzUJCOBaXRZFWkmdQ/Game?node-id=0-1&t=1elmy2AzmIyp2oY5-1",
  },
  {
    id: "pv-12",
    title: "NIKE STORE",
    category: "Web Application",
    cover: "/projects/UI/Nike.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Discover your next favourite Nike sneaker—curated drops, bold design, effortless shopping.",
    demo: "https://www.figma.com/design/8i0talD8cpjLDAFUJI3NZT/SHOES?node-id=0-1&t=4vb7AVq9pWnkTR8k-1",
  },
  {
    id: "pv-13",
    title: "Breath Natural",
    category: "Web Application",
    cover: "/projects/UI/planto.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "A modern Plant E-Commerce Web UI designed to inspire plant lovers everywhere",
    demo: "https://www.figma.com/design/Sog2K37VRnFgK0fvCeeOU0/Plant?node-id=0-1&t=SU11YQVCOAg7lUiU-1",
  },
  {
    id: "pv-14",
    title: "NIKE Website",
    category: "Web Application",
    cover: "/projects/UI/shoes.png",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Explore top Nike releases, detailed views, and fast, secure purchases.",
    demo:
      "https://www.figma.com/proto/8i0talD8cpjLDAFUJI3NZT/SHOES?page-id=0%3A1&node-id=8-123&viewport=509%2C504%2C0.19&t=Mfjcod0eFUvwPuLL-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    id: "pv-15",
    title: "Interior Design Studio",
    category: "Web Application",
    cover: "/projects/UI/interiorDesign.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "This website guides you through refined interiors to discover your signature space.",
    demo:
      "https://www.figma.com/design/NTReIxbab436gxsTqxtvs6/Interior-design?node-id=0-1&t=Jyw7g0gP70L98XNd-1",
    caseStudy: "/case-study/interior-design",
  },
  {
    id: "pv-16",
    title: "Music App",
    category: "Mobile Application",
    cover: "/projects/UI/travel.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Simplicity and elegance enhance the mobile UX—visuals to intuitive navigation.",
    demo: "https://www.figma.com/design/3UYQmQkuCmCuAtGEtg344j/Untitled?node-id=0-1&t=rNUnGUToLaTpW4UX-1",
  },
  {
    id: "pv-66",
    title: "Restingowl Logo Design",
    category: "Graphic Design",
    cover: "/projects/Graphic/owl.jpg",
    stack: ["Illustrator", "Photoshop", "Branding", "Logo Design"],
    summary:
      "Designed the official logo for Restingowl, an open-source library discovery platform. The design blends an owl symbol with tech-inspired elements to represent knowledge, security, and smart discovery. Focused on a clean, scalable, and versatile identity for strong recognition across web platforms.",
  },
  {
    id: "pv-17",
    title: "Movie App",
    category: "Mobile Application",
    cover: "/projects/UI/movieApp.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Focuses on making movie discovery, selection, and watching effortless and enjoyable.",
    demo: "https://www.figma.com/design/DtYziaKIFlix5577zxswgA/Untitled?node-id=0-1&t=ICazRBVNSo7LjQNx-1",
  },
  {
    id: "pv-18",
    title: "Simple Website",
    category: "Web Application",
    cover: "/projects/UI/SAPA.jpg",
    stack: ["Figma", "Photoshop", "UI", "UX"],
    summary:
      "Clean layouts, captivating visuals, and intuitive navigation for better UX.",
    demo: "https://www.figma.com/design/zueiaqWRhUccYCfUJakWbs/Untitled?node-id=0-1&t=bxU1TPG05RLFk92d-1",
  },
  {
    id: "pv-19",
    title: "CookieVerse",
    category: "Web Application",
    cover: "/projects/web/cookieVerse.png",
    stack: ["React.js", "Vite", "Tailwind CSS", "MongoDB", "Spring Boot"],
    summary:
      "A full-stack app where food enthusiasts learn, share, and connect through cooking.",
    demo: "https://github.com/Sarith-Samarakoon/CookieVerse",
  },
  {
    id: "pv-20",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/p4.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-21",
    title: "Cover Page",
    category: "Graphic Design",
    cover: "/projects/Graphic/b1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-22",
    title: "Banner",
    category: "Graphic Design",
    cover: "/projects/Graphic/banner1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-23",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/class2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-24",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l5.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-25",
    title: "Cover Page",
    category: "Graphic Design",
    cover: "/projects/Graphic/b2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-26",
    title: "Bottle label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/1m..jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-27",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/bus.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-28",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-29",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/class3.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-30",
    title: "Calendar",
    category: "Graphic Design",
    cover: "/projects/Graphic/calendar2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-31",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l3.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-32",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l4.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-33",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/p6.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-34",
    title: "T-shirt Design",
    category: "Graphic Design",
    cover: "/projects/Graphic/t1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-35",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/noraml11.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-36",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/normal7.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-37",
    title: "Mug Design",
    category: "Graphic Design",
    cover: "/projects/Graphic/mug1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-38",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/graj.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-39",
    title: "Bottle label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/2m..jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-40",
    title: "Bottle label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/3m..jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-41",
    title: "Bottle label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/4m..jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-42",
    title: "Bottle label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/5m.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-43",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l9.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-44",
    title: "Bussiness Card",
    category: "Graphic Design",
    cover: "/projects/Graphic/businessCard1.png",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-45",
    title: "Bussiness Card",
    category: "Graphic Design",
    cover: "/projects/Graphic/businessCard2.png",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },

  {
    id: "pv-46",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-47",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l10.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },

  {
    id: "pv-49",
    title: "Logo",
    category: "Graphic Design",
    cover: "/projects/Graphic/l7.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-50",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/m4.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-51",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/normal4.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-52",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/p2.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-53",
    title: "FLY",
    category: "Graphic Design",
    cover: "/projects/Graphic/normal5.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-54",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/claas1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-55",
    title: "Calendar",
    category: "Graphic Design",
    cover: "/projects/Graphic/calendar.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-56",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/p1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-57",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/p1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-58",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/normal12.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-59",
    title: "Tuition Classes Advertisement",
    category: "Graphic Design",
    cover: "/projects/Graphic/m5.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-60",
    title: "Letter D",
    category: "Graphic Design",
    cover: "/projects/Graphic/LetterD.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-61",
    title: "Soap Box label design",
    category: "Graphic Design",
    cover: "/projects/Graphic/soap1.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },
  {
    id: "pv-62",
    title: "Poster",
    category: "Graphic Design",
    cover: "/projects/Graphic/normal6.jpg",
    stack: ["Adobe Photoshop", "Adobe Illustraor"],
  },





];

const CATEGORIES = [
  "All",
  "Web Application",
  "Mobile Application",
  "Graphic Design",
  "Case Study",
];

/* --------------------------- C O M P O N E N T --------------------------- */
export default function Services() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullImage, setFullImage] = useState(null);

  const handleProjectClick = (p) => {
    setSelectedProject(p);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const inCat =
        cat === "All" ||
        p.category === cat ||
        (cat === "Case Study" && p.caseStudy);
      const inText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.summary && p.summary.toLowerCase().includes(q)) ||
        p.stack.join(" ").toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [query, cat]);

  return (
    <motion.main
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative min-h-screen text-white"
    >

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={fade(0)} className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Services &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Explore how I research, design, and build thoughtful interfaces—then iterate for performance,
            accessibility, and polish. Browse selected projects that show process, decisions, and outcomes.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  className={`rounded-xl px-3 py-2 text-xs font-medium transition ${active
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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fade(0.03 * i)}
              onClick={() => handleProjectClick(p)}
              className="cursor-pointer"
            >
              <Card className="p-0 transition-transform duration-300 hover:-translate-y-1">
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

                  {/* Expand Icon for Graphic Design */}
                  {p.category === "Graphic Design" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullImage(p.cover);
                      }}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
                      aria-label="View full image"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.summary && (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-300">{p.summary}</p>
                  )}

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

                  {(p.demo || p.category === "Web Application" || p.category === "Mobile Application") && (
                    <div className="mt-5 flex flex-wrap gap-6">
                      {p.demo && (
                        <a
                          href={p.demo}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300"
                          aria-label={`Open live demo for ${p.title}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                      {(p.category === "Web Application" || p.category === "Mobile Application") && (
                        p.caseStudy && p.caseStudy.startsWith("/") ? (
                          <Link
                            to={p.caseStudy}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
                            aria-label={`View case study for ${p.title}`}
                          >
                            <ChevronRight className="h-4 w-4" /> Case Study
                          </Link>
                        ) : (
                          <a
                            href={p.caseStudy || "#"}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
                            aria-label={`View case study for ${p.title}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ChevronRight className="h-4 w-4" /> Case Study
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

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
              I focus on building elegant, fast, and maintainable interfaces. Reach out for consulting,
              collaboration, or full-time opportunities.
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
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-y-auto">
                {/* Image Section */}
                <div className="group/modal-img relative md:w-1/2 overflow-hidden bg-slate-800">
                  <img
                    src={selectedProject.cover}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                  {/* Expand icon in Modal */}
                  <button
                    onClick={() => setFullImage(selectedProject.cover)}
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black opacity-0 group-hover/modal-img:opacity-100"
                    aria-label="Expand image"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
                  <div>
                    <div className="mb-2">
                      <Pill>{selectedProject.category}</Pill>
                    </div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      About the Project
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.summary || "No detailed summary available for this project yet."}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-10 flex flex-wrap gap-4">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-slate-200 shadow-xl shadow-white/5"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Preview
                      </a>
                    )}
                    {(selectedProject.category === "Web Application" || selectedProject.category === "Mobile Application") && (
                      selectedProject.caseStudy && selectedProject.caseStudy.startsWith("/") ? (
                        <Link
                          to={selectedProject.caseStudy}
                          onClick={() => setSelectedProject(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                        >
                          <ChevronRight className="h-4 w-4" /> View Case Study
                        </Link>
                      ) : (
                        <a
                          href={selectedProject.caseStudy || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                        >
                          <ChevronRight className="h-4 w-4" /> View Case Study
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {fullImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-h-full max-w-full"
            >
              <img
                src={fullImage}
                alt="Full screen view"
                className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl object-contain ring-1 ring-white/10"
              />
              <button
                onClick={() => setFullImage(null)}
                className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:-right-12 sm:top-0"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Yasiru Nuwan — All rights reserved
      </footer>
    </motion.main>
  );
}
