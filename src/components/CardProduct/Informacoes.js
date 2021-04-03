import { transformToReal } from "../../utils/transformToReal";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";

export default function Informacoes(props) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="#EF4242"
          color="#FFFFFF"
          _hover={{ bg: "#F56565" }}
          marginTop="25px"
        >
          Saiba Mais
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{props.categoria}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <p>Descrição: {props.descricao}</p>
            <p>Preço: {transformToReal(Number(props.preco))}</p>
            <p>Método de Pagamento: {props.metododepagamento}</p>
            <p>Parcelamento: {props.parcelamento}x</p>
          </PopoverBody>
          <PopoverFooter>
            <Button
              onClick={() => props.adicionarproduto(props.item)}
              bg="#EF4242"
              color="#FFFFFF"
              _hover={{ bg: "#F56565" }}
              marginTop="25px"
            >
              Adicionar ao Carrinho
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
