"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react"

const projects = [
  { title: "CV Atmobrass Jaya", type: "Featured · Web Development", description: "A company profile website designed to make a growing business easier to discover, understand, and trust.", role: "Website Developer · Content-Based Filtering integration", tags: ["Laravel", "PHP", "MySQL", "Content-Based Filtering"], featured: true, link: "#" },
  { title: "SELIN — Online Exam System", type: "UI/UX Design", description: "A comprehensive online examination platform with real-time monitoring, automated grading, and detailed analytics for educational institutions.", image: "/selin.png", tags: ["Figma"], link: "https://www.figma.com/design/0Jd7QQOBU7W8hSSSYwznfX/Untitled?node-id=0-1&p=f&t=IKfcMeOHUdUI9Jjp-0" },
  { title: "Bookstown App", type: "Mobile UI/UX Design", description: "A modern book discovery and reading tracking application with social features, personalized recommendations, and reading progress tracking.", image: "/bookstown.jpg", tags: ["Figma"], link: "https://www.figma.com/proto/jSxqhm7VsGQWisEW9Q5KWB/SuperShy_BooksTown?node-id=25-3&p=f&t=rt4mLa4rPCoZnWrN-0&scaling=scale-down&content-scaling=fixed&page-id=25%3A2&starting-point-node-id=25%3A3" },
  { title: "Online Exam Management Application", type: "Frontend Development", description: "A digital platform to create exam schedules, monitor ongoing tests, and generate participant score summaries efficiently and securely.", image: "/ujian.png", tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"], link: "https://github.com/tsabitahilyaaa/aplikasi-ujian-online" },
  { title: "Personal Portfolio Website", type: "UI/UX Designer & Frontend Developer", description: "A personal branding website that showcases Tsabitah's design and development skills through an engaging, elegant portfolio layout.", image: "/porto.png", tags: ["Figma", "HTML", "CSS"], link: "https://github.com/tsabitahilyaaa/portofolio" },
]

const certificates = [
  { title: "Database Programming with SQL", issuer: "Oracle Academy", date: "2024", preview: "/oracle1.png", file: "/oracle1.pdf" },
  { title: "Database Design", issuer: "Oracle Academy", date: "2024", preview: "/oracle2.png", file: "/oracle2.pdf" },
  { title: "Career Essentials in Generative AI", issuer: "Microsoft and LinkedIn", date: "2024", preview: "/ai.png", file: "/ai.pdf" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", date: "2025", preview: "/cisco.png", file: "/cisco.pdf" },
  { title: "Bronze Award", issuer: "Indonesia National Science Enterprise Challenge", date: "2020", preview: "/inasec.png", file: "/inasec.pdf" },
  { title: "MikroTik Certificate", issuer: "MikroTik", date: "Added 2026", preview: "/placeholder.svg", file: "#" },
  { title: "Internship Certificate", issuer: "RS Sarkies 'Aisyiyah Kudus", date: "2025", preview: "/placeholder.svg", file: "#" },
]

const tools = ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Python", "Git / GitHub", "Next.js", "TypeScript", "Figma", "Tailwind CSS"]
const socials = [
  { label: "Email", value: "tsabitah@example.com", href: "mailto:tsabitah@example.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/tsabitahily", href: "https://linkedin.com/in/tsabitahily", icon: Linkedin },
  { label: "WhatsApp", value: "Start a conversation", href: "https://wa.me/6281234567890", icon: MessageCircle },
  { label: "Instagram", value: "@tsabitahily", href: "https://instagram.com/tsabitahily", icon: Instagram },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      const current = ["home", "about", "education", "experience", "projects", "leadership", "skills", "certificates", "contact"].find((id) => {
        const element = document.getElementById(id)
        return element && window.scrollY + 180 >= element.offsetTop && window.scrollY + 180 < element.offsetTop + element.offsetHeight
      })
      if (current) setActive(current)
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY * 0.08}px`)
    }
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"))
    }, { threshold: 0.12 })
    document.querySelectorAll("section > *:not(.section-label), .project-card, .certificate-card").forEach((element) => revealObserver.observe(element))
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      revealObserver.disconnect()
    }
  }, [])

  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }) }
  const nav = ["about", "experience", "projects", "leadership", "certificates", "contact"]

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <button className="wordmark" onClick={() => go("home")}><span>THA</span> / Bita</button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {nav.map((item) => <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>{item}</button>)}
          <a className="nav-cta" href="mailto:tsabitah@example.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero section-pad">
        <div className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="hero-year">2026</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">Hello, I&apos;m Bita — an informatics graduate</p>
            <h1>Building the web<br /><em>with purpose.</em></h1>
            <p className="hero-lede">Tsabitah Hilyatul Aulia is a web developer who turns thoughtful ideas into useful, clear, and human digital experiences.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => go("projects")}>Explore my work <ArrowDownRight size={17} /></button><button className="text-link" onClick={() => go("about")}>More about me <ChevronRight size={16} /></button></div>
          </div>
          <div className="hero-portrait"><div className="portrait-frame"><Image src="/fotoporto1.jpg" alt="Tsabitah Hilyatul Aulia" width={560} height={680} priority /></div><div className="portrait-note">D3 Teknik Informatika<br />Politeknik Negeri Semarang</div><div className="floating-mark"><Sparkles size={18} /> Web<br />Developer</div></div>
        </div>
        <div className="hero-bottom"><span>01 — 09</span><span>Scroll to explore <ArrowDownRight size={16} /></span><span className="hero-rule" /></div>
      </section>

      <section id="about" className="section-pad about-section"><div className="section-label">01 / About me</div><div className="two-col"><div><h2>I care about the details that make a product <em>feel right.</em></h2></div><div className="body-copy"><p>I&apos;m Tsabitah Hilyatul Aulia, but you can call me Bita. I&apos;m an Informatics graduate with a main focus on web development and a supporting eye for UI/UX.</p><p>I enjoy translating messy problems into structured interfaces and reliable systems — from the first wireframe to the last line of code. I&apos;m currently looking for a team where I can keep learning, contribute with intention, and ship meaningful work.</p><div className="contact-row">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon size={17} /> {label}</a>)}</div></div></div></section>

      <section id="education" className="dark-section section-pad"><div className="section-label light">02 / Education</div><div className="education-row"><div><p className="kicker light-text">Politeknik Negeri Semarang</p><h2>D3 Teknik<br /><em>Informatika</em></h2></div><div className="education-meta"><span>2023 — 2026</span><strong>3.77<span>/4.00</span></strong><p>GPA</p></div></div><div className="education-gallery" aria-label="Graduation and college photos"><div className="education-photo-main"><div className="education-photo-placeholder"><BriefcaseBusiness size={28} /><span>Graduation photo<br />Replace with your image</span></div></div><div className="education-photo-side"><div className="education-photo-small"><div className="education-photo-small-placeholder">College life<br />photo area</div></div><div className="education-photo-small"><div className="education-photo-small-placeholder">Campus memories<br />photo area</div></div></div></div></section>

      <section id="experience" className="section-pad experience-section"><div className="section-label">03 / Internship & experience</div><div className="experience-grid"><div><p className="kicker">Aug — Dec 2025</p><h2>IT Intern at<br /><em>RS Sarkies &apos;Aisyiyah Kudus</em></h2><p className="body-copy intro">A hands-on chapter where technology met real operational needs. I contributed to clearer workflows, practical digital solutions, and the everyday work of an IT team.</p></div><div className="case-notes"><div><span>Role</span><strong>IT Intern</strong></div><div><span>Focus</span><strong>Systems · Support · Collaboration</strong></div><div><span>Contribution</span><strong>Supporting technology operations and building practical solutions for the organization.</strong></div><div><span>Technologies</span><strong>Web development, databases, documentation</strong></div></div></div><div className="photo-strip"><div className="photo-placeholder large"><BriefcaseBusiness size={25} /><span>Internship stories<br />coming soon</span></div><div className="photo-placeholder"><span>Photos & screenshots<br />will be added here</span></div><div className="photo-placeholder accent"><Check size={25} /><span>Learning by<br />doing</span></div></div></section>

      <section id="projects" className="section-pad project-section"><div className="section-label">04 / Selected work</div><div className="section-heading"><h2>Projects with a point<br /><em>of view.</em></h2><p>Selected work across web development, product thinking, and interface design. Each one is a chance to make something more useful.</p></div><div className="project-grid">{projects.map((project) => <article key={project.title} className={`project-card ${project.featured ? "featured" : ""}`}><a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel="noreferrer" className="project-visual">{project.image ? <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 900px) 100vw, 50vw" /> : <div className="atmobrass-visual"><span>CV</span><strong>Atmobrass<br />Jaya</strong><small>company profile / 2026</small><ArrowUpRight /></div>}<span className="view-icon"><ExternalLink size={17} /></span></a><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>{project.role && <p className="role"><span>My role</span> {project.role}</p>}<div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="leadership" className="soft-section section-pad"><div className="section-label">05 / Leadership & organization</div><div className="story-grid"><div><h2>Work is better when we <em>show up for each other.</em></h2></div><div><p className="body-copy">Beyond code, I&apos;ve learned how to listen, communicate, and take responsibility as part of a team. My experience in Himpunan Mahasiswa Elektro Polines shaped the way I approach collaboration: be prepared, be clear, and make room for others.</p><div className="org-card"><Users size={22} /><div><p>Himpunan Mahasiswa Elektro Polines</p><strong>Staff — Public Relation Division</strong><span>May 2024 — May 2025</span></div></div></div></div><div className="photo-strip org-strip"><div className="photo-placeholder wide"><Users size={24} /><span>Organization & committee<br />photos coming soon</span></div><div className="story-quote">“Communication is not just what I say — it&apos;s how I help a team move forward.”</div></div></section>

      <section id="skills" className="section-pad skills-section"><div className="section-label">06 / Tools & technologies</div><div className="skills-layout"><div><h2>Curious by nature.<br /><em>Practical by craft.</em></h2><p className="body-copy">A growing toolkit for building dependable, considered digital products.</p></div><div className="tool-cloud">{tools.map((tool, index) => <span key={tool} className={index < 4 ? "primary-tool" : ""}>{tool}</span>)}</div></div></section>

      <section id="certificates" className="soft-section section-pad"><div className="section-label">07 / Certificates</div><div className="section-heading"><h2>Always learning,<br /><em>always moving.</em></h2><p>Credentials and milestones that mark the things I&apos;ve chosen to learn along the way.</p></div><div className="certificate-grid">{certificates.map((cert) => <a key={cert.title} href={cert.file !== "#" ? cert.file : undefined} target={cert.file !== "#" ? "_blank" : undefined} rel="noreferrer" className="certificate-card"><div className="certificate-image"><Image src={cert.preview} alt={`${cert.title} certificate`} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div><p>{cert.issuer}</p><h3>{cert.title}</h3><span>{cert.date} <ArrowUpRight size={14} /></span></div></a>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="section-label light">08 / Let&apos;s connect</div><h2>Have something<br /><em>in mind?</em></h2><p>Whether you&apos;re hiring, collaborating, or simply want to say hello — I&apos;d love to hear from you.</p><div className="contact-grid">{socials.map(({ label, value, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon size={20} /><span><small>{label}</small>{value}</span><ArrowUpRight size={18} /></a>)}</div></section>

      <footer><span>© {new Date().getFullYear()} Tsabitah Hilyatul Aulia</span><span>Informatics Graduate · Web Developer</span><button onClick={() => go("home")}>Back to top <ArrowUpRight size={15} /></button></footer>
    </main>
  )
}

