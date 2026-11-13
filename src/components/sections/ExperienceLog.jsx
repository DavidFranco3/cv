import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function ExperienceLog({ experience }) {
  return (
    <section id="experience-section" className="code-module-section animate-slide-up" style={{ animationDelay: '0.24s' }}>
      <div className="module-header">
        <span className="code-kw">export default function</span> <span className="code-fn">ExperienceTimeline</span>(): <span className="code-type">JSX.Element</span> &#123;
      </div>

      <div className="git-log-container beam-card glow-hover-card">
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>
        <div className="git-data-pulse"></div>

        {experience.map((exp, idx) => (
          <div key={idx} className="git-commit-entry">
            <div className="commit-header-line">
              <div className="commit-id-wrap">
                <Icons.GitCommit />
                <span className="commit-hash pulse-hash">commit 8f3d10a</span>
                <span className="commit-branch">(HEAD -&gt; master)</span>
              </div>
              <span className="commit-timestamp">{exp.date}</span>
            </div>

            <div className="commit-role-line">
              <strong className="company-tag">{exp.company}</strong>
              <span className="sep-slash">/</span>
              <span className="role-tag">{exp.role}</span>
            </div>

            <p className="commit-overview-text">{exp.desc}</p>

            <div className="commit-diff-bullets">
              {exp.bullets.map((bullet, i) => (
                <div key={i} className="diff-line hover-diff">
                  <span className="diff-plus">+</span>
                  <span className="diff-text">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="commit-tags-strip">
              <span className="tags-label">production_commits:</span>
              <div className="tags-wrap">
                {exp.commits.map((c, i) => (
                  <span 
                    key={i} 
                    className="git-tag-pill"
                    onClick={() => soundManager.playClick()}
                  >
                    <code>{c}</code>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="closing-brace">&#125;</div>
    </section>
  );
}
