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
      desc: 'This is a ecommerce SPA  mainly to shop for bicycles and search from differnent brand of bike with a payment and order functionality',
      links: {
        github: 'https://github.com/prevailayodele2/ecommerce-bite-client',
        live: '',
      },
      tags: ['react', 'javascript', 'redux', 'Node js'],
    },
    {
      id: 2,
      title: 'Reservation',
      desc: 'This project is a Single Page App, developed using React Js to reserve hotel rooms and  search for better deals and different hotel filtering functionality',
      links: {
        github: 'https://github.com/prevailayodele2/Booking-app-client',
        live: 'https://drive.google.com/file/d/1N78b1liCh9ONiv2ZCDVgdrSojTxMR5oD/view?usp=share_link',
      },
      tags: ['react', 'javascript', 'css', 'Node js', 'context'],
    },
    {
      id: 3,
      title: 'Kindeem admin app',
      desc: 'This is a SPA web application used to add new product, track and approve order and manage a client app',
      links: {
        github: 'https://github.com/prevailayodele2/kindeem-awesome-ecom-admin',
        live: 'https://drive.google.com/file/d/1u2iZquCUVZQuCVoLqRwftXOMGCKFoBcf/view?usp=share_link',
      },
      tags: ['react', 'javascript', 'antd', 'css'],
    },
    {
      id: 4,
      title: 'Treasure media',
      desc: 'This a MERN stack social media web application to post pictures and videos, comment on others post and message other users',
      links: {
        github: 'https://github.com/prevailayodele2/Treasure-media',
        live: 'https://drive.google.com/file/d/1GKUUxmERKgbpC6-R1C4A2r_wZK-gfgva/view?usp=share_link',
      },
      tags: ['React', 'javascript', 'css', 'material UI', 'firebase'],
    },
    {
      id: 5,
      title: 'active clock',
      desc: 'This a simple Javascript Project showing an active clock in analog and digital form',
      links: {
        github: 'https://github.com/prevailayodele2/active-Clock-responsive',
        live: 'https://stirring-marzipan-27c68f.netlify.app/',
      },
      tags: ['html','css', 'javascript'],
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
