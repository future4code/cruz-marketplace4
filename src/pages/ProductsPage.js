import React from "react";
import styled from "styled-components";
import { extendTheme, Button, ChakraProvider } from "@chakra-ui/react";
import imageBanner from "../img/banner.jpg";
import CardProduct from "../components/CardProduct/CardProduct";
import { getProducts } from "../controllers/getProducts";

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
  width: 80vw;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 1rem;
`;
const Category = styled.p`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background: rgb(203, 213, 223, 0.7);
  }
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
  margin: 2rem 0;
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

  gap: 2rem;
  width: 80vw;
`;

export default class ProductsPage extends React.Component {
  state = {
    inputMin: "",
    inputMax: "",
    selectOrder: "",
    selectCategory: "",
    product: [],
  };

  componentDidMount() {
    this.getProductsApi();
  }

  getProductsApi = async () => {
    const response = await getProducts();
    this.setState({ product: response });
  };

  handleMin = (e) => {
    this.setState({ inputMin: e.target.value });
  };
  handleMax = (e) => {
    this.setState({ inputMax: e.target.value });
  };
  handleOrder = (e) => {
    this.setState({ selectOrder: e.target.value });
  };
  changingCategory = (category) => {
    this.setState({ selectCategory: category });
  };

  orderProducts = (array) => {
    switch (this.state.selectOrder) {
      case "nome":
        return array.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      case "maior":
        return array.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      case "menor":
        return array.sort((a, b) => {
          console.log(Number(b.price));
          return Number(a.price) - Number(b.price);
        });
      default:
        return array;
    }
  };
  render() {
    let filtering = this.orderProducts(this.state.product);
    filtering = filtering.filter((item) => {
      if (Number(item.price) < this.state.inputMin) {
        return false;
      }
      return true;
    });

    filtering = filtering.filter((item) => {
      if (Number(item.price) > this.state.inputMax && this.state.inputMax) {
        return false;
      }
      return true;
    });

    const filterByCategory = filtering.filter((item) => {
      if (
        item.category === this.state.selectCategory ||
        this.state.selectCategory === ""
      ) {
        return true;
      } else {
        return false;
      }
    });

    const filterByName = filterByCategory.filter((item) => {
      const itemName = item.name.toLowerCase();
      const inputSearch = this.props.inputSearch.toLowerCase();

      return itemName.includes(inputSearch);
    });

    const listProducts = filterByName.map((item) => {
      return (
        <CardProduct
          photos={item.photos}
          alt={item.alt}
          name={item.name}
          price={item.price}
        />
      );
    });

    return (
      <ChakraProvider theme={theme}>
        <Main>
          <Categories>
            <Category onClick={() => this.changingCategory("")}>Todas</Category>
            <Category onClick={() => this.changingCategory("moda-feminina")}>
              Moda feminina
            </Category>
            <Category onClick={() => this.changingCategory("moda-masculina")}>
              Moda masculina
            </Category>
            <Category onClick={() => this.changingCategory("moda-infantil")}>
              Moda infantil
            </Category>
            <Category onClick={() => this.changingCategory("calcados")}>
              Calçados
            </Category>
            <Category onClick={() => this.changingCategory("eletronicos")}>
              Eletrônicos
            </Category>
            <Category onClick={() => this.changingCategory("decoracao")}>
              Decoração
            </Category>
            <Category onClick={() => this.changingCategory("moveis")}>
              Móveis
            </Category>
          </Categories>
          {!this.props.inputSearch && (
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
          )}

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
            <OrderSelect onChange={this.handleOrder}>
              <option value={""}>ORDENAR POR</option>
              <option value={"maior"}>MAIOR PREÇO</option>
              <option value={"menor"}>MENOR PREÇO</option>
              <option value={"nome"}>NOME</option>
            </OrderSelect>
          </ContainerFilters>

          <ContainerProducts>{listProducts}</ContainerProducts>
        </Main>
      </ChakraProvider>
    );
  }
}
