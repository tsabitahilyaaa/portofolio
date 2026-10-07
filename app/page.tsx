'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'

const navItems = ['about', 'experience', 'projects', 'organization', 'skills', 'education', 'contact']

const projects = [
  { title: 'CV Atmobrass Jaya', subtitle: 'Sales Forecasting & Product Recommendation System', type: 'Final Project / Thesis', image: '/porto.png', description: 'A web-based sales forecasting and product recommendation system developed for CV Atmobrass Jaya. The system uses XGBoost for sales forecasting and Content-Based Filtering for product recommendations.', tags: ['Laravel', 'PHP', 'MySQL', 'Python', 'XGBoost', 'Tailwind CSS'], featured: true, link: 'https://github.com' },
  { title: 'RS Sarkies \'Aisyiyah Kudus', subtitle: 'Responsive Hospital Website Interface Optimization', type: 'IT Internship / Web Development', image: '/porto.png', description: 'Responsive interface optimization and web development contributions made within the hospital\'s IT department.', tags: ['Laravel', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'], link: 'https://github.com' },
  { title: 'Online Examination Management Application', subtitle: 'Frontend Development', type: 'Frontend Development', image: '/ujian.png', description: 'A platform to create exam schedules, monitor ongoing tests, and generate participant score summaries efficiently.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'], link: 'https://github.com/tsabitahilyaaa/aplikasi-ujian-online' },
  { title: 'SFLIN Presensi Polines', subtitle: 'Graphic & UI Design', type: 'Graphic Design', image: '/selin.png', description: 'UI/UX design for a presence management system created during my studies.', tags: ['Figma', 'UI Design'], link: 'https://www.figma.com' },
]

const skillGroups = [
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']],
  ['Backend', ['Laravel', 'PHP']],
  ['Database', ['MySQL']],
  ['Data & Machine Learning', ['Python', 'XGBoost', 'Content-Based Filtering']],
  ['Design', ['Figma', 'Canva']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'draw.io']],
]

