import React from "react";
import {ProductRegistration, TitleH2, TitleH3, ProductsList, Products} from "./pageSeller.styled"
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { postProducts } from "../../controllers/postProduct";
import { getProducts } from "../../controllers/getProducts";
import { delProduct } from "../../controllers/delProduct";


export default class PageSeller extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    paymentMethod: "",
    category: "",
    photos: "",
    installments: "",
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  componentDidUpdate() {
    this.getProducts()
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
                       : alert("Algum erro ocorreu, n??o conseguimos cadastrar o seu produto, tente novamente.")
  }

  getProducts = async() => {
      const response  = await getProducts()
      this.setState({ products: response })
  }

  delProduct = async(id) => {
      const response = await delProduct(id)
      response === 200 ? alert("Produto exclu??do com sucesso!") 
                       : alert("Algum erro ocorreu, n??o conseguimos excluir o seu produto, tente novamente.")
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
            placeholder="Pre??o"
            variant="filled"
            width="30vw"
            marginTop="9px"
          />
          <Textarea
            value={this.state.description}
            onChange={this.handleDescription}
            placeholder="Descri????o"
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
            <option value="moda-infantil">Moda infantil</option>
            <option value="calcados">Cal??ados</option>
            <option value="eletronicos">Eletr??nicos</option>
            <option value="decoracao">Decora????o</option>
            <option value="moveis">M??veis</option>
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
            <option value="cartao-de-credito">Cart??o de cr??dito</option>
            <option value="cartao-de-debito">Cart??o de d??bito</option>
            <option value="boleto-bancario">Boleto banc??rio</option>
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
            {this.state.products.map((product) => { 
              return(
                <Products>
                  <Grid templateColumns="400px 20px" justifyContent="center">
                  {product.name}
                  <Button
                  onClick={() => this.delProduct(product.id)}
                  bg="brand.vermelho"
                  color="#FFFFFF"
                  size="xs"
                  _hover={{ bg: "#F56565" }}
                  alignSelf="center">
                  x
                  </Button>
                  </Grid>

                </Products>
              )
            }
            )}
        </ProductsList>
      </SimpleGrid>
    );
  }
}
