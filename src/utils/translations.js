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
      role: "Full Stack Engineer | TypeScript, React & Node.js",
      summary: "Full Stack Engineer con 4 años de experiencia construyendo y desplegando aplicaciones de producción con TypeScript de extremo a extremo: React en frontend y Node.js/NestJS en backend. Amplia experiencia traduciendo diseños de Figma en componentes reutilizables con Storybook, modelado de bases de datos relacionales con ORMs (TypeORM/Prisma) y trabajo en entornos cloud de AWS. Propietario técnico autónomo enfocado en Clean Architecture, APIs RESTful y testing con Jest. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript", techs: ["React", "TypeScript", "SPA Architecture", "Storybook", "Design Systems", "Figma"], color: "#f59e0b" },
        { category: "Backend & Node.js", techs: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "TypeScript", "Microservicios"], color: "#3b82f6" },
        { category: "Bases de Datos & ORMs", techs: ["SQL (PostgreSQL/MySQL)", "TypeORM", "Prisma", "Data Modeling", "Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2/CloudWatch)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Linux"], color: "#6366f1" },
        { category: "Testing & Calidad", techs: ["Jest", "Cypress", "Pruebas Unitarias", "Clean Code", "Code Reviews"], color: "#ec4899" },
        { category: "Arquitectura & Ágil", techs: ["Clean Architecture", "B2B SaaS", "Async Queues", "Agile / Scrum", "End-to-End Ownership"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full Stack Engineer",
          date: "2022 - Presente",
          desc: "Desarrollo full-stack de aplicaciones de producción con TypeScript de extremo a extremo, implementando UIs con React y Storybook, APIs con Node.js/NestJS y cloud en AWS.",
          bullets: [
            "Asumí la responsabilidad integral (end-to-end) de funcionalidades clave en TypeScript, desde requerimientos y diseño hasta pruebas y producción.",
            "Traduje diseños de Figma en experiencias de producto reutilizables con React y TypeScript, implementando flujos con Storybook y Design Systems.",
            "Desarrollé la lógica de negocio, APIs RESTful e integraciones escalables en backend utilizando Node.js, NestJS y control de acceso seguro (JWT/RBAC).",
            "Diseñé modelos de datos relacionales y optimicé consultas con ORMs (TypeORM/Prisma y SQL), reduciendo los tiempos de respuesta en un 93% (de 45s a 3s).",
            "Operé dentro de entornos cloud en AWS (S3, CloudWatch, configuración y logs) y orquesté contenedores Docker para garantizar alta resiliencia.",
            "Automaticé flujos de integración y despliegue continuo (CI/CD) con GitHub Actions y control en Git, reduciendo incidencias en producción en un 40%.",
            "Escribí suites completas de pruebas unitarias y de integración con Jest, blindando la estabilidad de la plataforma y previniendo regresiones.",
            "Colaboré estrechamente con equipos de producto y diseño, comunicando bloqueos a tiempo y entregando valor de forma autónoma bajo Scrum en inglés."
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
        subject: "Solicitud de Empleo — Full Stack Engineer (TypeScript, React, Node.js)",
        recipient: "Atención: Equipo de Atracción de Talento | EQUALS TRUE",
        body1: "Estimado equipo de selección de EQUALS TRUE, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Full Stack Engineer (TypeScript, React, Node.js). Me inspira profundamente la misión de EQUALS TRUE como talent partner auténtico comprometido con la igualdad salarial, la inclusión genuina y una cultura remota transparente para el mejor talento de las Américas.",
        body2: "Cuento con 4 años de experiencia profesional construyendo y desplegando aplicaciones completas en producción con TypeScript de extremo a extremo: en frontend con React, traduciendo diseños de Figma en componentes reutilizables y documentados con Storybook; y en backend con Node.js y NestJS, estructurando APIs RESTful limpias, microservicios y colas asíncronas. En bases de datos relacionales, modelo esquemas eficientes y empleo ORMs (TypeORM y Prisma), logrando optimizar consultas críticas con una reducción del 93% en tiempos de respuesta.",
        body3: "Tengo experiencia operando en entornos cloud en AWS (S3, CloudWatch, gestión de configuraciones y resolución de incidentes vía logs), orquestación con Docker y pipelines de CI/CD con GitHub Actions. Integro pruebas automatizadas con Jest como estándar de calidad y trabajo con total autonomía: priorizo la comunicación temprana de bloqueos, tomo ownership de las funcionalidades de punta a punta y colaboro fluidamente en inglés gracias a mi certificación C1-C2 (177 horas acreditadas por Edutin Academy).",
        body4: "Mi formación en Ingeniería en Informática y mi pasión por crear software bien diseñado y confiable se alinean perfectamente con su cultura 'remote-first' e inclusiva. Agradezco sinceramente su tiempo y consideración, y espero con entusiasmo la oportunidad de conversar sobre cómo puedo sumar valor a su equipo.",
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
      role: "Full Stack Engineer | TypeScript, React & Node.js",
      summary: "Full Stack Engineer with 4 years of experience architecting and shipping production applications with end-to-end TypeScript: React on the frontend and Node.js/NestJS on the backend. Proven track record translating Figma designs into reusable component ecosystems with Storybook, relational database modeling using ORMs (TypeORM/Prisma), and working within AWS cloud environments. Autonomous technical owner focused on Clean Architecture, RESTful APIs, and Jest testing. Bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript", techs: ["React", "TypeScript", "SPA Architecture", "Storybook", "Design Systems", "Figma"], color: "#f59e0b" },
        { category: "Backend & Node.js", techs: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "TypeScript", "Microservices"], color: "#3b82f6" },
        { category: "Databases & ORMs", techs: ["SQL (PostgreSQL/MySQL)", "TypeORM", "Prisma", "Data Modeling", "Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2/CloudWatch)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Linux"], color: "#6366f1" },
        { category: "Testing & Quality", techs: ["Jest", "Cypress", "Unit Testing", "Clean Code", "Code Reviews"], color: "#ec4899" },
        { category: "Architecture & Agile", techs: ["Clean Architecture", "B2B SaaS", "Async Queues", "Agile / Scrum", "End-to-End Ownership"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full Stack Engineer",
          date: "2022 - Present",
          desc: "Full-stack development of production applications using end-to-end TypeScript, building UIs with React and Storybook, APIs with Node.js/NestJS, and AWS cloud.",
          bullets: [
            "Took end-to-end ownership of product features across full-stack TypeScript, driving requirements and designs through testing and production.",
            "Translated Figma designs into reusable, polished UI experiences using React, TypeScript, and modern component development with Storybook.",
            "Engineered application logic, scalable RESTful APIs, and integrations using Node.js and NestJS, enforcing secure JWT and RBAC authorization.",
            "Designed relational data models and optimized queries using ORMs (TypeORM/Prisma and SQL), slashing report processing latency by 93% (from 45s to 3s).",
            "Operated within AWS cloud environments (managing configurations, S3 assets, CloudWatch logs) and containerized microservices with Docker.",
            "Configured automated CI/CD deployment pipelines using GitHub Actions and Git version control, cutting release defect rates by 40%.",
            "Authored comprehensive automated unit and integration testing suites with Jest, safeguarding application health and long-term platform stability.",
            "Collaborated closely with product and design peers, proactively flagging blockers, and delivering features independently in Agile/Scrum settings."
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
        subject: "Application for Full Stack Engineer (TypeScript, React, Node.js)",
        recipient: "To: Talent Acquisition Team | EQUALS TRUE",
        body1: "Dear Talent Acquisition Team at EQUALS TRUE, I am writing to express my strong enthusiasm for the Full Stack Engineer (TypeScript, React, Node.js) position. I am deeply inspired by EQUALS TRUE's mission as an authentic, remote-first talent partner committed to wage equality, genuine inclusion, and creating exceptional workplace experiences for top talent across the Americas.",
        body2: "I bring 4 years of professional software engineering experience architecting and shipping production applications with end-to-end TypeScript. On the frontend, I build modular React applications, turning Figma designs into reusable, production-ready experiences using Storybook workflows and Design Systems. On the backend, I engineer scalable RESTful APIs, business logic, and asynchronous flows with Node.js and NestJS, coupled with relational database modeling and ORMs (TypeORM, Prisma, SQL) where I reduced complex query execution times by 93%.",
        body3: "My background includes managing AWS cloud environments (configurations, S3 assets, CloudWatch logs, troubleshooting), containerizing services with Docker, and setting up automated CI/CD pipelines with GitHub Actions. I maintain high engineering standards with comprehensive Jest test suites and pride myself on taking end-to-end ownership of features—communicating proactively and unblocking dependencies. Additionally, I hold certified bilingual English proficiency (C1-C2 with 177 verified hours), enabling effortless daily collaboration in remote international environments.",
        body4: "Holding a Bachelor's Degree in Computer Engineering, I am excited about the prospect of bringing my technical expertise and collaborative spirit to EQUALS TRUE. Thank you very much for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
