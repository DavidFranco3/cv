import { soundManager } from '../../utils/soundEffects';

export default function SkillsGrid({ skills }) {
  return (
    <section id="skills-section" className="code-module-section animate-slide-up" style={{ animationDelay: '0.18s' }}>
      <div className="module-header">
        <span className="code-kw">import</span> &#123; <span className="code-type">TechnicalCompetencies</span> &#125; <span className="code-kw">from</span> <span className="prop-string">'./skills.config'</span>;
      </div>

      <div className="skills-code-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-module-box glow-hover-card">
            <div className="skill-module-top">
              <span className="skill-accent-bar" style={{ backgroundColor: skill.color }}></span>
              <span className="skill-module-title">{skill.category}</span>
              <span className="skill-qty">[{skill.techs.length}]</span>
            </div>
            <div className="skill-pills-container">
              {skill.techs.map((t, i) => (
                <span 
                  key={i} 
                  className="code-chip shine-tag"
                  onClick={() => soundManager.playClick()}
                >
                  <code>{t}</code>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

