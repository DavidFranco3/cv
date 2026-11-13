import { useState } from 'react';
import { soundManager } from '../../utils/soundEffects';

const ARCH_NODES = [
  {
    id: 'client',
    step: 'Layer 01 • Frontend',
    name: 'Client App',
    tech: 'React & TypeScript',
    icon: '💻',
    headline: 'High-Performance SPA & Component Architecture',
    desc: 'Modular user interface written in strictly-typed TypeScript with React hooks, responsive container queries, virtualized data tables, and minimal bundle footprint.',
    features: [
      'Typed state management & API contracts',
      'Asset optimization & sub-second FCP (First Contentful Paint)',
      'Web accessibility (a11y) & WCAG 2.1 AA compliance'
    ],
    specs: {
      Protocol: 'HTTPS / TLS 1.3',
      Latency: '< 45ms P95',
      Framework: 'React 18/19',
      Bundler: 'Vite (ESBuild)'
    }
  },
  {
    id: 'gateway',
    step: 'Layer 02 • Network',
    name: 'API Gateway',
    tech: 'Nginx & Reverse Proxy',
    icon: '🛡️',
    headline: 'Traffic Routing, SSL & Security Perimeter',
    desc: 'Acts as the single point of entry for microservices. Manages TLS certificates, rate limiting to mitigate DDoS attacks, CORS policies, and path-based routing.',
    features: [
      'SSL/TLS automatic termination & HTTP/2 support',
      'Dynamic token validation & request sanitization',
      'Load distribution with upstream failover'
    ],
    specs: {
      Security: 'OWASP Headers',
      RateLimit: '100 req/sec IP',
      LoadBalance: 'Round Robin',
      Compression: 'Brotli / Gzip'
    }
  },
  {
    id: 'services',
    step: 'Layer 03 • Backend',
    name: 'Microservices',
    tech: 'Node.js & Docker',
    icon: '⚡',
    headline: 'Decoupled, Containerized Business Logic Services',
    desc: 'Stateless Node.js/Express microservices packaged inside Docker containers. Follows Clean Architecture and Domain-Driven design with strict boundary isolation.',
    features: [
      'JWT / OAuth2 stateless authentication',
      'Graceful shutdown handling & health probe endpoints',
      'Automated unit testing with Jest (>80% coverage)'
    ],
    specs: {
      Runtime: 'Node.js LTS',
      Containers: 'Docker Engine',
      Architecture: 'Clean Code',
      Testing: 'Jest / Supertest'
    }
  },
  {
    id: 'cloud',
    step: 'Layer 04 • Cloud',
    name: 'AWS Cloud',
    tech: 'EC2, S3 & CI/CD',
    icon: '☁️',
    headline: 'Resilient Cloud Infrastructure & Continuous Delivery',
    desc: 'Hosted across AWS services. Automated GitHub Actions CI/CD pipelines run automated lint, unit tests, and deploy container images with zero downtime.',
    features: [
      'Automated multi-stage Docker build pipelines',
      'S3 bucket storage with private pre-signed URLs',
      'CloudWatch centralized logging & monitoring'
    ],
    specs: {
      Provider: 'Amazon Web Services',
      Storage: 'AWS S3 Buckets',
      Compute: 'AWS EC2 Instances',
      Deployment: 'GitHub Actions'
    }
  },
  {
    id: 'data',
    step: 'Layer 05 • Data',
    name: 'Data Layer',
    tech: 'MongoDB & MySQL',
    icon: '🗄️',
    headline: 'High-Concurrency Polyglot Persistence & Caching',
    desc: 'Combines relational relational ACID guarantees (MySQL) for core transactions with document stores (MongoDB) for flexible schemas and caching.',
    features: [
      'Connection pooling & query optimization',
      'Indexed lookups with sub-5ms read latencies',
      'Automated daily snapshot backups & replica sets'
    ],
    specs: {
      Relational: 'MySQL 8.0',
      NoSQL: 'MongoDB Atlas',
      Pooling: 'Active (Max 50)',
      Availability: '99.95% SLA'
    }
  }
];

export default function ArchitectureExplorer({ language = 'es' }) {
  const [selectedNode, setSelectedNode] = useState(ARCH_NODES[2]); // default microservices

  const handleSelectNode = (node) => {
    soundManager.playClick();
    setSelectedNode(node);
  };

  return (
    <section id="architecture-section" className="code-module-section animate-slide-up" style={{ animationDelay: '0.28s' }}>
      <div className="module-header">
        <span className="code-kw">import</span> &#123; <span className="code-type">SystemTopology</span> &#125; <span className="code-kw">from</span> <span className="prop-string">'./cloud.architecture'</span>;
      </div>

      <div className="arch-canvas-card beam-card glow-hover-card">
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>

        <div className="arch-header">
          <div className="arch-title-group">
            <h3>{language === 'es' ? 'Arquitectura Cloud & Microservicios' : 'Cloud & Microservices Architecture'}</h3>
            <p className="arch-subtitle">
              {language === 'es' 
                ? 'Flujo interactivo de sistemas de alta disponibilidad diseñados por David Franco' 
                : 'Interactive topology of production-grade systems engineered by David Franco'}
            </p>
          </div>
          <span className="arch-sla-badge glow-badge">
            SLA: 99.9% Uptime Verified
          </span>
        </div>

        {/* Interactive Pipeline Nodes */}
        <div className="arch-pipeline-track">
          {ARCH_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                className={`arch-node-box ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelectNode(node)}
              >
                <div className="arch-node-step">{node.step}</div>
                <div className="arch-node-title">
                  <span>{node.icon}</span>
                  <span>{node.name}</span>
                </div>
                <div className="arch-node-tech">{node.tech}</div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Drawer */}
        <div className="arch-details-drawer animate-slide-up" key={selectedNode.id}>
          <div className="arch-details-left">
            <h4>{selectedNode.headline}</h4>
            <p className="arch-details-desc">{selectedNode.desc}</p>
            <div className="arch-features-list">
              {selectedNode.features.map((feat, i) => (
                <div key={i} className="arch-feature-item">
                  <span className="bullet">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="arch-specs-grid">
            {Object.entries(selectedNode.specs).map(([label, val]) => (
              <div key={label} className="arch-spec-card">
                <span className="arch-spec-label">{label}</span>
                <span className="arch-spec-val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
