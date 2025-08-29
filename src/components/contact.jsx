// src/components/Contact.jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d } },
});

const Card = ({ className = "", children }) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${className}`}
  >
    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
    {children}
  </div>
);

const Field = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required,
  autoComplete,
  as = "input",
  rows = 5,
}) => {
  const InputTag = as;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <InputTag
        id={id}
        name={id}
        type={type}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white/5 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-400
          ${error ? "border-rose-400/60 focus:ring-2 focus:ring-rose-400/60" : "border-white/10 focus:ring-2 focus:ring-blue-400/60"}`}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "General Inquiry",
    budget: "",
    message: "",
    company: "", // honeypot (leave empty)
  });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const errors = useMemo(() => validate(values), [values]);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // basic bot check
    if (values.company) {
      setStatus({ type: "error", message: "Submission blocked (spam detected)." });
      return;
    }

    // if any error and not touched, mark all as touched to reveal messages
    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      return;
    }

    try {
      setSubmitting(true);

      // TODO: integrate your real endpoint here (e.g., Formspree, EmailJS, API route)
      // Example (Formspree):
      // const res = await fetch("https://formspree.io/f/xxxxxx", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });
      // if (!res.ok) throw new Error("Network response was not ok");

      // Simulate network delay:
      await new Promise((r) => setTimeout(r, 1200));

      setStatus({
        type: "success",
        message:
          "Thanks! Your message has been sent. I’ll get back to you within 24–48 hours.",
      });
      setValues({
        name: "",
        email: "",
        subject: "",
        projectType: "General Inquiry",
        budget: "",
        message: "",
        company: "",
      });
      setTouched({});
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or email me directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={fade(0)} className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let’s <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">talk</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Tell me about your idea, product, or open role. I usually respond within a day.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Contact info & social */}
          <motion.aside
            className="lg:col-span-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade(0.05)}
          >
            <Card>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-sm text-slate-300">
                Prefer email or a quick call? I’m flexible. For detailed proposals, use the form.
              </p>

              <div className="mt-6 space-y-3">
                <InfoRow icon={Mail} label="Email" value="yasiruln215@gmail.com" href="yasiruln215@gmail.com" />
                <InfoRow icon={Phone} label="Phone" value="+94 70 3875215" href="tel:+94 70 3875215" />
                <InfoRow icon={MapPin} label="Location" value="Colombo, Sri Lanka" />
                <InfoRow icon={Clock} label="Response" value="24 hrs (Mon–Fri)" />
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-200">Elsewhere</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <SocialLink href="https://github.com/Yasiru3875" icon={Github} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/yasiru-nuwan-a6193a2b8/" icon={Linkedin} label="LinkedIn" />
                  <SocialLink href="https://your-portfolio.com" icon={Globe} label="Website" />
                </div>
              </div>
            </Card>

            {/* Optional: map box placeholder */}
            <Card className="mt-6 p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <iframe
                  title="Map — Colombo, Sri Lanka"
                  src="https://www.google.com/maps?q=Malabe%2C%20Sri%20Lanka&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </Card>
          </motion.aside>

          {/* Right: Form */}
          <motion.section
            className="lg:col-span-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade(0.1)}
          >
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Project / Inquiry Form</h2>
              <p className="mt-2 text-sm text-slate-300">
                Share a bit about your goals and constraints budget, timeline, team, and links help.
              </p>

              {/* status banners */}
              <div className="mt-4" aria-live="polite">
                {status.type === "success" && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    <span>{status.message}</span>
                  </div>
                )}
                {status.type === "error" && (
                  <div className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-200">
                    <AlertCircle className="mt-0.5 h-4 w-4" />
                    <span>{status.message}</span>
                  </div>
                )}
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-6">
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    id="name"
                    required
                    value={values.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="name"
                    placeholder="Your name"
                    error={touched.name && errors.name}
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="email"
                    placeholder="you@example.com"
                    error={touched.email && errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Subject"
                    id="subject"
                    required
                    value={values.subject}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Brief topic"
                    error={touched.subject && errors.subject}
                  />
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-sm font-medium text-slate-200">
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={onChange}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-blue-400/60"
                    >
                      <option value="">Select a project type</option>
                      <option>UI wireframe</option>
                      <option>Portfolio / Website</option>
                      <option>Dashboard / App</option>
                      <option>Grapghic Design</option>
                      
                    </select>
                    
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-sm font-medium text-slate-200">
                      Budget (RS)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={onChange}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-blue-400/60"
                    >
                      <option value="">Select a range</option>
                      <option>Below 500</option>
                      <option>500 – 1,500</option>
                      <option>1,500 – 5,000</option>
                      <option>5,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="timeline" className="text-sm font-medium text-slate-200">
                      Desired timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={values.timeline || ""}
                      onChange={onChange}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-blue-400/60"
                    >
                      <option value="">Flexible</option>
                      <option>1–2 weeks</option>
                      <option>3–6 weeks</option>
                      <option>7–12 weeks</option>
                      <option>Ongoing</option>
                    </select>
                  </div>
                </div>

                <Field
                  label="Message"
                  id="message"
                  as="textarea"
                  rows={7}
                  required
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Share goals, scope, links, and constraints…"
                  error={touched.message && errors.message}
                />

                 
                {/* reCAPTCHA placeholder */}
                {/*
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-400">
                  Optional: Add reCAPTCHA here for extra spam protection.
                </div>
                */}

                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">
                    By sending, you agree to be contacted back about your inquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-800/20 focus:outline-none focus:ring-2 focus:ring-purple-400/60 disabled:cursor-not-allowed disabled:opacity-70"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Card>
          </motion.section>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Yasiru Nuwan — All rights reserved
      </footer>
    </main>
  );
}

/* -------------------- helpers -------------------- */

function InfoRow({ icon: Icon, label, value, href }) {
  const Cmp = href ? "a" : "div";
  return (
    <Cmp
      href={href}
      className={`group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 ${
        href ? "hover:bg-white/10" : ""
      }`}
      {...(href ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
        <Icon className="h-4 w-4 text-slate-200" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="truncate text-sm font-medium text-slate-200">{value}</div>
      </div>
    </Cmp>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
      aria-label={label}
      title={label}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function validate(v) {
  const errs = {};
  if (!v.name?.trim()) errs.name = "Please enter your name.";
  if (!v.email?.trim()) errs.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = "Enter a valid email address.";
  if (!v.subject?.trim()) errs.subject = "Please include a short subject.";
  if (!v.message?.trim()) errs.message = "Tell me a bit about your project or question.";
  return errs;
}
