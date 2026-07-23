export const projects = [
  {
    id: 1,
    nombre: "My Movie App",
    slug: "my-movie-app",
    descripcion:
      "Aplicación web para buscar y explorar información sobre películas. Permite a los usuarios descubrir películas populares, buscar títulos específicos y ver detalles completos de cada película. Además se permitie iniciar sesión para guardar películas en favoritos(MongoDB).",
    tecnologias: ["React", "JavaScript", "CSS", "API REST", "Mongoose"],
    imagenes: [
      "/portfolio/MyMovieApp/my_movie_app.png",
      "/portfolio/MyMovieApp/my_movie_app2.png",
      "/portfolio/MyMovieApp/my_movie_app3.png",
      "/portfolio/MyMovieApp/my_movie_app4.png",
    ],
    github: "https://github.com/matibulich/MyMovieApp",
    sitioWeb: "https://mymovieapp-2.onrender.com/",
  },
  {
    id: 2,
    nombre: "Dashboard Fianciero",
    slug: "dashboard-financiero",
    descripcion:
      "Aplicación web que permite tener registro de todas tus inversiones (Acciones/Criptomonedas) en un solo lugar",
    tecnologias: ["Next.js", "PostgreSQL", "Prisma ORM", "TailwindCSS", "JWT", "Apis externas"],
    imagenes: [
      "/portfolio/finance_dashboard/screen1.png",
      "/portfolio/finance_dashboard/screen2.png",
    ],
    github: "https://github.com/matibulich/finance_dashboard_nextjs.git",
    sitioWeb: "https://finance-dashboard-nextjs-mauve.vercel.app/",
  },
  {
    id: 3,
    nombre: "Chat Inteligente",
    slug: "chat-inteligente",
    descripcion:
      "Aplicación de chat utilizando el modelo IA Llama. Se puede usar offline",
    tecnologias: ["JavaScript", "AI"],
    imagenes: [
      "/portfolio/ChatInteligente/chat_1.png",
      "/portfolio/ChatInteligente/chat1.png",
    ],
    github: "https://github.com/matibulich/chatOnline",
    sitioWeb: "https://chatinteligente.netlify.app",
  },
  {
    id: 4,
    nombre: "Chat con Sockets",
    slug: "chat-sockets",
    descripcion:
      "Sistema de chat en tiempo real utilizando WebSockets. Permite comunicación instantánea entre múltiples usuarios.",
    tecnologias: ["Node.js", "Socket.io", "JavaScript", "Express","Turso DB"],
    imagenes: ["/portfolio/ChatSockets/CHAT_SOCKETS.png"],
    github: "https://github.com/matibulich/chat-socket.git",
    sitioWeb: "https://chat-socket-gxp7.onrender.com/",
  },
  {
    id: 5,
    nombre: "Autenticador JWT",
    slug: "autenticador-jwt",
    descripcion:
      "Sistema de autenticación seguro utilizando JSON Web Tokens. Implementa registro, login y protección de rutas.",
    tecnologias: ["Node.js", "Express", "JWT", "JavaScript"],
    imagenes: [
      "/portfolio/Autenticador_jwt/autenticacion_jwt.png",
      "/portfolio/Autenticador_jwt/autenticacion_jwt2.png",
    ],
    github: "https://github.com/matibulich/autenticaci-n_jwt",
    sitioWeb: "https://autenticaci-n-jwt.onrender.com/",
  },
  {
    id: 6,
    nombre: "Autosync-Dashboard",
    slug: "autosync-dashboard",
    descripcion:
      "Controlador de stock que integra un modelo IA para realizar consultas sobre el stock. Se utiliza Prisma y Mysql para la base de datos.",
    tecnologias: [
      "Node.js",
      "Express",
      "React",
      "Prisma",
      "MySQL",
      "IA-GROK MODEL",
    ],
    imagenes: ["/portfolio/Autosync-dashboard/autosync.png"],
    github: "https://github.com/matibulich/autosync_dash_IA",
    sitioWeb: "Docker",
  },
  {
    id: 7,
    nombre: "App del Clima",
    slug: "clima",
    descripcion:
      "Aplicación para consultar el clima actual y pronóstico. Interfaz con datos meteorológicos en tiempo real.",
    tecnologias: ["JavaScript", "HTML", "CSS", "Weather API"],
    imagenes: ["/portfolio/Clima/clima.png"],
    github: "https://github.com/matibulich/appclima",
    sitioWeb: "https://basicclima.netlify.app/",
  },
  {
    id: 8,
    nombre: "Landing Cargador",
    slug: "Landing",
    descripcion: "Landing de producto para la venta",
    tecnologias: ["AI", "SKILLS", "MCP"],
    imagenes: ["/portfolio/Landing_cargador/landing_cargador.png"],
    github: "https://github.com/matibulich/cargador_landing_2",
    sitioWeb: "https://matibulich.github.io/cargador_landing_2/",
  },

  {
    id: 9,
    nombre: "Buscador de Películas",
    slug: "buscador-peli",
    descripcion:
      "Herramienta de búsqueda de películas con interfaz intuitiva. Realizado con Javascript usando la api TMDB. Guarda las películas seleccionadas en localstorage.",
    tecnologias: ["JavaScript", "HTML", "CSS", "API"],
    imagenes: [
      "/portfolio/BuscadorPeli/BUSCADOR_PELI.png",
      "/portfolio/BuscadorPeli/BUSCADOR_PELI2.png",
    ],
    github: "https://github.com/matibulich/react-movie-app-basic",
    sitioWeb: "https://peliculasbuscador.netlify.app/",
  },
];
