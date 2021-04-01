import React from "react";
import logo from "../img/logo-4used.png";
import american from "../img/american.png";
import aura from "../img/aura.png";
import bb from "../img/bb.png";
import boleto from "../img/boleto.png";
import bradesco from "../img/bradesco.png";
import diners from "../img/diners.png";
import elo from "../img/elo.png";
import hipercard from "../img/hipercard.png";
import itau from "../img/itau.png";
import master from "../img/master.png";
import paypal from "../img/paypal.png";
import santander from "../img/santander.png";
import visa from "../img/visa.png";
import fb from "../img/fb.png";
import insta from "../img/insta.png";
import twitter from "../img/twitter.png";
import styled from "styled-components";

const FooterStyle = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f1bf63;
`;

const ImgLogo = styled.img`
  background-color: #fffcef;
  border-radius: 50%;
  width: 55%;
  margin: 0 auto;
  padding: 10px 12px;
  box-shadow: 2px 1.5px 5px gray;
`;

const Icons = styled.img`
  width: 14%;
  border-radius: 4px;
  margin: 1.8px;
`;

const BankIcons = styled.img`
  width: 10.2%;
  border-radius: 4px;
  margin: 1.8px;
`;

const Copyright = styled.div`
  background-color: #fffcef;
  grid-column: 1 / 6;
  padding: 2px 0;
  color: #2e2e2e;
`;

const SectionContainer = styled.div`
  height: 45vh;
  width: 90%;
  padding: 25px 0 20px 0;
`;

const PaymentContainer = styled.div`
  display: flex;
  width: 20vw;
  flex-wrap: wrap;
`;

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 10vw;
`;

const List = styled.li`
  list-style: none;
  border-bottom: 1px solid #40a59b;
  width: 10vw;
`;

const InstitutionalList = styled.ul`
  padding: 0;
  text-align: left;
  margin-left: 63px;
  line-height: 1.9;
  color: #2e2e2e;
`;

const CategoryList = styled.ul`
  padding: 0;
  text-align: left;
  margin-left: 35px;
  line-height: 1.9;
  color: #2e2e2e;
`;

const Link = styled.a`
  text-decoration: none;
`;

const SocialLink = styled.a`
  margin: 2px;
`;

const SectionTitles = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  text-shadow: 2px 2px 2.5px gray;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  text-shadow: 2px 2px 2.5px gray;
  text-align: left;
  margin: 0 0 10px 33px;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <div>
            <div>
              <ImgLogo src={logo} alt="Logo da 4Used" class="img-logo-footer" />
            </div>
          </div>
          <SectionContainer>
            <SectionTitles>Institucional</SectionTitles>
            <InstitutionalList>
              <Link href="index.html" target="_blank">
                <List>Missão</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Visão</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Valores</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Compliance</List>
              </Link>
            </InstitutionalList>
          </SectionContainer>
          <SectionContainer>
            <CategoryTitle>Categorias</CategoryTitle>
            <CategoryList>
              <Link href="index.html" target="_blank">
                <List>Moda feminina</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Moda masculina</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Calçados</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Eletrônicos</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Decoração</List>
              </Link>
              <Link href="index.html" target="_blank">
                <List>Móveis</List>
              </Link>
            </CategoryList>
          </SectionContainer>
          <SectionContainer>
            <SectionTitles>Formas de pagamento</SectionTitles>
            <PaymentContainer>
              <Icons src={master} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons src={visa} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons
                src={hipercard}
                alt="Logo da 4Used"
                class="img-logo-footer"
              />
              <Icons src={elo} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons src={aura} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons src={diners} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons
                src={american}
                alt="Logo da 4Used"
                class="img-logo-footer"
              />
              <Icons src={paypal} alt="Logo da 4Used" class="img-logo-footer" />
              <Icons src={boleto} alt="Logo da 4Used" class="img-logo-footer" />
              <BankIcons src={bb} alt="Logo da 4Used" class="img-logo-footer" />
              <BankIcons
                src={bradesco}
                alt="Logo da 4Used"
                class="img-logo-footer"
              />
              <BankIcons
                src={itau}
                alt="Logo da 4Used"
                class="img-logo-footer"
              />
              <BankIcons
                src={santander}
                alt="Logo da 4Used"
                class="img-logo-footer"
              />
            </PaymentContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionTitles>Segue aqui</SectionTitles>
            <SocialContainer>
              <SocialLink href="index.html" target="_blank">
                <img src={fb} alt="Facebook Logo" />
              </SocialLink>
              <SocialLink href="index.html" target="_blank">
                <img src={twitter} alt="Twitter Logo" />
              </SocialLink>
              <SocialLink href="index.html" target="_blank">
                <img src={insta} alt="Instagram Logo" />
              </SocialLink>
            </SocialContainer>
          </SectionContainer>
          <Copyright>
            4Used &copy; 2021 - Todos os direitos reservados
          </Copyright>
        </FooterStyle>
      </div>
    );
  }
}
