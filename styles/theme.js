import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import { Link } from './components/link';
import { ButtonGroup } from './components/buttonGroup';

const theme = extendTheme({
  fonts: {
    jet: 'JetBrains Mono',
    montse: 'Montserrat',
    script: 'Euphoria Script',
  },
  colors: {
    tomato: '#ff0040',
    secondary: '#012a4a',
    third: '#00cecb',
  },
  components: {
    Button,
    ButtonGroup,
    Link,
  },
});
export default theme;
