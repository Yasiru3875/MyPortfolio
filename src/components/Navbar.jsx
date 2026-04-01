// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, User, FolderOpen, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/about", label: "About", icon: User },
  { path: "/services", label: "Projects", icon: FolderOpen },
  { path: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Floating Island Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto relative flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 p-2 shadow-xl shadow-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/40"
      >
        {/* Brand */}
        <NavLink to="/" className="group relative z-10 flex items-center gap-3 rounded-full px-2" aria-label="Go to homepage">
          <div className="overflow-hidden rounded-full ring-2 ring-white/10 transition duration-300 group-hover:ring-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <img
              src="/images1/brand.jpg"
              alt="Yasiru Nuwan logo"
              className="h-8 w-8 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="hidden sm:block text-sm font-bold tracking-wider text-slate-200 transition group-hover:text-white">
            Yasiru<span className="text-purple-400">Nuwan</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex pr-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 inline-flex items-center justify-center rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.div animate={{ rotate: open ? 180 : 0 }} className="flex">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-2 shadow-2xl backdrop-blur-xl md:hidden origin-top"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive 
                          ? "bg-white/10 text-white shadow-sm ring-1 ring-white/10" 
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
