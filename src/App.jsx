import { useRef } from 'react'
import { generatePdf } from './utils/pdfGenerator'
import './App.css'

function App() {
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    if (resumeRef.current) {
      await generatePdf(resumeRef.current, `CV_${data.name.replace(/\s+/g, '_')}.pdf`);
    }
  };

  // Using a placeholder avatar since we don't have the original image file
  const avatarUrl = 'https://api.dicebear.com/7.x/avataaars/svg?seed=JoseDavid';

  const data = {
    name: "José David Ayala Franco",
    title: "Full Stack Developer",
    contact: {
      location: "Paracuaro, Michoacán",
      phone: "453-152-7363",
      email: "josedavidayalafranco3@gmail.com",
      linkedin: "José David Ayala Franco",
      linkedinUrl: "https://linkedin.com/in/josedavidayalafranco",
      github: "DavidFranco3",
      githubUrl: "https://github.com/DavidFranco3"
    },
    objective: "Ingeniero en Informática con sólida experiencia como Desarrollador Full Stack. Especializado en la creación de aplicaciones web escalables y soluciones móviles robustas, integrando metodologías de desarrollo asistido por IA (AI-Assisted Development) para optimizar la productividad y garantizar código de alta calidad. Apasionado por la arquitectura de software y la implementación de tecnologías modernas.",
    skills: {
      backend: ['Express.js', 'Laravel', 'SpringBoot', 'PHP', 'Java', 'Node.js', 'Python (Básico)'],
      frontend: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Sass', 'Bootstrap 5'],
      mobile: ['Flutter', 'Dart', 'Kotlin'],
      databases: ['MySQL', 'MongoDB'],
      tools: ['Git', 'Docker', 'Vite', 'Postman', 'AI-Assisted Development']
    },
    experience: [
      {
        company: "Isotech",
        role: "Desarrollador Full Stack",
        duration: "2022 - Actualidad",
        description: [
          "Liderazgo técnico en el diseño y desarrollo de arquitecturas robustas bajo microservicios utilizando Laravel y Spring Boot.",
          "Desarrollo de interfaces dinámicas y de alto rendimiento con React, integrando estados complejos y consumo de APIs REST.",
          "Implementación de aplicaciones móviles nativas y multiplataforma mediante Flutter, garantizando una excelente experiencia de usuario (UX).",
          "Gestión avanzada de bases de datos relacionales (MySQL) y no relacionales (MongoDB), optimizando consultas y escalabilidad.",
          "Pionero en la adopción de AI-Assisted Development, integrando herramientas de IA para acelerar el ciclo de desarrollo y mejorar la calidad del código.",
          "Colaboración en la definición de requerimientos técnicos y mentoría a desarrolladores junior."
        ]
      },
      {
        company: "Tienda de Abarrotes",
        role: "Desarrollador de Software",
        duration: "2021",
        description: "Desarrollo de un sistema de gestión CRUD para el control de inventario y ventas. Logré un aumento del 15% en ganancias y una optimización del 90% en el control de stock."
      },
      {
        company: "Concurso Nacional de Programación",
        role: "8vo Lugar Nacional",
        duration: "2019",
        description: "Resolución de problemas de algoritmos y lógica bajo presión competitiva, destacando entre 50 equipos a nivel nacional."
      }
    ],
    education: [
      {
        institution: "Instituto Tecnológico Superior de Apatzingán",
        degree: "Ingeniería en Informática",
        duration: "2018 - Graduado",
        description: "Formación integral en desarrollo de sistemas, algoritmos y gestión de proyectos tecnológicos."
      }
    ],
    certifications: [
      {
        title: "Ciberseguridad",
        provider: "CISCO - Netacad",
        description: "Fundamentos de seguridad informática y protección de perímetros digitales."
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B1 (Intermedio)" }
    ],
    interests: ["Arquitectura de Software", "Desarrollo con IA", "Fútbol"]
  };

  return (
    <div className="app-container" ref={resumeRef}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-img-container">
            <img src={avatarUrl} alt={data.name} className="profile-img" />
          </div>
          <h1 className="name">{data.name}</h1>
          <p className="title">{data.title}</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span>📍</span> {data.contact.location}
          </div>
          <div className="contact-item">
            <a href={`mailto:${data.contact.email}`} className="contact-link">
              <span>✉️</span> {data.contact.email}
            </a>
          </div>
          <div className="contact-item">
            <span>📱</span> {data.contact.phone}
          </div>
          <div className="contact-item">
            <a href={data.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>🔗</span> {data.contact.linkedin}
            </a>
          </div>
          <div className="contact-item">
            <a href={data.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {data.contact.github}
              </span>
            </a>
          </div>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Idiomas</h3>
          <div className="language-grid">
            {data.languages.map(lang => (
              <div key={lang.name} className="lang-item" style={{ padding: '10px' }}>
                <p className="lang-name" style={{ fontSize: '0.9rem' }}>{lang.name}</p>
                <p className="lang-level" style={{ fontSize: '0.8rem' }}>{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Intereses</h3>
          <div className="skills-container">
            {data.interests.map(interest => (
              <span key={interest} className="skill-tag" style={{ background: 'rgba(129, 140, 248, 0.1)', color: 'var(--accent-color)', fontSize: '0.75rem' }}>{interest}</span>
            ))}
          </div>
        </div>

        <button className="download-btn" onClick={handleDownload} data-html2canvas-ignore="true">
          <span>📄</span> Descargar CV en PDF
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="content-card">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="exp-desc">{data.objective}</p>
        </section>

        <section className="content-card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Formación</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="experience-item" style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  <h3 className="company" style={{ fontSize: '1rem' }}>{edu.institution}</h3>
                  <p className="role" style={{ fontSize: '0.9rem', marginBottom: '5px' }}>{edu.degree}</p>
                  <p className="exp-desc" style={{ fontSize: '0.85rem' }}>{edu.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Certificaciones</h2>
              {data.certifications.map((cert, index) => (
                <div key={index} className="experience-item" style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  <h3 className="company" style={{ fontSize: '1rem' }}>{cert.title}</h3>
                  <p className="role" style={{ fontSize: '0.9rem', marginBottom: '5px' }}>{cert.provider}</p>
                  <p className="exp-desc" style={{ fontSize: '0.85rem' }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-card">
          <h2 className="section-title">Experiencia Profesional</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h3 className="company">{exp.company}</h3>
                <span className="duration" style={{ background: exp.duration.includes('Actualidad') ? 'rgba(56, 189, 248, 0.2)' : '' }}>
                  {exp.duration}
                </span>
              </div>
              <p className="role">{exp.role}</p>
              {Array.isArray(exp.description) ? (
                <ul className="exp-desc-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="exp-desc">{exp.description}</p>
              )}
            </div>
          ))}
        </section>

        <section className="content-card">
          <h2 className="section-title">Skills Técnicos</h2>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1rem' }}>Backend</h4>
              <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.skills.backend.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px', fontSize: '1rem' }}>Frontend</h4>
              <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.skills.frontend.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: '#fb7185', marginBottom: '10px', fontSize: '1rem' }}>Mobile</h4>
              <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.skills.mobile.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: '#34d399', marginBottom: '10px', fontSize: '1rem' }}>Databases</h4>
              <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.skills.databases.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: '#facc15', marginBottom: '10px', fontSize: '1rem' }}>Tools & Productivity</h4>
              <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.skills.tools.map(s => (
                  <span key={s} className="skill-tag" style={s.includes('AI') ? { border: '1px dashed var(--primary-color)' } : {}}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App





