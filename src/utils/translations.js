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
      role: "Full-Stack Software Engineer — Cloud & Infrastructure",
      summary: "Full-Stack Software Engineer con 4 años de experiencia construyendo y desplegando aplicaciones web y servicios cloud-native (TypeScript, React, Node.js, SQL). Especialista en arquitectura de APIs RESTful, contenerización con Docker, administración Linux y pipelines de CI/CD en AWS. Enfocado en alta disponibilidad, observabilidad y gestión segura de entornos en producción. Bilingüe (Inglés C1-C2) con enfoque de propiedad integral (End-to-End Ownership).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Cloud & DevOps (Enfoque)", techs: ["Docker", "CI/CD Pipelines", "AWS (EC2/S3)", "Linux Administration", "Git", "Postman"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservicios", "Laravel", "PHP"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Bases de Datos", techs: ["MySQL", "SQLite", "MongoDB"], color: "#10b981" },
        { category: "Móvil", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Metodologías & Testing", techs: ["Scrum / Agile", "Kanban", "Unit Testing (Jest)", "Clean Code", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full-Stack & Cloud Infrastructure Engineer",
          date: "2022 - Presente",
          desc: "Responsable del ciclo completo de entrega de plataformas web empresariales y servicios en la nube (TypeScript, Node.js, React, Laravel y Docker), abarcando desde la arquitectura de software y modelado de datos hasta el aprovisionamiento de infraestructura Linux, despliegue continuo y soporte en producción.",
          bullets: [
            "Arquitecté y migré un monolito a microservicios con Node.js, Express y TypeScript, reduciendo la latencia de respuesta en un 85% (de 800ms a 120ms).",
            "Diseñé y desplegué aplicaciones web modernas con React y TypeScript, implementando arquitectura basada en componentes reutilizables, hooks y gestión eficiente de estado.",
            "Automaticé el flujo de entrega continua mediante el diseño de pipelines de CI/CD y contenerización con Docker, reduciendo la tasa de regresiones en producción en un 40%.",
            "Administré y configuré servidores Linux y servicios cloud de AWS (EC2, S3), implementando políticas de seguridad, variables de entorno y gestión segura de secretos (JWT / OAuth).",
            "Optimicé planes de indexación, particionado y consultas SQL complejas en MySQL, recortando el tiempo de procesamiento de reportes analíticos de 45s a 3s (mejora del 93%).",
            "Implementé suites de pruebas unitarias automatizadas (Jest) y validación de endpoints REST con Postman, asegurando la resiliencia del software antes de cada pase a producción.",
            "Monitoreé y resolví incidentes operativos mediante diagnóstico de causa raíz en código, infraestructura, base de datos y redes (HTTP/HTTPS, DNS), manteniendo alta disponibilidad 24/7.",
            "Estandaricé directrices de Clean Code, revisiones de código (PR reviews) y documentación técnica de arquitectura y despliegue, mentorizando a practicantes para integrarse a producción en menos de 2 meses."
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
        subject: "Solicitud de Empleo — Full-Stack Software Engineer (Cloud & Infrastructure)",
        recipient: "Atención: Equipo de Selección y Desarrollo de Software | Enroute",
        body1: "Estimado equipo de selección de Enroute, les escribo con gran entusiasmo para presentar mi candidatura a la posición de Full-Stack Software Engineer - Cloud & Infrastructure. Con 4 años de experiencia profesional construyendo aplicaciones web modernas (TypeScript, React, Node.js), gestionando infraestructura en la nube (AWS), administrando servidores Linux y automatizando entregas mediante Docker y CI/CD, considero que mi perfil técnico se alinea de forma ideal con sus necesidades operativas y de desarrollo.",
        body2: "A lo largo de mi trayectoria en Isotech, he asumido la responsabilidad de soluciones de software desde la concepción del código hasta su despliegue y monitoreo en producción. Entre mis principales logros destacan la migración de un monolito hacia microservicios con Node.js y TypeScript (reduciendo la latencia en un 85%), la automatización de entregas con Docker y CI/CD disminuyendo errores en un 40%, y la optimización de consultas SQL en MySQL acelerando la ejecución de reportes de 45s a solo 3s.",
        body3: "Cuento con experiencia administrando servidores Linux, configurando seguridad y variables de entorno, y manteniendo observabilidad sobre la salud de la infraestructura y protocolos de red (HTTP/HTTPS, DNS). Adicionalmente, cuento con certificación de inglés nivel C1-C2, facilitando la colaboración en equipos técnicos de alto rendimiento.",
        body4: "Mi formación como Ingeniero en Informática y mi compromiso con las buenas prácticas de ingeniería me permiten abordar retos complejos con autonomía y visión integral de producto. Agradezco de antemano su atención y quedo a su entera disposición para conversar en una entrevista.",
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
      role: "Full-Stack Software Engineer — Cloud & Infrastructure",
      summary: "Full-Stack Software Engineer with 4 years of experience building and deploying scalable web applications and cloud-native services (TypeScript, React, Node.js, SQL). Specialist in RESTful API architecture, Docker containerization, Linux environment administration, and automated delivery pipelines with CI/CD on AWS. Focused on high availability, system observability, secure environment configuration, and agile production troubleshooting. Bilingual (English C1-C2) with a strong commitment to end-to-end software delivery ownership.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Cloud & DevOps (Focus)", techs: ["Docker", "CI/CD Pipelines", "AWS (EC2/S3)", "Linux Administration", "Git", "Postman"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / OAuth", "Microservices", "Laravel", "PHP"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], color: "#f59e0b" },
        { category: "Databases", techs: ["MySQL", "SQLite", "MongoDB"], color: "#10b981" },
        { category: "Mobile", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Methodologies & Testing", techs: ["Scrum / Agile", "Kanban", "Unit Testing (Jest)", "Clean Code", "Prompt Engineering"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Full-Stack & Cloud Infrastructure Engineer",
          date: "2022 - Present",
          desc: "Technical owner for the full delivery lifecycle of enterprise web platforms and cloud-based services (TypeScript, Node.js, React, Laravel, and Docker), spanning software architecture, Linux server provisioning, continuous deployment, and production support.",
          bullets: [
            "Architected and migrated a monolithic system into a distributed microservices architecture using Node.js, Express, and TypeScript, slashing response latency by 85% (from 800ms to 120ms).",
            "Designed and deployed modern web applications using React and TypeScript, implementing modular component architecture, hooks, and efficient state management.",
            "Automated continuous delivery workflows by engineering CI/CD pipelines and Docker containerization, accelerating deployment speed and cutting production regression rates by 40%.",
            "Configured and maintained Linux application servers and AWS cloud resources (EC2, S3), enforcing security best practices, environment variables, and secure secrets management (JWT / OAuth).",
            "Optimized index tuning, table partitioning, and complex SQL queries in MySQL, cutting analytical report processing times from 45s to 3s (a 93% performance gain).",
            "Implemented automated unit testing suites (Jest) and REST endpoint verification with Postman, ensuring software resilience and zero-defect releases prior to production.",
            "Monitored and resolved production incidents through root-cause analysis across code, infrastructure, databases, and network layers (HTTP/HTTPS, DNS), sustaining 24/7 availability.",
            "Standardized Clean Code guidelines, PR reviews, and technical deployment documentation, mentoring junior engineers to achieve autonomous production onboarding in under 2 months."
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
        subject: "Application for Full-Stack Software Engineer - Cloud & Infrastructure",
        recipient: "To: Hiring Team & Software Engineering Department | Enroute",
        body1: "Dear Hiring Team at Enroute, I am writing to express my strong interest in joining your team as a Mid-Senior Full-Stack Software Engineer (Cloud & Infrastructure). With 4 years of hands-on experience building modern web applications (TypeScript, React.js, Node.js), provisioning cloud infrastructure on AWS, administering Linux servers, and automating deployments through Docker and CI/CD pipelines, I am confident in my ability to deliver immediate value to your internal development operations.",
        body2: "Throughout my career at Isotech, I have embraced complete ownership of software solutions across their development, deployment, and operational lifecycles. Notable achievements include migrating a legacy monolith to distributed microservices with Node.js and TypeScript (slashing response latency by 85%), establishing automated CI/CD and Docker pipelines that cut production bugs by 40%, and tuning complex MySQL queries to accelerate report generation from 45s to 3s.",
        body3: "I bring solid experience in configuring Linux application environments, managing secrets and access controls (JWT/OAuth), and conducting root-cause troubleshooting across application code, infrastructure, and networking layers (HTTP/HTTPS, DNS). Additionally, I hold certified bilingual proficiency in English (C1-C2), ensuring seamless technical communication.",
        body4: "My degree in Computer Engineering reinforces my commitment to architectural excellence and continuous improvement. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
