import React, { useContext } from 'react';
import {
  chakra,
  List,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Container from '../components/Container';
import AppContext from '../context/context';

const Experience = () => {
  const { experience } = useContext(AppContext);
  const { job_a: jobA, job_b: jobB, title } = experience;
  return (
    <Container title={title} index={4}>
      <Accordion defaultIndex={[0]} allowMultiple mt="10">
        <AccordionItem>
          <AccordionButton>
            <Text
              as="h3"
              flex="1"
              textAlign="left"
              fontSize="lg"
              fontFamily="jet"
              color="blue.600"
              fontWeight="700"
            >
              Symphony{' '}
              <chakra.span fontSize="xs">Dec/2021 - Nov/2022</chakra.span>
            </Text>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4} textAlign={{ base: 'justify', md: 'left' }}>
            <List spacing={3}>
              {jobA.map(job => (
                <ListItem key={job}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {job}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionButton>
            <Text
              as="h3"
              flex="1"
              textAlign="left"
              fontSize="lg"
              fontFamily="jet"
              color="blue.600"
              fontWeight="700"
            >
              Fam - Bolivia{' '}
              <chakra.span fontSize="xs">Oct/2018 - Jun/2019</chakra.span>
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              {jobB.map(job => (
                <ListItem key={job}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {job}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem> */}
      </Accordion>
    </Container>
  );
};

export default Experience;
