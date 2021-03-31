import React, { Component } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fffcef;
`;

export class AppContainer extends Component {
  state = {
    page: 1,
  };

  onClickChangePage = (numPage) => {
    this.setState({ page: numPage });
  };

  render() {
    return (
      <Container>
        <Header onClickChangePage={this.onClickChangePage} />
        {this.state.page === 1 && (
          <div style={{ height: "40vh" }}>Comprador</div>
        )}
        {this.state.page === 2 && (
          <div style={{ height: "40vh" }}>Vendedor</div>
        )}
        <Footer />
      </Container>
    );
  }
}
