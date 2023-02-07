import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Tag,
  TagLabel,
  Link,
  useColorModeValue,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';
import CardDescription from './CardDescription';

const CardProject = ({ card }) => {
  const {
    title,
    desc,
    links: { github, live },
    tags,
  } = card;
  return (
    <VStack
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg={useColorModeValue('white', 'gray.700')}
      p="4"
      rounded="md"
      shadow="lg"
    >
      <HStack w="full" justify="space-between">
        <Heading fontSize={{ base: 'xl', md: '2xl' }} maxW="2xs">
          {title}
        </Heading>
        <HStack spacing="1">
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
          {card.links.live && (
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
          )}
        </HStack>
      </HStack>
      <CardDescription desc={desc} />
      <Spacer />
      <Flex gridGap="2" wrap="wrap" w="full">
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
    </VStack>
  );
};

export default CardProject;
