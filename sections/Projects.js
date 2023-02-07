import React, { useContext } from 'react';
import { Divider, Box, SimpleGrid } from '@chakra-ui/react';
import Project from '../components/Project';
import Container from '../components/Container';
import AppContext from '../context/context';
import CardProject from '../components/CardProject';

const Projects = () => {
  const datos = [
    {
      id: 1,
      title: 'Mern Bike Shop',
      desc: 'Platzi Badges es una plataforma que  lleva el registro de los asistentes a la Platzi Conf, haciendo posible que cada usuario registrado pueda ingresar su información personal. Cada uno de ellos tendrá un rol diferente y esto se verá reflejado en su badge. El proyecto tambien permite listar a todos los participantes y filtrarlos por tipo de rol, o hacer búsqueda por nombre.',
      links: {
        github: 'https://github.com/prevailayodele2/ecommerce-bite-client',
        live: 'https://platzi-badge.netlify.app',
      },
      tags: ['react', 'javascript', 'html', 'css'],
    },
    {
      id: 2,
      title: 'Gif App',
      desc: 'En este proyecto se implementan los fundamentos de ReactJs como manejo de estado, useEffect, Peticiones, Asincronismo y más. Esta realizado haciendo uso de TailwindCss para el frontend y se trata de un buscador de imágenes gifs, el cual devuelve 10 imágenes relacionadas a la búsqueda.',
      links: {
        github: 'https://github.com/arielscc/react-GifApp',
        live: 'https://arielscc.github.io/react-GifApp/',
      },
      tags: ['react', 'javascript', 'html', 'tailwind'],
    },
    {
      id: 3,
      title: 'Heroes App',
      desc: 'Este proyecto fue creado usando React y TailwindCss, Se trata de un pequeño SPA que tiene integrado conceptos de react-router e implementa la seguridad y protección de rutas.',
      links: {
        github: 'https://github.com/arielscc/heroes-app',
        live: 'https://heroes-ap.netlify.app/#/marvel',
      },
      tags: ['react', 'javascript', 'html', 'tailwind'],
    },
    {
      id: 4,
      title: '100Tifico',
      desc: '100Tifico presenta una lista de personajes de la famosa serie Rick & Morty. Este proyecto es una Single Page Aplication, haciendo uso de Javascript Vanilla y usa un entorno de desarrollo basado en WebPack.',
      links: {
        github: 'https://github.com/arielscc/rick-and-morty#readme',
        live: 'https://nostalgic-lamport-e31690.netlify.app/',
      },
      tags: ['webpack', 'javascript', 'html', 'css'],
    },
    {
      id: 5,
      title: 'Guía WebPack',
      desc: 'Esta es una guía básica sobre la configuración de cómo usar el paquete Webpack en su versión 4.',
      links: {
        github: 'https://github.com/arielscc/Webpack',
        live: '',
      },
      tags: ['webpack', 'javascript'],
    },
    {
      id: 6,
      title: 'Guía a11y',
      desc: 'Esta es una Guía general para garantizar la accesibilidad dentro de cualquier sitio web. En la Guía se presentan especificaciones WCAG, ARIA y demás',
      links: {
        github: 'https://github.com/arielscc/a11yGuideLine',
        live: '',
      },
      tags: ['html', 'css', 'md'],
    },
  ];
  const { list_projects: listProjects } = useContext(AppContext);
  const { title, projects, type } = listProjects;
  return (
    <Container title={title} index={5}>
      {projects.map((project, i) => (
        <Box key={project.id}>
          <Project data={project} index={i} type={type} />
          <Divider />
        </Box>
      ))}

      <SimpleGrid minChildWidth="250px" gap="5" mt="14">
        {datos.map(card => (
          <CardProject card={card} key={card.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
