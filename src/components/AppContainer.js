import React, { Component } from "react";
import PageSeller from "../pages/pageSeller/PageSeller";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import ProductsPage from "../pages/ProductsPage";

const theme = extendTheme({
  colors: {
    brand: {
      cinza: "#4D4D59",
      vermelho: "#EF4242",
      verdeazulado: "#40A59B",
      amarelo: "#F1BF63",
      creme: "FFFCEF",
    },
  },
});

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFCEF;
`;

export class AppContainer extends Component {
  state = {
    page: 1,
    listProducts: [],
    inputSearch: "",
  };

  onClickChangePage = (numPage) => {
    this.setState({ page: numPage });
  };

  handleSearch = (e) => {
    this.setState({ inputSearch: e.target.value });
  };

  addShoppingCart = (productToBuy) => {
    const isInCart = this.state.listProducts.find((product) => {
      return product.id === productToBuy.id;
    });

    if (isInCart) {
      const newListProducts = this.state.listProducts.map((product) => {
        if (product.id === productToBuy.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      this.setState({ listProducts: newListProducts });
    } else {
      const newProduct = {
        name: productToBuy.name,
        price: productToBuy.price,
        quantity: 1,
        id: productToBuy.id,
      };

      this.setState({ listProducts: [...this.state.listProducts, newProduct] });
    }
  };

  deleteProductShoppingCart = (productToDelete) => {
    if (productToDelete.quantity === 1) {
      const newListProducts = this.state.listProducts.filter((product) => {
        return product.id !== productToDelete.id;
      });
      this.setState({ listProducts: newListProducts });
    } else {
      const newListProducts = this.state.listProducts.map((product) => {
        if (product.id === productToDelete.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      this.setState({ listProducts: newListProducts });
    }
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Container>
          <Header
            inputSearch={this.state.inputSearch}
            handleSearch={this.handleSearch}
            deleteProductShoppingCart={this.deleteProductShoppingCart}
            listProducts={this.state.listProducts}
            onClickChangePage={this.onClickChangePage}
            page={this.state.page}
          />
          {this.state.page === 1 && (
            <ProductsPage
            adicionarproduto={this.addShoppingCart}
            inputSearch={this.state.inputSearch} />
          )}
          {this.state.page === 2 && <PageSeller />}
          <Footer />
        </Container>
      </ChakraProvider>
    );
  }
}
