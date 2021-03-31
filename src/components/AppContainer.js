import React, { Component } from 'react';
import PageSeller from './PageSeller';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Footer from './Footer';
import Header from './Header';

const theme = extendTheme({
  colors: {
    brand: {
      cinza: "#4D4D59",
      vermelho: "#EF4242",
      verdeazulado: "#40A59B",
      amarelo: "#F1BF63",
      creme: "FFFCEF"
    },
  },
})

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <ChakraProvider theme={theme}>
          <PageSeller />
        </ChakraProvider>
        <Footer />
      </div>
    );
  }
}
