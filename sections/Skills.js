import React, { useContext } from 'react';
import {
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  Table,
} from '@chakra-ui/react';
import {
  DiCss3,
  DiHtml5,
  DiPhotoshop,
  DiReact,
  DiTerminal,
  DiDatabase,
} from 'react-icons/di';
import {
  SiApollographql,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiInkscape,SiMongodb,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiTypescript,
  SiMaterialui,
  SiPostgresql,
  SiDotnet,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiVisualstudio,
  SiAngular,
} from 'react-icons/si';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import Chakra from '../icons/Chakra';
import SkillCard from '../components/SkillCard';
import Container from '../components/Container';
import AppContext from '../context/context';

const Skills = () => {
  const data = {
    frontend: [
      { id: 1, title: 'html', Icon: DiHtml5 },
      { id: 2, title: 'css', Icon: DiCss3 },
      { id: 3, title: 'javascript', Icon: SiJavascript },
      { id: 4, title: 'Typescript', Icon: SiTypescript },
      { id: 5, title: 'reactjs', Icon: DiReact },
      { id: 6, title: 'Nextjs', Icon: SiNextdotjs },
      { id: 7, title: 'Angularjs', Icon: SiAngular },
      { id: 8, title: '.NET', Icon: SiDotnet },
      { id: 9, title: 'tailwindcss', Icon: SiTailwindcss },
      { id: 10, title: 'chakraui', Icon: Chakra },
      { id: 11, title: 'MaterialUI', Icon: SiMaterialui },
      { id: 12, title: 'Sass', Icon: SiSass },
    ],
    backend: [
      { id: 1, title: 'node', Icon: SiNodedotjs },
      { id: 2, title: 'graphql', Icon: SiGraphql },
      { id: 3, title: 'apollo', Icon: SiApollographql },
    ],
    databases: [
      { id: 1, title: 'postgresql', Icon: SiPostgresql },
      { id: 2, title: 'mysql', Icon: SiMysql },
      { id: 3, title: 'mongodb', Icon: SiMongodb },
    ],
    design: [
      { id: 1, title: 'photoshop', Icon: DiPhotoshop },
      { id: 2, title: 'figma', Icon: SiFigma },
    ],
    tools: [
      { id: 1, title: 'terminal', Icon: DiTerminal },
      { id: 2, title: 'VSCode', Icon: SiVisualstudio },
      { id: 3, title: 'git', Icon: SiGit },
      { id: 4, title: 'docker', Icon: SiDocker },
    ],
  };
  const tools = Object.keys(data);
  const { skills } = useContext(AppContext);
  const { title, tabs, desc } = skills;
  const icons = [CgWebsite, FaCode, DiDatabase, FaPaintBrush, FaTools];
  const headers = tabs.map((item, i) => ({
    id: i,
    name: item,
    icon: icons[i],
  }));

  return (
    <Container title={title} index={3}>
      <Text mt="10" maxW="xl">
        {desc}
      </Text>
      <Tabs
        w="full"
        bg={useColorModeValue('white', 'inherit')}
        mt="10"
        orientation="vertical"
        justifyContent="space-between"
      >
        <TabList
          mt="2"
          dir="vetical"
          fontFamily="jet"
          w={{ base: '40%', md: 'xs' }}
        >
          {headers.map(({ id, name, icon: Icon }) => (
            <Tab
              fontSize={['12px', 'md']}
              _focus={{ outline: 'none' }}
              justifyContent="left"
              key={id}
            >
              <Icon />
              <Text ml="4" textTransform="capitalize">
                {name}
              </Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tools.map(tab => (
            <TabPanel p={{ base: '0', md: 'inherit' }} key={tab}>
              <SimpleGrid
                gridTemplateColumns={{
                  base: 'repeat(auto-fill, minmax(70px,80px))',
                  md: 'repeat(auto-fill, 130px)',
                }}
                spacing={['1', '2']}
                justifyContent="flex-end"
              >
                {data[tab].map(item => (
                  <SkillCard key={item.id} item={item} />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Skills;
