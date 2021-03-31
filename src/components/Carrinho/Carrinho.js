import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
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
} from "./carrinho.styled";

export default function Carrinho() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <BotaoCarrinho onClick={onOpen}>
          <FontAwesomeIcon color={"white"} icon={faShoppingCart} />
        </BotaoCarrinho>
        <QuantidadeCarrrinho>2</QuantidadeCarrrinho>
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
            <DrawerHeader color="white">CARRINHO</DrawerHeader>

            <DrawerBody>
              <LinhaProduto>
                <QuantidadeProduto>1</QuantidadeProduto>
                <div>
                  <NomeProduto>PRODUTO</NomeProduto>
                  <ValorProduto>R$ 25,00</ValorProduto>
                </div>
                <BotaoExcluir>
                  <CloseIcon />
                </BotaoExcluir>
              </LinhaProduto>
              <LinhaProduto>
                <QuantidadeProduto>1</QuantidadeProduto>
                <div>
                  <NomeProduto>PRODUTO</NomeProduto>
                  <ValorProduto>R$ 25,00</ValorProduto>
                </div>
                <BotaoExcluir>
                  <CloseIcon />
                </BotaoExcluir>
              </LinhaProduto>
            </DrawerBody>

            <DrawerFooter>
              <ConteinerFooterCarrinho>
                <ValorTotal>VALOR TOTAL: R$ 50,00</ValorTotal>
                <BotaoFinalizar>FINALIZAR COMPRA</BotaoFinalizar>
              </ConteinerFooterCarrinho>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
