import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Figma,Sparkles, Code, Globe, ChevronRight, ArrowUp,  Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    // Add animation classes when elements are in view
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Send email (this would be replaced with actual email sending logic)
    window.location.href = `mailto:xahrakhan765@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.name + " <" + data.email + ">")}`;
  };


 

  const services = [
      {
    icon: <Figma size={32} color="#4A90E2" />,
    title: "UI/UX Design",
    description: "User research, wireframes, prototypes, and design systems.",
  },
  {
    icon: <Code size={32} color="#27ae60" />,
    title: "Frontend Development",
    description: "Modern responsive React apps with clean UI and performance.",
  },
  {
    icon: <Globe size={32} color="#f39c12" />,
    title: "Web Solutions",
    description: "From landing pages to full-stack apps, scalable web solutions.",
  },
  {
    icon: <Sparkles size={32} color="#9b59b6" />,
    title: "Branding & Visual Identity",
    description:
      "Logos, brand systems, and visuals that make your product memorable.",
  },
]
   const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio website showcasing projects, publications, skills, and contact information.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: "/Portfolio.jpg",
    link: "https://github.com/zahrakhan76"
  },
  {
    title: "Flumers.AI – Influencer Marketing Platform",
    description: "Built frontend components for Flumers.AI using React.js and Tailwind CSS. Integrated Firebase for authentication and data handling. Designed clean UI for influencer dashboards, campaign management, and messaging features, focusing on responsiveness and user-friendly layouts.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Redux"],
    image: "/Flumers.jpg",
    link: "https://github.com/zahrakhan76/final-year-project"
  },
   {
     title: "Blog Application",
     description: "Developed a full-stack blog platform with user authentication, post creation/editing, commenting, and category-based filtering. Implemented secure login and responsive UI for seamless reading and writing experience.",
     tech: ["React.js"],
     image: "/Blog.jpg",
     link: "https://github.com/zahrakhan76/BlogApp"
    },
{
    title: "FitFlow – Habit Tracker App | UI/UX Designer",
    description: "Designed a minimal habit tracking app using Figma, with intuitive daily tracking and habit visualization to enhance user consistency.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    image: "/fitflow.png",
    link: "https://www.figma.com/"
  },
  {
    title: "ScanvoApp – FinTech / Business Productivity | UI/UX Designer",
    description: "Smart invoice management app for uploading, scanning, and organizing invoices. Includes tracking, forwarding, and detailed filters with secure login, notifications, and profile settings.",
    tech: ["Figma", "UI/UX", "FinTech Design"],
    image: "/Scanvo-app.png",
    link: "https://www.figma.com/"
  },
  {
    title: "SemaTrack – Health & Fitness | UI/UX Designer",
    description: "Mobile health companion app for GLP-1 medication users, tracking injections, dosage, weight, and side effects. Includes journals, AI-driven insights, reminders, and trend analysis.",
    tech: ["Figma", "UI/UX", "HealthTech"],
    image: "/SemaTrack.png",
    link: "https://www.figma.com/design/hQzllIWtBltuXBilyGFtKV/SemaTrack?node-id=484-526&p=f&t=vNXSG2au02b1p8gN-0"
  }
];


  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
             Zahra Khan 
            </div>
            <div className="nav-links">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="nav-link-indicator"></div>
                  )}
                </a>
              ))}
            </div>
            <button className="mobile-menu-button" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu}>×</button>
        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mobile-menu-link"
            onClick={() => {
              setActiveSection(item.toLowerCase());
              closeMenu();
            }}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section animate-on-scroll">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="animate-on-scroll fade-in-down stagger-1">
              <p className="hero-greeting">Hello, It's Me</p>
              <h1 className="hero-name">
                Zahra <span className="hero-name-highlight">Khan</span>
              </h1>
              <h2 className="hero-title">
                And I'm a <span className="hero-title-highlight"> UI/UX designer & Frontend Developer</span>
              </h2>
            </div>
            <p className="hero-description animate-on-scroll fade-in-down stagger-2">
              I create innovative digital solutions by combining cutting-edge AI technologies with intuitive user experiences. I specialize in building intelligent applications that solve real-world problems.
            </p>
            <div className="hero-social animate-on-scroll fade-in-down stagger-3">
              <a
                href="www.linkedin.com/in/zahra-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:xahrakhan765@gmail.com"
                className="social-link"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/zahrakhan76"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>
            </div>
            <button 
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                setActiveSection('contact');
              }}
              className="hero-cta animate-on-scroll fade-in-down stagger-4"
            >
              Download CV
            </button>
          </div>
          
          <div className="hero-avatar-container animate-on-scroll fade-in-right">
            <div className="hero-avatar">
              <div className="hero-avatar-bg">
                <div className="hero-avatar-inner">
                  <img 
                   src="/about-img.png" 
                    alt="My Avatar" 
                    className="hero-avatar-img"
                   />
                </div>
              </div>
              <div className="hero-avatar-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt animate-on-scroll">
        <div className="section-container">
          <div className="section-header animate-on-scroll fade-in-down">
            <h2 className="section-title">
              About <span className="section-title-highlight">Me</span>
            </h2>
            <p className="section-subtitle">
             Creative Frontend Developer & UI/UX Designer passionate about crafting intuitive, responsive, and user-focused digital experiences.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-text animate-on-scroll fade-in-left">
              <p className="about-description">
                I’m Zahra Khan, a passionate Frontend Developer and UI/UX Designer who bridges the gap between design and development.  
               I love transforming ideas into seamless digital experiences—crafting interfaces that are not only visually appealing but also fast, accessible, and user-friendly.  
              </p>
              <p className="about-description">
             With a strong foundation in design tools like Figma and development frameworks such as React.js, I bring a unique mix of creativity and technical expertise.  
              From wireframes and prototypes to pixel-perfect, responsive applications, I ensure every project is intuitive, engaging, and optimized for performance. My mission is simple: to design and build digital products that delight users while solving real-world problems.
              </p>
              
            
            </div>
            
            <div className="skills-container animate-on-scroll fade-in-right">
              {[
                { name: "Frontend Development (React.js, JavaScript, TypeScript)", percentage: 90 },
                { name: "UI/UX Design (Figma, Canva, Prototyping)", percentage: 88 },
                { name: "Styling & CSS Tools (Tailwind, SCSS, Bootstrap)", percentage: 75 },
                { name: "Version Control (Git, GitHub, VS Code)", percentage: 80 },
                { name: "Build Tools (Vite, NPM/Yarn)", percentage: 75 },
                { name: "Other Expertise (Responsive Design, SEO, Firebase)", percentage: 78 }
              ].map((skill, index) => (
                <div key={index} className="skill-item animate-on-scroll fade-in-right" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section animate-on-scroll">
        <div className="section-container">
          <div className="section-header animate-on-scroll fade-in-down">
            <h2 className="section-title">
              My <span className="section-title-highlight">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive digital solutions from concept to deployment
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-on-scroll fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt animate-on-scroll">
        <div className="section-container">
          <div className="section-header animate-on-scroll fade-in-down">
            <h2 className="section-title">
              Featured <span className="section-title-highlight">Projects</span>
            </h2>
            <p className="section-subtitle">
              Showcase of my latest work in frontend development, responsive web design, and intuitive UI/UX solutions.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card animate-on-scroll fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <div 
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="project-image-overlay"></div>
                    <div className="project-hover-overlay">
                      <h3 className="project-hover-title">{project.title}</h3>
                      <p className="project-hover-description">{project.description}</p>
                      <button className="project-hover-button">
                        View Details <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </a>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag-more">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section animate-on-scroll">
        <div className="section-container">
          <div className="section-header animate-on-scroll fade-in-down">
            <h2 className="section-title">
              Get In <span className="section-title-highlight">Touch</span>
            </h2>
            <p className="section-subtitle">
              Let's discuss your next project and bring your ideas to life
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info animate-on-scroll fade-in-left">
              <h3 className="contact-title">Let's work together!</h3>
              <p className="about-description">
                “I’m passionate about building impactful digital experiences. From AI-powered solutions to sleek web and mobile applications, I’m eager to bring ideas to life and collaborate on projects that make a difference.
              </p>
              
              <div className="contact-items">
                <div className="contact-item animate-on-scroll fade-in-left" style={{ animationDelay: '0.1s' }}>
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Email</div>
                    <div className="contact-item-text">xahrakhan765@gmail.com</div>
                  </div>
                </div>
                
                <div className="contact-item animate-on-scroll fade-in-left" style={{ animationDelay: '0.2s' }}>
                  <div className="contact-icon">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">LinkedIn</div>
                    <a 
                      href="www.linkedin.com/in/zahra-khan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-item-text"
                    >
                      Connect with me professionally
                    </a>
                  </div>
                </div>
                

                <div className="contact-item animate-on-scroll fade-in-left" style={{ animationDelay: '0.4s' }}>
                  <div className="contact-icon">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">GitHub</div>
                    <a 
                      href="https://github.com/zahrakhan76" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-item-text"
                    >
                      View my code repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form animate-on-scroll fade-in-right">
              <div className="form-grid">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="form-input animate-on-scroll fade-in-right" 
                  style={{ animationDelay: '0.1s' }}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="form-input animate-on-scroll fade-in-right"
                  style={{ animationDelay: '0.2s' }}
                  required
                />
              </div>
              
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="form-input animate-on-scroll fade-in-right"
                style={{ marginTop: '1rem', animationDelay: '0.3s' }}
                required
              />
              
              <textarea 
                name="message"
                placeholder="Your Message" 
                className="form-textarea animate-on-scroll fade-in-right"
                rows="6"
                style={{ marginTop: '1rem', animationDelay: '0.4s' }}
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="form-submit animate-on-scroll fade-in-right"
                style={{ marginTop: '1rem', animationDelay: '0.5s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer animate-on-scroll fade-in-up">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Zahra khan. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top animate-on-scroll fade-in">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;