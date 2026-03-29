# 🚀 Digital CV - José David Ayala Franco

Este es un proyecto de **CV Digital e Interactivo** diseñado para destacar habilidades técnicas con una estética de terminal moderna y profesional. El proyecto permite visualizar el perfil profesional de forma dinámica y generar un PDF optimizado en tiempo real.

![Preview](public/avatar_caricature.png)

## ✨ Características Principales

-   **Interfaz de Terminal**: Diseño inspirado en herramientas de desarrollo con animaciones de escritura (typing effect).
-   **Diseño Responsivo**: Adaptado para todo tipo de pantallas mediante un sistema de cuadrícula inteligente (3x2 en desktop).
-   **Generador de PDF Personalizado**: Motor propio utilizando `jsPDF` que transforma los datos del CV en un documento A4 profesional, con soporte para saltos de página automáticos y diseño de dos columnas.
-   **Multilenguaje**: Soporte nativo para Español e Inglés con traducciones centralizadas.
-   **Integración NPM**: Enlace directo al perfil de contribuidor y mención de librerías open-source.
-   **Aesthetica Premium**: Uso de degradados, desenfoques (backdrop-filters) y micro-animaciones para una experiencia visual de alto nivel.

## 🛠️ Tech Stack

-   **Core**: React 18 + Vite
-   **Styling**: CSS3 (Vanilla) con variables para modo oscuro.
-   **Documentación**: jsPDF para la generación dinámica de archivos.
-   **Iconografía**: SVG personalizados integrados como componentes React.

## 📁 Estructura del Proyecto

-   `src/App.jsx`: Componente principal y lógica de la interfaz.
-   `src/utils/pdfGenerator.js`: El "corazón" del sistema; el algoritmo que construye el PDF píxel a píxel.
-   `src/utils/translations.js`: Diccionario de datos y contenidos para fácil mantenimiento.
-   `public/`: Assets estáticos y recursos como el avatar caricature.

## ⚙️ Instalación y Uso

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/DavidFranco3/cv.git
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo como inspiración para tu propio CV.
