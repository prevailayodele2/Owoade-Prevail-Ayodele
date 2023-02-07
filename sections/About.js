import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Image from 'next/image';
import profile from '../public/assets/profile.jpg';
import Container from '../components/Container';
import AppContext from '../context/context';

const About = () => {
  const { about } = useContext(AppContext);
  const { description, title } = about;
  return (
    <Container title={title} index={1}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        spacing="5"
        justifyContent="space-between"
        alignItems="center"
        gridGap="5"
      >
        <Box w="xs" rounded="3xl" overflow="hidden" shadow="2xl">
          <Image src={profile} alt="profilees" layout="responsive" />
        </Box>
        <Text textAlign="justify" w={{ base: 'full', lg: 'lg' }}>
          {description}
        </Text>
      </Flex>
    </Container>
  );
};

export default About;
