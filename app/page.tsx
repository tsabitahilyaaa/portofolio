"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Award,
  Code,
  Palette,
  Heart,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Instagram,
  Users,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "SELIN - Online Exam System",
      description:
        "A comprehensive online examination platform with real-time monitoring, automated grading, and detailed analytics for educational institutions.",
      type: "UI/UX Design & Frontend Development",
      image: "/bookstown.jpg", // contoh gambar, simpan di public/selin.jpg
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Figma"],
      link: "https://www.figma.com/design/0Jd7QQOBU7W8hSSSYwznfX/Untitled?node-id=0-1&p=f&t=TSDLcgvrY7CTD2kG-0", // ganti dengan link Figma atau detail project
    },
    {
      title: "Bookstown App",
      description:
        "A modern book discovery and reading tracking application with social features, personalized recommendations, and reading progress tracking.",
      type: "Mobile UI/UX Design",
      image: "/bookstown.jpg",
      tags: ["React Native", "Firebase", "Figma", "Prototyping"],
      link: "https://www.figma.com/proto/jSxqhm7VsGQWisEW9Q5KWB/SuperShy_BooksTown?node-id=25-3&p=f&t=rt4mLa4rPCoZnWrN-0&scaling=scale-down&content-scaling=fixed&page-id=25%3A2&starting-point-node-id=25%3A3",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "An intuitive admin dashboard for e-commerce management with sales analytics, inventory tracking, and customer insights.",
      type: "Frontend Development",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A personal branding website that showcases Tsabitah's design and development skills through an engaging, elegant portfolio layout.",
      type: "UI/UX Designer & Frontend Developer",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Figma", "HTML", "CSS", "AI Web Builder"],
      link: "#",
    },
  ]

  const skills = {
    hard: [
      "UI/UX Design",
      "Frontend Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Adobe Creative Suite",
      "Prototyping",
      "User Research",
      "Responsive Design",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "MongoDB",
    ],
    soft: [
      "Creative Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "Adaptability",
      "Critical Thinking",
      "Project Management",
      "Client Relations",
      "Mentoring",
    ],
  }

  const certificates = [
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "2024",
      preview: "/oracle1.png",
      file: "/oracle1.pdf",
    },
    {
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "2024",
      preview: "/oracle2.png",
      file: "/oracle2.pdf",
    },
    {
      title: "Learning React.js",
      issuer: "LinkedIn Learning",
      date: "2023",
      preview: "/placeholder.svg?height=300&width=400",
      file: "#",
    },
    {
      title: "Advanced CSS and Sass",
      issuer: "LinkedIn Learning",
      date: "2023",
      preview: "/placeholder.svg?height=300&width=400",
      file: "#",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "NetAcad Cisco",
      date: "2023",
      preview: "/placeholder.svg?height=300&width=400",
      file: "#",
    },
    {
      title: "UI/UX Design Competition Winner",
      issuer: "National Design Competition",
      date: "2023",
      preview: "/placeholder.svg?height=300&width=400",
      file: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Tsabitah
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "certificates", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section ? "text-pink-600 font-semibold" : "text-gray-600 hover:text-pink-500"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div
          className={`container mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <Image
                src="/fotoporto1.jpg"
                alt="Tsabitah Hilyatul Aulia"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Tsabitah Hilyatul Aulia
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2 text-lg">
              <Palette className="w-4 h-4 mr-2" />
              UI/UX Designer
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting delightful digital experiences through creative design and clean code. I bring ideas to life with
            passion, precision, and a touch of magic ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Me
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-pink-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">My Story</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hello! I'm Tsabitah, a passionate UI/UX designer and frontend developer who believes that great design
                  should not only look beautiful but also solve real problems. With a background in both design and
                  development, I bridge the gap between creativity and functionality.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  My journey began with a fascination for how digital products can impact people's lives. I love
                  creating intuitive interfaces that make complex tasks feel effortless and enjoyable. When I'm not
                  designing or coding, you'll find me exploring new design trends, learning emerging technologies, or
                  sketching ideas in my notebook.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm always excited to collaborate on projects that challenge me to grow and create meaningful
                  experiences for users. Let's build something amazing together! 🚀
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-300 to-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full opacity-20"></div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Design Philosophy</h4>
                  </div>
                  <p className="text-gray-600">
                    I believe in user-centered design that combines aesthetics with functionality. Every pixel has a
                    purpose, and every interaction should feel natural.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-orange-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Development Approach</h4>
                  </div>
                  <p className="text-gray-600">
                    Clean, maintainable code is my priority. I focus on performance, accessibility, and creating
                    seamless user experiences across all devices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Creative Process</h4>
                  </div>
                  <p className="text-gray-600">
                    From research and ideation to prototyping and testing, I follow a structured yet flexible process
                    that ensures the best outcomes for every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills in UI/UX design and frontend development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-pink-100 text-pink-700 mb-3">{project.type}</Badge>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full py-2 px-4 transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A combination of technical skills and soft skills that help me create exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="w-6 h-6" />
                  Technical Skills
                </CardTitle>
                <CardDescription className="text-pink-100">Tools and technologies I work with</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.hard.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-white text-pink-700 border border-pink-200 hover:bg-pink-50 transition-colors duration-200 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-purple-200 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="w-6 h-6" />
                  Soft Skills
                </CardTitle>
                <CardDescription className="text-purple-100">Personal qualities that drive my work</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 transition-colors duration-200 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Organizations Subsection */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Organizations
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 border-pink-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-pink-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">Himpunan Mahasiswa Elektro Polines</h4>
                          <p className="text-lg font-semibold text-pink-600 mb-1">
                            Staff of the Public Relation Division
                          </p>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">May 2024 - May 2025</span>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 mt-4 md:mt-0">
                          Active Member
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Contributing to public relations and communication strategies as part of the Public Relation
                        Division. Involved in managing social media presence, creating promotional content, coordinating
                        media outreach, and enhancing the organization's brand visibility through various communication
                        channels.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                          Public Relations
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          Social Media Management
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                          Content Creation
                        </Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Brand Communication
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => window.open(cert.file, "_blank")}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={cert.preview || "/placeholder.svg"}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Download functionality
                        const link = document.createElement("a")
                        link.href = cert.file
                        link.download = `${cert.title}.pdf`
                        link.click()
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">Click to view</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <Badge className="bg-pink-100 text-pink-700">{cert.issuer}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      const link = document.createElement("a")
                      link.href = cert.file
                      link.download = `${cert.title}.pdf`
                      link.click()
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white rounded-3xl border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send me a message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="rounded-xl border-pink-200 focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="rounded-xl border-pink-200 focus:border-pink-400"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-xl border-pink-200 focus:border-pink-400"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    className="rounded-xl border-pink-200 focus:border-pink-400"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="rounded-xl border-pink-200 focus:border-pink-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl py-3">
                  Send Message
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">tsabitah@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+62 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">Jakarta, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-3xl border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Follow me</h3>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open("https://linkedin.com/in/tsabitahily", "_blank")}
                      aria-label="Visit Tsabitah's LinkedIn profile"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Button>
                    <Button
                      size="lg"
                      className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open("https://github.com/tsabitahily", "_blank")}
                      aria-label="Visit Tsabitah's GitHub profile"
                    >
                      <Github className="w-6 h-6" />
                    </Button>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open("https://instagram.com/tsabitahily", "_blank")}
                      aria-label="Visit Tsabitah's Instagram profile"
                    >
                      <Instagram className="w-6 h-6" />
                    </Button>
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110"
                      onClick={() => scrollToSection("contact")}
                      aria-label="Send an email to Tsabitah"
                    >
                      <Mail className="w-6 h-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Tsabitah Hilyatul Aulia</h3>
            <p className="text-pink-100">UI/UX Designer & Frontend Developer</p>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-pink-100">
              © {new Date().getFullYear()} Tsabitah Hilyatul Aulia. Made with{" "}
              <Heart className="w-4 h-4 inline text-pink-300" /> and lots of creativity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
