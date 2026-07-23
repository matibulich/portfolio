# Portfolio de Matías Bulich

Portfolio profesional desarrollado con React y Vite. Sitio web moderno y responsive que muestra información personal, habilidades técnicas, educación y proyectos.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

El sitio estará disponible en: http://localhost:5173/

## 📁 Estructura del Proyecto

```
PORTFOLIO/
├── public/
│   ├── favicon.png
│   ├── hero.webp
│   ├── fondo.webp
│   ├── iconos/
│   │   ├── html5-brands-solid-full.svg
│   │   ├── css-brands-solid-full.svg
│   │   ├── js-brands-solid-full.svg
│   │   ├── react-brands-solid-full.svg
│   │   ├── node-brands-solid-full.svg
│   │   ├── sass-brands-solid-full.svg
│   │   └── wordpress-brands-solid-full.svg
│   └── portfolio/
│       ├── MyMovieApp/
│       ├── BuscadorPeli/
│       ├── ChatInteligente/
│       ├── ChatSockets/
│       ├── Autenticador_jwt/
│       └── Clima/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Portfolio.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Características

- **Diseño Moderno**: Gradientes, animaciones suaves y efectos hover
- **Responsive**: Adaptado para desktop, tablet y móvil
- **One-Page**: Página principal con todas las secciones
- **Portfolio Interactivo**: Galería de proyectos con modal detallado
- **Navegación Fluida**: Scroll suave entre secciones
- **Optimizado**: Construido con Vite para máximo rendimiento

## 📄 Páginas

### Página Principal (/)
- **Hero**: Presentación con nombre y enlaces sociales
- **Sobre Mí**: Descripción profesional con imagen
- **Habilidades**: Grid de tecnologías con iconos
- **Educación**: Timeline de formación académica
- **Contacto**: Información de contacto

### Página Portfolio (/portfolio)
- Galería de 6 proyectos
- Modal con detalles completos de cada proyecto
- Galería de imágenes con navegación
- Enlaces a GitHub y sitio web

## 🎨 Tecnologías Utilizadas

- React 18
- React Router DOM
- Vite
- CSS3 (Vanilla CSS)
- JavaScript ES6+

## ⚙️ Configuración

### Actualizar Información Personal

Edita `src/data/personalInfo.js`:

```javascript
enlaces: {
  cv: "URL_DE_TU_CV",
  github: "URL_DE_TU_GITHUB",
  linkedin: "URL_DE_TU_LINKEDIN"
}
```

### Actualizar Proyectos

Edita `src/data/projects.js` para cada proyecto:

```javascript
{
  nombre: "Nombre del Proyecto",
  descripcion: "Descripción detallada",
  tecnologias: ["React", "Node.js", "..."],
  github: "URL_DEL_REPOSITORIO",
  sitioWeb: "URL_DEL_SITIO_DESPLEGADO"
}
```

## 🎯 Próximos Pasos

1. Completa los enlaces sociales en `personalInfo.js`
2. Actualiza las URLs de GitHub y sitios web en `projects.js`
3. Personaliza colores en `App.css` si lo deseas
4. Ejecuta `npm run build` para generar la versión de producción
5. Despliega en tu plataforma favorita (Vercel, Netlify, etc.)

## 📝 Licencia

© 2026 Matías Alejandro Bulich. Todos los derechos reservados.

---

Desarrollado con ❤️ usando React y Vite
