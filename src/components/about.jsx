// src/About.jsx
import { motion } from "framer-motion";


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
    {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${className}`}>
    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
    {children}
  </div>
);

const Progress = ({ label, value }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="text-slate-200">{label}</span>
      <span className="text-slate-400">{value}%</span>
    </div>
    <div aria-hidden className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600"
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="sr-only">{label} proficiency {value} percent</span>
  </div>
);

export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn(0)}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I’m Yasiru Nuwan, a fourth-year computing undergraduate focused on UI/UX, turning complex problems into clean, intuitive interfaces, eager to contribute, learn, and deliver user-centered designs with measurable impact, driving growth.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Pill>UI/UX</Pill>
            <Pill>App Design</Pill>
            <Pill>Graphic Design</Pill>
            <Pill>Web Design</Pill>
          </div>
        </motion.div>
      </section>

      {/* Bio + Photo + Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Photo */}
          <motion.div
            className="order-1 lg:order-none lg:col-span-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.05)}
          >
            <Card className="p-3">
              <div className="relative overflow-hidden rounded-xl h-72 sm:h-96 lg:h-[24rem]">
                <img
                  src="/images1/prof1.jpg"
                  alt="Portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 text-center text-sm text-slate-300">
                Sri Lanka • Open to remote collaborations
              </div>
            </Card>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.1)}
          >
            <Card>
              <h2 className="text-xl font-semibold">Short Bio</h2>
              <p className="mt-3 text-slate-300">
                I’m a UI/UX-focused computing undergraduate turning complex requirements into simple, usable, visually polished interfaces. Through varied projects, I’ve developed strong problem-solving, continuous learning, and collaborative skills to deliver user-centered outcomes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Designed interfaces that balance aesthetics with functional goals</li>
                <li>• Contributed to multiple projects across mobile and web</li>
                <li>• Comfortable across a broad toolchain (design, platforms)</li>
                <li>• Strong problem-solving and critical thinking</li>
                <li>• Communicates clearly; collaborates well in teams</li>
                
              </ul>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "20+", v: "Projects" },
                  { k: "10+", v: "Certificate" },
                  { k: "1", v: "Years" },
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
            </Card>
          </motion.div>

          {/* Strengths / Values */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.15)}
          >
            <Card>
              <h2 className="text-xl font-semibold">Values</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Clarity over clutter</li>
                <li>• Accessibility & empathy</li>
                <li>• Performance</li>
                <li>• Collaboration</li>
                <li>• Continuous learning</li>
                <li>• Craft & detail</li>
                <li>• Consistency & scalability</li>
                <li>• Measure, iterate, ship</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>WCAG</Pill>
                <Pill>Design Systems</Pill>
                <Pill>Responsive Design</Pill>
                <Pill>DX</Pill>
                <Pill>React + Tailwind</Pill>
                <Pill>Prototyping (Figma/XD)</Pill>
      
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid + Proficiency */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-2xl font-bold"
        >
          Skills & Tools
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Proficiency bars */}
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.05)}
          >
            <Card>
              <div className="grid grid-cols-1 gap-5">
                <Progress label="UI/UX Design (Figma / XD)" value={92} />
                <Progress label="React (Frontend)" value={80} />
                <Progress label="HTML / CSS / JavaScript" value={88} />
                <Progress label="Android / Kotlin" value={75} />
                <Progress label="Graphic Design (Adobe Photoshop / Adobe Illustrator)" value={95} />
              </div>
            </Card>
          </motion.div>

          {/* Tools grid */}
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.1)}
          >
            <Card>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Figma",
                  "Adobe XD",
                  "Photoshop",
                  "Illustrator",
                  "React",
                  "Tailwind",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Android Studio",
                  "Kotlin",
                  
                  
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-slate-200">{t}</span>
                    <span className="text-xs text-slate-400">Core</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-2xl font-bold"
        >
          Experience Timeline
        </motion.h2>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 relative border-s border-white/10"
        >
          {[
            {
              title: "UI/UX Engineer - Intern",
              time: "2024 — 2025",
              desc:
                "Designed mobile/web UIs and wireframes in Figma; collaborated on usability-focused deliverables.",
            },
            {
              title: "UI/UX Engineer — Trainee",
              time: "2025 — Present",
              desc:
                "Designed and prototyped mobile/web interfaces in Figma; ran quick usability checks and prepared developer handoff with components, tokens, and specs.",
            },
           
          ].map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeIn(0.05 * i)}
              className="ml-6 mb-8"
            >
              <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-600" />
              <Card className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="mt-1 text-xs text-slate-400 sm:mt-0">
                    {item.time}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </Card>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      {/* Education Qualification */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-2xl font-bold"
        >
          Education Qualification
        </motion.h2>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 relative border-s border-white/10"
        >
          {[
            {
              title: "BSc (Hons) in Information Technology — SLIIT",
              time: "2022 — Present",
              desc:
                "Undergraduate studies with emphasis on UI/UX and full-stack fundamentals.",
            },
            {
              title: "Diploma in English Language & Literature — Aquinas",
              time: "2021 — 2022",
              desc:
                "Completed diploma to strengthen communication and writing",
            },
            {
              title: "English Diploma — British Way English Academy",
              time: "2019 - 2020",
              desc:
                "Intensive program in speaking, writing, reading, and listening with daily practice and modern training facilities.",
            },
          ].map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeIn(0.05 * i)}
              className="ml-6 mb-8"
            >
              <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-600" />
              <Card className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="mt-1 text-xs text-slate-400 sm:mt-0">
                    {item.time}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </Card>
            </motion.li>
          ))}
        </motion.ol>
      </section>

          {/* === Certificates === */}
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn(0)}
        className="text-2xl font-bold"
      >
        Certificates
      </motion.h2>

      {/* DATA (edit or extend) */}
      {/*
        Replace the image URLs with your certificate images/screenshots.
        You can add more items to this array.
      */}
      {(() => {
        const CERTIFICATES = [
          {
            title: "UI / UX for Beginners — Great Learning",
            img: "/images1/UIUX.png",
            desc: "successfully completed the UI/UX course offered by Great Learning Academy. ",
            tags: ["Difference between UI UX", "UX Process", "Wireframe and Prototype", "UI UX Tool"],
            link: "https://www.mygreatlearning.com/certificate/GAZKNYVG", // optional: link to credential
          },
          {
            title: "Introduction to Artificial Intelligence — Great Learning",
            img: "/images1/AI.png",
            desc: "successfully completed the Artificial Intelligence course offered by Great Learning Academy. ",
            tags: ["Neural Networks", "Computer Vision", "Deep Neural Networks"],
            link: "https://www.mygreatlearning.com/certificate/PEIYBHFM",
          },
          {
            title: "Introduction To AngularJS — Great Learning",
            img: "/images1/Angular JS.png",
            desc: "successfully completed the AngularJS course offered by Great Learning Academy. ",
            tags: ["Prerequisites", "SPA's", "MVC", "Versions and Transitions"],
            link: "https://www.mygreatlearning.com/certificate/HCDQQSTL",
          },
          {
            title: "Introduction To Digital Markerting — Great Learning",
            img: "/images1/Digital Marketing.png",
            desc: "successfully completed the Digital Marketing course offered by Great Learning Academy.  ",
            tags: ["Content Marketing", "SEO SEM", "Social Media Marketing", "PPC and PR"],
            link: "https://www.mygreatlearning.com/certificate/GNXVNOCW",
          },
          {
            title: "Front End Development — Great Learning",
            img: "/images1/Front End Development-HTML.png",
            desc: "successfully completed the Front End Development- HTML course offered by Great Learning Academy. ",
            tags: ["HTML", "Tags", "Attributes", "Comments", "Elements"],
            link: "https://www.mygreatlearning.com/certificate/YFDOKJFH",
          },
          {
            title: "Angular7 for Advanced Level — Great Learning",
            img: "/images1/Angular7.png",
            desc: "successfully completed the Angular7 for Advanced Level course offered by Great Learning Academy.  ",
            tags: ["Angular7 Pipes", "Angular7 Routing", "Angular7 New Features"],
            link: "https://www.mygreatlearning.com/certificate/IENHTSQT",
          },
          {
            title: "Web Design for Beginners — CODL",
            img: "/images1/Web_Design.jpg",
            desc: "successfully completed the “Web Design for Beginners” online learning program conducted by the Department of Information Technology, Faculty of Information Technology, University of Moratuwa ",
            tags: ["HTML5", "CSS3", "JavaScript"],
            link: "https://open.uom.lk/lms/mod/customcert/my_certificates.php?userid=290759&certificateid=2&downloadcert=1",
          },
           {
            title: "Digital Skills-User Experience — Future Learn",
            img: "/images1/digitalskillsUX.jpg",
            desc: "successfully completed the User Experience online course by Accenture on FutureLearn",
            tags: ["UX fundamentals", "User research", "Wireframing", "Prototyping", "Usability testing"],
            link: "https://www.futurelearn.com/certificates/66jta5k",
          },
          
           {
            title: "Web Development Fundamentals — IBM",
            img: "/images1/webDev.png",
            desc: "successfully completed the “Web Development Fundamentals” digital credential from IBM SkillsBuild ",
            tags: ["HTML", "CSS", "JavaScript", "Website Testing", "Web Deployment"],
            link: "https://www.linkedin.com/posts/yasiru-nuwan-a6193a2b8_webdevelopment-frontenddevelopment-ibm-activity-7355657625100791810-XlFc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAExQKGkBHYSJtpbU_mMvY1SBLAkY1OOb46U",
          },
          {
            title: "User Experience Design Fundamentals — IBM",
            img: "/images1/UXDesign.png",
            desc: "successfully completed the “User Experience Design Fundamentals” digital credential from IBM SkillsBuild ",
            tags: ["UX Design", "UX Design", "Building a Story-based Design", "Usability Tests", "Wireframing and Prototyping"],
            link: "https://www.linkedin.com/posts/yasiru-nuwan-a6193a2b8_uxdesign-userexperience-ibmskillsbuild-activity-7358536093564055552-karT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAExQKGkBHYSJtpbU_mMvY1SBLAkY1OOb46U",
          },
           {
            title: "AWS SimuLearn: Computing Solutions from Amazon Web Services — AWS",
            img: "/images1/AWS coputing solution.png",
            desc: "completed AWS SimuLearn: Computing Solutions from Amazon Web Services (AWS).  ",
            tags: ["Amazon EC2", "Analyze scaling concepts", "mplementation strategies"],
            link: "https://skillbuilder.aws/ddac385e-3067-4fdb-a9fd-4f3b0b5740c2",
          },
           {
            title: "Introduction to Azure Virtual Machines — Microsoft ",
            img: "/images1/Azure Virtual.png",
            desc: "completed “Introduction to Azure Virtual Machines” from Microsoft Learn.  ",
            tags: ["Virtual Machine", "Provisioning & Management", "Availability & Backup"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/XQUFZ8DY?sharingId=6C53708D77E74409",
          },
           {
            title: "Plan your Linux environment in Azure — Microsoft ",
            img: "/images1/Azure_plan.png",
            desc: "completed “Introduction to Azure Plan your Linux environment” from Microsoft Learn.  ",
            tags: ["Azure Linux VMs", "Sizing & Networking", "Deploy & Configure"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/URS9FXH3?sharingId=6C53708D77E74409",
          },
          {
            title: "Discribe cloud computing — Microsoft ",
            img: "/images1/cloudComputing.png",
            desc: "completed “Discribe cloud computing Azure Virtual Machines” from Microsoft Learn.  ",
            tags: ["Cloud Concepts", "Deployment Models", "Shared Responsibility"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/A48RQLT7?sharingId=6C53708D77E74409",
          },
          {
            title: "Describe the benefits of using cloud services — Microsoft ",
            img: "/images1/cloudServices.png",
            desc: "completed “Describe the benefits of using cloud services” Azure Virtual Machines from Microsoft Learn.  ",
            tags: ["High Availability", "Manageability" ,"Reliability & Predictability"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/H7L3YT68?sharingId=6C53708D77E74409",
          },
          {
            title: "Describe cloud service types — Microsoft ",
            img: "/images1/cloudServiceTypes.png",
            desc: "completed “Describe cloud service types” Azure Virtual Machines from Microsoft.  ",
            tags: ["IaaS", "Paas", "SaaS", "Use Cases", "Cost & Management"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/FM9N2R6X?sharingId=6C53708D77E74409",
          },
            {
            title: "File System in the Cloud — AWS ",
            img: "/images1/cloudServiceTypes.png",
            desc: "completed “File System in the Cloud” from AWS.  ",
            tags: ["AWS Architecture", "S3 File Sharing", "CloudFront & IAM", "AI SimuLearn Lab", "Comms & Problem-Solving"],
            link: "https://learn.microsoft.com/api/achievements/share/en-us/YasiruNuwan-0325/FM9N2R6X?sharingId=6C53708D77E74409",
          },
            {
            title: "Introduction to Amazon Simple Storage Service (S3) — AWS ",
            img: "/images1/cloudServiceTypes.png",
            desc: "completed “Introduction to Amazon Simple Storage Service (S3)” from AWS.  ",
            tags: ["Amazon S3", "Bucket Operations", "Bucket Operations"],
            link: "https://skillbuilder.aws/a285378a-8d4a-4937-9af2-c38d65cb12cc",
          },
          
         
        ];

        return (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.05)}
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CERTIFICATES.map((c, i) => (
              <motion.article key={c.title} variants={fadeIn(0.05 * i)}>
                <Card className="p-0 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold">{c.title}</h3>
                      {c.time && (
                        <span className="text-xs text-slate-400">{c.time}</span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-slate-300">{c.desc}</p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>

                    {/* Optional credential link */}
                    {c.link && c.link !== "#" && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                        aria-label={`View credential for ${c.title}`}
                      >
                        View credential →
                      </a>
                    )}
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        );
      })()}
    </section>


    
      {/* Testimonials / Social Proof */}
      {/*
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-2xl font-bold"
        >
          What People Say
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.05)}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              q: "Delivers pixel-perfect UI with thoughtful motion. A pleasure to collaborate with.",
              a: "Design Lead",
            },
            {
              q: "Proactive, detail-oriented, and fast. Performance wins across the board.",
              a: "Engineering Manager",
            },
            {
              q: "Understands users and communicates clearly. Ship quality, consistently.",
              a: "Product Manager",
            },
          ].map((t, i) => (
            <Card key={i}>
              <p className="text-slate-200">“{t.q}”</p>
              <div className="mt-3 text-xs text-slate-400">— {t.a}</div>
            </Card>
          ))}
        </motion.div>
      </section>
      */}
     

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0)}
        >
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
