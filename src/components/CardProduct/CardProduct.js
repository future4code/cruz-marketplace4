import React, { Component } from "react";
import styled from "styled-components";
import {Box, Image} from '@chakra-ui/react'


export default class CardProduto extends Component {
  render() {
    return (
      <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      >
        <Image 
          src={this.props.photos} 
          alt={this.props.alt}
          // boxSize="100%"
          margin="0 auto"
          width="50%"
        />

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
            {this.props.name}
          </Box>

          <Box textAlign="center">
            R$ {this.props.price}
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
