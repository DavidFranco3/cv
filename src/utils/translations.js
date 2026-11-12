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
      role: "Software Engineer",
      summary: "Software Engineer con 4 años de experiencia en desarrollo Full Stack, especializado en arquitecturas de microservicios, diseño de APIs RESTful y plataformas comerciales empresariales (TypeScript, Node.js, React, SQL). Trayectoria demostrada en el ciclo completo de entrega bajo metodologías Agile, integrando despliegues con Docker y pipelines de CI/CD para garantizar alta disponibilidad en producción. Adoptante activo de flujos de desarrollo asistidos por IA para maximizar la calidad del código, refactorización y cobertura de pruebas automatizadas. Bilingüe (Inglés C1-C2) y enfocado en la resolución de problemas técnicos complejos y entrega continua de valor de negocio.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend (Enfoque)", techs: ["Node.js", "Express.js", "Laravel", "PHP", "RESTful APIs", "JWT / OAuth", "Microservicios"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "SASS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Móvil", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Bases de Datos", techs: ["MongoDB", "MySQL", "SQLite"], color: "#10b981" },
        { category: "DevOps & Herramientas", techs: ["Docker", "CI/CD", "AWS (EC2/S3)", "Git", "Vite", "Postman", "Linux"], color: "#6366f1" },
        { category: "Metodologías & IA", techs: ["Scrum / Agile", "Kanban", "TDD / Testing (Jest)", "MVC", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Software Engineer | Full Stack & Backend",
          date: "2022 - Presente",
          desc: "Responsable del diseño, arquitectura y entrega de plataformas web y soluciones de software comercial a medida (MERN, Laravel, Flutter y microservicios) para empresas clientes de diversos sectores industriales y comerciales.",
          bullets: [
            "Lideré el ciclo de vida de desarrollo de múltiples plataformas web empresariales y comerciales (MERN, Laravel) bajo metodología Agile (Scrum), asegurando alta disponibilidad, soporte en producción y consistencia transaccional.",
            "Arquitecté y migré una solución monolítica heredada hacia una arquitectura distribuida de microservicios con Node.js, Express y TypeScript, reduciendo la latencia de respuesta en un 85% (800ms a 120ms).",
            "Optimicé planes de indexación y consultas complejas en MySQL para módulos transaccionales y analíticos, recortando el tiempo de procesamiento de reportes de 45s a 3s (93% de mejora).",
            "Integré flujos de desarrollo asistidos por IA para acelerar refactorizaciones complejas, generación de pruebas unitarias y documentación de APIs, optimizando la capacidad de entrega en ~8 horas semanales.",
            "Implementé suites de pruebas automatizadas (Jest, Postman) integradas a pipelines de CI/CD y contenedores Docker, disminuyendo la tasa de regresiones y defectos en producción en un 40%.",
            "Diseñé e integré un motor de geolocalización y optimización de rutas en tiempo real con Google Maps API y Mapbox para clientes corporativos, reduciendo tiempos y costos de logística en un 25%.",
            "Desarrollé y publiqué aplicaciones móviles multiplataforma en Flutter y Dart (iOS y Android), implementando sincronización en segundo plano y arquitectura offline-first para operaciones en campo.",
            "Estandaricé directrices de Clean Code, revisiones de código (PR reviews) y documentación técnica de APIs, mentorizando a 4 practicantes para integrarse a producción en menos de 2 meses."
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
        subject: "Solicitud de Empleo — Desarrollador Full Stack / Ingeniero de Software",
        recipient: "Atención: Equipo de Selección / Departamento de Reclutamiento",
        body1: "Estimado equipo de selección, me pongo en contacto con ustedes con gran entusiasmo para postularme a la vacante de Desarrollador Full Stack / Ingeniero de Software. Con 4 años de experiencia profesional enfocados en arquitecturas backend escalables, optimización de bases de datos y desarrollo web moderno, estoy ansioso por aportar mis conocimientos y capacidad técnica a su equipo.",
        body2: "A lo largo de mi trayectoria profesional en Isotech, he diseñado e implementado aplicaciones robustas utilizando Node.js, Express, React, Laravel y bases de datos relacionales y NoSQL. Entre mis principales logros destaca el rediseño de una arquitectura monolítica hacia microservicios con Node.js (reduciendo los tiempos de respuesta en un 85%, de 800ms a 120ms), la optimización de consultas en MySQL y SQLite (reduciendo la generación de reportes de 45s a solo 3s) y la implementación de sistemas de geolocalización.",
        body3: "Además del desarrollo empresarial, mantengo activamente librerías de utilidad de código abierto publicadas en NPM (como fluent-rest-client y react-apextable-pro) para Node.js y React. Destaco por escribir código limpio y mantenible, implementar pruebas automatizadas (Jest, Postman) y mentorizar a desarrolladores junior para acelerar el flujo de trabajo del equipo.",
        body4: "Mi sólida formación como Ingeniero en Informática me permite adaptarme con rapidez a nuevas tecnologías y frameworks para generar valor inmediato. Quedo a su entera disposición para platicar sobre cómo mis habilidades pueden sumarse a sus objetivos en una entrevista. Muchas gracias por su tiempo y consideración.",
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
      role: "Software Engineer",
      summary: "Software Engineer with 4 years of experience in Full Stack development, specializing in microservices architecture, RESTful APIs, and enterprise commercial platforms (TypeScript, Node.js, React, SQL). Proven track record delivering production-grade systems in Agile teams with Docker and CI/CD pipelines. Active adopter of AI-assisted development workflows to accelerate refactoring, test generation, and code quality. Bilingual (English C1-C2) with a strong focus on technical ownership and business value.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend (Focus)", techs: ["Node.js", "Express.js", "Laravel", "PHP", "RESTful APIs", "JWT / OAuth", "Microservices"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "SASS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Mobile", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Databases", techs: ["MongoDB", "MySQL", "SQLite"], color: "#10b981" },
        { category: "DevOps & Tools", techs: ["Docker", "CI/CD", "AWS (EC2/S3)", "Git", "Vite", "Postman", "Linux"], color: "#6366f1" },
        { category: "Methodologies & AI", techs: ["Scrum / Agile", "Kanban", "TDD / Testing (Jest)", "MVC", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Software Engineer | Full Stack & Backend",
          date: "2022 - Present",
          desc: "Technical lead responsible for the design, architecture, and delivery of custom web platforms and commercial enterprise software (MERN, Laravel, Flutter, and microservices) for client companies across diverse industrial and commercial sectors.",
          bullets: [
            "Directed the end-to-end development lifecycle of multiple enterprise web platforms (MERN, Laravel) in Agile (Scrum) teams, ensuring high availability, production support, and data consistency.",
            "Architected and migrated a legacy monolithic API to distributed microservices with Node.js, Express, and TypeScript, slashing response latency by 85% (from 800ms to 120ms).",
            "Optimized index tuning and complex queries in MySQL for transactional and analytics modules, cutting report generation times from 45s to 3s (a 93% performance improvement).",
            "Integrated AI-assisted engineering workflows (unit test generation, refactoring, API specs), boosting team delivery capacity by ~8 hours weekly while reducing technical debt.",
            "Implemented automated test suites (Jest, Postman) coupled with CI/CD pipelines and Docker, driving a 40% reduction in regression rates and production defects.",
            "Designed and engineered a real-time geolocation and route optimization engine (Google Maps & Mapbox APIs), automating dispatching and cutting logistics costs by 25%.",
            "Developed and deployed production cross-platform mobile apps in Flutter/Dart (iOS/Android), implementing background sync and offline-first architecture for field operations.",
            "Standardized Clean Code guidelines, PR reviews, and technical documentation, mentoring 4 junior engineers to achieve autonomous production onboarding in under 2 months."
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
        subject: "Application for Full Stack Developer / Software Engineer",
        recipient: "To: Hiring Manager / Selection Team",
        body1: "Dear Hiring Team, I am writing to express my enthusiastic interest in joining your organization as a Full Stack Developer / Software Engineer. With 4 years of experience specializing in backend architecture, scalable web systems, and database optimization, I am eager to bring my technical expertise and problem-solving skills to your team.",
        body2: "Throughout my career at Isotech, I have engineered robust systems using Node.js, Express, React, Laravel, and SQL/NoSQL databases. My core accomplishments include redesigning a monolithic API into microservices (reducing response times by 85% from 800ms to 120ms), optimizing complex MySQL/SQLite queries (cutting report generation times from 45s to 3s), and developing geolocation platforms that improved logistical efficiency by 25%.",
        body3: "In addition to enterprise solutions, I actively maintain open-source utility libraries published on NPM (such as fluent-rest-client and react-apextable-pro) for Node.js and React. I am deeply committed to writing clean, maintainable code, implementing rigorous automated testing (Jest, Postman), and mentoring junior developers to accelerate team productivity.",
        body4: "My strong foundation in computer engineering and software design principles allows me to master new technologies quickly and deliver immediate value. I welcome the opportunity to discuss how my experience and passion for engineering excellence align with your goals. Thank you for your time and consideration.",
        closing: "Sincerely,"
      }
    }
  }
};
