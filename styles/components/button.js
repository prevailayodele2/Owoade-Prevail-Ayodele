/* eslint-disable react/jsx-props-no-spreading */
import { darken, whiten, mode } from '@chakra-ui/theme-tools';

const Button = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      color: mode('white', 'cyan')(props),

      fontSize: 'sm',
      _hover: {
        bg: mode(whiten('tomato', 20), darken('gray.600', 15))(props),
      },
      _focus: {
        bg: mode(whiten('tomato', 0), darken('gray.600', 15))(props),
      },
    }),
    secondary: props => ({
      color: 'white',
      py: '4',
      px: '4',
      bg: 'tomato',
      w: 'full',
      rounded: 'full',
      fontFamily: 'jet',
      _hover: {
        bg: mode(whiten('tomato', 20), darken('tomato', 10))(props),
        shadow: 'lg',
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};

export default Button;
