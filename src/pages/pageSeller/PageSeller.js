import React from "react";
import {ProductRegistration, TitleH2, TitleH3, ProductsList, Products} from "./pageSeller.styled"
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { postProducts } from "../../controllers/postProduct";

export default class PageSeller extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    paymentMethod: "",
    category: "",
    photos: "",
    installments: ""
  }

  handleName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  handlePrice = (e) => {
    this.setState({ price: e.target.value })
  }

  handlePaymentMethod = (e) => {
    this.setState({ paymentMethod: e.target.value })
  }

  handleCategory = (e) => {
    this.setState({ category: e.target.value })
  }

  handlePhotos = (e) => {
    this.setState({ photos: e.target.value })
  }

  handleInstallments = (e) => {
    this.setState({ installments: e.target.value })
  }

  addProduct = async() => {
    
      const body = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        paymentMethod: this.state.paymentMethod,
        category: this.state.category,
        photos: [this.state.photos],
        installments: this.state.installments
      }
   
      const response = await postProducts(body)
      this.setState({ name: "", 
                      description: "", 
                      price: "",  
                      paymentMethod: "", 
                      category: "", 
                      photos: [], 
                      installments: ""})
      console.log(response)
      response === 200 ? alert("Produto adicionado com sucesso, boas vendas!") 
                       : alert("Algum erro ocorreu, não conseguimos cadastrar o seu produto, tente novamente.")
  }

  render() {
    return (
      <SimpleGrid columns={2} spacing={2}>
        <ProductRegistration>
          <TitleH2>Cadastre aqui seu produto</TitleH2>
          <Input 
            value={this.state.name}
            onChange={this.handleName}
            placeholder="Nome do produto" 
            variant="filled" 
            width="30vw" 
          />
          <Input
            value={this.state.price}
            onChange={this.handlePrice}
            placeholder="Preço"
            variant="filled"
            width="30vw"
            marginTop="9px"
          />
          <Textarea
            value={this.state.description}
            onChange={this.handleDescription}
            placeholder="Descrição"
            variant="filled"
            width="30vw"
            marginTop="9px"
          />
          <Input
            value={this.state.photos}
            onChange={this.handlePhotos}
            placeholder="URL da imagem"
            variant="filled"
            width="30vw"
            marginTop="2px"
          />
          <Select
            value={this.state.category}
            onChange={this.handleCategory}
            placeholder="Selecione uma categoria"
            variant="filled"
            width="30vw"
            margin="0 auto"
            marginTop="9px"
            color="#A1A9C1"
          >
            <option value="moda-feminina">Moda feminina</option>
            <option value="moda-masculina">Moda masculina</option>
            <option value="calcados">Calçados</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="decoracao">Decoração</option>
            <option value="moveis">Móveis</option>
          </Select>
          <TitleH3>Formas de pagamento</TitleH3>
          <Select
            value={this.state.paymentMethod}
            onChange={this.handlePaymentMethod}
            placeholder="Selecione uma forma de pagamento"
            variant="filled"
            width="23vw"
            margin="0 auto"

            marginTop="9px"
            color="#A1A9C1"
          >
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
            <option value="boleto-bancario">Boleto bancário</option>
            <option value="paypal">Paypal</option>
            <option value="pix">Pix</option>
          </Select>
          <Select
            value={this.state.installments}
            onChange={this.handleInstallments}
            variant="filled"
            width="18vw"
            margin="0 auto"
            marginTop="12px"
            color="#A1A9C1"
          >
            <option>Quantidade de parcelas</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Select>
          <Button
            onClick={this.addProduct}
            bg="brand.vermelho"
            color="#FFFFFF"
            _hover={{ bg: "#F56565" }}
            marginTop="25px"
          >
            CADASTRAR
          </Button>
        </ProductRegistration>
        <ProductsList>
          <TitleH2>Produtos cadastrados</TitleH2>
          <Grid templateColumns="420px 20px" justifyContent="center">
            <Products>Produto cadastrado 1</Products>
            <Button
              bg="brand.vermelho"
              color="#FFFFFF"
              size="xs"
              width="5%"
              _hover={{ bg: "#F56565" }}
              alignSelf="center"
            >
              x
            </Button>
            <Products>Produto cadastrado 2</Products>
            <Button
              bg="brand.vermelho"
              color="#FFFFFF"
              size="xs"
              width="5%"
              _hover={{ bg: "#F56565" }}
              alignSelf="center"
            >
              x
            </Button>
            <Products>Produto cadastrado 3</Products>
            <Button
              bg="brand.vermelho"
              color="#FFFFFF"
              size="xs"
              width="5%"
              _hover={{ bg: "#F56565" }}
              alignSelf="center"
            >
              x
            </Button>
          </Grid>
        </ProductsList>
      </SimpleGrid>
    );
  }
}
