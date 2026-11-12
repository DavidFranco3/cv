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
      role: "Mobile & Android Developer",
      summary: "Mobile & Software Engineer con 4 años de experiencia especializado en diseño, arquitectura y publicación de apps Android (Kotlin, Java, Flutter). Experiencia implementando arquitecturas Clean/MVVM, persistencia en SQLite y consumo seguro de APIs REST bajo estándares Agile (Scrum). Destacado por optimizar rendimiento, latencia y sincronización offline-first con manejo seguro de tokens. Certificado en Aplicaciones Móviles y bilingüe en inglés (C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Móvil & Android (Enfoque)", techs: ["Android Studio", "Kotlin", "Java", "Flutter", "Dart", "Clean Architecture / MVVM"], color: "#ec4899" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservicios", "Laravel"], color: "#3b82f6" },
        { category: "Bases de Datos", techs: ["SQLite", "MySQL", "MongoDB"], color: "#10b981" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "DevOps & Herramientas", techs: ["Git", "Postman", "CI/CD", "Docker", "AWS (EC2/S3)", "Linux"], color: "#6366f1" },
        { category: "Metodologías & Testing", techs: ["Scrum / Agile", "Kanban", "Testing (Jest/Postman)", "Clean Code", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Mobile & Android Developer | Software Engineer",
          date: "2022 - Presente",
          desc: "Responsable del ciclo de vida de desarrollo de aplicaciones móviles y soluciones de software empresarial comercializadas a terceros, asegurando alto rendimiento, consumo eficiente de APIs y seguridad transaccional en plataformas Android.",
          bullets: [
            "Arquitecté y publiqué aplicaciones móviles de producción para Android e iOS con Kotlin, Java y Flutter/Dart, implementando persistencia local en SQLite y sincronización offline-first.",
            "Diseñé e integré la capa de red y consumo de APIs RESTful con autenticación segura (JWT / OAuth), garantizando integridad de datos y reduciendo fallos en un 40%.",
            "Optimicé el rendimiento de aplicaciones móviles (gestión de memoria, latencia en peticiones asíncronas y renderizado de vistas), reduciendo tiempos de carga e interfaces críticas en un 85%.",
            "Implementé un motor móvil de geolocalización y cálculo de rutas en tiempo real con Google Maps API y Mapbox, reduciendo tiempos y costos logísticos en un 25%.",
            "Estructuré modelos de persistencia local y consultas optimizadas sobre SQLite, recortando tiempos de procesamiento y reportes en el dispositivo de 45s a 3s (mejora del 93%).",
            "Implementé suites de pruebas automatizadas y validación de endpoints utilizando Postman y herramientas de testing, reduciendo fallos en producción en un 40%.",
            "Estandaricé directrices de Clean Architecture, revisiones de código exhaustivas (Code Reviews) y documentación de APIs, mentorizando a practicantes para integrarse a producción en menos de 2 meses.",
            "Integré herramientas y flujos asistidos por IA para acelerar la refactorización de código legado, generación de casos de prueba y documentación técnica, optimizando la productividad en ~8 horas semanales."
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
        subject: "Solicitud de Empleo — Especialista Android / Mobile Software Engineer",
        recipient: "Atención: Equipo de Selección y Atracción de Talento | Bradescard México",
        body1: "Estimado equipo de selección de Bradescard México, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Especialista Android / Mobile Software Engineer. Con 4 años de experiencia profesional en ingeniería de software, arquitectura modular (Clean Architecture / MVVM), desarrollo para Android (Kotlin, Java, Flutter) y consumo seguro de APIs, estoy convencido de que mi perfil técnico puede aportar valor inmediato y robustez a sus soluciones móviles financieras.",
        body2: "En mi trayectoria en Isotech, he sido responsable de diseñar y publicar aplicaciones móviles multiplataforma y sistemas empresariales de misión crítica. Entre mis principales logros destacan la implementación de persistencia local en SQLite con sincronización offline-first, la integración segura de APIs con autenticación por tokens (JWT / OAuth), la optimización de rendimiento y memoria reduciendo tiempos de latencia en un 85%, y la reducción en tiempos de consulta local de 45s a solo 3s.",
        body3: "Cuento con certificación en Desarrollo de Aplicaciones Móviles, así como un firme compromiso con las buenas prácticas de ingeniería: revisiones de código exhaustivas (Code Reviews), pruebas automatizadas con Postman y adopción de flujos asistidos por IA para elevar la calidad del software. Además, domino el idioma inglés a nivel C1-C2 certificado.",
        body4: "Mi formación como Ingeniero en Informática y mi sólida base Full Stack me permiten entender integralmente tanto el cliente móvil como la infraestructura y seguridad de los servicios con los que interactúa. Agradezco de antemano su atención y quedo a su entera disposición para conversar en una entrevista. Muchas gracias por su tiempo y consideración.",
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
      role: "Mobile & Android Developer",
      summary: "Mobile & Software Engineer with 4 years of experience in software development, specializing in the design, architecture, and deployment of Android applications (Kotlin, Java, Flutter). Proven track record implementing modular architectures (Clean Architecture / MVVM), local persistence with SQLite, and secure RESTful API consumption in Agile (Scrum) teams. Skilled in optimizing performance, memory, and offline-first data synchronization while ensuring secure token handling in production. Certified in Mobile Application Development and bilingual in English (C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Mobile & Android (Focus)", techs: ["Android Studio", "Kotlin", "Java", "Flutter", "Dart", "Clean Architecture / MVVM"], color: "#ec4899" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservices", "Laravel"], color: "#3b82f6" },
        { category: "Databases", techs: ["SQLite", "MySQL", "MongoDB"], color: "#10b981" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "DevOps & Tools", techs: ["Git", "Postman", "CI/CD", "Docker", "AWS (EC2/S3)", "Linux"], color: "#6366f1" },
        { category: "Methodologies & Testing", techs: ["Scrum / Agile", "Kanban", "Testing (Jest/Postman)", "Clean Code", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Mobile & Android Developer | Software Engineer",
          date: "2022 - Present",
          desc: "Technical owner for the development lifecycle of mobile applications and commercial enterprise software, ensuring high performance, efficient API communication, and transactional security on Android platforms.",
          bullets: [
            "Architected and published production mobile applications for Android and iOS using Kotlin, Java, and Flutter/Dart, implementing local SQLite persistence and offline-first background synchronization.",
            "Engineered the network layer and secure RESTful API consumption with token authentication (JWT / OAuth), ensuring data integrity in transit and cutting client-server failures by 40%.",
            "Optimized mobile application performance (memory profiling, async request latency, and UI rendering), slashing load times across mission-critical screens by 85%.",
            "Integrated a real-time geolocation, tracking, and route calculation mobile engine with Google Maps and Mapbox APIs, automating dispatching and reducing logistics costs by 25%.",
            "Structured local data models and query optimization plans on SQLite, reducing analytical data processing and in-app report generation from 45s to 3s (a 93% performance gain).",
            "Implemented automated testing suites and endpoint validation using Postman and testing frameworks, driving a 40% reduction in regression rates and production release defects.",
            "Standardized Clean Architecture guidelines, rigorous Code Reviews, and API documentation, mentoring junior engineers to achieve autonomous production onboarding in under 2 months.",
            "Integrated AI-assisted engineering workflows to accelerate legacy refactoring, test case generation, and technical documentation, boosting weekly team productivity by ~8 hours."
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
        subject: "Application for Android Specialist / Mobile Software Engineer",
        recipient: "To: Talent Acquisition Team | Bradescard México",
        body1: "Dear Talent Acquisition Team at Bradescard México, I am writing to express my strong interest in joining your team as an Android Specialist / Mobile Software Engineer. With 4 years of software engineering experience specializing in Android development (Kotlin, Java, Flutter), modular design (Clean Architecture / MVVM), and secure API integration, I am confident in my ability to deliver resilient, high-performance mobile solutions for your financial platforms.",
        body2: "Throughout my career at Isotech, I have engineered and published cross-platform mobile applications and enterprise systems. Key achievements include implementing local SQLite persistence with offline-first synchronization, securing API communications via token authentication (JWT / OAuth), optimizing memory usage to reduce latency by 85%, and slashing local data query times from 45s to 3s.",
        body3: "I hold a professional certification in Mobile Application Development, along with a deep dedication to clean code craftsmanship, comprehensive code reviews, automated testing with Postman, and AI-assisted workflows that optimize delivery speed. Furthermore, I possess certified English proficiency at the C1-C2 level.",
        body4: "My degree in Computer Engineering combined with my full-stack foundation enables me to understand both the mobile client and the backend services it integrates with. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications in an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
