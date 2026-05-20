# Digital CV — David Franco

CV digital interactivo con estética de terminal, soporte bilingüe español/inglés y generación de PDF profesional optimizado para ATS.

![Preview](public/avatar_caricature.png)

## Características

- **Interfaz tipo terminal** — Diseño inspirado en herramientas de desarrollo con animación de escritura (typing effect), glassmorphism y micro-animaciones.
- **Multilenguaje** — Soporte nativo para Español e Inglés con traducciones centralizadas en `translations.js`.
- **Generador de PDF personalizado** — Motor propio con `jsPDF` que produce un documento A4 profesional en formato Harvard/HBS, optimizado para ATS, con saltos de página automáticos.
- **Carta de presentación** — PDF descargable dirigido a IBM, generado desde los mismos datos del perfil.
- **Diseño responsive** — Adaptado a desktop, tablet y móvil mediante CSS Grid y media queries.
- **Docker** — Multi-stage build con Node 24 Alpine + nginx stable-alpine.

## Tech Stack

| Categoría | Tecnología |
|---|---|
| **Framework** | React 19 |
| **Build** | Vite 8 (Rolldown) con chunk splitting |
| **Estilos** | CSS3 Vanilla con custom properties |
| **PDF** | jsPDF con canvas para iconos SVG |
| **Linter** | ESLint 10 (flat config) con react-hooks |
| **Infra** | Docker, nginx:stable-alpine |

## Estructura del Proyecto

```
src/
├── App.jsx                    # Componente principal
├── App.css                    # Estilos globales + print styles
├── index.css                  # Reset y scrollbar
├── main.jsx                   # Entry point React
└── utils/
    ├── translations.js        # Datos del CV bilingües
    ├── pdfGenerator.js        # Generador de PDF (CV)
    └── coverLetterGenerator.js # Generador de PDF (carta)
```

## Instalación y Uso

```bash
git clone https://github.com/DavidFranco3/cv.git
cd cv
npm install
npm run dev
```

Otros scripts:

```bash
npm run build    # Build producción
npm run lint     # ESLint
npm run preview  # Preview del build
```

## Docker

```bash
docker build -t cv .
docker run -p 80:80 cv
```

## Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo como inspiración para tu propio CV.
