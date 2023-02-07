import { Button, Collapse, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

const CardDescription = ({ desc }) => {
  const [show, setShow] = useState(true);
  const ref = useRef();
  useEffect(() => {
    const status = ref.current.getBoundingClientRect().height > 110;
    if (status) setShow(e => !e);
  }, []);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <Collapse startingHeight={!show && 120} in={show}>
        <Text ref={ref}>{desc}</Text>
      </Collapse>
      {!show && (
        <Button
          variant="link"
          fontFamily="jet"
          color="tomato"
          size="sm"
          onClick={handleToggle}
          mt="1rem"
        >
          Ver más
        </Button>
      )}
    </>
  );
};

export default CardDescription;
