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
      role: "Senior Full Stack Developer | Angular & AWS Cloud",
      summary: "Senior Full Stack Developer con 4 años de experiencia diseñando, construyendo e implementando aplicaciones web escalables y servicios cloud con Angular, TypeScript y AWS. Especialista en arquitectura de componentes modulares, programación reactiva con RxJS, integración de servicios backend con Node.js y APIs RESTful. Amplia experiencia optimizando rendimiento de aplicaciones y bases de datos relacionales (reducción del 93% en latencia), despliegues contenerizados en Docker y pipelines de CI/CD bajo metodologías ágiles Scrum. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & Angular", techs: ["Angular (v14+)", "TypeScript", "RxJS", "NgRx", "Componentes Modulares", "SPAs"], color: "#f59e0b" },
        { category: "Cloud & AWS", techs: ["AWS (S3/EC2/Lambda)", "CloudWatch", "Cloud Integration", "IAM", "API Gateway"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "NestJS", "APIs RESTful", "Microservicios", "JWT/RBAC"], color: "#3b82f6" },
        { category: "Bases de Datos & SQL", techs: ["MySQL (v8.0)", "PostgreSQL", "Query Optimization", "Indexing", "Transacciones"], color: "#10b981" },
        { category: "DevOps & CI/CD", techs: ["Docker", "Contenedores", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#ec4899" },
        { category: "Arquitectura & Ágil", techs: ["Clean Architecture", "Optimización", "Troubleshooting", "Code Reviews", "Scrum"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Developer",
          date: "2022 - Presente",
          desc: "Desarrollo full-stack y arquitectura de aplicaciones web escalables y soluciones cloud con Angular, TypeScript, Node.js y AWS.",
          bullets: [
            "Diseñé y desarrollé SPAs empresariales modernas con Angular (v14+) y TypeScript, implementando componentes modulares y gestión reactiva con RxJS.",
            "Implementé soluciones cloud y servicios en AWS (S3, EC2, Lambda y CloudWatch), optimizando la infraestructura y la integración entre capas de la plataforma.",
            "Desarrollé y mantuve microservicios y APIs RESTful escalables con Node.js y NestJS, garantizando autenticación segura con JWT y autorización basada en roles (RBAC).",
            "Optimizé el rendimiento de persistencia en bases de datos relacionales MySQL/PostgreSQL, reestructurando índices para reducir la latencia de 45s a 3s (mejora del 93%).",
            "Diagnostiqué y resolví incidentes críticos de rendimiento en aplicaciones web y servicios cloud, aplicando monitoreo activo de telemetría y perfiles de depuración.",
            "Orquesté contenedores con Docker y administré configuraciones en entornos Linux, asegurando paridad estricta entre entornos de desarrollo, pruebas y producción.",
            "Automaticé flujos de integración y despliegue continuo (CI/CD) con GitHub Actions y control en Git, acelerando entregas y reduciendo fallos en producción en un 40%.",
            "Colaboré activamente en ceremonias ágiles Scrum, estimación de requerimientos y revisiones de código, comunicándome con fluidez en inglés bilingüe certificado."
          ],
          commits: ["feat: angular-cloud-module", "perf: mysql-query-optim", "init: aws-service-layer"]
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
        subject: "Solicitud de Empleo — Desarrollador FullStack (Angular / AWS) — Guadalajara",
        recipient: "Atención: Equipo de Reclutamiento & Selección | Capital Empresarial Horizonte & adlytics GmbH",
        body1: "Estimado equipo de selección de Capital Empresarial Horizonte y adlytics GmbH, me dirijo a ustedes con gran entusiasmo para presentar mi candidatura a la posición de Desarrollador FullStack Angular / AWS en Guadalajara bajo esquema híbrido. Con 4 años de experiencia profesional diseñando y desarrollando aplicaciones web modernas y soluciones cloud escalables, me entusiasma la oportunidad de aportar mi experiencia técnica al equipo de adlytics GmbH.",
        body2: "A lo largo de mi trayectoria en Isotech, he liderado el desarrollo fullstack de plataformas de alto impacto. En el frontend, domino la arquitectura de aplicaciones SPA con Angular y TypeScript, implementando componentes modulares reutilizables y gestión reactiva del estado mediante RxJS y NgRx. En la capa backend y cloud, cuento con sólida experiencia diseñando e integrando microservicios y APIs RESTful seguras con Node.js, así como implementando y gestionando servicios en Amazon Web Services (AWS: S3, EC2, Lambda, CloudWatch y API Gateway).",
        body3: "Cuento con un fuerte enfoque en resolución de problemas técnicos y optimización de rendimiento: reestructuré esquemas relacionales y consultas en bases de datos MySQL, logrando reducir la latencia de procesamiento de 45s a 3s (mejora del 93%). Asimismo, orquesto contenedores con Docker y automatizo pipelines de despliegue continuo (CI/CD) con GitHub Actions bajo metodologías ágiles Scrum, facilitando entregas predecibles y de alta calidad técnica.",
        body4: "Como Ingeniero en Informática con inglés conversacional y bilingüe certificado (C1-C2 por Edutin Academy con 177 horas acreditadas), cuento con la disponibilidad requerida para colaborar en el esquema híbrido en Guadalajara y comunicarme con fluidez en entornos globales. Agradezco sinceramente su tiempo y consideración, y quedo a su entera disposición para conversar en una entrevista.",
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
      role: "Senior Full Stack Developer | Angular & AWS Cloud",
      summary: "Senior Full Stack Developer with 4 years of experience architecting, building, and deploying scalable web applications and cloud services using Angular, TypeScript, and AWS. Proven expertise in modular component architecture, reactive programming with RxJS, backend integration with Node.js, and secure RESTful APIs. Solid background optimizing application and database performance (93% latency reduction), containerized deployments with Docker, and CI/CD pipelines under Agile Scrum. Certified bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Frontend & Angular", techs: ["Angular (v14+)", "TypeScript", "RxJS", "NgRx", "Modular Components", "SPAs"], color: "#f59e0b" },
        { category: "Cloud & AWS", techs: ["AWS (S3/EC2/Lambda)", "CloudWatch", "Cloud Integration", "IAM", "API Gateway"], color: "#6366f1" },
        { category: "Backend & APIs", techs: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservices", "JWT/RBAC"], color: "#3b82f6" },
        { category: "Databases & SQL", techs: ["MySQL (v8.0)", "PostgreSQL", "Query Optimization", "Indexing", "Transactions"], color: "#10b981" },
        { category: "DevOps & CI/CD", techs: ["Docker", "Containers", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#ec4899" },
        { category: "Architecture & Agile", techs: ["Clean Architecture", "Optimization", "Troubleshooting", "Code Reviews", "Scrum"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Developer",
          date: "2022 - Present",
          desc: "Full-stack development and architecture of scalable web applications and cloud solutions with Angular, TypeScript, Node.js, and AWS.",
          bullets: [
            "Architected and developed enterprise SPAs using Angular (v14+) and TypeScript, implementing reusable modular components and reactive flows with RxJS.",
            "Implemented scalable cloud solutions and services on AWS (S3, EC2, Lambda, CloudWatch), optimizing infrastructure and inter-service communications.",
            "Engineered scalable microservices and secure RESTful APIs using Node.js and NestJS, enforcing token authentication with JWT and role-based access control (RBAC).",
            "Optimized relational database persistence schemas across MySQL/PostgreSQL, refactoring indexes and queries to slash latency by 93% (from 45s to 3s).",
            "Troubleshot and resolved mission-critical application and cloud performance bottlenecks, leveraging real-time telemetry logs and proactive profiling.",
            "Containerized full-stack services with Docker across Linux environments, ensuring rigorous parity between development, testing, and production runtimes.",
            "Automated continuous integration and deployment (CI/CD) pipelines using GitHub Actions and Git, accelerating release cycles and reducing defects by 40%.",
            "Collaborated actively within Agile Scrum teams, driving sprint planning, code reviews, and cross-functional alignment in certified bilingual English."
          ],
          commits: ["feat: angular-cloud-module", "perf: mysql-query-optim", "init: aws-service-layer"]
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
        subject: "Job Application — FullStack Developer (Angular / AWS) — Guadalajara",
        recipient: "To: Talent Acquisition & Recruitment Team | Capital Empresarial Horizonte & adlytics GmbH",
        body1: "Dear Talent Acquisition Team at Capital Empresarial Horizonte and adlytics GmbH, I am writing to express my strong enthusiasm for the Senior FullStack Developer (Angular / AWS) position in Guadalajara under a hybrid scheme. With 4 years of professional experience designing, building, and deploying scalable web applications and cloud architectures, I am eager to contribute my full-stack expertise to the adlytics GmbH engineering team.",
        body2: "Throughout my software engineering career at Isotech, I have spearheaded the architecture of high-performance web platforms. On the frontend, I specialize in building modular enterprise SPAs using Angular and TypeScript, leveraging reactive paradigms with RxJS and predictable state management. On the backend and cloud infrastructure, I bring hands-on experience designing secure RESTful APIs and microservices with Node.js, combined with practical expertise deploying and managing core Amazon Web Services (AWS: S3, EC2, Lambda, CloudWatch, API Gateway).",
        body3: "I maintain a rigorous focus on analytical problem-solving and application optimization: by refactoring relational schemas and query structures in MySQL, I achieved a 93% reduction in execution latency (from 45s down to 3s). Furthermore, I containerize services with Docker and implement automated CI/CD pipelines with GitHub Actions within Agile Scrum environments, ensuring reliable releases and platform stability.",
        body4: "Holding a Bachelor's Degree in Computer Engineering and certified bilingual English proficiency (C1-C2 with 177 verified hours), I offer both technical competence and collaborative communication, fully prepared for the hybrid scheme in Guadalajara. Thank you for your time and consideration; I welcome the opportunity to discuss my qualifications during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
