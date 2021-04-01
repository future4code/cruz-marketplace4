import React from "react";
import styled from "styled-components";
import { extendTheme, Button, ChakraProvider } from "@chakra-ui/react";
import imageBanner from "../img/banner.jpg";
import CardProduct from '../components/CardProduct/CardProduct'


const theme = extendTheme({
  colors: {
    brand: {
      100: "#fe9600",
    },
  },
});

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Categories = styled.nav`
  width: 70vw;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Banner = styled.div`
  background-image: url(${imageBanner});
  background-size: 100% 100%;
  width: 100%;
  height: 60vh;
  padding: 2rem;
  font-weight: 800;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 45%;
`;
const Discount = styled.span`
  color: white;
  margin-top: -2rem;
  font-size: 5rem;
  text-shadow: 2px 2px 5px #333;
`;

const Texts = styled.span`
  font-size: 4rem;
  text-shadow: 2px 2px 5px #333;
  margin-top: -2.2rem;
  color: #cbd5e0;
`;
const Text1 = styled(Texts)``;
const Text2 = styled(Texts)``;

const ContainerButton = styled.div`
  width: 45%;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerFilters = styled.div`
  padding: 4rem 0 1rem 0;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 500;
`;
const Filter = styled.div`
  margin: 0 0.5rem;
`;

const Inputs = styled.input`
  border-bottom: 2px solid black;
  margin-left: 1rem;
  width: 8rem;

  &:focus {
    border-bottom: 2px solid black;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`;
const InputMax = styled(Inputs)``;
const InputMin = styled(Inputs)``;

const OrderSelect = styled.select`
  background: #40a59b;
  color: white;
  font-weight: 400;
  padding: 0.2rem 1rem;
  text-align: left;

  &:focus {
    border: 1px solid #4d4d59;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`;

const ContainerProducts = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
  width: 80vw;
`;
export default class ProductsPage extends React.Component {
  state = {
    inputMin: "",
    inputMax: "",
  };

  handleMin = (e) => {
    this.setState({ inputMin: e.target.value });
  };
  handleMax = (e) => {
    this.setState({ inputMax: e.target.value });
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Main>
          <Categories>
            <a href="">Moda feminina</a>
            <a href="">Moda masculina</a>
            <a href="">Moda infantil</a>
            <a href="">Calçados</a>
            <a href="">Eletrônicos</a>
            <a href="">Decoração</a>
            <a href="">Móveis</a>
          </Categories>
          <Banner>
            <ContainerText>
              <Discount>50%</Discount>
              <Text1>de desconto</Text1>
              <Text2>na moda infantil</Text2>
            </ContainerText>
            <ContainerButton>
              <Button
                bg="brand.100"
                size="sm"
                color="white"
                _hover={{ bg: "#ED8936" }}
                _active={{
                  bg: "#F6AD55",
                  transform: "scale(0.98)",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px #DD6B20, 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
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
                placeholder={"R$"}
                type="number"
              />
            </Filter>
            <Filter>
              <label>VALOR MÁX.</label>
              <InputMax
                value={this.state.inputMax}
                onChange={this.handleMax}
                placeholder={"R$"}
                type="number"
                focusBorderColor="brand.200"
              />
            </Filter>
            <OrderSelect>
              <option value={null}>ORDENAR POR</option>
            </OrderSelect>
          </ContainerFilters>

          <ContainerProducts>
            <CardProduct 
              photos={'https://th.bing.com/th/id/Rd2da019ba746b70ffa10c0faeac177dd?rik=jmIr1Iy0NWTR2Q&riu=http%3a%2f%2fwww.filhovemver.com.br%2fwp-content%2fuploads%2f2014%2f11%2fpor-do-sol-lindo.jpg&ehk=6PrYNWoz7PPw7MXceXpaPbiun%2bLd8I95xN6t%2f206Vuo%3d&risl=&pid=ImgRaw'}
              alt={'Nome da foto'}
              name={'Por do sol'}
              price={'20,00'}
              // name={'foto'}
            />
          </ContainerProducts>
        </Main>
      </ChakraProvider>
    );
  }
}
