import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { SearchIcon } from '@chakra-ui/icons'
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { extendTheme, Button } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    brand: {
      100: "#ef4242"
    },
  },
})

const Container = styled.header`
    background: #f1bf63;
    padding: 1rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ConteinerRight = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
    width: 9rem;
`
const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    background: #fad487;
    border-radius: 5px; 

`
const SearchBox = styled.input`
    border: none;
    padding: .5rem .8rem;
    width: 15rem;
    background: #fad487;
    border-radius: 2px;
    font-size: 10pt;

    &::-webkit-input-placeholder {
      color: black;
    }
    &:focus{
      outline: none;
      border: 1px solid #dfb155;
      box-shadow: 0 0 0 0;
    }
`

const ButtonSearch = styled.button`    
    display: flex;
    align-items: center;

    padding: 0.5rem;
    background-color: #fad487; 
    border: none;

    &:focus{
      outline: none;
      border: 0 none;
      box-shadow: 0 0 0 0;
    }
    &:hover{
      opacity: 0.8;
    }
    &:active{
      opacity: 0.5;
    }
`

const ButtonCart = styled.button`
    background: #40A59B;
    border: none;
    padding: 0.6rem;
    border-radius: 100%;
    margin: 0 3rem;

    display: flex;
    align-items: center;

    &:hover{
      background: #31867e;
    }

    &:focus{
      outline: none;
      border: 0 none;
      box-shadow: 0 0 0 0;
    }

    &:active{
      opacity: 0.8;
    }
`
const CartCounter = styled.div`
  background: #4d4d59;
  border-radius: 100%;
  color: white;
  padding: 0.1rem 0.5rem;
  
  position: absolute;
  margin-bottom: 2rem;
  margin-left: 1.1rem;
`



export default class Header extends React.Component {

  state = {
    inputSearch: ''
  }
  handleSearch = (e) => {
    this.setState({ inputSearch: e.target.value })
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Container>
          <Image src={logo} />
          <ConteinerRight>
            <ContainerSearch>
              <SearchBox
                value={this.state.inputSearch}
                onChange={this.handleSearch}
                placeholder={'O que você procura hoje?'}
              />
              <ButtonSearch>
                <SearchIcon w={5} h={5} />
              </ButtonSearch>
            </ContainerSearch>

            <ButtonCart>
              <IconContext.Provider
                value={{ color: 'white', size: '20px' }}
              >
                <div>
                  <FiShoppingCart w={6} h={6} />
                </div>
              </IconContext.Provider>
              <CartCounter>1</CartCounter>
            </ButtonCart>
            <Button
              bg='brand.100'
              size='sm'
              color='white'
              _hover={{ bg: "#d11818" }}
              _active={{
                bg: "#ef4242",
                transform: "scale(0.98)"
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px #a03030, 0 1px 1px rgba(0, 0, 0, .15)",
              }}>
              QUERO VENDER
              </Button>
          </ConteinerRight>
        </Container>
      </ChakraProvider>

    )
  }
}