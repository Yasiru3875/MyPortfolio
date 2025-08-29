// src/Home.jsx
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";


const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 sm:py-28">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/20" />
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
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />


<header className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-[78vh]">
  {/* left content grid */}
  <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
    <motion.div
      className="lg:col-span-7"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>UI/UX</Pill>
        <Pill>App Design</Pill>
        <Pill>Graphic Design</Pill>
        <Pill>Web Design</Pill>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        I’m Yasiru Nuwan{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          UI/UX Engineer.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-slate-300">
         I’m Yasiru Nuwan, a fourth-year computing undergraduate specializing in UI/UX. I thrive on turning complex problems into intuitive, visually polished interfaces that meet functional goals and elevate user satisfaction. With hands-on experience across development projects, a strong problem-solving mindset, and a drive to take on challenges, I’m eager to contribute to a forward-thinking team while continuing to grow as a UI/UX engineer.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="/images1/YASIRU_NUWAN__CV.pdf"
          className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-800/20 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
        >
          Contact Me
        </a>
      </div>

      {/* quick stats */}
      <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
        {[
          { k: "10+", v: "Certifications" },
          { k: "10+", v: "Skills" },
          { k: "20+", v: "Projects" },
        ].map((s) => (
          <div
            key={s.v}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <div className="text-2xl font-extrabold">{s.k}</div>
            <div className="text-xs text-slate-300">{s.v}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>

  {/* RIGHT-SIDE SPLINE (frameless, large) */}
  <motion.div
    initial={{ opacity: 0, x: 40, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className="pointer-events-none lg:pointer-events-auto lg:absolute lg:inset-y-0 lg:-right-0 xl:-right-40 lg:w-[52%]"
  >
    {/* height scales with viewport; tweak if you like */}
    <div className="h-[42vh] sm:h-[50vh] md:h-[56vh] lg:h-full">
      <Spline scene="https://prod.spline.design/rBvQb49je71cJr2W/scene.splinecode" />
    </div>

    {/* soft gradient so left text stays readable */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-slate-950/80" />
  </motion.div>
  <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-l from-transparent to-slate-950/80" />

</header>

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
            { t: "About Me", d: "I’m Yasiru Nuwan, a third-year computing undergraduate specializing in UI/UX." },
            { t: "Projects", d: "Interactive builds with clean UI, purposeful motion, and real-world results." },
            { t: "Certificates", d: "Continuous learning and training, recognized credentials that reflect rigorous professional standards." },
            { t: "Contact", d: "Let’s collaborate; contact me to discuss roles, projects, and opportunities together." },
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

      {/* PROJECTS */}
      
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Projects where design clarity, performance, and maintainability come together"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((idx, i) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp(0.05 * i)}
            >
             
              <Card className="p-1">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`/projects/UI/fittness.png`}
                    alt={`Project ${idx}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">FitNexia</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                    Fitness-tracking app designed for users to seamlessly track, set, and achieve their health goals. Created with Figma, this app...
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Pill>Figma</Pill>
                    <Pill>Photoshop</Pill>
                    <Pill>UI</Pill>
                    <Pill>UX</Pill>
                  </div>
                  <div className="mt-5 flex gap-3">
                  
                    <a
                      href="#"
                      className="text-sm font-semibold text-purple-400 hover:text-purple-300"
                      aria-label="Open live demo"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
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
          <motion.div variants={fadeUp(0)}>
            <Card>
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Adoe XD",
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

          <motion.div variants={fadeUp(0.05)}>
            <Card>
              <h3 className="text-lg font-semibold">Strengths</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• UI/UX focused on intuitive, aesthetic interfaces.</li>
                <li>• User research & usability testing</li>
                <li>• Problem-solving and critical thinking</li>
                <li>• Communication and teamwork</li>
                <li>• Time management and attention to detail</li>
                <li>• Creativity and decision-making</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp(0.1)}>
            <Card>
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
                href="mailto:hello@example.com"
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
    </main>
  );
}
