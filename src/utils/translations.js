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
      role: "Desarrollador Java Senior | Spring Boot, Kafka & Cloud",
      summary: "Desarrollador Java Senior con 4 años de experiencia construyendo microservicios escalables y arquitecturas orientadas a eventos (Kafka, AWS SQS, RabbitMQ) con Java y Spring Boot. Sólida trayectoria implementando APIs RESTful empresariales, integración de servicios en la nube de AWS (Lambda, S3, SQS), contenedores Docker/Kubernetes y pipelines de CI/CD. Especialista en optimización de consultas SQL (93% de reducción de latencia) y pruebas automatizadas con JUnit/Mockito. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & Java", techs: ["Java 11+", "Spring Boot", "Spring Cloud", "Spring Security", "Microservicios", "REST APIs"], color: "#3b82f6" },
        { category: "Event-Driven & Mensajería", techs: ["Apache Kafka", "AWS SQS", "RabbitMQ", "Event-Driven", "Asynchronous Messaging"], color: "#f59e0b" },
        { category: "Cloud & DevOps", techs: ["AWS (Lambda/SQS/S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Terraform"], color: "#6366f1" },
        { category: "Bases de Datos & Caché", techs: ["SQL (PostgreSQL/MySQL)", "Redis Cache", "Query Optimization", "Data Modeling"], color: "#10b981" },
        { category: "Testing & Observabilidad", techs: ["JUnit", "Mockito", "Pruebas Unitarias", "CloudWatch", "Logging & APM"], color: "#8b5cf6" },
        { category: "Metodología & Calidad", techs: ["Clean Architecture", "12-Factor App", "Agile / Scrum", "Code Reviews", "Mentoring"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Desarrollador Java Senior",
          date: "2022 - Presente",
          desc: "Liderazgo técnico en desarrollo backend de microservicios con Java/Spring Boot, arquitectando flujos de mensajería orientados a eventos, integración cloud en AWS y CI/CD.",
          bullets: [
            "Diseñé y desarrollé microservicios escalables y desacoplados con Java y Spring Boot, aplicando principios de Clean Architecture y 12-Factor App.",
            "Implementé arquitecturas orientadas a eventos utilizando Apache Kafka, AWS SQS y RabbitMQ para procesamiento asíncrono y alta resiliencia del sistema.",
            "Arquitecté APIs RESTful empresariales con Spring Security y autenticación OAuth2/JWT, garantizando comunicación segura y protección de endpoints.",
            "Integré servicios cloud en AWS (Lambda para cómputo sin servidor, SQS para colas y S3 para almacenamiento), orquestando contenedores con Docker.",
            "Optimizé esquemas y consultas complejas en bases de datos relacionales SQL y capas de caché con Redis, reduciendo la latencia de 45s a 3s (93%).",
            "Automaticé flujos de integración y despliegue continuo (CI/CD) con GitHub Actions y scripts de infraestructura, reduciendo fallos en producción en un 40%.",
            "Escribí suites completas de pruebas automatizadas unitarias y de integración con JUnit y Mockito, garantizando cobertura y calidad rigurosa del código.",
            "Supervisé revisiones de código, colaboré en decisiones de arquitectura y promoví entregas continuas bajo Scrum en equipos globales bilingües."
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
        subject: "Solicitud de Empleo — Desarrollador Java Senior (Kafka, AWS SQS & Spring Boot)",
        recipient: "Atención: Equipo de Reclutamiento IT | The Adecco Group",
        body1: "Estimado equipo de selección de The Adecco Group, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Desarrollador Java (Kafka, SQS o RabbitMQ) en modalidad 100% Home Office. Con 4 años de experiencia profesional en ingeniería de software, arquitectura de microservicios con Java y Spring Boot, diseño de sistemas orientados a eventos e integración en la nube de AWS, considero que mi trayectoria técnica y enfoque en calidad y entrega continua aportarán valor inmediato a sus proyectos empresariales.",
        body2: "A lo largo de mi trayectoria en Isotech, he liderado el desarrollo y escalamiento de servicios backend críticos. Mis logros clave incluyen la implementación de microservicios resilientes bajo principios de Clean Architecture y 12-Factor App, la integración de colas y mensajería asíncrona con Apache Kafka, AWS SQS y RabbitMQ, y la construcción de APIs RESTful seguras con autenticación OAuth2 y JWT. Asimismo, optimicé consultas complejas en bases de datos relacionales SQL reduciendo los tiempos de respuesta en un 93% (de 45s a 3s), y automaticé pipelines de CI/CD que redujeron las incidencias en producción en un 40%.",
        body3: "Cuento con experiencia práctica en contenedores Docker, despliegues en infraestructura cloud de AWS (Lambda, SQS, S3) y observabilidad con CloudWatch, además de la autoría de suites completas de pruebas unitarias y de integración con JUnit y Mockito. Adicionalmente, cuento con nivel de inglés bilingüe certificado (C1-C2 por Edutin Academy con 177 horas acreditadas), lo que me permite colaborar de forma fluida y autónoma en equipos internacionales y ceremonias ágiles (Scrum).",
        body4: "Mi formación como Ingeniero en Informática, mi orientación pragmática a resultados y mi compromiso con la excelencia técnica me preparan para integrarme de forma inmediata bajo el esquema de contratación 100% nómina y trabajo remoto. Agradezco sinceramente su tiempo y consideración, y quedo a su entera disposición para conversar en una entrevista.",
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
      role: "Senior Java Developer | Spring Boot, Kafka & Cloud",
      summary: "Senior Java Developer with 4 years of experience architecting scalable microservices and event-driven systems (Kafka, AWS SQS, RabbitMQ) using Java and Spring Boot. Proven expertise developing enterprise RESTful APIs, integrating AWS cloud services (Lambda, S3, SQS), Docker/Kubernetes containerization, and automated CI/CD pipelines. Strong track record in SQL query optimization (93% performance gain) and automated testing with JUnit/Mockito. Bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & Java", techs: ["Java 11+", "Spring Boot", "Spring Cloud", "Spring Security", "Microservices", "REST APIs"], color: "#3b82f6" },
        { category: "Event-Driven & Messaging", techs: ["Apache Kafka", "AWS SQS", "RabbitMQ", "Event-Driven", "Asynchronous Messaging"], color: "#f59e0b" },
        { category: "Cloud & DevOps", techs: ["AWS (Lambda/SQS/S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Terraform"], color: "#6366f1" },
        { category: "Databases & Cache", techs: ["SQL (PostgreSQL/MySQL)", "Redis Cache", "Query Optimization", "Data Modeling"], color: "#10b981" },
        { category: "Testing & Observability", techs: ["JUnit", "Mockito", "Unit Testing", "CloudWatch", "Logging & APM"], color: "#8b5cf6" },
        { category: "Methodology & Quality", techs: ["Clean Architecture", "12-Factor App", "Agile / Scrum", "Code Reviews", "Mentoring"], color: "#ec4899" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Java Developer",
          date: "2022 - Present",
          desc: "Technical leadership in Java/Spring Boot backend microservices, architecting event-driven messaging pipelines, AWS cloud integration, and automated CI/CD.",
          bullets: [
            "Designed and developed scalable, decoupled microservices using Java and Spring Boot, applying Clean Architecture and 12-Factor App standards.",
            "Implemented event-driven architectures leveraging Apache Kafka, AWS SQS, and RabbitMQ for resilient, high-throughput asynchronous message handling.",
            "Architected enterprise RESTful APIs with Spring Security and OAuth2/JWT authentication, ensuring endpoint protection and data integrity.",
            "Integrated AWS cloud infrastructure (Lambda serverless functions, SQS queues, and S3 asset storage) and orchestrated Docker containers.",
            "Optimized relational SQL database schemas and implemented Redis Cache layers, slashing query and report processing latency by 93% (from 45s to 3s).",
            "Configured automated CI/CD deployment pipelines using GitHub Actions and Git version control, cutting release defect rates by 40%.",
            "Authored comprehensive automated unit and integration testing suites using JUnit and Mockito, ensuring high test coverage and robust code reliability.",
            "Led peer code reviews, guided architectural system decisions, and mentored engineering teammates in bilingual Agile/Scrum cross-functional environments."
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
        subject: "Application for Senior Java Developer (Kafka, AWS SQS & Spring Boot)",
        recipient: "To: IT Talent Acquisition Team | The Adecco Group",
        body1: "Dear Talent Acquisition Team at The Adecco Group, I am writing to express my strong enthusiasm for the Senior Java Developer position (Kafka, SQS or RabbitMQ) in the 100% Home Office modality. With 4 years of software engineering experience specializing in Java and Spring Boot microservices, event-driven distributed architectures, and AWS cloud integration, I am confident in my ability to make an immediate, high-impact contribution to your enterprise client solutions.",
        body2: "Throughout my career at Isotech, I have spearheaded the design and scalability of mission-critical backend systems. Key accomplishments include implementing decoupled microservices adhering to Clean Architecture and 12-Factor App principles, integrating asynchronous messaging pipelines using Apache Kafka, AWS SQS, and RabbitMQ, and securing enterprise RESTful APIs with OAuth2 and JWT. Furthermore, I optimized relational SQL database schemas achieving a 93% query latency reduction (cutting execution times from 45s down to 3s), and automated CI/CD deployment pipelines that reduced production defect rates by 40%.",
        body3: "I bring hands-on expertise in Docker containerization, AWS cloud infrastructure (Lambda serverless functions, SQS queues, S3 asset storage) with CloudWatch monitoring, alongside comprehensive automated unit and integration testing using JUnit and Mockito. Additionally, I hold certified bilingual English proficiency (C1-C2 with 177 verified hours), enabling seamless collaboration in Agile/Scrum cross-functional teams.",
        body4: "Holding a Bachelor's Degree in Computer Engineering, I combine disciplined problem-solving with a results-oriented, independent mindset that thrives in remote engineering environments. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
