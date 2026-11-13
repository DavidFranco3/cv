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
      role: "Senior TypeScript / AWS & Frontend Developer",
      summary: "Senior Software Engineer con 4 años de experiencia especializándose en desarrollo frontend y cloud con TypeScript, JavaScript y arquitecturas basadas en componentes. Sólida experiencia consumiendo e integrando servicios en AWS (S3, APIs), administrando contenedores con Docker y automatizando flujos de despliegue continuo mediante pipelines de CI/CD. Dominio avanzado de maquetación responsive (HTML5, SCSS/CSS3), programación modular y optimización de rendimiento web. Bilingüe (Inglés C1-C2 certificado) con formación como Ingeniero en Informática.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript (Enfoque)", techs: ["TypeScript", "JavaScript", "HTML5", "SCSS / CSS3", "React", "Responsive Design"], color: "#f59e0b" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "CI/CD Pipelines", "Git", "Postman", "Linux"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservicios", "Laravel", "PHP"], color: "#3b82f6" },
        { category: "Bases de Datos", techs: ["MySQL", "SQLite", "MongoDB"], color: "#10b981" },
        { category: "Móvil", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Metodologías & Calidad", techs: ["Scrum / Agile", "Kanban", "Unit Testing (Jest)", "Clean Code", "Web Accessibility"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full-Stack & Cloud Developer",
          date: "2022 - Presente",
          desc: "Responsable de la arquitectura frontend, integración de servicios en la nube (AWS) y entrega continua de plataformas web y software empresarial con TypeScript, garantizando alta disponibilidad y accesibilidad.",
          bullets: [
            "Diseñé e implementé arquitecturas web basadas en componentes con TypeScript, optimizando el renderizado de interfaces y la gestión reactiva del estado.",
            "Integré y consumí servicios cloud de AWS (S3 para almacenamiento y APIs en la nube), garantizando transferencia segura y políticas de control de acceso.",
            "Maqueté interfaces de usuario avanzadas con HTML5 semántico, SCSS/CSS3 y diseño responsive, asegurando accesibilidad web y compatibilidad cross-browser.",
            "Automaticé el ciclo de despliegue mediante el diseño de pipelines de CI/CD integrados con Git y contenerización en Docker, reduciendo fallos en producción en un 40%.",
            "Arquitecté y migré módulos legados hacia microservicios y APIs RESTful distribuidas con Node.js y TypeScript, reduciendo la latencia de respuesta en un 85%.",
            "Optimicé planes de indexación y consultas complejas en bases de datos SQL (MySQL/SQLite), recortando el tiempo de procesamiento de reportes de 45s a 3s (mejora del 93%).",
            "Implementé pruebas automatizadas y validación de endpoints REST con Postman y Jest, asegurando la resiliencia del software antes de cada pase a producción.",
            "Estandaricé directrices de Clean Code, revisiones de código (PR reviews en Git) y documentación técnica, mentorizando a practicantes para integrarse a producción en menos de 2 meses."
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
        subject: "Solicitud de Empleo — Senior Developer (TypeScript, AWS & Frontend)",
        recipient: "Atención: Equipo de Selección de Talento IT | Azkait",
        body1: "Estimado equipo de selección de Azkait, me dirijo a ustedes con gran entusiasmo para presentar mi postulación a la posición de Senior Developer (TypeScript, AWS & Frontend). Con 4 años de experiencia profesional en ingeniería de software, arquitectura frontend basada en componentes con TypeScript, maquetación avanzada (HTML5, SCSS/CSS3) y consumo de servicios en la nube con AWS y Docker, considero que mi perfil técnico puede integrarse con éxito y rapidez a sus proyectos de alto nivel.",
        body2: "A lo largo de mi trayectoria en Isotech, he diseñado y entregado plataformas web empresariales transaccionales y de misión crítica. Mis principales logros incluyen la construcción de arquitecturas frontend modulares y tipadas con TypeScript, la integración de servicios cloud en AWS (S3, APIs RESTful), la automatización de entregas con Docker y CI/CD reduciendo incidencias en un 40%, y la optimización de latencia de servicios en un 85%.",
        body3: "Cuento con un sólido dominio de estándares de maquetación responsive, accesibilidad web, revisiones de código en Git y metodologías ágiles (Scrum). Asimismo, cuento con nivel de inglés avanzado certificado (C1-C2), permitiéndome colaborar fluidamente en entornos internacionales y equipos distribuidos.",
        body4: "Mi formación formal como Ingeniero en Informática y mi dominio riguroso de TypeScript me otorgan una curva de adopción y aprendizaje sumamente ágil ante cualquier framework o servicio cloud. Agradezco de antemano su atención y quedo a su entera disposición para conversar en una entrevista.",
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
      role: "Senior TypeScript / AWS & Frontend Developer",
      summary: "Senior Software Engineer with 4 years of experience specializing in frontend and cloud development with TypeScript, JavaScript, and component-based architectures. Strong track record integrating AWS services (S3, APIs), managing Docker containerization, and automating continuous delivery through CI/CD pipelines. Advanced expertise in responsive styling (HTML5, SCSS/CSS3), modular state management, and web performance optimization. Bilingual (English C1-C2 certified) with a Computer Engineering degree.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & TypeScript (Focus)", techs: ["TypeScript", "JavaScript", "HTML5", "SCSS / CSS3", "React", "Responsive Design"], color: "#f59e0b" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "CI/CD Pipelines", "Git", "Postman", "Linux"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservices", "Laravel", "PHP"], color: "#3b82f6" },
        { category: "Databases", techs: ["MySQL", "SQLite", "MongoDB"], color: "#10b981" },
        { category: "Mobile", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Methodologies & Quality", techs: ["Scrum / Agile", "Kanban", "Unit Testing (Jest)", "Clean Code", "Web Accessibility"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full-Stack & Cloud Developer",
          date: "2022 - Present",
          desc: "Technical owner for frontend architecture, AWS cloud service integration, and continuous delivery of enterprise web platforms with TypeScript, ensuring high performance, scalability, and web accessibility.",
          bullets: [
            "Designed and implemented modern component-based web architectures using TypeScript, optimizing UI rendering and reactive state management for transactional systems.",
            "Integrated and consumed cloud services on AWS (S3 for asset storage and RESTful cloud APIs), ensuring secure data transfer and access policies.",
            "Crafted advanced UI layouts using semantic HTML5, SCSS/CSS3, and responsive design, ensuring web accessibility standards and cross-browser consistency.",
            "Automated the deployment lifecycle by engineering CI/CD pipelines integrated with Git and Docker containerization, reducing production release bugs by 40%.",
            "Architected and migrated legacy modules into distributed microservices and RESTful APIs with Node.js and TypeScript, slashing response latency by 85%.",
            "Optimized index tuning and complex queries in SQL databases (MySQL/SQLite), cutting analytical report processing times from 45s to 3s (a 93% performance gain).",
            "Implemented automated unit testing suites and REST endpoint validation using Postman and Jest, ensuring software resilience prior to production releases.",
            "Standardized Clean Code guidelines, PR review processes in Git, and technical documentation, mentoring junior engineers to achieve production autonomy in under 2 months."
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
        subject: "Application for Senior Developer (TypeScript, AWS & Frontend)",
        recipient: "To: IT Talent Acquisition Team | Azkait",
        body1: "Dear Talent Acquisition Team at Azkait, I am writing to express my strong interest in joining your team as a Senior Developer (TypeScript, AWS & Frontend). With 4 years of software engineering experience specializing in component-driven frontend architecture with TypeScript, advanced UI styling (HTML5, SCSS/CSS3), and cloud service integration with AWS and Docker, I am confident in my ability to quickly add value to your high-performance client projects.",
        body2: "Throughout my career at Isotech, I have designed and delivered mission-critical web platforms. Key achievements include building scalable, strictly-typed frontend architectures in TypeScript, consuming cloud services in AWS (S3, REST APIs), containerizing applications with Docker, and setting up automated CI/CD pipelines that reduced release defects by 40%.",
        body3: "I bring solid expertise in responsive layout design, web accessibility standards, Git-based code reviews, and Agile methodologies. Furthermore, I hold certified bilingual proficiency in English (C1-C2), enabling seamless collaboration in distributed global engineering environments.",
        body4: "My degree in Computer Engineering and deep command of TypeScript give me an exceptionally fast learning curve across frontend frameworks and cloud ecosystems. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
