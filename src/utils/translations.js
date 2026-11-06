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
      summary: "Ingeniero en Informática con 4 años de experiencia en desarrollo Full Stack, especializado en Backend y arquitecturas web escalables. Creador y mantenedor de D-Stack (framework monolítico Full-Stack en Node.js, Express 5 y React 19 disponible en NPM), así como de su ecosistema de librerías utilitarias. He automatizado flujos comerciales e industriales mediante software a medida, integración de APIs y optimización de bases de datos. Apasionado por el código limpio, el rendimiento y las buenas prácticas.",
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
          desc: "Desarrollo integral de sistemas web mediante el stack MERN (MongoDB, Express, React, Node.js), gestionando arquitecturas desacopladas y monolíticas con Laravel y MySQL.",
          bullets: [
            "Lideré el desarrollo de 6 sistemas web críticos usando MERN (MongoDB, Express, React, Node) y Laravel, atendiendo a más de 200 usuarios internos.",
            "Rediseñé la arquitectura de una API monolítica a microservicios con Node.js, reduciendo el tiempo de respuesta de 800ms a 120ms (mejora del 85%).",
            "Implementé un sistema de geolocalización y rutas óptimas integrando Google Maps API y Mapbox, reduciendo tiempos de logística en un 25%.",
            "Desarrollé y publiqué aplicaciones móviles híbridas utilizando Flutter y Dart, logrando un rendimiento fluido y alta satisfacción de los usuarios en iOS y Android.",
            "Optimicé consultas SQL complejas en MySQL, reduciendo el tiempo de generación de reportes de 45 segundos a 3 segundos.",
            "Mentoricé a 4 practicantes en Laravel y React, acelerando su curva de aprendizaje y logrando que se integraran a producción en menos de 2 meses.",
            "Implementé pruebas manuales y automatizadas (Postman, Jest) reduciendo bugs en producción en un 40%.",
            "Utilicé herramientas de IA (Gemini, OpenCode) para automatizar tareas repetitivas, ahorrando ~8 horas semanales al equipo."
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
        { name: "Inglés", level: "Técnico (Lectura avanzada)" }
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
        body3: "Además del desarrollo empresarial, soy el creador y desarrollador de D-Stack (framework monolítico Full-Stack para Node.js y React 19) y mantengo activamente varias librerías de utilidad publicadas en NPM (como fluent-rest-client y react-apextable-pro). Destaco por escribir código limpio y mantenible, implementar pruebas automatizadas (Jest, Postman) y mentores a desarrolladores junior para acelerar el flujo de trabajo del equipo.",
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
      summary: "Computer Engineer with 4 years of experience in Full Stack development, specializing in Backend architecture and scalable web systems. Creator and maintainer of D-Stack (a full-stack monolith CLI framework for Node.js, Express 5, and React 19 available on NPM) alongside an ecosystem of utility libraries. Experienced in automating commercial and industrial workflows through custom software, API integration, and database query optimization. Passionate about clean code, performance, and best practices.",
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
          desc: "Full-stack development of web systems using the MERN stack (MongoDB, Express, React, Node.js), managing both decoupled and monolithic architectures with Laravel and MySQL.",
          bullets: [
            "Led the development of 6 critical web systems using MERN (MongoDB, Express, React, Node) and Laravel, serving over 200 internal users.",
            "Redesigned the architecture of a monolithic API into microservices with Node.js, reducing response time from 800ms to 120ms (an 85% improvement).",
            "Implemented a geolocation and optimal routing system integrating Google Maps API and Mapbox, reducing logistics times by 25%.",
            "Developed and deployed hybrid mobile applications using Flutter and Dart, ensuring high performance and user satisfaction on iOS and Android.",
            "Optimized complex SQL queries in MySQL, reducing report generation time from 45 seconds to 3 seconds.",
            "Mentored 4 interns in Laravel and React, accelerating their learning curve and integrating them into production in under 2 months.",
            "Implemented manual and automated tests (Postman, Jest), reducing production bugs by 40%.",
            "Utilized AI tools (Gemini, OpenCode) to automate repetitive tasks, saving the team ~8 hours per week."
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
        { name: "English", level: "Technical (Advanced reading)" }
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
        body3: "In addition to enterprise solutions, I am the creator of D-Stack Framework (a Full-Stack monolith CLI tool on NPM) and actively maintain utility packages on NPM (such as fluent-rest-client and react-apextable-pro). I am deeply committed to writing clean, maintainable code, implementing rigorous automated testing (Jest, Postman), and mentoring junior developers to accelerate team productivity.",
        body4: "My strong foundation in computer engineering and software design principles allows me to master new technologies quickly and deliver immediate value. I welcome the opportunity to discuss how my experience and passion for engineering excellence align with your goals. Thank you for your time and consideration.",
        closing: "Sincerely,"
      }
    }
  }
};
