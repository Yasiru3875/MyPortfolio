// src/components/SocialIcons.jsx
import { SiLinkedin, SiGithub, SiX, SiTelegram, SiInstagram, SiBehance } from "react-icons/si";

const socials = [
  { href: "https://www.linkedin.com/in/your-id", label: "LinkedIn", Icon: SiLinkedin },
  { href: "https://github.com/your-id",           label: "GitHub",   Icon: SiGithub },
  { href: "https://x.com/your-id",                label: "X",        Icon: SiX },
  { href: "https://t.me/your-id",                 label: "Telegram", Icon: SiTelegram },
  { href: "https://instagram.com/your-id",        label: "Instagram",Icon: SiInstagram },
  { href: "https://behance.net/your-id",          label: "Behance",  Icon: SiBehance },
];

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black shadow-md ring-1 ring-white/10 transition
                     hover:-translate-y-0.5 hover:ring-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        >
          <Icon className="h-5 w-5 text-slate-200 transition group-hover:text-white" />

        </a>
      ))}
    </div>
  );
}
