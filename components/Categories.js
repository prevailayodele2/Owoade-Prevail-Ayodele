import { Heading, chakra, Box } from '@chakra-ui/react';
import React from 'react';

const Categories = ({ children }) => (
  <Box maxW="5xl" mx="auto" my="20">
    <Heading fontFamily="jet" my="10">
      <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
        01.{' '}
      </chakra.span>
      Acerca
    </Heading>
    {children}
  </Box>
);

export default Categories;
