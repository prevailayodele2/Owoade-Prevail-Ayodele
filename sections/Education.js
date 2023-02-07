import React, { useContext, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Collapse,
  Button,
  TabList,
  Tabs,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  Flex,
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { SiPlatzi } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

import Container from '../components/Container';
import CertModal from '../components/CertModal';
import AppContext from '../context/context';

const Education = () => {
  const certs = {
    univ: [
      {
        id: 1,
        title: 'Análisis de datos y NLP (Procesamiento de lenguaje natural)',
        url: '/assets/uni/analisis_de_datos_y_nlp.jpg',
      },
      {
        id: 2,
        title: 'ChatBoot',
        url: '/assets/uni/chat_boot.jpg',
      },
      {
        id: 3,
        title:
          'Diseño centrado en el humano, la transformación digital no empieza con una linea de código',
        url: '/assets/uni/diseño_centrado_en_el_humano.jpg',
      },
      {
        id: 4,
        title: 'El enfoque de competencias en la formación universitaria',
        url: '/assets/uni/el_enforque_de_competencias_en_la_formacion_univ.jpg',
      },
      {
        id: 5,
        title: 'Los nuevos desafios para la informática forense',
        url: '/assets/uni/los_nuevos_desafios_para_la_inf_forense.jpg',
      },
      {
        id: 6,
        title:
          'La seguridad informática en las empresas en tiempos de pandemia',
        url: '/assets/uni/la_seguridad_inf_en_las_empresas_en_pandemia.jpg',
      },
      {
        id: 7,
        title: 'Curso Programación con Oracle pls/sql 12c',
        url: '/assets/uni/programacion_con_oracle_plsql_12.jpg',
      },
      {
        id: 8,
        title: 'Curso Programción con oracle 12c',
        url: '/assets/uni/programacion_con_oracle_12c.jpg',
      },
      {
        id: 9,
        title: 'Curso introduccion a base de datos SQL',
        url: '/assets/uni/introduccion_bd_sql.jpg',
      },
      {
        id: 10,
        title: 'Taller de creacion de aplicaciones con PHP - Laravel',
        url: '/assets/uni/taller_creacion_de_aplicaciones_laravel.jpg',
      },
      {
        id: 11,
        title: 'Seminario de tecnologías emergentes EMTECH Ver4',
        url: '/assets/uni/tecnologias_emergentes_emtech_ver4.jpg',
      },
      {
        id: 12,
        title: 'Seminario Tercera versión de seguridad',
        url: '/assets/uni/semana_de_la_seguridad_informatica.jpg',
      },
      {
        id: 13,
        title: 'Seminario La importancia de la calidad del Software',
        url: '/assets/uni/la_importancia_de_la_calidad_de_sw.jpg',
      },
      {
        id: 14,
        title: 'Seminario Programacion oritenda a objetos en Java',
        url: '/assets/uni/poo_en_java.jpg',
      },
      {
        id: 15,
        title: 'Seminario Contenedores Docker',
        url: '/assets/uni/contenedores_docker.jpg',
      },
      {
        id: 16,
        title:
          'Memorandum: Tribunal paritario docente - estudiantil para examenes de competencia',
        url: '/assets/uni/memorandum_des_tribunal_proyectos_de_inv.jpg',
      },
      {
        id: 17,
        title:
          'Memorandum: Designación auxiliar de servicio diseño y administracion de base de datos 2019',
        url: '/assets/uni/memorandum_des_aux_servicio_titular_2019.jpg',
      },
      {
        id: 18,
        title:
          'Memorandum: Designación auxiliar de servicio diseño y administracion de base de datos 2018',
        url: '/assets/uni/memorandum_des_aux_servicio_titular_2018.jpg',
      },
      {
        id: 19,
        title:
          'Reconocimiento por dictar el curso-taller de tecnologias MSOffice 2016',
        url: '/assets/uni/instructor_curso_taller_MSwrd_MSxls_MSppt.jpg',
      },
    ],
    platzi: [
      {
        id: 20,
        title: 'Curso Básico de JavaScript',
        url: 'https://platzi.com/p/ArielScc/curso/1814-basico-javascript/diploma/detalle/',
      },
      {
        id: 21,
        title: 'Curso de Accesibilidad Web',
        url: 'https://platzi.com/p/ArielScc/curso/1802-accesibilidad-web/diploma/detalle/',
      },
      {
        id: 31,
        title: 'Curso de Asincronismo con JavaScript',
        url: 'https://platzi.com/p/ArielScc/curso/1789-asincronismo-js/diploma/detalle/',
      },
      {
        id: 41,
        title: 'Curso de Closures y Scope en JavaScript',
        url: 'https://platzi.com/p/ArielScc/curso/1807-scope/diploma/detalle/',
      },
      {
        id: 51,
        title: 'Curso de Debugging con Chrome DevTools',
        url: 'https://platzi.com/p/ArielScc/curso/1867-devtools/diploma/detalle/',
      },
      {
        id: 61,
        title: 'Curso de ECMAScript 6+',
        url: 'https://platzi.com/p/ArielScc/curso/1867-devtools/diploma/detalle/',
      },
      {
        id: 71,
        title: 'Curso de Expresiones Regulares',
        url: 'https://platzi.com/p/ArielScc/curso/1301-expresiones-regulares/diploma/detalle/',
      },
      {
        id: 81,
        title: 'Curso Definitivo de HTML y CSS',
        url: 'https://platzi.com/p/ArielScc/curso/2008-html-css/diploma/detalle/',
      },
      {
        id: 91,
        title: 'Curso de Frontend Developer',
        url: 'https://platzi.com/p/ArielScc/curso/1640-frontend-developer/diploma/detalle/',
      },
      {
        id: 10,
        title: 'Curso de Fundamentos de Bases de Datos',
        url: 'https://platzi.com/p/ArielScc/curso/1566-bd/diploma/detalle/',
      },
      {
        id: 111,
        title: 'Curso de Gestión de Dependencias y Paquetes con NPM',
        url: 'https://platzi.com/p/ArielScc/curso/1763-npm/diploma/detalle/',
      },
      {
        id: 12,
        title: 'Curso de Introducción a la Terminal y Línea de Comandos 2019',
        url: 'https://platzi.com/p/ArielScc/curso/1748-terminal-2019/diploma/detalle/',
      },
      {
        id: 131,
        title: 'Curso de Introducción a PHP con Composer',
        url: 'https://platzi.com/p/ArielScc/curso/2024-php/diploma/detalle/',
      },
      {
        id: 141,
        title: 'Curso de JavaScript Engine (V8) y el Navegador',
        url: 'https://platzi.com/p/ArielScc/curso/1798-javascript-navegador/diploma/detalle/',
      },
      {
        id: 151,
        title: 'Curso de Programación Funcional en JavaScript por Bedu',
        url: 'https://platzi.com/p/ArielScc/curso/1497-funcional-js/diploma/detalle/',
      },
      {
        id: 161,
        title: 'Curso de React.js',
        url: 'https://platzi.com/p/ArielScc/curso/1548-react/diploma/detalle/',
      },
      {
        id: 162,
        title: 'Curso de React Router y Redux',
        url: 'https://platzi.com/p/ArielScc/curso/1652-react-router-redux/diploma/detalle/',
      },
      {
        id: 171,
        title: 'Curso de Responsive Design: Maquetación Mobile First',
        url: 'https://platzi.com/p/ArielScc/curso/2030-mobile-first/diploma/detalle/',
      },
      {
        id: 181,
        title: 'Curso de Single Page Application con JavaScript Vanilla',
        url: 'https://platzi.com/p/ArielScc/curso/1787-spa-javascript/diploma/detalle/',
      },
      {
        id: 191,
        title: 'Curso de Tailwind CSS',
        url: 'https://platzi.com/p/ArielScc/curso/1822-tailwind-css/diploma/detalle/',
      },
      {
        id: 201,
        title: 'Curso Práctico de HTML y CSS',
        url: 'https://platzi.com/p/ArielScc/curso/1758-html-practico/diploma/detalle/',
      },
      {
        id: 211,
        title: 'Curso Práctico de Maquetación en CSS',
        url: 'https://platzi.com/p/ArielScc/curso/1744-practico-css/diploma/detalle/',
      },
      {
        id: 221,
        title: 'Curso Práctico de React JS',
        url: 'https://platzi.com/p/ArielScc/curso/1651-react-ejs/diploma/detalle/',
      },
      {
        id: 231,
        title: 'Curso Profesional de Git y GitHub',
        url: 'https://platzi.com/p/ArielScc/curso/1557-git-github/diploma/detalle/',
      },
      {
        id: 241,
        title: 'Curso Profesional de JavaScript',
        url: 'hhttps://platzi.com/p/ArielScc/curso/1642-javascript-profesional/diploma/detalle/',
      },
      {
        id: 251,
        title:
          'Taller de Creación de Router para Single Page App con JavaScript',
        url: 'https://platzi.com/p/ArielScc/curso/1771-singlepage-app/diploma/detalle/',
      },
    ],
  };
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const { education } = useContext(AppContext);
  const { title, univ, desc_u: descU, desc_c: descC } = education;
  return (
    <Container title={title} index={2}>
      <Flex
        gridGap={{ base: '5', lg: '10' }}
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
      >
        <Box
          colSpan="2"
          rowSpan="1"
          textAlign="left"
          mt="4"
          display={{ base: 'block' }}
          w={{ base: 'full', lg: '40%' }}
        >
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="500">
            {univ}
          </Heading>
          <Text mt="5" textAlign={{ base: 'justify', md: 'left' }}>
            {descU}
            {/** Estudié la carrera de Informática en la{' '}
            <Link
              variant="secondary"
              fontSize="md"
              target="_blank"
              href="http://informatica.umsa.bo/"
            >
              Universidad Mayor de San Andrés
            </Link>{' '}
            , donde tuve un buen rendimiento academico. Participé en varios
            eventos academicos como grupos de estudio y en eventos realizados
            por la facultad, como{' '}
            <Link
              variant="secondary"
              fontSize="md"
              href="http://festicyt.fcpn.edu.bo/"
              target="_blank"
            >
              Festicyt-UMSA
            </Link>{' '}
            y en la organizacion de las{' '}
            <Link
              variant="secondary"
              fontSize="md"
              href="https://oce.fcpn.edu.bo/"
              target="_blank"
            >
              Olimpiadas Escolares
            </Link>{' '}
            y el{' '}
            <Link
              variant="secondary"
              fontSize="md"
              href="http://www.congresobiotec.fcpn.edu.bo/"
              target="_blank"
            >
              Congreso de Biotecnologia
          </Link>* */}
          </Text>
        </Box>

        {/* <Tabs
          align="end"
          variant="enclosed"
          mt="5"
          w={{ base: 'full', lg: '50%' }}
        >
          <Text textAlign="left">{descC}</Text>
          <TabList>
            <Tab>
              <Icon
                as={FaUniversity}
                color="#2C73D2"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                University
              </Text>
            </Tab>
            
            {/**
              <Tab>
              <Icon
                as={SiUdemy}
                color="#EC5252"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                Udemy
              </Text>
            </Tab>
          * */}
          {/* </TabList>
          <TabPanels>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={180} in={show}>
                <List spacing={3} textAlign="left">
                  {certs.univ.map(item => (
                    <ListItem key={item.id} boxSizing="border-box" href="#">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      <CertModal item={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </TabPanel>
            <Button
              variant="link"
              size="sm"
              onClick={handleToggle}
              color="tomato"
              fontFamily="jet"
              textDecoration="underline"
              _hover={{
                textDecoration: 'none',
              }}
            >
              Show {show ? 'Less' : 'More'}
            </Button>
          </TabPanels> */}
      </Flex>
    </Container>
  );
};

export default Education;
