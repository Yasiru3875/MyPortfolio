// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, User, FolderOpen, Wrench, Mail, Menu, X } from "lucide-react";

const linkBase =
  "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition";
const linkInactive =
  "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent";
const linkActive =
  "text-white bg-white/10 border border-white/10 shadow-sm";

function NavItem({ to, icon: Icon, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? linkActive : linkInactive}`
      }
    >
      <Icon className="h-4 w-4" aria-hidden />
      <span>{children}</span>
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="/"
            className="group flex items-center gap-2 rounded-xl px-2 py-1"
            aria-label="Go to homepage"
          >
            <div className="h-6 w-6 rounded-md bg-gradient-to-r from-purple-500 to-blue-600" />
            <span className="text-sm font-semibold tracking-wide">
              YasiruNuwan<span className="text-slate-400"></span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            <NavItem to="/" icon={HomeIcon}>Home</NavItem>
            <NavItem to="/about" icon={User}>About</NavItem>
            <NavItem to="/services" icon={FolderOpen}>Projects</NavItem>

            {/* NEW: Contact page link */}
            <NavItem to="/contact" icon={Mail}>Contact</NavItem>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              <NavItem to="/" icon={HomeIcon} onClick={() => setOpen(false)}>
                Home
              </NavItem>
              <NavItem to="/about" icon={User} onClick={() => setOpen(false)}>
                About
              </NavItem>
              <NavItem to="/services" icon={Wrench} onClick={() => setOpen(false)}>
                Services
              </NavItem>

              {/* NEW: Contact page link (mobile) */}
              <NavItem to="/contact" icon={Mail} onClick={() => setOpen(false)}>
                Contact
              </NavItem>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
