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
      role: "Programador Senior Backend | Java & Microservicios",
      summary: "Programador Senior Backend con 4 años de experiencia diseñando e implementando microservicios escalables y resilientes con Java, Spring Boot y APIs REST empresariales. Sólida trayectoria aplicando principios de Domain-Driven Design (DDD), Clean Architecture y 12-Factor App, con autenticación segura vía OAuth2/JWT y persistencia en SQL (PostgreSQL/SQL Server) y Redis Cache. Experiencia en observabilidad en AWS (CloudWatch), contenedores Docker y CI/CD con GitHub Actions. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & Java", techs: ["Java 11+", "Spring Boot", "Spring Security", "Microservicios", "REST APIs", "Spring Cloud"], color: "#3b82f6" },
        { category: "Arquitectura & Patrones", techs: ["Clean Architecture", "Domain-Driven Design (DDD)", "Hexagonal", "Event-Driven"], color: "#f59e0b" },
        { category: "Seguridad & Auth", techs: ["OAuth2", "JWT", "OpenID Connect", "TLS / Crypto", "RBAC", "Secure Coding"], color: "#6366f1" },
        { category: "Bases de Datos & Caché", techs: ["SQL (PostgreSQL/MS SQL)", "Redis Cache", "MongoDB", "Query Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (CloudWatch/Fargate)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Linux"], color: "#8b5cf6" },
        { category: "Testing & Móvil / Calidad", techs: ["JUnit", "Mockito", "Unit Testing", "Kotlin / Android", "Code Reviews"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Programador Senior Backend",
          date: "2022 - Presente",
          desc: "Liderazgo técnico en desarrollo backend de microservicios con Java/Spring Boot, diseñando APIs REST de alta resiliencia, autenticación OAuth2/JWT y despliegues en AWS.",
          bullets: [
            "Diseñé e implementé microservicios escalables con Java y Spring Boot, aplicando principios de Clean Architecture, Domain-Driven Design (DDD) y 12-Factor App.",
            "Desarrollé APIs RESTful empresariales con Spring Security, implementando autenticación y autorización robusta mediante OAuth2, JWT y OpenID Connect.",
            "Optimizé esquemas y consultas complejas en bases de datos SQL (PostgreSQL/SQL Server) y Redis Cache, reduciendo tiempos de respuesta de 45s a 3s (93%).",
            "Automaticé pipelines de CI/CD con GitHub Actions y gestión de versiones en Git, agilizando el ciclo de entrega y reduciendo incidencias en un 40%.",
            "Orquesté microservicios contenerizados en Docker y despliegues en la nube de AWS, configurando observabilidad, logs estructurados y métricas en CloudWatch.",
            "Implementé comunicación segura con aplicaciones móviles nativas (Android/Kotlin y Flutter), aplicando cifrado, validación de certificados y tokens JWT.",
            "Escribí suites de pruebas unitarias y de integración con JUnit y Mockito, asegurando alta cobertura de código y cumplimiento de estándares de seguridad.",
            "Participé activamente en revisiones de código seguro, decisiones de diseño de arquitectura de software y ceremonias ágiles Scrum en equipos multidisciplinarios."
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
        subject: "Solicitud de Empleo — Programador Senior Backend (Java, Spring Boot & Microservicios)",
        recipient: "Atención: Equipo de Atracción de Talento | Bradescard México",
        body1: "Estimado equipo de selección de Bradescard México, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Programador Senior Backend en su sede de Guadalajara / Tlaquepaque (Camino al ITESO). Con 4 años de experiencia profesional en ingeniería de software, arquitectura de microservicios con Java y Spring Boot, diseño de APIs RESTful y aplicaciones de misión crítica, me identifico profundamente con el liderazgo de Bradescard en el sector financiero y el respaldo global de Banco Bradesco.",
        body2: "A lo largo de mi trayectoria en Isotech, he asumido la responsabilidad de diseñar y mantener soluciones backend escalables y resilientes. Mis logros clave incluyen la implementación de microservicios bajo principios de Domain-Driven Design (DDD), Clean Architecture y 12-Factor App, la integración de esquemas de autenticación con OAuth2 y JWT, y la optimización de bases de datos SQL y capas de caché en Redis, reduciendo los tiempos de respuesta en un 93%. Asimismo, automaticé flujos de CI/CD con GitHub Actions y Docker, reduciendo incidencias en producción en un 40%.",
        body3: "Poseo experiencia comprobada asegurando la comunicación confiable y cifrada entre servicios backend y aplicaciones móviles (Android/Kotlin y Flutter), aplicando estándares de observabilidad y trazabilidad en AWS (CloudWatch) y suites de pruebas automatizadas con JUnit y Mockito. Adicionalmente, cuento con certificación bilingüe en inglés (C1-C2 por Edutin Academy con 177 horas), lo que me permite colaborar con agilidad en equipos técnicos multidisciplinarios, con total disponibilidad para su esquema de trabajo híbrido.",
        body4: "Mi formación como Ingeniero en Informática y mi compromiso con el código limpio, la seguridad transaccional y el alto rendimiento me preparan para generar valor inmediato a las iniciativas digitales de Bradescard México. Agradezco sinceramente su tiempo y consideración, y quedo a su entera disposición para conversar en una entrevista.",
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
      role: "Senior Backend Developer | Java & Microservices",
      summary: "Senior Backend Developer with 4 years of experience architecting and deploying scalable, resilient microservices using Java, Spring Boot, and enterprise REST APIs. Proven track record applying Domain-Driven Design (DDD), Clean Architecture, and 12-Factor App principles, with robust OAuth2/JWT security and database persistence across SQL (PostgreSQL/SQL Server) and Redis Cache. Hands-on experience with AWS cloud observability (CloudWatch), Docker, and CI/CD via GitHub Actions. Bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & Java", techs: ["Java 11+", "Spring Boot", "Spring Security", "Microservices", "REST APIs", "Spring Cloud"], color: "#3b82f6" },
        { category: "Architecture & Patterns", techs: ["Clean Architecture", "Domain-Driven Design (DDD)", "Hexagonal", "Event-Driven"], color: "#f59e0b" },
        { category: "Security & Auth", techs: ["OAuth2", "JWT", "OpenID Connect", "TLS / Crypto", "RBAC", "Secure Coding"], color: "#6366f1" },
        { category: "Databases & Cache", techs: ["SQL (PostgreSQL/MS SQL)", "Redis Cache", "MongoDB", "Query Optimization"], color: "#10b981" },
        { category: "Cloud & DevOps", techs: ["AWS (CloudWatch/Fargate)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Linux"], color: "#8b5cf6" },
        { category: "Testing & Mobile / Quality", techs: ["JUnit", "Mockito", "Unit Testing", "Kotlin / Android", "Code Reviews"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Backend Developer",
          date: "2022 - Present",
          desc: "Technical leadership in Java/Spring Boot backend microservices development, designing resilient RESTful APIs, OAuth2/JWT authentication, and cloud CI/CD deployments.",
          bullets: [
            "Designed and implemented scalable backend microservices using Java and Spring Boot, applying Clean Architecture, Domain-Driven Design (DDD), and 12-Factor App.",
            "Engineered secure enterprise RESTful APIs with Spring Security, enforcing robust authentication and authorization via OAuth2, JWT, and OpenID Connect.",
            "Tuned SQL schemas (PostgreSQL/MS SQL) and leveraged Redis Cache, slashing complex query and analytical reporting latency by 93% (from 45s down to 3s).",
            "Configured automated CI/CD deployment pipelines using GitHub Actions and Git, accelerating release frequency and cutting production defect rates by 40%.",
            "Orchestrated containerized microservices deployments with Docker across AWS cloud infrastructure, enabling structured logging and metrics in CloudWatch.",
            "Established secure communications with mobile applications (Android/Kotlin and Flutter), enforcing TLS encryption, payload integrity, and token auth.",
            "Authored automated unit and integration testing suites with JUnit and Mockito, ensuring rigorous test coverage and compliance with secure coding standards.",
            "Actively led secure peer code reviews, software architectural decision-making, and bilingual Agile/Scrum delivery ceremonies in high-performing teams."
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
        subject: "Application for Senior Backend Developer (Java, Spring Boot & Microservices)",
        recipient: "To: Talent Acquisition Team | Bradescard México",
        body1: "Dear Talent Acquisition Team at Bradescard México, I am writing to express my strong enthusiasm for the Senior Backend Developer position at your Guadalajara / Tlaquepaque campus (Camino al ITESO). With 4 years of software engineering experience specializing in scalable Java and Spring Boot microservices architectures, enterprise RESTful APIs, and mission-critical cloud backends, I am excited by the opportunity to contribute to Bradescard's financial technology innovation backed by Banco Bradesco's international prestige.",
        body2: "Throughout my career at Isotech, I have led backend systems design, development, and production stability. Key accomplishments include implementing resilient microservices adhering to Domain-Driven Design (DDD), Clean Architecture, and 12-Factor App principles, integrating enterprise security protocols using OAuth2 and JWT, and tuning SQL databases and Redis Cache layers to achieve a 93% query latency reduction. Furthermore, I built automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment defects by 40%.",
        body3: "I bring hands-on experience establishing secure, encrypted communications between backend microservices and mobile applications (Android/Kotlin and Flutter), implementing cloud observability and structured logging with AWS CloudWatch, and writing rigorous unit and integration tests with JUnit and Mockito. Additionally, I hold certified bilingual English proficiency (C1-C2 with 177 hours), enabling seamless Agile collaboration, with full commitment to your hybrid work schedule in Tlaquepaque.",
        body4: "Holding a degree in Computer Engineering, I combine analytical rigor with a disciplined focus on transaction security, software maintainability, and business reliability. Thank you for your time and consideration; I welcome the opportunity to discuss how my qualifications align with Bradescard's goals during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
