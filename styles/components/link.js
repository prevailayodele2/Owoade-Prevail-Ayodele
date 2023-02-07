import { darken, whiten, mode } from '@chakra-ui/theme-tools';
export const Link = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      color: mode('white', 'cyan')(props),
      py: { base: '3', lg: '1' },
      px: { base: '100%', lg: '3' },
      fontSize: 'sm',
      rounded: 'md',
      _hover: {
        bg: mode(whiten('tomato', 20), darken('gray.600', 15))(props),
        textDecoration: 'none',
      },
      _focus: {
        bg: mode(whiten('tomato', 0), darken('gray.600', 15))(props),
      },
    }),
    secondary: {
      color: whiten('tomato', 40),
      fontSize: 'sm',
      fontFamily: 'jet',
      textDecoration: 'underline',
      fontWeight: '700',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};
