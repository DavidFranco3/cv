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
      role: "Software Developer",
      summary: "Ingeniero en Informática con 4 años de experiencia en desarrollo Full Stack, especializado en Backend y arquitecturas web escalables. Creador y mantenedor activo de librerías utilitarias de código abierto publicadas en NPM para el ecosistema Node.js y React. He automatizado flujos comerciales e industriales mediante software a medida, integración de APIs y optimización de bases de datos. Apasionado por el código limpio, el rendimiento y las buenas prácticas.",
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
        { category: "Frontend & UI/UX", techs: ["React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "SASS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Móvil", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Bases de Datos", techs: ["MongoDB", "MySQL", "PostgreSQL"], color: "#10b981" },
        { category: "DevOps & Herramientas", techs: ["Docker", "CI/CD", "AWS (EC2/S3)", "Git", "Vite", "Postman", "Linux"], color: "#6366f1" },
        { category: "Metodologías & IA", techs: ["Scrum / Agile", "Kanban", "TDD / Testing (Jest)", "MVC", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full Stack Developer",
          date: "2022 - Presente",
          desc: "Responsable del diseño, evolución y escalabilidad de ecosistemas de software empresarial (MERN, Laravel, Flutter y microservicios), abarcando desde la concepción arquitectónica y modelado de datos hasta el despliegue continuo y alta disponibilidad en producción.",
          bullets: [
            "Dirigí el ciclo de vida completo de 6 plataformas web empresariales (MERN & Laravel) críticas para la operación continua de la compañía, garantizando alta disponibilidad y consistencia transaccional.",
            "Lideré la transición arquitectónica de un monolito legado hacia servicios distribuidos en Node.js, desacoplando módulos de alta concurrencia y reduciendo la latencia en un 85% (800ms a 120ms).",
            "Diseñé un motor de geolocalización y optimización de rutas en tiempo real (Google Maps & Mapbox), automatizando despachos y reduciendo tiempos y costos de logística en un 25%.",
            "Arquitecté y publiqué aplicaciones móviles multiplataforma de producción en Flutter/Dart (iOS & Android), implementando sincronización en segundo plano y arquitectura offline-first.",
            "Estructuré planes de indexación y optimización de consultas complejas en MySQL, recortando el tiempo de procesamiento de reportes analíticos de 45s a 3s (mejora del 93%).",
            "Estandaricé directrices de Clean Code, revisiones de PRs y mentoricé a ingenieros junior, logrando su autonomía operativa e integración a producción en menos de 2 meses.",
            "Implementé suites de pruebas automatizadas (Jest, Postman) integradas al pipeline de CI/CD, reduciendo la tasa de regresiones y errores en producción en un 40%.",
            "Integré flujos de desarrollo asistidos por IA para acelerar refactorizaciones complejas, generación de pruebas unitarias y documentación técnica, ahorrando ~8 horas semanales al equipo."
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
        body2: "A lo largo de mi trayectoria profesional en Isotech, he diseñado e implementado aplicaciones robustas utilizando Node.js, Express, React, Laravel y bases de datos relacionales y NoSQL. Entre mis principales logros destaca el rediseño de una arquitectura monolítica hacia microservicios con Node.js (reduciendo los tiempos de respuesta en un 85%, de 800ms a 120ms), la optimización de consultas en MySQL y PostgreSQL (reduciendo la generación de reportes de 45s a solo 3s) y la implementación de sistemas de geolocalización.",
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
      role: "Software Developer",
      summary: "Computer Engineer with 4 years of experience in Full Stack development, specializing in Backend architecture and scalable web systems. Creator and active maintainer of open-source utility libraries published on NPM for the Node.js and React ecosystem. Experienced in automating commercial and industrial workflows through custom software, API integration, and database query optimization. Passionate about clean code, performance, and best practices.",
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
        { category: "Frontend & UI/UX", techs: ["React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "SASS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Mobile", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Databases", techs: ["MongoDB", "MySQL", "PostgreSQL"], color: "#10b981" },
        { category: "DevOps & Tools", techs: ["Docker", "CI/CD", "AWS (EC2/S3)", "Git", "Vite", "Postman", "Linux"], color: "#6366f1" },
        { category: "Methodologies & AI", techs: ["Scrum / Agile", "Kanban", "TDD / Testing (Jest)", "MVC", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full Stack Developer",
          date: "2022 - Present",
          desc: "Technical lead for the design, evolution, and scalability of enterprise software ecosystems (MERN, Laravel, Flutter, and microservices), spanning from architectural conception and data modeling to continuous delivery and high availability in production.",
          bullets: [
            "Directed the end-to-end lifecycle of 6 enterprise web platforms (MERN & Laravel) critical to continuous operations, ensuring high availability and transactional data integrity.",
            "Led the architectural transition from a legacy monolith to distributed services in Node.js, decoupling high-concurrency modules and reducing latency by 85% (800ms to 120ms).",
            "Engineered a real-time geolocation and route optimization engine (Google Maps & Mapbox), automating dispatching and reducing operational logistics times by 25%.",
            "Architected and published cross-platform production mobile apps with Flutter/Dart (iOS & Android), implementing background synchronization and offline-first architecture.",
            "Structured index tuning and query optimization strategies in MySQL, cutting analytical report processing time from 45s to 3s (a 93% improvement).",
            "Standardized Clean Code guidelines, PR reviews, and mentored junior engineers, driving their technical autonomy and production onboarding in under 2 months.",
            "Implemented automated test suites (Jest, Postman) integrated into CI/CD pipelines, reducing regression rates and production defects by 40%.",
            "Integrated AI-assisted engineering workflows to accelerate complex refactorings, unit test generation, and technical documentation, saving ~8 hours of team capacity weekly."
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
        body2: "Throughout my career at Isotech, I have engineered robust systems using Node.js, Express, React, Laravel, and SQL/NoSQL databases. My core accomplishments include redesigning a monolithic API into microservices (reducing response times by 85% from 800ms to 120ms), optimizing complex MySQL/PostgreSQL queries (cutting report generation times from 45s to 3s), and developing geolocation platforms that improved logistical efficiency by 25%.",
        body3: "In addition to enterprise solutions, I actively maintain open-source utility libraries published on NPM (such as fluent-rest-client and react-apextable-pro) for Node.js and React. I am deeply committed to writing clean, maintainable code, implementing rigorous automated testing (Jest, Postman), and mentoring junior developers to accelerate team productivity.",
        body4: "My strong foundation in computer engineering and software design principles allows me to master new technologies quickly and deliver immediate value. I welcome the opportunity to discuss how my experience and passion for engineering excellence align with your goals. Thank you for your time and consideration.",
        closing: "Sincerely,"
      }
    }
  }
};
