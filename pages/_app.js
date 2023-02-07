/* eslint-disable react/jsx-props-no-spreading */

import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/euphoria-script/400.css';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
