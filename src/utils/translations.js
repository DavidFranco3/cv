export const translations = {
  es: {
    ui: {
      status: "LISTO PARA CONSTRUIR SOLUCIONES IMPACTANTES",
      professionalSummary: "resumen_profesional.js",
      academicTraining: "FORMACIÓN_ACADÉMICA />",
      certifications: "CERTIFICACIONES />",
      languages: "IDIOMAS />",
      skillsAndTech: "Habilidades y Tecnologías",
      professionalExperience: "Experiencia Profesional",
      projects: "Proyecto Destacado",
      openSource: "Open Source & Contribuciones",
      downloadCv: "CV (PDF)",
      downloadCoverLetter: "CARTA PRESENTACIÓN (PDF)",
      whoami: "$ whoami"
    },
    cv: {
      name: "José David Ayala Franco",
      role: "Senior Full Stack Web Developer | React, Node.js & Redux",
      summary: "Senior Full Stack Web Developer con 4 años de experiencia construyendo SPAs complejas y servicios backend escalables con React, Redux (Redux Toolkit), TypeScript y Node.js (Express/NestJS). Especialista en gestión de estado global, diseño y consumo de APIs RESTful, persistencia en bases de datos relacionales y NoSQL (MySQL/MongoDB), y optimización de rendimiento (93% de reducción en latencia). Pruebas automatizadas con Jest y despliegues cloud en AWS con CI/CD. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & Redux", techs: ["React", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "SPAs", "Custom Hooks"], color: "#f59e0b" },
        { category: "Backend & Node.js", techs: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservicios", "JWT/RBAC"], color: "#3b82f6" },
        { category: "Bases de Datos & Caché", techs: ["SQL (PostgreSQL/MySQL)", "MongoDB", "Redis Cache", "Query Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2/Lambda)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#6366f1" },
        { category: "Testing & Calidad", techs: ["Jest", "Cypress", "Pruebas Unitarias & Integración", "Clean Code", "Reviews"], color: "#ec4899" },
        { category: "Arquitectura & Ágil", techs: ["Clean Architecture", "SPAs a Gran Escala", "Agile / Scrum", "Performance Tuning"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Web Developer",
          date: "2022 - Presente",
          desc: "Liderazgo técnico en desarrollo full-stack de SPAs a gran escala y microservicios con React, Redux Toolkit y Node.js/NestJS, diseñando APIs RESTful y pipelines de CI/CD.",
          bullets: [
            "Arquitecté y desarrollé SPAs modulares de alto tráfico con React y TypeScript, gestionando flujos de datos complejos mediante Redux y Redux Toolkit.",
            "Diseñé y mantuve microservicios backend y APIs RESTful escalables con Node.js, Express.js y NestJS, implementando autenticación segura con JWT y RBAC.",
            "Optimizé consultas e indexación en bases de datos relacionales MySQL/PostgreSQL y MongoDB, reduciendo los tiempos de respuesta de 45s a 3s (mejora del 93%).",
            "Automaticé flujos de integración y despliegue continuo (CI/CD) con GitHub Actions y control en Git, acelerando entregas y reduciendo fallos en un 40%.",
            "Integré servicios cloud en AWS (S3 para almacenamiento y APIs en la nube) y orquesté contenedores con Docker, asegurando alta disponibilidad y resiliencia.",
            "Escribí suites completas de pruebas unitarias y de integración con Jest y Cypress, garantizando estabilidad en producción y prevención de regresiones.",
            "Optimizé el rendimiento de renderizado en el cliente mediante selectores memoizados en Redux, normalización de estado y lazy loading de componentes.",
            "Colaboré activamente en revisiones de código, planificación de arquitectura y ceremonias ágiles Scrum en equipos internacionales bilingües en inglés."
          ],
          commits: ["feat: rest-api-express", "perf: core-query-optim", "init: flutter-mobile-core"]
        }
      ],
      education: {
        school: "Instituto Tecnológico Superior de Apatzingán",
        degree: "Ingeniería en Informática",
        period: "2018 - 2023",
        desc: "Especialización en estructuras de datos, algoritmos y fundamentos de ingeniería de software."
      },
      certifications: [
        {
          title: "Iniciación al Desarrollo con IA",
          issuer: "mouredev & BIG school",
          date: "Octubre 2026",
          hours: "4 hrs"
        },
        {
          title: "Inglés Nivel C1-C2",
          issuer: "Edutin Academy",
          date: "Agosto 2026",
          hours: "177 hrs",
          credentialId: "18696518",
          url: "https://app.edutin.com/verify/18696518"
        },
        {
          title: "Curso Aplicaciones Móviles",
          issuer: "BSG Institute",
          date: "Agosto 2026",
          hours: "7 hrs",
          credentialId: "10971648A31172D0P1"
        }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1-C2" }
      ],
      pdfLabels: {
        professionalProfile: "Perfil Profesional",
        education: "Formación Académica",
        certifications: "Certificaciones",
        languages: "Idiomas",
        experience: "Experiencia Profesional",
        techStack: "Competencias Técnicas",
        present: "Actualidad"
      },
      coverLetter: {
        subject: "Solicitud de Empleo — Senior Full Stack Web Developer (React, Node.js & Redux)",
        recipient: "Atención: Equipo de Atracción de Talento | Empleos8",
        body1: "Estimado equipo de selección de Empleos8, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Senior Full Stack Web Developer (React, Node.js & Redux) en modalidad 100% remota. Con 4 años de experiencia profesional en ingeniería de software, arquitectura de SPAs a gran escala y servicios backend escalables, me entusiasma la oportunidad de colaborar con su cliente internacional líder en la industria del entretenimiento y el deporte.",
        body2: "A lo largo de mi trayectoria en Isotech, he asumido el liderazgo de aplicaciones web críticas y flujos de datos complejos. Mis logros clave incluyen el diseño de arquitecturas modulares en React y TypeScript, la gestión avanzada del estado global mediante Redux y Redux Toolkit (manejando caché de datos, sincronización asíncrona y normalización de entidades), y el desarrollo de APIs RESTful robustas en Node.js, Express y NestJS. Asimismo, optimicé consultas SQL y NoSQL reduciendo tiempos de latencia en un 93%, y automaticé pipelines de CI/CD que disminuyeron incidencias en un 40%.",
        body3: "Cuento con amplia experiencia en pruebas unitarias y de integración con Jest y Cypress, despliegues contenerizados en Docker y consumo de servicios cloud en AWS. Además, cuento con nivel de inglés bilingüe certificado (C1-C2 por Edutin Academy con 177 horas acreditadas), lo que me permite explicar decisiones técnicas complejas con total fluidez, participar en sesiones de live coding en inglés y colaborar de forma autónoma con equipos globales multidisciplinarios.",
        body4: "Mi formación como Ingeniero en Informática, mi capacidad de resolución analítica y mi enfoque pragmático orientado a resultados me preparan para integrarme de forma inmediata y generar valor duradero. Agradezco sinceramente su tiempo y consideración, y quedo a su entera disposición para conversar en una entrevista.",
        closing: "Atentamente,"
      }
    }
  },
  en: {
    ui: {
      status: "READY TO BUILD IMPACTFUL SOLUTIONS",
      professionalSummary: "professional_summary.js",
      academicTraining: "ACADEMIC_TRAINING />",
      certifications: "CERTIFICATIONS />",
      languages: "LANGUAGES />",
      skillsAndTech: "Skills and Technologies",
      professionalExperience: "Professional Experience",
      projects: "Featured Project",
      openSource: "Open Source & Contributions",
      downloadCv: "CV (PDF)",
      downloadCoverLetter: "COVER LETTER (PDF)",
      whoami: "$ whoami"
    },
    cv: {
      name: "José David Ayala Franco",
      role: "Senior Full Stack Web Developer | React, Node.js & Redux",
      summary: "Senior Full Stack Web Developer with 4 years of experience building complex SPAs and scalable backend services using React, Redux (Redux Toolkit), TypeScript, and Node.js (Express/NestJS). Proven track record in global state architecture, designing and consuming RESTful APIs, relational/NoSQL persistence (MySQL/MongoDB), and database performance tuning (93% latency reduction). Automated testing with Jest and cloud deployments on AWS with CI/CD. Bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & Redux", techs: ["React", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "SPAs", "Custom Hooks"], color: "#f59e0b" },
        { category: "Backend & Node.js", techs: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservices", "JWT/RBAC"], color: "#3b82f6" },
        { category: "Databases & Cache", techs: ["SQL (PostgreSQL/MySQL)", "MongoDB", "Redis Cache", "Query Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2/Lambda)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#6366f1" },
        { category: "Testing & Quality", techs: ["Jest", "Cypress", "Unit & Integration Testing", "Clean Code", "Reviews"], color: "#ec4899" },
        { category: "Architecture & Agile", techs: ["Clean Architecture", "Large-Scale SPAs", "Agile / Scrum", "Performance Tuning"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Web Developer",
          date: "2022 - Present",
          desc: "Technical leadership in full-stack large-scale SPA engineering and microservices with React, Redux Toolkit, and Node.js/NestJS, designing RESTful APIs and CI/CD pipelines.",
          bullets: [
            "Architected and developed high-traffic, modular SPAs using React and TypeScript, handling complex state flows via Redux and Redux Toolkit.",
            "Engineered scalable backend microservices and RESTful APIs using Node.js, Express.js, and NestJS, enforcing secure authentication with JWT and RBAC.",
            "Tuned relational SQL schemas (MySQL/PostgreSQL) and MongoDB queries, slashing complex analytical reporting latency by 93% (from 45s down to 3s).",
            "Configured automated CI/CD deployment pipelines using GitHub Actions and Git version control, cutting release defect rates by 40%.",
            "Integrated AWS cloud infrastructure (S3 asset storage, EC2, REST APIs) and containerized applications with Docker, ensuring high availability.",
            "Authored automated unit and integration testing suites with Jest and Cypress, safeguarding production reliability and code stability.",
            "Optimized frontend rendering performance by implementing memoized Redux selectors, state normalization, and component-level code splitting.",
            "Led technical code reviews, contributed to architectural system design, and participated actively in Agile/Scrum ceremonies in fluent English."
          ],
          commits: ["feat: rest-api-express", "perf: core-query-optim", "init: flutter-mobile-core"]
        }
      ],
      education: {
        school: "Instituto Tecnológico Superior de Apatzingán",
        degree: "Computer Engineering",
        period: "2018 - 2023",
        desc: "Specialization in data structures, algorithms, and software engineering fundamentals."
      },
      certifications: [
        {
          title: "Introduction to AI Development",
          issuer: "mouredev & BIG school",
          date: "October 2026",
          hours: "4 hrs"
        },
        {
          title: "English Level C1-C2",
          issuer: "Edutin Academy",
          date: "August 2026",
          hours: "177 hrs",
          credentialId: "18696518",
          url: "https://app.edutin.com/verify/18696518"
        },
        {
          title: "Mobile Applications Course",
          issuer: "BSG Institute",
          date: "August 2026",
          hours: "7 hrs",
          credentialId: "10971648A31172D0P1"
        }
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1-C2" }
      ],
      pdfLabels: {
        professionalProfile: "Professional Profile",
        education: "Education",
        certifications: "Certifications",
        languages: "Languages",
        experience: "Professional Experience",
        techStack: "Technical Competencies",
        present: "Present"
      },
      coverLetter: {
        subject: "Application for Senior Full Stack Web Developer (React, Node.js & Redux)",
        recipient: "To: Talent Acquisition Team | Empleos8",
        body1: "Dear Talent Acquisition Team at Empleos8, I am writing to express my strong enthusiasm for the Senior Full Stack Web Developer position (React, Node.js & Redux) in the 100% remote modality. With 4 years of professional software engineering experience specializing in large-scale React SPAs, complex Redux state architectures, and scalable Node.js backend services, I am eager to contribute to your international team supporting modern applications in the entertainment and sports industry.",
        body2: "Throughout my career at Isotech, I have taken ownership of mission-critical web platforms and microservices. Key milestones include architecting modular React and TypeScript applications, managing complex global client states with Redux and Redux Toolkit (entity normalization, asynchronous thunks, and cache invalidation), and engineering secure RESTful APIs using Node.js, Express.js, and NestJS. Additionally, I optimized relational SQL schemas and MongoDB queries to achieve a 93% latency reduction, while automating CI/CD pipelines that cut release defects by 40%.",
        body3: "I bring hands-on experience authoring automated test suites with Jest and Cypress, containerizing services with Docker, and integrating AWS cloud infrastructure. Furthermore, I hold certified bilingual English proficiency (C1-C2 with 177 verified hours), enabling me to clearly articulate architectural decisions, perform screen-share live coding reviews, and collaborate seamlessly across distributed global engineering teams.",
        body4: "Holding a Bachelor's Degree in Computer Engineering, I combine analytical rigor with an independent problem-solving mindset committed to software reliability and clean architecture. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
