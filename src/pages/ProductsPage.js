import React from 'react'
import styled from 'styled-components'
import { extendTheme, Button, ChakraProvider } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    brand: {
      100: "#ef4242"
    },
  },
})


const Main = styled.main`
 display: flex;
 flex-direction: column;
 align-items: center;
 /* align-items: center; */
`
const Categories = styled.nav`
    width: 70vw;
    height: 7rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 500;
    font-size: 1.2rem;
`
const Banner = styled.div`
  background: #7fcec9;
  width: 100vw;
  padding: 2rem;
  font-weight: 800;

  text-align: center;
  
`

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Discount = styled.span`
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 5px #333;
`

const Text1 = styled.span`
  color: #555967;
  font-size: 3.5rem;

  margin-top: -2rem;

`
const Text2 = styled.span`
  color: #333;
  font-size: 3.5rem;
  margin-top: -2rem;
`

const ContainerButton = styled.div`
  margin-top: 1rem;
`
const ContainerFilters = styled.div`
  padding: 4rem 0 1rem 0;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 500;
`
const Filter = styled.div`
  margin: 0 0.5rem;
`

const Inputs = styled.input`
  border-bottom: 2px solid black;
  margin-left: 1rem;
  width: 8rem;

  &:focus{
    border-bottom: 2px solid black;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`
const InputMax = styled(Inputs)``
const InputMin = styled(Inputs)``

const OrderSelect = styled.select`
  background: #40a59b;
  color: white;
  font-weight: 400;
  padding: 0.2rem 1rem;
  text-align: left;

  &:focus{
    border: 1px solid #4d4d59;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`

const ContainerProducts = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
  width: 80vw;
`
export default class ProductsPage extends React.Component {
  state = {
    inputMin: '',
    inputMax: ''
  }

  handleMin = (e) => {
    this.setState({ inputMin: e.target.value })
  }
  handleMax = (e) => {
    this.setState({ inputMax: e.target.value })
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Main>
          <Categories>
            <a href=''>Categoria</a>
            <a href=''>Categoria</a>
            <a href=''>Categoria</a>
            <a href=''>Categoria</a>
          </Categories>
          <Banner>
            <img />
            <ContainerText>
              <Discount>50%</Discount>
              <Text1>de desconto em todos</Text1>
              <Text2>os produtos da nossa seleção</Text2>
            </ContainerText>
            <ContainerButton>
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
                VEJA AQUI
              </Button>
            </ContainerButton>
          </Banner>

          <ContainerFilters>
            <Filter>
              <label>VALOR MIN.</label>
              <InputMin
                value={this.state.inputMin}
                onChange={this.handleMin}
                placeholder={'R$'}
                type='number'
              />
            </Filter>
            <Filter>
              <label>VALOR MÁX.</label>
              <InputMax
                value={this.state.inputMax}
                onChange={this.handleMax}
                placeholder={'R$'}
                type='number'
                focusBorderColor="brand.200"
              />
            </Filter>
            <OrderSelect>
              <option value={null}>ORDENAR POR</option>
            </OrderSelect>
          </ContainerFilters>

          <ContainerProducts>
          </ContainerProducts>
        </Main>
      </ChakraProvider>
    )
  }
}