import React, { useContext } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import Container from '../components/Container';
import AppContext from '../context/context';
import Link from 'next/link'

const Contact = () => {
  const { contact } = useContext(AppContext);
  const { desc, title } = contact;
  return (
    <Container title={title} index={6}>
      <Box mt="5" textAlign="center">
        <Text maxW="2xl" mx="auto" my="4">
          {desc}
        </Text>
        <Button
          variant="secondary"
          maxW="xs"
          size="lg"
          leftIcon={<FiMail />}
          _hover={{
            textDecoration: 'none',
          }}>
          <Link legacyBehavior href="mailto:ayodeleprevail@gmail.com">
            <a href="mailto:ayodeleprevail@gmail.com">Message me</a></Link>
        </Button>
      </Box>
    </Container>
  );
};
export default Contact;
