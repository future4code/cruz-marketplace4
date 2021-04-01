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
    selectOrder: '',
    selectCategory: '',
    product: [{
      photos: 'https://www.tagesspiegel.de/images/deutscher-astronaut-alexander-gerst/22647738/1-format2.jpg',
      price: 20,
      alt: '',
      name: 'astro',
      category: 'moda feminina'
    },
    {
      photos: 'https://www.tagesspiegel.de/images/deutscher-astronaut-alexander-gerst/22647738/1-format2.jpg',
      price: 50,
      alt: '',
      name: 'castro',
      category: 'moda masculina'
    },
    {
      photos: 'https://www.tagesspiegel.de/images/deutscher-astronaut-alexander-gerst/22647738/1-format2.jpg',
      price: 10,
      alt: '',
      name: 'bastro',
      category: 'moda infantil'
    },
    {
      photos: 'https://www.tagesspiegel.de/images/deutscher-astronaut-alexander-gerst/22647738/1-format2.jpg',
      price: 80,
      alt: '',
      name: 'dastro',
      category: 'calçados'
    }
    ]
  };

  handleMin = (e) => {
    this.setState({ inputMin: e.target.value });
  };
  handleMax = (e) => {
    this.setState({ inputMax: e.target.value });
  };
  handleOrder = (e) => {
    this.setState({ selectOrder: e.target.value })
  }
  changingCategory = (category) => {
    this.setState({ selectCategory: category })
  }


  render() {
    console.log(this.changingCategory)
    const filtering = this.state.product.filter((item) => {
      if ((item.price >= this.state.inputMin || this.state.inputMin === '') && (item.price <= this.state.inputMax || this.state.inputMax === '')) {
        return true
      } else {
        return false
      }
    })

    const filterByCategory = filtering.filter((item) => {
      if (item.category === this.state.selectCategory || this.state.selectCategory === '') {
        return true
      } else {
        return false
      }
    })

    const listProducts = filterByCategory.map((item) => {
      return (
        <CardProduct
          photos={item.photos}
          alt={item.alt}
          name={item.name}
          price={item.price}
        />
      )
    })

    return (
      <ChakraProvider theme={theme}>
        <Main>
          <Categories>
            <p onClick={() => this.changingCategory('')}>Todas</p>
            <p onClick={() => this.changingCategory('moda feminina')}>Moda feminina</p>
            <p onClick={() => this.changingCategory('moda masculina')}>Moda masculina</p>
            <p onClick={() => this.changingCategory('moda infantil')}>Moda infantil</p>
            <p onClick={() => this.changingCategory('calçados')}>Calçados</p>
            <p onClick={() => this.changingCategory('eletrônicos')}>Eletrônicos</p>
            <p onClick={() => this.changingCategory('decoração')}>Decoração</p>
            <p onClick={() => this.changingCategory('móveis')}>Móveis</p>
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
            <OrderSelect onChange={this.handleOrder}>
              <option value={null}>ORDENAR POR</option>
              <option value={'maior'}>MAIOR PREÇO</option>
              <option value={'menor'}>MAIOR MENOR</option>
            </OrderSelect>
          </ContainerFilters>

          <ContainerProducts>
            {listProducts}

          </ContainerProducts>
        </Main>
      </ChakraProvider>
    );
  }
}
