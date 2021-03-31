import React, { Component } from "react";
import styled from "styled-components";
import {Box, Image, Badge} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'



export default class CardProduto extends Component {
  render() {
    return (
      <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      >
        <Image src={this.props.product.photos[0]} alt={this.props.product.name} />

        <Box
          p="6" 
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
            {this.props.product.name}
          </Box>

          <Box textAlign="center">
            R$ {this.props.product.price}
          </Box>

          <Box
            as="button" 
            borderRadius="md" 
            bg="tomato" 
            color="white" 
            px={4} 
            h={8}
          >
            Saiba Mais
          </Box>
        </Box>
      </Box>
    );
  }
}
