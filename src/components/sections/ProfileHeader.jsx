import { Icons } from '../common/Icons';
import TypewriterRole from '../TypewriterRole';
import { soundManager } from '../../utils/soundEffects';

export default function ProfileHeader({ cvData, handleCopy, copiedKey }) {
  const onCopy = (text, key) => {
    soundManager.playBeep();
    handleCopy(text, key);
  };

  return (
    <section id="profile-section" className="code-section animate-slide-up" style={{ animationDelay: '0.05s' }}>
      <div className="code-line-block">
        <span className="code-comment">// ─────────────────────────────────────────────────────────────</span>
        <span className="code-comment">// {cvData.role}</span>
        <span className="code-comment">// ─────────────────────────────────────────────────────────────</span>
      </div>

      <div className="hero-statement beam-card glow-hover-card">
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>

        <h1 className="dev-name">
          <span className="code-kw">const</span>{' '}
          <span className="glitch-name-wrap" title="Cyberpunk Dev Identity">
            <span className="dev-identifier glitch-text">{cvData.name.replace(/\s+/g, '')}</span>
          </span>: <span className="code-type">SoftwareDeveloper</span> = &#123;
        </h1>

        <div className="code-indent-block">
          <div className="code-kv">
            <span className="prop-name">name:</span>
            <span className="prop-string">"{cvData.name}"</span>,
          </div>
          <div className="code-kv">
            <span className="prop-name">role:</span>
            <span className="prop-string">"</span>
            <TypewriterRole 
              words={[
                cvData.role,
                'Full Stack & Cloud Developer',
                'NPM Open Source Maintainer',
                'TypeScript & Node.js Specialist',
                'Bilingual English C1-C2'
              ]}
              defaultRole={cvData.role}
            />
            <span className="prop-string">"</span>,
          </div>
          <div className="code-kv">
            <span className="prop-name">location:</span>
            <span className="prop-string">"{cvData.contact.location}"</span>,
          </div>
          <div className="code-kv">
            <span className="prop-name">stack:</span>
            <span className="prop-array">[<span className="prop-string">"TypeScript"</span>, <span className="prop-string">"Node.js"</span>, <span className="prop-string">"React"</span>, <span className="prop-string">"Docker"</span>, <span className="prop-string">"AWS"</span>]</span>,
          </div>
          <div className="code-kv">
            <span className="prop-name">culture:</span>
            <span className="prop-obj">&#123; <span className="inner-prop">architecture</span>: <span className="prop-string">"Clean Code & Microservices"</span>, <span className="inner-prop">english</span>: <span className="prop-string">"C1-C2"</span> &#125;</span>
          </div>
        </div>

        <div className="closing-brace">&#125;;</div>
      </div>

      {/* Contact Interactive Terminal Flags */}
      <div className="cli-contact-strip">
        <button 
          className="cli-tag interactive-tag hover-shine" 
          onClick={() => onCopy(cvData.contact.email, 'email')}
          title="Copiar email"
        >
          <Icons.Terminal />
          <code>--email="{cvData.contact.email}"</code>
          <span className="cli-badge">
            {copiedKey === 'email' ? <Icons.Check /> : <Icons.Copy />}
          </span>
        </button>

        <button 
          className="cli-tag interactive-tag hover-shine" 
          onClick={() => onCopy(cvData.contact.phone, 'phone')}
          title="Copiar teléfono"
        >
          <Icons.Terminal />
          <code>--phone="{cvData.contact.phone}"</code>
          <span className="cli-badge">
            {copiedKey === 'phone' ? <Icons.Check /> : <Icons.Copy />}
          </span>
        </button>

        <a 
          href={`https://github.com/${cvData.contact.github}`} 
          target="_blank" 
          rel="noreferrer" 
          className="cli-tag link-tag hover-shine"
          onClick={() => soundManager.playClick()}
        >
          <code>github/{cvData.contact.github}</code>
          <Icons.ExternalLink />
        </a>

        <a 
          href={`https://linkedin.com/in/${cvData.contact.linkedin}`} 
          target="_blank" 
          rel="noreferrer" 
          className="cli-tag link-tag hover-shine"
          onClick={() => soundManager.playClick()}
        >
          <code>linkedin/{cvData.contact.linkedin}</code>
          <Icons.ExternalLink />
        </a>

        <a 
          href={`https://www.npmjs.com/~${cvData.contact.npm}`} 
          target="_blank" 
          rel="noreferrer" 
          className="cli-tag link-tag hover-shine"
          onClick={() => soundManager.playClick()}
        >
          <code>npm/~{cvData.contact.npm}</code>
          <Icons.ExternalLink />
        </a>
      </div>
    </section>
  );
}

