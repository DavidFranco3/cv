export const translations = {
  es: {
    ui: {
      status: "LISTO PARA CONSTRUIR SOLUCIONES IMPACTANTES",
      professionalSummary: "resumen_profesional.js",
      academicTraining: "FORMACIÓN_ACADÉMICA />",
      languages: "IDIOMAS />",
      skillsAndTech: "Habilidades y Tecnologías",
      professionalExperience: "Experiencia Profesional",
      projects: "Proyectos Destacados",
      openSource: "Open Source & Contribuciones",
      downloadCv: "CV (PDF)",
      downloadCoverLetter: "CARTA PRESENTACIÓN (PDF)",
      whoami: "$ whoami"
    },
    cv: {
      name: "José David Ayala Franco",
      role: "Software Developer",
      summary: "Ingeniero en Informática con 4 años de experiencia en desarrollo Full Stack, especializado en Backend y arquitecturas web escalables. He automatizado flujos comerciales e industriales mediante software a medida, integración de APIs y optimización de bases de datos. Apasionado por el código limpio, las buenas prácticas y el open-source (mantengo y contribuyo a librerías publicadas en NPM como react-apextable-pro y fluent-rest-client). Busco integrarme a equipos donde pueda aportar en el diseño de sistemas robustos y mentoría técnica.",
      contact: {
        location: "Parácuaro, Michoacán, México",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend (Enfoque)", techs: ["Laravel", "Express.js", "Node.js", "PHP", "RESTful APIs", "JWT / OAuth", "Microservicios"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript (ES6+)", "Tailwind CSS", "SASS", "HTML5", "CSS3"], color: "#f59e0b" },
        { category: "Móvil", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Bases de Datos", techs: ["MySQL", "MongoDB", "PostgreSQL"], color: "#10b981" },
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
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Técnico (Lectura avanzada)" }
      ],
      projects: [
        { name: "intl-currency-helper", desc: "Librería ligera de JavaScript para formatear números a moneda usando la API nativa de internacionalización (Intl). Compatible con Node.js y React.", techs: ["JavaScript", "Intl API", "Node.js"], achievement: "Publicada en NPM como paquete independiente para agilizar la localización financiera." },
        { name: "react-apextable-pro", desc: "Tablas de datos React de alto rendimiento con persistencia de estado, columnas fijas dinámicas y exportaciones profesionales.", techs: ["React", "JavaScript", "CSS"], achievement: "Alcanzó amplia adopción en NPM y fue integrada con éxito en los sistemas internos de Isotech." },
        { name: "fluent-rest-client", desc: "Cliente REST fluido moderno para JS/TS con Auth, cola de refresco y reintentos automáticos con retraso exponencial.", techs: ["TypeScript", "Node.js", "Express"], achievement: "Simplificó el consumo de APIs externas reduciendo el código repetitivo en un 30%." },
        { name: "layout_java_springboot", desc: "Layout y framework inicial modular con Spring Boot en backend y generador automático de módulos CRUD.", techs: ["Java", "Spring Boot", "MySQL"], achievement: "Obtuvo 7 estrellas en GitHub y redujo el tiempo de inicio de proyectos a 1 hora." },
        { name: "generador-tickets", desc: "Biblioteca ligera para crear tickets de venta optimizados con impresión directa por iframe para puntos de venta.", techs: ["JavaScript", "HTML5"], achievement: "Implementada para automatizar la facturación física rápida en comercios locales." }
      ],
      openSource: {
        summary: "Creador y mantenedor activo de librerías publicadas en NPM de código abierto. Contribuidor ocasional en la documentación oficial de Laravel Docs y Flutter Gallery."
      },
      pdfLabels: {
        professionalProfile: "Perfil Profesional",
        education: "Formación Académica",
        languages: "Idiomas",
        experience: "Experiencia Profesional",
        techStack: "Competencias Técnicas",
        projects: "Proyectos Destacados",
        openSource: "Open Source & Contribuciones",
        present: "Actualidad"
      },
      coverLetter: {
        subject: "Solicitud de Empleo — Desarrollador de Software",
        recipient: "Oficina de Selección de Talento:",
        body1: "Estimado equipo de selección, me pongo en contacto con ustedes con gran entusiasmo para postularme a la vacante de Desarrollador de Software. Como Ingeniero en Informática enfocado en desarrollo Full Stack y arquitectura web, me apasiona transformar necesidades complejas en sistemas robustos y eficientes, especializándome en la optimización del backend y la integración fluida de APIs.",
        body2: "Durante mi trayectoria en Isotech, lideré el desarrollo técnico de plataformas web de alta disponibilidad usando Node.js, Laravel y React, además de diseñar soluciones móviles híbridas en Flutter. Mi enfoque no es solo escribir código limpio, sino resolver problemas de negocio reales: he automatizado flujos de trabajo que eliminan cuellos de botella operativos e integrado APIs de geolocalización avanzadas para optimizar la logística de despacho.",
        body3: "Asimismo, me apasiona la comunidad y el aprendizaje constante. Mantengo de forma activa librerías de código abierto en NPM (como react-apextable-pro y fluent-rest-client) y fomento la adopción estratégica de herramientas de IA dentro de los flujos de desarrollo para acelerar las entregas y elevar la calidad del software en cada sprint.",
        body4: "Me entusiasma la posibilidad de aportar mi experiencia en optimización de procesos y liderazgo técnico a su equipo. Quedo a su disposición para platicar sobre cómo mis habilidades pueden sumarse a sus objetivos en una entrevista. Muchas gracias por su tiempo y consideración.",
        closing: "Atentamente,"
      }
    }
  },
  en: {
    ui: {
      status: "READY TO BUILD IMPACTFUL SOLUTIONS",
      professionalSummary: "professional_summary.js",
      academicTraining: "ACADEMIC_TRAINING />",
      languages: "LANGUAGES />",
      skillsAndTech: "Skills and Technologies",
      professionalExperience: "Professional Experience",
      projects: "Key Projects",
      openSource: "Open Source & Contributions",
      downloadCv: "CV (PDF)",
      downloadCoverLetter: "COVER LETTER (PDF)",
      whoami: "$ whoami"
    },
    cv: {
      name: "José David Ayala Franco",
      role: "Software Developer",
      summary: "Computer Engineer with 4 years of experience in Full Stack development, specializing in Backend and scalable web architectures. I have automated commercial and industrial workflows through custom software, API integration, and database optimization. Passionate about clean code, best practices, and open-source (maintaining and contributing to NPM packages like react-apextable-pro and fluent-rest-client). Seeking to join teams where I can contribute to robust system design and technical mentoring.",
      contact: {
        location: "Paracuaro, Michoacan, Mexico",
        email: "josedavidayalafranco3@gmail.com",
        phone: "453-152-7363",
        github: "DavidFranco3",
        linkedin: "david-franco-247701220",
        npm: "davidfranco3"
      },
      skills: [
        { category: "Backend (Focus)", techs: ["Laravel", "Express.js", "Node.js", "PHP", "RESTful APIs", "JWT / OAuth", "Microservices"], color: "#3b82f6" },
        { category: "Frontend & UI/UX", techs: ["React", "JavaScript (ES6+)", "Tailwind CSS", "SASS", "HTML5", "CSS3"], color: "#f59e0b" },
        { category: "Mobile", techs: ["Flutter", "Dart", "Kotlin", "Java"], color: "#ec4899" },
        { category: "Databases", techs: ["MySQL", "MongoDB", "PostgreSQL"], color: "#10b981" },
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
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Technical (Advanced reading)" }
      ],
      projects: [
        { name: "intl-currency-helper", desc: "Lightweight JavaScript library for formatting numbers to currency using the native Internationalization API (Intl). Compatible with Node.js and React.", techs: ["JavaScript", "Intl API", "Node.js"], achievement: "Published on NPM as a lightweight, dependency-free package to streamline financial localization." },
        { name: "react-apextable-pro", desc: "High-performance React data table library with state persistence, dynamic sticky columns, and professional exports.", techs: ["React", "JavaScript", "CSS"], achievement: "Achieved wide adoption on NPM and was successfully integrated into Isotech's internal systems." },
        { name: "fluent-rest-client", desc: "Modern fluent REST client for JS/TS with built-in Auth, token auto-refresh queue, and exponential backoff retries.", techs: ["TypeScript", "Node.js", "Express"], achievement: "Simplified external API consumption, reducing boilerplate code by 30%." },
        { name: "layout_java_springboot", desc: "Modular startup layout boilerplate with Java Spring Boot backend and built-in CRUD generator.", techs: ["Java", "Spring Boot", "MySQL"], achievement: "Features 7+ stars on GitHub and reduces project setup time to 1 hour." },
        { name: "generador-tickets", desc: "Lightweight library for creating print-optimized sales tickets with direct iframe printing support.", techs: ["JavaScript", "HTML5"], achievement: "Implemented to automate fast physical ticketing in local retail shops." }
      ],
      openSource: {
        summary: "Creator and active maintainer of open-source packages published on NPM. Occasional contributor to the official Laravel Docs and Flutter Gallery documentation."
      },
      pdfLabels: {
        professionalProfile: "Professional Profile",
        education: "Education",
        languages: "Languages",
        experience: "Professional Experience",
        techStack: "Technical Competencies",
        projects: "Key Projects",
        openSource: "Open Source & Contributions",
        present: "Present"
      },
      coverLetter: {
        subject: "Application for Employment — Software Developer",
        recipient: "Office of Talent Selection:",
        body1: "Dear hiring team, I am writing to express my strong interest in the Software Developer position. As a Computer Engineer and Full Stack Developer specializing in backend development and web architecture, I thrive on translating complex business requirements into robust, high-performance systems and seamless API integrations.",
        body2: "During my tenure at Isotech, I spearheaded the technical development of web platforms utilizing Node.js, Laravel, and React, alongside hybrid mobile applications with Flutter. My goal is always to deliver concrete business value; for instance, I successfully automated operational workflows to eliminate dispatch bottlenecks and integrated advanced mapping and geolocation services.",
        body3: "I am also deeply committed to the tech community and continuous improvement. I actively maintain open-source packages on NPM (such as react-apextable-pro and fluent-rest-client) and advocate for the strategic integration of AI tools in developer workflows to shorten release cycles and enhance software quality.",
        body4: "I would welcome the opportunity to discuss how my technical expertise and team-mentoring experience align with your goals. Thank you for your time and consideration.",
        closing: "Sincerely,"
      }
    }
  }
};
