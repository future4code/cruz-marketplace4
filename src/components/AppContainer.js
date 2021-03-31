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

const productsMock = [
  {
      "photos": [
          "https://images.unsplash.com/photo-1571654681830-ef991494a42a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
      ],
      "description": "preto seminovo",
      "name": "Iphone 11",
      "category": "Eletrônicos",
      "installments": "5",
      "price": "4800",
      "paymentMethod": "Cartao",
      "id": "P8Vji2bRCHisY6oHmmTU"
  },
  {
      "paymentMethod": "card",
      "installments": 3,
      "description": "Esse é um produto muito legal!",
      "category": "Categoria 1",
      "price": 10,
      "photos": [
          "https://picsum.photos/300/200"
      ],
      "name": "Produto",
      "id": "Tlsl8zpFLWGAss9DMwmu"
  },
  {
      "description": "nunca usada",
      "photos": [
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      ],
      "name": "Blusa preta",
      "category": "Roupas",
      "paymentMethod": "Paypal",
      "price": "89",
      "installments": 1,
      "id": "UD8uTnDudBYBv5ev1Edm"
  },
  {
      "paymentMethod": "Cartao",
      "name": "Kindle",
      "category": "Eletrônicos",
      "description": "usado 2 meses",
      "price": "289",
      "installments": "4",
      "photos": [
          "https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ],
      "id": "d1DUDXtEWAshGdtsdX8Y"
  },
]

export class AppContainer extends Component {
  render() {
    return (
      
     
      <Container>
        <Header />
         <div style={{ height: "40vh" }} >
          {productsMock.map(product => (<CardProduto product={product}/>))}
         </div>
        <Footer />
      </Container>
    );
  }
}
