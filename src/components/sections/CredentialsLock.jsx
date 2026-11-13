import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function CredentialsLock({ education, languages, certifications }) {
  return (
    <section id="credentials-section" className="code-module-section animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="module-header">
        <span className="code-comment">// lockfile: credentials.lock & academic_records.json</span>
      </div>

      <div className="credentials-code-grid">
        {/* Columna 1: Educación e Idiomas */}
        <div className="cred-module-card glow-hover-card">
          <div className="cred-header-kicker">
            <Icons.FileCode />
            <span>academic_education.json</span>
          </div>
          <div className="cred-card-body">
            <div className="cred-degree-name">{education.degree}</div>
            <div className="cred-school-name">{education.school}</div>
            <div className="cred-period-code"><code>// {education.period}</code></div>
            <p className="cred-summary-desc">{education.desc}</p>
          </div>

          {/* Idiomas */}
          <div className="languages-inner-box">
            <div className="lang-inner-header">
              <code>languages.config</code>
            </div>
            <div className="lang-code-rows">
              {languages.map((lang, i) => (
                <div key={i} className="lang-code-row">
                  <span className="lang-key">{lang.name.toLowerCase()}:</span>
                  <span className="lang-val">"{lang.level}"</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 2: Certificaciones Oficiales con Holographic Badge */}
        <div className="cred-module-card certs-module glow-hover-card holo-card">
          <div className="beam-laser"></div>
          <div className="beam-laser-bottom"></div>
          <div className="cred-header-kicker">
            <Icons.ShieldCheck />
            <span>verified_credentials.lock</span>
          </div>

          <div className="certs-code-list">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-code-entry holo-item">
                <div className="cert-entry-header">
                  <span className="cert-entry-name">{cert.title}</span>
                  <span className="cert-entry-hours glow-badge">[{cert.hours}]</span>
                </div>
                <div className="cert-entry-issuer">
                  <code>{cert.issuer} • {cert.date}</code>
                </div>
                {cert.credentialId && (
                  <div className="cert-entry-id">
                    <code>id: "{cert.credentialId}"</code>
                  </div>
                )}
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="cert-cli-link arrow-bounce"
                    onClick={() => soundManager.playClick()}
                  >
                    <code>$ verify_credential()</code>
                    <Icons.ExternalLink />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
