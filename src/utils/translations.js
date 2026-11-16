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
      role: "Senior Fullstack Software Engineer",
      summary: "Senior Fullstack Engineer con 4 años de experiencia especializándose en desarrollo web moderno y arquitecturas escalables con React, TypeScript, Node.js y NestJS. Sólida experiencia en construcción de SPAs modulares, componentes reutilizables, consumo de servicios cloud (AWS/Docker) y diseño de APIs RESTful con autenticación RBAC. Práctica activa integrando APIs de LLMs, flujos asistidos por IA (Cursor, Claude Code) y testing con Jest. Bilingüe (Inglés C1-C2) con título en Ingeniería en Informática.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript", techs: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Custom Hooks", "Responsive (WCAG)"], color: "#f59e0b" },
        { category: "Backend & APIs", techs: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "RBAC / Auth", "Microservicios"], color: "#3b82f6" },
        { category: "AI & Modern Tooling", techs: ["LLM APIs Integration", "Claude Code", "Cursor", "GitHub Copilot", "Agentic Workflows"], color: "#8b5cf6" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "CI/CD Pipelines", "Git / GitHub", "Postman", "Linux"], color: "#6366f1" },
        { category: "Bases de Datos & Calidad", techs: ["MySQL", "MongoDB", "Unit Testing (Jest)", "Clean Code", "Code Reviews"], color: "#10b981" },
        { category: "Móvil & Otros", techs: ["Flutter", "Dart", "Kotlin", "Python", "SQLite"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Fullstack Software Engineer",
          date: "2022 - Presente",
          desc: "Liderazgo técnico en desarrollo fullstack con React, TypeScript y Node.js/NestJS, diseñando SPAs de alta disponibilidad, APIs RESTful con control de acceso RBAC e integraciones cloud continuas.",
          bullets: [
            "Diseñé e implementé SPAs modulares con React y TypeScript, creando componentes reutilizables y custom hooks que optimizaron el renderizado y la reactividad.",
            "Arquitecté y desarrollé servicios backend y APIs RESTful con Node.js, NestJS y TypeScript, implementando autenticación y control de acceso RBAC seguro.",
            "Integré servicios cloud en AWS (S3 para almacenamiento y APIs en la nube) y orquesté contenedores Docker, garantizando alta resiliencia y transferencia segura.",
            "Automaticé flujos de despliegue continuo (CI/CD) en GitHub y revisiones de código, reduciendo en un 40% las incidencias y acelerando los ciclos de entrega.",
            "Incorporé herramientas de desarrollo asistidas por IA (Claude Code, Cursor) e integración de APIs de LLMs, incrementando la productividad y calidad de entrega.",
            "Optimicé consultas e indexación en bases de datos MySQL y MongoDB, reduciendo los tiempos de respuesta en reportes de 45s a 3s (mejora del 93%).",
            "Escribí y mantuve suites de pruebas unitarias con Jest y validación rigurosa de endpoints, asegurando interfaces accesibles bajo pautas WCAG.",
            "Fomenté estándares de Clean Code, documentación técnica de APIs y colaboración ágil bajo Scrum en equipos multidisciplinarios bilingües."
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
        subject: "Solicitud de Empleo — Senior Fullstack Software Engineer (React, TypeScript & Node.js/NestJS)",
        recipient: "Atención: Equipo de Selección de Talento IT | KMS Technology, Inc.",
        body1: "Estimado equipo de selección de KMS Technology, me dirijo a ustedes con gran entusiasmo para presentar mi postulación a la posición de Senior Fullstack Software Engineer. Con 4 años de experiencia profesional en ingeniería de software, arquitectura frontend en React y TypeScript, servicios backend escalables con Node.js y NestJS, e integración de flujos modernos asistidos por IA, considero que mi perfil técnico y pasión por soluciones de alta calidad aportarán valor inmediato a sus proyectos de desarrollo de software.",
        body2: "A lo largo de mi trayectoria en Isotech, he liderado el ciclo de vida completo de aplicaciones web y microservicios. Mis logros clave incluyen la creación de SPAs modulares con React y TypeScript, la construcción de APIs RESTful seguras con autenticación RBAC en Node.js/NestJS, la contenerización de entornos con Docker y la implementación de pipelines de CI/CD que redujeron las incidencias en producción en un 40%. Asimismo, he optimizado la persistencia en MySQL y MongoDB reduciendo tiempos de procesamiento en un 93%.",
        body3: "Poseo experiencia práctica integrando APIs de modelos de lenguaje (LLMs) y utilizando herramientas avanzadas asistidas por IA (Claude Code, Cursor, Copilot) para acelerar la entrega de software con estándares estrictos de Clean Code. Además, cuento con certificación bilingüe en inglés (C1-C2 por Edutin Academy con 177 horas), lo que me permite colaborar con total naturalidad en equipos internacionales y ceremonias ágiles (Scrum).",
        body4: "Mi formación como Ingeniero en Informática, mi capacidad de resolución analítica y mi compromiso con el manejo seguro y confiable de la información me preparan para adaptarme ágilmente a los entornos de KMS Technology. Agradezco sinceramente su tiempo y consideración, y quedo a su disposición para conversar en una entrevista.",
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
      role: "Senior Fullstack Software Engineer",
      summary: "Senior Fullstack Engineer with 4 years of experience specializing in modern web development and scalable architectures with React, TypeScript, Node.js, and NestJS. Proven track record building modular SPAs, reusable component systems, cloud services (AWS/Docker), and secure RESTful APIs with RBAC authorization. Hands-on experience integrating LLM APIs, AI-assisted development workflows (Cursor, Claude Code), and automated testing with Jest. Bilingual (English C1-C2) with a Computer Engineering degree.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript", techs: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Custom Hooks", "Responsive (WCAG)"], color: "#f59e0b" },
        { category: "Backend & APIs", techs: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "RBAC / Auth", "Microservices"], color: "#3b82f6" },
        { category: "AI & Modern Tooling", techs: ["LLM APIs Integration", "Claude Code", "Cursor", "GitHub Copilot", "Agentic Workflows"], color: "#8b5cf6" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "CI/CD Pipelines", "Git / GitHub", "Postman", "Linux"], color: "#6366f1" },
        { category: "Databases & Quality", techs: ["MySQL", "MongoDB", "Unit Testing (Jest)", "Clean Code", "Code Reviews"], color: "#10b981" },
        { category: "Mobile & Other", techs: ["Flutter", "Dart", "Kotlin", "Python", "SQLite"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Fullstack Software Engineer",
          date: "2022 - Present",
          desc: "Technical owner for fullstack application development using React, TypeScript, and Node.js/NestJS, delivering high-availability SPAs, secure RBAC REST APIs, and CI/CD cloud workflows.",
          bullets: [
            "Designed and implemented scalable SPAs using React and TypeScript, developing reusable component libraries and custom hooks that boosted rendering efficiency.",
            "Architected and maintained backend services and RESTful APIs using Node.js, NestJS, and TypeScript, establishing secure authentication and RBAC authorization.",
            "Integrated and consumed cloud services on AWS (S3 asset storage and REST APIs) with Docker containerization, ensuring security and data integrity.",
            "Automated release cycles by building CI/CD pipelines in GitHub and driving code reviews, reducing production defects by 40% and shortening deployment lead time.",
            "Leveraged AI-assisted development tools (Claude Code, Cursor) and integrated LLM APIs, significantly enhancing engineering velocity and test coverage.",
            "Tuned SQL and NoSQL queries across MySQL and MongoDB, cutting analytical reporting processing latency from 45s down to 3s (a 93% performance gain).",
            "Authored comprehensive automated unit testing suites with Jest and enforced web accessibility compliance following WCAG guidelines.",
            "Standardized Clean Code conventions, API technical documentation, and Agile/Scrum ceremonies, collaborating seamlessly in international bilingual teams."
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
        subject: "Application for Senior Fullstack Software Engineer (React, TypeScript & Node.js/NestJS)",
        recipient: "To: IT Talent Acquisition Team | KMS Technology, Inc.",
        body1: "Dear Talent Acquisition Team at KMS Technology, I am writing to express my strong interest in the Senior Fullstack Software Engineer role. With 4 years of software engineering experience specializing in modern React and TypeScript frontend architectures, scalable backend services with Node.js and NestJS, and AI-driven development workflows, I am confident in my ability to make an immediate, impactful contribution to your client-facing applications and digital solutions.",
        body2: "Throughout my career at Isotech, I have taken ownership of critical web platforms and microservices. Key accomplishments include designing modular SPAs with reusable component systems and custom hooks, developing secure RESTful APIs with Role-Based Access Control (RBAC), containerizing applications with Docker, and establishing CI/CD automation that cut release defects by 40%. Additionally, I optimized relational and NoSQL database queries in MySQL and MongoDB, achieving a 93% performance gain in report processing.",
        body3: "I bring hands-on experience integrating LLM APIs and leveraging AI-assisted engineering tools (Claude Code, Cursor, GitHub Copilot) to accelerate delivery cycles while enforcing strict Clean Code and automated testing (Jest) standards. Furthermore, I hold certified bilingual proficiency in English (C1-C2 with 177 hours), enabling fluent communication across international, cross-functional teams in fast-paced Agile/Scrum settings.",
        body4: "Holding a B.S. in Computer Engineering, I combine strong analytical problem-solving with a disciplined approach to application security and data privacy. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications and how I can support KMS Technology's mission during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