export default function Portfolio() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home', ...navItems]
      const current = ids.findLast((id) => {
        const section = document.getElementById(id)
        return section && window.scrollY + 140 >= section.offsetTop
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className="portfolio-shell">
      <nav className="site-nav">
        <button className="brand" onClick={() => go('home')} aria-label="Back to home">B<span>.</span></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => <button key={item} onClick={() => go(item)} className={active === item ? 'active' : ''}>{item}</button>)}
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">01 / HELLO, WORLD</p>
          <h1>Hi, I&apos;m <em>Bita</em>.</h1>
          <p className="hero-role">Tsabitah Hilyatul Aulia</p>
          <p className="hero-title">Junior Web Developer <span>&amp;</span> Informatics Engineering Graduate</p>
          <p className="hero-intro">I build thoughtful web experiences where clean code meets creative direction, turning practical problems into useful digital products.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => go('projects')}>View My Work <ArrowUpRight /></button><a className="button button-ghost" href="mailto:tsabitahhilyatul@gmail.com">Let&apos;s Talk <Mail /></a><a className="text-link" href="#contact">Download CV <Download /></a></div>
        </div>
        <div className="hero-art"><div className="grid-dots"></div><div className="portrait-frame"><Image src="/fotoporto1.jpg" alt="Tsabitah Hilyatul Aulia" width={430} height={520} priority /></div><div className="floating-note">Semarang,<br /><strong>Indonesia</strong></div><div className="hero-index">2026<br /><span>portfolio</span></div></div>
      </section>

      <section id="about" className="section-wrap split-section"><div className="section-label"><span>02</span><span>ABOUT</span></div><div className="section-content about-content"><p className="display-text">I&apos;m a graduate who likes making technology feel a little more human.</p><div className="about-grid"><p>After studying Informatics Engineering at Politeknik Negeri Semarang, I&apos;m stepping into the world of web development with a focus on building applications that solve real, everyday problems.</p><p>My curiosity moves between frontend development, UI/UX, data-driven systems, and machine learning. I enjoy the space where structure and imagination meet — from shaping an interface to thinking through the system behind it.</p></div><div className="stat-row"><div><strong>3.77</strong><span>GPA / 4.00</span></div><div><strong>2026</strong><span>Graduation year</span></div><div><strong>ID</strong><span>Based in Indonesia</span></div></div></div></section>

      <section id="experience" className="section-wrap split-section tinted"><div className="section-label"><span>03</span><span>EXPERIENCE</span></div><div className="section-content"><div className="experience-feature"><div><p className="eyebrow">AUG 2025 — DEC 2025</p><h2>IT Intern</h2><p className="company">RS Sarkies &apos;Aisyiyah Kudus</p></div><p className="experience-copy">Worked in the IT department and contributed to responsive website interface optimization and web development. I learned how thoughtful digital decisions can support real operational needs.</p><div className="tag-list">{['Laravel', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'].map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>

      <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div className="section-label"><span>04</span><span>SELECTED PROJECTS</span></div><p>Selected work across systems, interfaces, and visual thinking.</p></div><div className="project-list">{projects.map((project, index) => <article key={project.title} className={`project-item ${project.featured ? 'featured' : ''}`}><div className="project-image"><Image src={project.image} alt={project.title} width={project.featured ? 800 : 500} height={project.featured ? 500 : 320} /><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight /></a></div><div className="project-info"><p className="eyebrow">0{index + 1} / {project.type}</p><h2>{project.title}</h2><h3>{project.subtitle}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="organization" className="section-wrap split-section tinted"><div className="section-label"><span>05</span><span>ORGANIZATION</span></div><div className="section-content timeline">{[['Himpunan Mahasiswa Teknik Elektro Politeknik Negeri Semarang', 'Staff Bidang Pengabdian Masyarakat', '2024 – 2025'], ['Forum Keakraban dan Bakti Sosial Elektro', 'Sekretaris', '2024'], ['Wisuda Jurusan Teknik Elektro', 'Staff Dekorasi dan Dokumentasi', '2024']].map(([name, position, period]) => <div className="timeline-item" key={name}><span>{period}</span><div><h3>{name}</h3><p>{position}</p></div></div>)}</div></section>

      <section id="skills" className="section-wrap split-section"><div className="section-label"><span>06</span><span>SKILLS</span></div><div className="section-content skills-grid">{skillGroups.map(([title, items]) => <div className="skill-group" key={title}><h3>{title}</h3><div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section id="education" className="section-wrap split-section tinted"><div className="section-label"><span>07</span><span>EDUCATION</span></div><div className="section-content education-list"><div><p className="eyebrow">2023 — 2026</p><h2>Politeknik Negeri Semarang</h2><p>D3 Teknik Informatika <strong>· GPA 3.77 / 4.00</strong></p></div><div><p className="eyebrow">2019 — 2022</p><h2>SMA Negeri 1 Kudus</h2><p>MIPA</p></div></div></section>

      <section id="contact" className="contact-section section-wrap"><p className="eyebrow">08 / GET IN TOUCH</p><h2>Let&apos;s build<br /><em>something meaningful.</em></h2><a className="contact-email" href="mailto:tsabitahhilyatul@gmail.com">tsabitahhilyatul@gmail.com <ArrowUpRight /></a><div className="contact-meta"><span><MapPin /> Semarang, Indonesia</span><a href="https://www.linkedin.com/in/tsabitah-hilyatul-474329335/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://github.com/tsabitahilyaaa" target="_blank" rel="noreferrer"><Github /> GitHub</a></div></section>
      <footer><span>Tsabitah Hilyatul Aulia</span><span>Designed &amp; developed with intention · © 2026</span></footer>
    </main>
  )
}

export const metadata = { title: 'Tsabitah Hilyatul Aulia — Junior Web Developer', description: 'The personal portfolio of Tsabitah Hilyatul Aulia, a Junior Web Developer and Informatics Engineering Graduate.' }
