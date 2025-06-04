import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Brain,
  Database,
  Server,
  Layers,
  Download,
  X,
  Menu,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Resume download function
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Jatin_Srivastava_Resume.pdf"; // Path to your resume
    link.download = "Jatin_Srivastava_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll spy effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const navHeight = 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navHeight + 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom SVG Components
  const CodeSVG = () => (
    <svg viewBox="0 0 200 200" className="w-32 h-32 animate-pulse">
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
      </defs>
      <rect
        x="20"
        y="30"
        width="160"
        height="140"
        rx="10"
        fill="none"
        stroke="url(#codeGrad)"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="50"
        x2="80"
        y2="50"
        stroke="url(#codeGrad)"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="70"
        x2="120"
        y2="70"
        stroke="url(#codeGrad)"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="90"
        x2="90"
        y2="90"
        stroke="url(#codeGrad)"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="110"
        x2="140"
        y2="110"
        stroke="url(#codeGrad)"
        strokeWidth="2"
      />
      <circle cx="150" cy="60" r="5" fill="#00f5ff" className="animate-ping" />
      <polygon
        points="120,130 140,120 140,140"
        fill="#ff00ff"
        className="animate-bounce"
      />
    </svg>
  );

  const NetworkSVG = () => (
    <svg viewBox="0 0 200 200" className="w-24 h-24">
      <defs>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#0066cc" />
        </radialGradient>
      </defs>
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 100 + 60 * Math.cos(angle);
        const y = 100 + 60 * Math.sin(angle);
        return (
          <g key={i}>
            <line
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="#00f5ff"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx={x}
              cy={y}
              r="8"
              fill="url(#nodeGrad)"
              className="animate-pulse"
            />
          </g>
        );
      })}
      <circle
        cx="100"
        cy="100"
        r="12"
        fill="#ff00ff"
        className="animate-spin"
      />
    </svg>
  );

  const projects = [
    {
      title: "Hospital Appointment Booking",
      description:
        "A website to easily book and manage hospital appointments online",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/JxTIN21/Hospital-Appointment-Booking",
      image: "/images/Hospital.png",
    },
    {
      title: "Agent Management System",
      description:
        "A web app to manage agents, assign tasks, and track performance efficiently",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/JxTIN21/Agent-Management-System",
      live: "https://agent-management-system.netlify.app/",
      image: "/images/Agent.png",
    },
    {
      title: "Headliner | Title and Summary Generation",
      description:
        "An AI-powered app that generates and verifies article titles using advanced NLP models",
      tech: [
        "Python",
        "React.js",
        "Flask",
        "Transformers",
        "BERT",
        "T5-small",
        "Pandas",
        "numpy",
      ],
      github: "https://github.com/JxTIN21/HEADLINER",
      image: "/images/Headliner.png",
    },
    {
      title: "Spotify Demo",
      description:
        "A Spotify-inspired website built with HTML, CSS, and JavaScript featuring 10 custom songs manually added for seamless playback and user experience",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JxTIN21/Spotify-Demo",
      live: "https://spotify-demo-five.vercel.app/",
      image: "/images/Spotify.png",
    },
  ];

  const skills = [
    {
      category: "MERN Stack",
      items: ["MongoDB", "Express.js", "React.js", "Node.js"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "Android Development",
      items: ["Kotlin", "Java", "Android Studio", "Firebase"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      category: "AI/ML",
      items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      icon: <Brain className="w-6 h-6" />,
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Vercel", "Render"],
      icon: <Layers className="w-6 h-6" />,
    },
  ];

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  const certificates = [
    {
      title: "MERN Stack Development",
      issuer: "ShapeMySkill by DUCAT", // Replace with actual institute
      date: "2024", // Replace with actual date
      description:
        "Comprehensive training in MongoDB, Express.js, React.js, and Node.js development",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "REST APIs",
        "POSTMAN",
      ],
      image: "/images/MERN.png", // Add your certificate image
    },
    {
      title: "Android App Development",
      issuer: "Internshala Training", // Replace with actual institute
      date: "2023", // Replace with actual date
      description:
        "Advanced training in Android app development using Kotlin and Java",
      skills: ["Kotlin", "Java", "Android Studio", "Firebase", "UI/UX", "XML"],
      image: "/images/Android.png", // Add your certificate image
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,255,0.1) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              &lt;Jatin/&gt;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-cyan-400 transition-colors duration-300 relative group ${
                    activeSection === item.id ? "text-cyan-400" : ""
                  }`}
                >
                  {item.name}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 px-4 rounded-lg hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-cyan-400 bg-cyan-400/10"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 pt-24 md:pt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              {/* Name Introduction */}
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-cyan-400 font-medium">
                  Hi, I am
                </p>
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Jatin Srivastava
                </h2>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Software
                  </span>
                  <br />
                  <span className="text-white">Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  Crafting digital experiences with MERN stack, Android
                  development, and AI/ML technologies
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </button>
                <button
                  onClick={downloadResume}
                  className="flex items-center justify-center space-x-2 px-8 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Right Side - Profile Picture with 3D Effect */}
            <div className="flex-shrink-0 flex justify-center items-center order-first lg:order-last">
              <div className="relative">
                {/* Gradient Background Shape - INCREASED SIZE */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600 rounded-3xl"></div>

                  {/* Floating Profile Image - INCREASED SIZE */}
                  <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 lg:-top-12 lg:-left-12 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                    <img
                      src="/images/Me.png"
                      alt="Jatin Srivastava"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
                    />
                    {/* Floating elements around image - ADJUSTED POSITIONS */}
                    <div className="absolute -top-4 -right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 w-8 h-8 md:w-10 md:h-10 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6 w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -right-5 md:-right-7 lg:-right-8 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-pink-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Additional floating SVG elements - ADJUSTED POSITIONS */}
                <div className="absolute top-10 right-10 lg:top-12 lg:right-12 opacity-60 hidden md:block">
                  <div className="w-24 h-24 lg:w-28 lg:h-28">
                    <CodeSVG />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 lg:bottom-12 lg:left-12 opacity-60 hidden md:block">
                  <div className="w-20 h-20 lg:w-24 lg:h-24">
                    <NetworkSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Software Developer with expertise in modern web
            technologies, mobile development, and artificial intelligence. I
            love creating innovative solutions that bridge the gap between
            cutting-edge technology and user-friendly experiences. When I'm not
            coding, you'll find me exploring the latest in AI/ML or building the
            next big Web App.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-cyan-400">{skill.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-cyan-400">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 md:px-3 py-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full text-xs md:text-sm border border-purple-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-600/30 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.title}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Certificate Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {certificate.verifyLink && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={certificate.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-400 hover:text-cyan-300 transition-colors text-xs border border-cyan-400/30"
                      >
                        Verify
                      </a>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-xs border border-purple-400/30">
                      {certificate.date}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-cyan-400">
                    {certificate.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-3 font-medium">
                    {certificate.issuer}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm">
                    {certificate.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-600/30 rounded text-xs border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>

          {/* Mobile-First Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12">
            <a
              href="mailto:jatinsrivastava4104@gmail.com"
              className="flex items-center justify-center space-x-3 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jatin-srivastava-784223253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full sm:w-auto px-6 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/JxTIN21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full sm:w-auto px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Jatin Srivastava. Crafted with React and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;