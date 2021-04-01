import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CloseIcon } from "@chakra-ui/icons";
import {
  BotaoCarrinho,
  BotaoExcluir,
  BotaoFinalizar,
  ConteinerFooterCarrinho,
  LinhaProduto,
  NomeProduto,
  QuantidadeProduto,
  ValorProduto,
  ValorTotal,
  QuantidadeCarrrinho,
  ContainerHeader,
} from "./carrinho.styled";
import { transformToReal } from "../../utils/transformToReal";

export default function Carrinho(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const priceTotal = () => {
    let curr = 0;

    for (const product of props.listProducts) {
      const valorTotalPorProduto = product.quantity * product.price;
      curr += valorTotalPorProduto;
    }
    return curr;
  };

  const products = props.listProducts.map((product) => {
    const { name, price, quantity, id } = product;
    return (
      <LinhaProduto key={id}>
        <QuantidadeProduto>{quantity}</QuantidadeProduto>
        <div>
          <NomeProduto>{name.toUpperCase()}</NomeProduto>
          <ValorProduto>{transformToReal(price * quantity)}</ValorProduto>
        </div>
        <BotaoExcluir>
          <CloseIcon />
        </BotaoExcluir>
      </LinhaProduto>
    );
  });

  return (
    <>
      <div style={{ margin: "0 3rem" }}>
        <BotaoCarrinho onClick={onOpen}>
          <FontAwesomeIcon color={"white"} icon={faShoppingCart} />
        </BotaoCarrinho>
        <QuantidadeCarrrinho>{props.listProducts.length}</QuantidadeCarrrinho>
      </div>
      <Drawer
        colorScheme={"red"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"xs"}
      >
        <DrawerOverlay>
          <DrawerContent bg={"#EF4242 "}>
            <DrawerHeader color="white">
              <ContainerHeader>
                <h2>CARRINHO</h2>
                <Button
                  onClick={onClose}
                  _hover={{ bg: "#4A5568" }}
                  _active={{
                    transform: "scale(0.98)",
                  }}
                  _focus={{
                    border: "none",
                  }}
                  background={"#2E2E2E"}
                  size="xs"
                >
                  Fechar
                </Button>
              </ContainerHeader>
            </DrawerHeader>

            <DrawerBody>{products}</DrawerBody>

            <DrawerFooter>
              <ConteinerFooterCarrinho>
                <ValorTotal>
                  VALOR TOTAL: {transformToReal(priceTotal())}
                </ValorTotal>
                <BotaoFinalizar>FINALIZAR COMPRA</BotaoFinalizar>
              </ConteinerFooterCarrinho>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
