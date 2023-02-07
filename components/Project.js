import React from 'react';
import Image from 'next/image';
import {
  HStack,
  VStack,
  Box,
  chakra,
  Text,
  Tag,
  IconButton,
  Heading,
  useColorModeValue,
  Link,
  Flex,
  TagLabel,
} from '@chakra-ui/react';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';
import Navigator from './Navigator';

const Project = ({ data, index, type }) => {
  const {
    title,
    links: { github, live },
    description,
    tags,
    url,
  } = data;

  const position = index % 2 === 0 ? 'left' : 'right';

  return (
    <Flex
      direction={{
        base: 'column-reverse',
        md: position === 'left' ? 'row' : 'row-reverse',
      }}
      my="5"
      alignItems="center"
      h={{ base: 'inherit', md: 'md' }}
    >
      <VStack
        w={{ base: 'full', md: 'lg' }}
        spacing="5"
        alignItems={position === 'left' ? 'flex-start' : 'flex-end'}
        textAlign={position === 'left' ? 'left' : 'right'}
        mr={position === 'left' ? { base: 'inherit', md: '-32' } : 'inherit'}
        ml={position === 'right' ? { base: 'inherit', md: '-32' } : 'inherit'}
        zIndex="docked"
      >
        <Box p="4">
          <chakra.span
            fontSize={{ base: 'xs', md: 'sm' }}
            fontFamily="jet"
            color="tomato"
            textTransform="capitalize"
          >
            {type}
          </chakra.span>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} maxW="2xs">
            {title}
          </Heading>
        </Box>
        <Box
          rounded="xl"
          shadow="md"
          bg={useColorModeValue('white', 'gray.700')}
          p="4"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Text textAlign={position === 'left' ? 'left' : 'right'}>
            {description}
          </Text>
        </Box>
        <Box w={{ base: 'full', md: '60%', lg: '65%' }}>
          <Flex gridGap="2" wrap="wrap">
            {tags.map(tag => (
              <Tag
                key={tag}
                size="md"
                variant="outline"
                colorScheme="cyan"
                marginInlineStart="-0.5"
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Flex>
          <HStack
            spacing="1"
            mt="4"
            justifyContent={
              position === 'right'
                ? 'flex-start'
                : { base: 'flex-start', md: 'flex-end' }
            }
          >
            <IconButton
              as={Link}
              href={github}
              target="_blank"
              rel="noopener"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscGithubAlt size="20" />}
              role="link"
              aria-label="link to github"
            />
            <IconButton
              as={Link}
              href={live}
              target="_blank"
              rel="noopener"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscLinkExternal size="20" />}
              role="link"
              aria-label="link to live project"
            />
          </HStack>
        </Box>
      </VStack>
      <Navigator title={title} position={position}>
        <Image
          src={url}
          alt={`imagen ${title}`}
          width={300}
          height={50}
          layout="responsive"
          objectFit="fill"
        />
      </Navigator>
    </Flex>
  );
};

export default Project;
