import React from 'react';
import { Box, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { VscCircleOutline } from 'react-icons/vsc';

const Navigator = ({ children, title }) => (
  <Box
    maxW="2xl"
    w="full"
    shadow="lg"
    rounded="lg"
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.500')}
    overflow="hidden"
  >
    <HStack
      p="2"
      bg={useColorModeValue('gray.100', 'gray.600')}
      justify="flex-end"
      position="relative"
    >
      <HStack spacing="1">
        <Icon as={VscCircleOutline} w="6" h="6" color="red.400" />
        <Icon as={VscCircleOutline} w="6" h="6" color="yellow.400" />
        <Icon as={VscCircleOutline} w="6" h="6" color="green.400" />
      </HStack>
      <Box position="absolute" fontSize="sm" fontFamily="jet" w="full">
        <Text
          bg={useColorModeValue('white', 'gray.800')}
          textAlign="center"
          rounded="lg"
          w="50%"
          mx="auto"
          py={{ base: '-0.5', md: '1' }}
          fontSize={{ base: 'xs', md: 'inherit' }}
        >
          {title}
        </Text>
      </Box>
    </HStack>
    {children}
  </Box>
);

export default Navigator;
