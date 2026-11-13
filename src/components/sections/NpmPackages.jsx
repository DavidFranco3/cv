import { useState } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

const PACKAGES = [
  {
    name: 'fluent-rest-client',
    tagline: 'Chainable, fluent REST client for TypeScript & Node.js',
    description: 'Lightweight HTTP library providing fluent request chaining, built-in retry policies, interceptors, and strict TypeScript return types.',
    version: 'v1.0.4',
    badge: 'TypeScript • Zero Bloat',
    installCmd: 'npm i fluent-rest-client',
    link: 'https://www.npmjs.com/package/fluent-rest-client',
    example: `import { client } from 'fluent-rest-client';

const res = await client('https://api.domain.com')
  .bearer(token)
  .retry(3)
  .get('/data');`
  },
  {
    name: 'react-apextable-pro',
    tagline: 'High-performance virtualized grid for enterprise React apps',
    description: 'Blazing fast, customizable table and grid engine with dynamic sorting, filtering, column virtualization, and dark mode presets.',
    version: 'v1.2.0',
    badge: 'React 18/19 • Virtual DOM',
    installCmd: 'npm i react-apextable-pro',
    link: 'https://www.npmjs.com/package/react-apextable-pro',
    example: `import { ApexTable } from 'react-apextable-pro';

<ApexTable 
  data={records} 
  columns={columns} 
  virtualize 
  theme="cyber" 
/>`
  },
  {
    name: 'intl-currency-helper',
    tagline: 'Native Intl-powered multi-currency formatting utility',
    description: 'Zero-dependency helper that guarantees cross-platform currency formatting, exchange rate calculations, and locale-aware symbols.',
    version: 'v1.1.2',
    badge: 'Zero Deps • 1.2 KB',
    installCmd: 'npm i intl-currency-helper',
    link: 'https://www.npmjs.com/package/intl-currency-helper',
    example: `import { formatCurrency } from 'intl-currency-helper';

const price = formatCurrency(1499.50, { 
  currency: 'USD', 
  locale: 'en-US' 
}); // $1,499.50`
  }
];

export default function NpmPackages({ language = 'es' }) {
  const [copiedPkg, setCopiedPkg] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleCopyCmd = (cmd, pkgName) => {
    soundManager.playBeep();
    navigator.clipboard?.writeText(cmd);
    setCopiedPkg(pkgName);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  return (
    <section id="npm-packages-section" className="code-module-section animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="module-header">
        <span className="code-kw">import</span> &#123; <span className="code-type">PublishedLibraries</span> &#125; <span className="code-kw">from</span> <span className="prop-string">'@davidfranco/npm-registry'</span>;
      </div>

      <div className="npm-showcase-container beam-card glow-hover-card">
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>

        <div className="npm-showcase-header">
          <div className="npm-showcase-title">
            <span className="npm-cube-icon">📦</span>
            <div>
              <h3>{language === 'es' ? 'Bibliotecas Open Source Publicadas en NPM' : 'Open Source NPM Packages'}</h3>
              <p className="npm-subtitle">
                {language === 'es' 
                  ? 'Paquetes creados y mantenidos activamente por David Franco en npmjs.com' 
                  : 'Packages authored and actively maintained by David Franco on npmjs.com'}
              </p>
            </div>
          </div>

          <a 
            href="https://www.npmjs.com/~davidfranco3" 
            target="_blank" 
            rel="noreferrer" 
            className="npm-author-link shine-tag"
            onClick={() => soundManager.playClick()}
          >
            <span>npm/~davidfranco3</span>
            <Icons.ExternalLink />
          </a>
        </div>

        {/* Package Tabs */}
        <div className="npm-tabs-bar">
          {PACKAGES.map((pkg, idx) => (
            <button
              key={pkg.name}
              className={`npm-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setActiveTab(idx);
              }}
            >
              <span className="npm-dot"></span>
              <code>{pkg.name}</code>
              <span className="npm-ver-badge">{pkg.version}</span>
            </button>
          ))}
        </div>

        {/* Active Package Showcase Card */}
        <div className="npm-active-card">
          <div className="npm-card-details">
            <div className="npm-card-headline">
              <h4 className="npm-card-title">{PACKAGES[activeTab].name}</h4>
              <span className="npm-feature-badge glow-badge">{PACKAGES[activeTab].badge}</span>
            </div>
            
            <p className="npm-card-tagline">{PACKAGES[activeTab].tagline}</p>
            <p className="npm-card-desc">{PACKAGES[activeTab].description}</p>

            <div className="npm-install-box">
              <span className="npm-prompt">$</span>
              <code>{PACKAGES[activeTab].installCmd}</code>
              <button
                className="npm-copy-btn hover-shine"
                onClick={() => handleCopyCmd(PACKAGES[activeTab].installCmd, PACKAGES[activeTab].name)}
                title="Copiar comando de instalación"
              >
                {copiedPkg === PACKAGES[activeTab].name ? (
                  <>
                    <Icons.Check />
                    <span>{language === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Icons.Copy />
                    <span>{language === 'es' ? 'Copiar' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="npm-links-row">
              <a
                href={PACKAGES[activeTab].link}
                target="_blank"
                rel="noreferrer"
                className="npm-external-btn"
                onClick={() => soundManager.playClick()}
              >
                <Icons.ExternalLink />
                <span>{language === 'es' ? 'Ver en NPM Registry' : 'View on NPM Registry'}</span>
              </a>
            </div>
          </div>

          {/* Quickstart Code Preview */}
          <div className="npm-code-preview">
            <div className="npm-code-header">
              <Icons.FileCode />
              <span>quickstart.ts</span>
            </div>
            <pre className="npm-code-body">
              <code>{PACKAGES[activeTab].example}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

