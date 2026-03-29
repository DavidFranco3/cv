import { useState, useEffect } from 'react'
import { generatePdf } from './utils/pdfGenerator'
import './App.css'
import { translations } from './utils/translations'

// Iconos SVG
const Icons = {
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  GitHub: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Npm: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 0h24v24H0z" stroke="none"/><path d="M1 8h22v7H11v2H7v-2H1V8zm3 5h2V9H4v4zm3 0h2V9H7v4zm3-2h2V9h-2v2zm3 2h2V9h-2v4zm3 0h2V9h-2v4zm3 0h2V9h-2v4z" fill="currentColor" stroke="none"/>
    </svg>
  )
};

function App() {
  const [language, setLanguage] = useState('es');
  const [typedText, setTypedText] = useState('');
  
  const { ui, cv: cvData } = translations[language];
  const fullSummary = cvData.summary;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    let i = 0;
    setTypedText(''); // Reset typed text on language change
    const interval = setInterval(() => {
      setTypedText(fullSummary.slice(0, i));
      i++;
      if (i > fullSummary.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [language, fullSummary]);

  const handleDownload = async () => {
    // Para el PDF usamos la versión optimizada (concisa)
    await generatePdf(
      { ...cvData, summary: fullSummary },
      `CV_DavidFranco_${language.toUpperCase()}.pdf`
    );
  };

  return (
    <div className="dashboard-container">
      <div className="bg-glow"></div>

      {/* Sección de Encabezado */}
      <header className="hero-section">
        <div className="top-bar">
          <div className="status-badge"><span></span> {ui.status}</div>
          <div className="top-actions">
            <button className="download-btn-top" onClick={handleDownload}>
              {ui.downloadCv}
            </button>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>

        <h1 className="hero-name">{cvData.name}</h1>
        <h2 className="hero-role">{cvData.role}</h2>

        <div className="contact-grid">
          <a href={`mailto:${cvData.contact.email}`} className="contact-card-mini">
            <Icons.Email />
            <span>Email</span>
          </a>
          <div className="contact-card-mini">
            <Icons.Phone />
            <span>{cvData.contact.phone}</span>
          </div>
          <a href={`https://github.com/${cvData.contact.github}`} target="_blank" className="contact-card-mini">
            <Icons.GitHub />
            <span>GitHub</span>
          </a>
          <a href={`https://linkedin.com/in/${cvData.contact.linkedin}`} target="_blank" className="contact-card-mini">
            <Icons.LinkedIn />
            <span>LinkedIn</span>
          </a>
          <a href={`https://www.npmjs.com/~${cvData.contact.npm}`} target="_blank" className="contact-card-mini">
            <Icons.Npm />
            <span>NPM</span>
          </a>
          <div className="contact-card-mini">
            <Icons.Location />
            <span>{cvData.contact.location}</span>
          </div>
        </div>

        {/* Resumen Profesional debajo de las redes */}
        <section className="terminal-card-hero">
          <div className="dashboard-card terminal-card">
            <div className="card-header">
              <div className="dots"><span className="red"></span><span className="yellow"></span><span className="green"></span></div>
              <span className="file-name">{ui.professionalSummary}</span>
            </div>
            <div className="terminal-content">
              <span className="prompt">{ui.whoami}</span>
              <p className="typed-text">{typedText}<span className="cursor">_</span></p>
            </div>
          </div>
        </section>
      </header>

      <main className="dashboard-grid">
        {/* Formación, Certificaciones e Idiomas */}
        <section className="info-grid">
          <div className="dashboard-card info-card">
            <h5>{ui.academicTraining}</h5>
            <div className="info-content">
              <strong>{cvData.education.degree}</strong>
              <p>{cvData.education.school}</p>
              <span className="small-text">{cvData.education.period}</span>
              <p className="small-desc">{cvData.education.desc}</p>
            </div>
          </div>
          <div className="dashboard-card info-card">
            <h5>{ui.languages}</h5>
            {cvData.languages.map((lang, i) => (
              <div key={i} className="info-content">
                <strong>{lang.name}</strong>
                <p className="small-text">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section className="skills-section">
          <h3 className="section-title">{ui.skillsAndTech}</h3>
          <div className="skills-grid">
            {cvData.skills.map((skill, idx) => (
              <div key={idx} className="skill-card" style={{ "--accent": skill.color }}>
                <div className="skill-category">{skill.category}</div>
                <div className="tech-list">
                  {skill.techs.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section className="experience-section">
          <h3 className="section-title">{ui.professionalExperience}</h3>
          <div className="timeline">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="experience-content dashboard-card">
                  <div className="exp-info">
                    <div className="exp-main">
                      <h4 className="exp-company">{exp.company}</h4>
                      <span className="exp-role">{exp.role}</span>
                    </div>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <p className="exp-short-desc">{exp.desc}</p>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="exp-commits">
                    {exp.commits.map((c, i) => <span key={i} className="commit-tag">{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
