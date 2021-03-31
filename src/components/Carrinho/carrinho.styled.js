import styled from "styled-components";

export const LinhaProduto = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const QuantidadeProduto = styled.span`
  background-color: #4d4d59;
  width: 25px;
  border-radius: 100%;
  text-align: center;
  color: white;
`;

export const NomeProduto = styled.p`
  color: white;
  font-size: 1.2em;
`;

export const ValorProduto = styled.p`
  color: #f1bf63;
`;

export const BotaoExcluir = styled.span`
  color: #f1bf63;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(255, 255, 250, 0.2);
  }
`;

export const ValorTotal = styled.span`
  background-color: #f1bf63;
  font-weight: bold;
  padding: 5px;
`;

export const BotaoFinalizar = styled.button`
  background-color: #40a59b;
  font-weight: bold;
  padding: 5px;
  outline: none;
  color: white;

  :hover {
    background-color: #38b2ac;
  }
`;

export const ConteinerFooterCarrinho = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const BotaoCarrinho = styled.span`
  background-color: #40a59b;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #38b2ac;
  }
`;

export const QuantidadeCarrrinho = styled.div`
  position: relative;
  top: -35px;
  left: 28px;

  background-color: #4d4d59;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  text-align: center;
  color: white;
  font-size: 0.9em;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
