import React from 'react';
import styled from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const ProductRegistration = styled.div`
    text-align: center;
    margin-bottom: 40px;
    border-right: 1px solid darkgray;
`;

const TitleH2 = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 25px 0;
    color: #2E2E2E;
`;

const TitleH3 = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 25px 0;
    color: #2E2E2E;
`;

const ProductsList = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 45vw;
    line-height: 2.2;
`;

const Products = styled.li`
    list-style: none;
    border-bottom: 2px solid #40A59B;
    text-align: left;
    padding-right: 5vw;
`;

export default class PageSeller extends React.Component {
    render() {
        return(
            <SimpleGrid columns={2} spacing={2}>
                <ProductRegistration>
                    <TitleH2>Cadastre aqui seu produto</TitleH2>
                    <Input 
                        placeholder="Nome do produto"
                        variant="filled"
                        width="30vw"
                    />
                    <Input
                        placeholder="Preço"
                        variant="filled"
                        width="30vw"
                        marginTop="9px"
                    />
                    <Textarea 
                        placeholder="Descrição"
                        variant="filled"
                        width="30vw"
                        marginTop="9px"                    />
                    <Input 
                        placeholder="URL da imagem"
                        variant="filled"
                        width="30vw"
                        marginTop="2px"
                    />
                    <Select  
                        placeholder="Selecione uma categoria"
                        variant="filled"
                        width="30vw"
                        margin="0 auto"
                        marginTop="9px"
                        color="#A1A9C1">
                        <option value="moda-feminina">Moda feminina</option>
                        <option value="moda-masculina">Moda masculina</option>
                        <option value="calcados">Calçados</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="decoracao">Decoração</option>
                        <option value="moveis">Móveis</option>
                    </Select>
                    <TitleH3>Formas de pagamento</TitleH3>
                    <SimpleGrid columns={2} spacing={1} width="28vw" margin="0 auto">
                    <Checkbox 
                        type="checkbox"
                        name="metodo-de-pagamento"
                        value="cartao-de-credito"
                        textAlign="left">                        
                        Cartão de crédito
                    </Checkbox>
                    <Checkbox
                        type="checkbox"
                        name="metodo-de-pagamento"
                        value="boleto"
                        textAlign="left">
                        Cartão de débito
                    </Checkbox>
                    <Checkbox
                        type="checkbox"
                        name="metodo-de-pagamento"
                        value="boleto"
                        textAlign="left">
                        Boleto
                    </Checkbox>
                    <Checkbox
                        type="checkbox"
                        name="metodo-de-pagamento"
                        value="boleto"
                        textAlign="left">
                        PayPal
                    </Checkbox>
                    </SimpleGrid>
                        <Select
                        variant="filled"
                        width="18vw"
                        margin="0 auto"
                        marginTop="12px"
                        color="#A1A9C1">
                            <option>Quantidade de parcelas</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Select>
                    <Button bg="brand.vermelho" color="#FFFFFF" _hover={{ bg: "#F56565" }} marginTop="25px">CADASTRAR</Button>
                </ProductRegistration>
                <ProductsList>
                    <TitleH2>Produtos cadastrados</TitleH2>
                    <Grid 
                        templateColumns="1fr 20px"
                    >
                        <Products>Produto cadastrado 1</Products>
                        <Button bg="brand.vermelho" color="#FFFFFF" size="xs" width="5%" _hover={{ bg: "#F56565" }} alignSelf="center">x</Button>
                        <Products>Produto cadastrado 2</Products>
                        <Button bg="brand.vermelho" color="#FFFFFF" size="xs" width="5%" _hover={{ bg: "#F56565" }} alignSelf="center">x</Button>
                        <Products>Produto cadastrado 3</Products>
                        <Button bg="brand.vermelho" color="#FFFFFF" size="xs" width="5%" _hover={{ bg: "#F56565" }} alignSelf="center">x</Button> 
                    </Grid>
                </ProductsList>
            </SimpleGrid>
        )
    }
}
