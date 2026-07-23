const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
};

const fechaNacimiento = "1989-07-28";

export const personalInfo = {
  nombre: "Matías Alejandro Bulich",
  nombreCorto: "Matías Bulich",
  ubicacion: "Córdoba, Argentina",
  email: "matibulich@gmail.com",
  telefono: "+54 9 351 304 2025",
  edad: calcularEdad(fechaNacimiento),
  nacimiento: fechaNacimiento,
  disponibilidad: "Full time",

  presentacion:
    "Vivo en Córdoba, Argentina y cuento con formación en Publicidad y Marketing Digital, aunque hoy mi enfoque principal es el desarrollo de web. Me especializo en el ecosistema JavaScript, trabajando con Node.js, NextJS y ReactJS. Busco mi primera oportunidad laboral en el sector IT como Junior Developer, con disponibilidad para trabajar de forma remota o híbrida en Córdoba.",

  enlaces: {
    cv: "/public/CV-MATIASBULICH.pdf",
    github: "https://github.com/matibulich",
    linkedin: "https://www.linkedin.com/in/matias-bulich/",
  },

  habilidadesBlandas: [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Aprendizaje continuo",
    "Adaptabilidad",
    "Escucha activa",
  ],

  educacion: [
    {
      titulo: "Marketing y Publicidad Digital",
      subtitulo: "Tecnicatura en marketing y publicidad digital",
      institucion: "Universidad Siglo 21",
      periodo: "2016 - 2019",
    },
    {
      titulo: "Diseño Front-end",
      subtitulo: "HTML, CSS, Sass, Bootstrap, WordPress",
      institucion: "Coderhouse",
      periodo: "2021",
    },
    {
      titulo: "Programación Front-end",
      subtitulo: "Javascript, ReactJS",
      institucion: "Argentina Programa",
      periodo: "2023",
    },
    {
      titulo: "Back-end NodeJS",
      subtitulo: "Programación Back-end con NodeJS",
      institucion: "Codo a Codo",
      periodo: "2024",
    },
    {
      titulo: "NextJS",
      subtitulo: "Desarrollo de aplicaciones web con NextJS",
      institucion: "Autodidacta",
      periodo: "2025",
    },
  ],
};
