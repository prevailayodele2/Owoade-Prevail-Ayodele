const es = {
  header: {
    categories: [
      'inicio',
      'acerca',
      'educación',
      'experiencia',
      'habilidades',
      'proyectos',
      'contacto',
    ],
    icons: ['github', 'twitter', 'instagram', 'idiomas', 'darkmode'],
  },
  hero: {
    title: 'inicio',
    greet: 'Hola, mi nombre es',
    prof: 'Desarrollador Web',
    button: 'Descargar CV',
  },
  about: {
    title: 'acerca',
    description:
      'Soy desarrollador web con experiencia en la creación de productos digitales con distintas tecnologías. Actualmente mi Stack de tecnologías tiene como lenguaje principal a JavaScript, me gusta desarrollar soluciones que cumplan altas métricas de calidad tanto en rendimiento, accesibilidad y buenas prácticas. Busco oportunidades laborales para crecer profesionalmente junto a un equipo de innovación para dar soluciones a diferentes problemáticas.',
  },
  education: {
    title: 'educación',
    univ: 'Carrera de Informática - UMSA',
    desc_u:
      'Estudié la carrera de Informática en la Universidad Mayor de San Andrés, donde participe en varios eventos académicos como grupos de estudio y en eventos realizados por la facultad, como Festicyt-UMSA. También participe en la organización de varios eventos académicos, como las Olimpiadas Escolares/2018-2019 y en el Congreso de Biotecnología-2019.',
    desc_c:
      'Durante mi formación, también logré obtener algunas certificaciones dentro de la universidad y en plataformas en línea.',
  },
  skills: {
    title: 'habilidades',
    desc: 'En mis tiempos libres pude capacitarme en diferentes tecnologias, algunas de ellas son.',
    tabs: ['front-end', 'back-end', 'base de datos', 'diseño', 'herramientas'],
  },
  experience: {
    title: 'experiencia',
    job_a: [
      'Responsable del soporte de los sistemas de administración de la facultad',
      'Encargado de soporte de redes y comunicación de la facultad',
      'Diseño de interfaces de usuario y Diseño grafico',
      'Administración de base de datos',
    ],
    job_b: [
      'Encargado del soporte de sistemas de administración y gestión de recursos y correspondencia',
      'Encargado del soporte de redes e infraestructura de la organización',
    ],
  },
  list_projects: {
    title: 'proyectos',
    type: 'proyecto destacado',
    projects: [
      {
        id: 1,
        title: 'Exchange BTC',
        links: {
          github: 'https://github.com/arielscc/intercambio-btc',
          live: 'https://intercambio-btc.netlify.app/',
        },
        url: '/assets/projects/intercambio-btc.jpg',
        description:
          'Este proyecto es una Single Page App, desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
        tags: ['VueJs', 'Javascript', 'TailwindCss'],
      },
      {
        id: 2,
        title: 'Tienda Online',
        links: {
          github: 'https://github.com/arielscc/TiendaOnline',
          live: 'https://tiendaenlinea-6d2f5.firebaseapp.com/',
        },
        url: '/assets/projects/tienda_online.jpg',
        description:
          'Este proyecto es una Single Page App y tiene como objetivo la venta de souvenirs, este proyecto esta implementado con Reactjs y tambien implementa una pasarela de pagos y localizacion via Google Maps',
        tags: ['Reactjs', 'Javascript', 'Firebase', 'ChakraUi'],
      },
      {
        id: 3,
        title: 'Video Anime',
        links: {
          github: 'https://github.com/arielscc/videoAnime',
          live: 'https://video-anime.netlify.app/',
        },
        url: '/assets/projects/video-anime.jpg',
        description:
          'Este proyecto es un sitio para ver videos de anime, filtrarlos por reelevancia, popularidad y calificación. Este sitio web implementa de forma nativa Server-Side-Rendering, y es una PWA',
        tags: ['Javascript', 'Kitsu.io', 'Css', 'Html'],
      },
    ],
  },
  contact: {
    title: 'contacto',
    desc: 'Hola de nuevo, Si quieres construir cosas increíbles o quieres contactarte conmigo por alguna sugerencia o pregunta puedes enviarme un correo, o un mensaje interno en mis redes sociales.',
  },
  footer: {
    desc: 'Diseñado & Desarrollado por Ariel Chura',
  },
};

export default es;
