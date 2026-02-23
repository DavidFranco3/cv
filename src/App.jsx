import './App.css'

function App() {
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
    },
    objective: "Ingeniero en Informática con sólida experiencia como Desarrollador Full Stack. Especializado en la creación de aplicaciones web escalables y soluciones móviles robustas. Apasionado por la arquitectura de software y la implementación de tecnologías modernas para resolver problemas complejos de negocio.",
    skills: {
      backend: ['Express.js', 'Laravel', 'SpringBoot', 'PHP', 'Java', 'Node.js'],
      frontend: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Sass', 'Bootstrap 5'],
      mobile: ['Flutter', 'Dart', 'Kotlin'],
      databases: ['MySQL', 'MongoDB'],
      tools: ['Git', 'Docker', 'Postman', 'Vite', 'Netbeans']
    },
    experience: [
      {
        company: "Isotech",
        role: "Desarrollador Full Stack",
        duration: "2022 - Actualidad",
        description: "Liderazgo y desarrollo de aplicaciones integrales utilizando Express, Laravel y SpringBoot para el backend. Implementación de interfaces dinámicas y responsivas con React. Desarrollo de aplicaciones móviles multiplataforma con Flutter. Gestión de datos escalables utilizando MongoDB y arquitecturas relacionales con MySQL."
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
    interests: ["Arquitectura de Software", "Ajedrez", "Fútbol", "Tecnologías Emergentes"]
  };

  return (
    <div className="app-container">
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
            <span>✉️</span> {data.contact.email}
          </div>
          <div className="contact-item">
            <span>📱</span> {data.contact.phone}
          </div>
          <div className="contact-item">
            <span>🔗</span> {data.contact.linkedin}
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
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="content-card">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="exp-desc">{data.objective}</p>
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
              <p className="exp-desc">{exp.description}</p>
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
          </div>
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
      </main>
    </div>
  )
}

export default App



