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
      role: "Senior Full Stack Developer | .NET Core 8, React & Node.js",
      summary: "Senior Full Stack Developer con 4 años de experiencia construyendo y liderando sistemas transaccionales y financieros escalables con .NET Core 8, Node.js y React (v18+). Especialista en diseño e integración de APIs REST seguras, autenticación (JWT/RBAC), integración de proveedores de pago/SPEI y optimización de bases de datos MySQL (v8.0) con 93% de reducción en latencia. Experiencia sólida en infraestructura cloud AWS, contenedores Docker y pipelines de CI/CD bajo Scrum/Kanban. Bilingüe (Inglés C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & .NET Core", techs: [".NET Core 8", "C#", "Node.js", "APIs RESTful", "Microservicios", "Entity Framework"], color: "#3b82f6" },
        { category: "Frontend & React", techs: ["React (v18+)", "TypeScript", "JavaScript (ES6+)", "SPAs", "Hooks", "Redux Toolkit"], color: "#f59e0b" },
        { category: "Bases de Datos & SQL", techs: ["MySQL (v8.0)", "PostgreSQL", "Transacciones ACID", "Query Tuning", "Modelado"], color: "#10b981" },
        { category: "Fintech & Transaccional", techs: ["Sistemas Financieros", "SPEI / Pagos", "Integraciones", "Seguridad", "JWT/RBAC"], color: "#6366f1" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#ec4899" },
        { category: "Testing & Ágil", techs: ["Jest", "Pruebas Unitarias", "Clean Architecture", "Code Reviews", "Scrum / Kanban"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Developer",
          date: "2022 - Presente",
          desc: "Desarrollo full-stack de sistemas transaccionales y financieros escalables con .NET Core, Node.js y React (v18+), APIs RESTful y cloud AWS.",
          bullets: [
            "Lideré el desarrollo y arquitectura de sistemas transaccionales y financieros de alta concurrencia, garantizando consistencia ACID y alta disponibilidad.",
            "Arquitecté e implementé interfaces web transaccionales con React (v18+), TypeScript y Redux Toolkit, optimizando la experiencia del usuario y tiempos de carga.",
            "Diseñé y construí APIs REST robustas y microservicios con .NET Core 8 y Node.js, implementando autenticación con JWT, RBAC y estándares de ciberseguridad.",
            "Desarrollé módulos de integración con pasarelas de pago y proveedores financieros (SPEI), asegurando validaciones de transferencias y conciliaciones en tiempo real.",
            "Modelé y optimicé bases de datos relacionales en MySQL (v8.0), reestructurando índices y consultas complejas para reducir la latencia de 45s a 3s (mejora del 93%).",
            "Gestioné infraestructura cloud en AWS (S3, EC2, CloudWatch) y orquesté contenedores con Docker, garantizando resiliencia y monitoreo proactivo de incidencias.",
            "Automaticé flujos de despliegue continuo (CI/CD) con GitHub Actions y control de versiones Git, reduciendo errores en producción en un 40% y acelerando releases.",
            "Escribí suites completas de pruebas unitarias con Jest, lideré revisiones de código y colaboré bajo Scrum/Kanban en equipos multidisciplinarios en inglés bilingüe."
          ],
          commits: ["feat: net-core-spei-service", "perf: mysql-query-optim", "init: react18-portal"]
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
        subject: "Solicitud de Empleo — Desarrollador/a Full Stack Senior (.NET Core 8, React & Node.js)",
        recipient: "Atención: María Esther Mejía | Reclutamiento & Talento Qualtop",
        body1: "Estimada María Esther Mejía, me dirijo a usted con gran entusiasmo tras revisar su publicación en LinkedIn para presentar mi postulación a la posición de Desarrollador/a Full Stack Senior en Qualtop. Con 4 años de experiencia profesional en ingeniería de software, arquitectura de sistemas transaccionales y desarrollo full-stack con .NET Core 8, React (v18+) y Node.js, me motiva enormemente sumarme a su equipo para liderar soluciones de alto impacto en el sector financiero.",
        body2: "A lo largo de mi trayectoria en Isotech, he diseñado y operado aplicaciones críticas de alta concurrencia. Cuento con sólida experiencia construyendo microservicios y APIs RESTful seguras con .NET Core y Node.js, integrando autenticación robusta (JWT, RBAC) e implementando conexiones directas con proveedores de servicios financieros y pasarelas de pago (incluyendo flujos de transferencias SPEI y conciliación automatizada). En el frontend, desarrollo interfaces modernas y reactivas con React (v18+), TypeScript y gestión de estado avanzada.",
        body3: "En capa de persistencia e infraestructura, modelo y optimizo bases de datos relacionales en MySQL (v8.0), habiendo logrado una reducción del 93% en la latencia de procesamiento de transacciones (de 45s a 3s). Asimismo, opero entornos cloud en AWS (S3, EC2, CloudWatch), contenerización con Docker y automatización de pipelines de CI/CD con GitHub Actions, garantizando una entrega continua con cero fricciones bajo metodologías ágiles Scrum y Kanban.",
        body4: "Graduado como Ingeniero en Informática y con nivel de inglés bilingüe certificado (C1-C2 por Edutin Academy con 177 horas), poseo una sólida capacidad analítica, comunicación transparente y enfoque en la calidad de código con pruebas unitarias en Jest. Agradezco sinceramente su tiempo y consideración, y quedo a su entera disposición para conversar en una entrevista técnica.",
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
      role: "Senior Full Stack Developer | .NET Core 8, React & Node.js",
      summary: "Senior Full Stack Developer with 4 years of experience building and leading scalable transactional and financial systems with .NET Core 8, Node.js, and React (v18+). Proven expertise in secure RESTful API design, authentication (JWT/RBAC), payment/SPEI provider integrations, and MySQL (v8.0) query optimization cutting latency by 93%. Solid background in AWS cloud infrastructure, Docker containerization, and automated CI/CD pipelines under Scrum/Kanban. Certified bilingual (English C1-C2).",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend & .NET Core", techs: [".NET Core 8", "C#", "Node.js", "RESTful APIs", "Microservices", "Entity Framework"], color: "#3b82f6" },
        { category: "Frontend & React", techs: ["React (v18+)", "TypeScript", "JavaScript (ES6+)", "SPAs", "Hooks", "Redux Toolkit"], color: "#f59e0b" },
        { category: "Databases & SQL", techs: ["MySQL (v8.0)", "PostgreSQL", "ACID Transactions", "Query Tuning", "Data Modeling"], color: "#10b981" },
        { category: "Fintech & Transactional", techs: ["Financial Systems", "SPEI / Payments", "API Integrations", "Security", "JWT/RBAC"], color: "#6366f1" },
        { category: "Cloud & DevOps", techs: ["AWS (S3/EC2)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Git"], color: "#ec4899" },
        { category: "Testing & Agile", techs: ["Jest", "Unit Testing", "Clean Architecture", "Code Reviews", "Scrum / Kanban"], color: "#8b5cf6" }
      ],
      experience: [
        {
          company: "Isotech",
          role: "Senior Full Stack Developer",
          date: "2022 - Present",
          desc: "Full-stack development of scalable transactional and financial systems with .NET Core, Node.js, React (v18+), RESTful APIs, and AWS.",
          bullets: [
            "Led the development and architecture of high-concurrency transactional and financial systems, ensuring strict ACID consistency and high availability.",
            "Architected and built transactional web frontends using React (v18+), TypeScript, and Redux Toolkit, optimizing user workflows and client render speeds.",
            "Designed and built robust RESTful APIs and microservices using .NET Core 8 and Node.js, enforcing JWT authentication, RBAC, and strict security protocols.",
            "Engineered integrations with payment gateways and financial providers (SPEI), implementing real-time transfer validation and automated transaction reconciliations.",
            "Modeled and optimized relational schemas in MySQL (v8.0), re-indexing and tuning queries to slash complex transaction latency by 93% (from 45s to 3s).",
            "Managed AWS cloud environments (S3, EC2, CloudWatch logs) and containerized microservices with Docker, ensuring high platform resilience and uptime.",
            "Automated continuous integration and deployment (CI/CD) pipelines using GitHub Actions and Git, reducing release defects by 40% and accelerating delivery cycles.",
            "Authored comprehensive automated unit testing suites with Jest, led peer code reviews, and drove Agile (Scrum/Kanban) sprints in certified bilingual English."
          ],
          commits: ["feat: net-core-spei-service", "perf: mysql-query-optim", "init: react18-portal"]
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
        subject: "Job Application — Senior Full Stack Developer (.NET Core 8, React & Node.js)",
        recipient: "To: María Esther Mejía | Talent Acquisition & Recruiting Qualtop",
        body1: "Dear María Esther Mejía, I am writing to express my strong enthusiasm for the Senior Full Stack Developer position at Qualtop, as featured in your LinkedIn announcement. With 4 years of professional software engineering experience designing transactional systems and building full-stack applications with .NET Core 8, React (v18+), and Node.js, I am eager to join your team and contribute to mission-critical financial platforms.",
        body2: "Throughout my work at Isotech, I have engineered and maintained high-concurrency web applications and transactional microservices. My background includes developing secure RESTful APIs with .NET Core and Node.js, implementing JWT/RBAC authorization, and building seamless integrations with third-party financial providers and payment gateways (including real-time SPEI transfer validation). On the frontend, I deliver fast, modular user experiences using React (v18+), TypeScript, and modern state architectures.",
        body3: "On the database and DevOps side, I specialize in relational schema design and query tuning in MySQL (v8.0), where I achieved a 93% reduction in execution latency (slashing response times from 45s down to 3s). I manage AWS cloud infrastructure (S3, EC2, CloudWatch logs), orchestrate Docker containers, and automate CI/CD release pipelines with GitHub Actions, ensuring smooth deployments within Agile (Scrum/Kanban) environments.",
        body4: "Holding a Bachelor's Degree in Computer Engineering and certified bilingual English proficiency (C1-C2 with 177 verified hours), I combine deep architectural problem-solving with proactive ownership and clean testing practices (Jest). Thank you for your time and consideration; I welcome the opportunity to discuss how my experience aligns with Qualtop's goals during an interview.",
        closing: "Sincerely,"
      }
    }
  }
};
