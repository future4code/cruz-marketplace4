import React, { Component } from "react";
import styled from "styled-components";
import { Box, Image } from "@chakra-ui/react";
import Informacoes from "./Informacoes";
import { transformToReal } from "../../utils/transformToReal";

export default class CardProduto extends Component {
  render() {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2px 2px 5px #B2926C"
      >
        <Image
          src={this.props.photos}
          alt={this.props.alt}
          boxSize="100%"
          height="35vh"
        />

        <Box
          p="10"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            textAlign="center"
            color="red"
          >
            {this.props.name}
          </Box>

          <Box textAlign="center" margin="2px 0">
            {transformToReal(Number(this.props.price))}
          </Box>

          <Box>
            <Informacoes
              descricao={this.props.description}
              metododepagamento={this.props.paymentMethod}
              categoria={this.props.category}
              parcelamento={this.props.installments}
              item={this.props.product}
              preco={this.props.price}
              adicionarproduto={this.props.adicionarproduto}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
