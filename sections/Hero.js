import { Heading, Text, chakra, Button, Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import heroimage from '../public/assets/hero.svg';
import AppContext from '../context/context';

const Hero = ({ referencie }) => {
  const { hero } = useContext(AppContext);
  const { greet, button, prof, title } = hero;
  return (
    <chakra.header
      ref={referencie}
      h="100vh"
      w="full"
      bg="radial-gradient(100% 225% at 0% 0%, #DE3E3E 0%, #1b283d 100%),
      radial-gradient(100% 225% at 100% 0%, #ff6b00 0%, #ff0000 100%),
      linear-gradient(181deg, #CE63B7 0%, #ED6283 100%),
      radial-gradient(100% 120% at 75% 0%, #A74600 0%, #000000 100%),
      linear-gradient(305deg, #004596 0%, #150093 50%)"
      bgBlendMode="overlay, color-dodge, color-burn, color-dodge, normal"
      transition=".8s"
      id={title}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        h="full"
        maxW={{ lg: '5xl', xl: '8xl' }}
        m="auto"
        px={{ base: '4', lg: 'none' }}
      >
        <Box align="flex-start" color="white" alignSelf="self-start" mt="40">
          <chakra.span fontFamily="jet" color="tomato" fontSize="lg">
            👋🏻 {greet}
          </chakra.span>
          <Heading
            as="h1"
            fontSize={['3xl', '4xl', '5xl', '6xl', '7xl', '8xl']}
          >
            Owoade Prevail
          </Heading>
          <Text
            maxW={['full', 'full', 'xl']}
            textAlign={{ base: 'justify', md: 'left' }}
            fontSize={['2xl', '3xl', '4xl', '5xl']}
            lineHeight="10"
            textColor="third"
            fontWeight="500"
          >
            {prof}
          </Text>
          <Button
            as="a"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener"
            leftIcon={<FaDownload />}
            variant="secondary"
            textTransform="capitalize"
            w={{ base: 'full', lg: 'xs' }}
            mt="10"
            role="button"
          >
            {button}
          </Button>
        </Box>
        <Box alignSelf="flex-end">
          <Image src={heroimage} alt="Picture of the author" width={600} />
        </Box>
      </Flex>
    </chakra.header>
  );
};
export default Hero;
