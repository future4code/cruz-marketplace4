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
  render() {
    return (
      <Container>
        <Header />
        <div style={{ height: "40vh" }} />
        <Footer />
      </Container>
    );
  }
}
