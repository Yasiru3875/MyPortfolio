// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingActionMenu from "./components/FloatingActionMenu";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Global Background Animation */}
      <AnimatedBackground />

      {/* Resets scroll position when route changes */}
      <ScrollToTop />

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Modern FAB Menu */}
        <FloatingActionMenu />
      </div>
    </div>
  );
}
