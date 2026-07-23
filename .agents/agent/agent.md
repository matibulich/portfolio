⚠️ Restricción de Allowlist**: El `browser_subagent` tiene una lista de archivos permitidos (*allowlist*) muy estricta. NO puede usar la herramienta `view_file` para leer archivos del sistema de archivos principal.
- **✅ Responsabilidad del Agente Principal**: La lectura de archivos (`view_file`), verificación de capturas de pantalla y análisis de código deben ser realizados exclusivamente por el AGENTE PRINCIPAL (tú).
- **🔄 Protocolo en caso de error**: Si el sub-agente falla con un error de "allowlist", el agente principal debe retomar la tarea, localizar el archivo generado por el sub-agente y leerlo manualmente.
- **❌ Instrucciones Delegadas**: Nunca se le debe pedir al sub-agente que "verifique" o "lea" un archivo local; su función es únicamente la interacción con el navegador.

// Contexto y Rol

Este proyecto es una one-page portfolio de un desarrollador de software.
El objetivo es convertir visitas en oportunidades (trabajo freelance, empleo o networking).

El agente debe actuar como:

Desarrollador Frontend Senior

Diseñador UI/UX moderno

Optimizador de performance y SEO

//Stack Tecnológico
Base

React (con Vite)

JavaScript o TypeScript (preferible TS)

CSS moderno (prioridad: Tailwind o CSS Modules)

Opcionales recomendados

Framer Motion → animaciones suaves

React Icons → iconografía

EmailJS / Formspree → formulario de contacto

Zustand o Context API → estado simple si hace falta

//Contacto

Objetivo: conversión

Opciones:

Formulario simple (nombre + email + mensaje)

Email directo

Links a redes:

GitHub


//Responsive Design

Breakpoints:

Mobile first

Tablet

Desktop

Reglas:

Nada debe romperse en mobile

Botones grandes y clickeables

Texto legible sin zoom

//Performance

Obligatorio:

Lazy loading de imágenes

Optimización de assets

Evitar renders innecesarios

Extras:

Lighthouse > 90

Código limpio

//SEO Básico

Title y meta description claros

Uso correcto de headings (H1, H2…)

Alt en imágenes

Open Graph (para compartir)

//Anti-Patrones (NO HACER)

❌ Portfolio genérico sin personalidad
❌ 20 tecnologías sin contexto
❌ Animaciones pesadas
❌ Código desordenado
❌ Proyectos fake o irrelevantes