import React from 'react'
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
    text-align: center;
    background-color: #F1BF63;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
`;

const ImgLogo = styled.img`
    background-color: #FFFCEF;
    border-radius: 50%;
    width: 50%;
    padding: 10px 12px;
    box-shadow: 2px 1.5px 5px gray;
`;

const Copyright = styled.div`
    background-color: #FFFCEF;
    grid-column: 1 / 6;
    padding: 5px 0;
    color: #2E2E2E;
`;

const Lista = styled.li`
    list-style: none;
    border-bottom: 1px solid #40A59B;
    width: 10vw;
`;

const ListaInstitucional = styled.ul`
    padding: 0;
    text-align: left;
    margin-left: 66px;
    line-height: 1.9;
    color: #2E2E2E;
`;

const ListaCategorias = styled.ul`
    padding: 0;
    text-align: left;
    margin-left: 35px;
    line-height: 1.9;
    color: #2E2E2E;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

const TituloSecoes = styled.p`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 20px;
    text-shadow: 2px 2px 2.5px gray;
`;

const SecoesContainer = styled.div`
    height: 40vh;
    width: 90%;
    padding: 15px 0 25px 0;
`;

const Icones = styled.img`
    width: 14%;
    border-radius: 4px;
    margin: 1.5px;
`;

const PagamentoContainer = styled.div`
    display: flex;
    width: 20vw;
    flex-wrap: wrap;
`;

const IconesBanco = styled.img`
    width: 10.2%;
    border-radius: 4px;
    margin: 1.5px;
`;

const IconesRedesSociais = styled.img`
    width: 15%;
    border-radius: 4px;
    margin: 0 3px;
`;

const TituloCategoria = styled.p`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 20px;
    text-shadow: 2px 2px 2.5px gray;
    text-align: left;
    margin-left: 33px;
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
                    <SecoesContainer>
                        <TituloSecoes>Institucional</TituloSecoes>
                        <ListaInstitucional>
                            <Link href="index.html" target="_blank"><Lista>Missão</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Visão</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Valores</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Compliance</Lista></Link>
                        </ListaInstitucional>
                    </SecoesContainer>
                    <SecoesContainer>
                        <TituloCategoria>Categorias</TituloCategoria>
                        <ListaCategorias>
                            <Link href="index.html" target="_blank"><Lista>Moda feminina</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Moda masculina</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Calçados</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Eletrônicos</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Decoração</Lista></Link>
                            <Link href="index.html" target="_blank"><Lista>Móveis</Lista></Link>
                        </ListaCategorias>
                    </SecoesContainer>
                    <SecoesContainer>
                        <TituloSecoes>Formas de pagamento</TituloSecoes>
                        <PagamentoContainer>
                            <Icones src={master} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={visa} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={hipercard} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={elo} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={aura} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={diners} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={american} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={paypal} alt="Logo da 4Used" class="img-logo-footer" />
                            <Icones src={boleto} alt="Logo da 4Used" class="img-logo-footer" />
                            <IconesBanco src={bb} alt="Logo da 4Used" class="img-logo-footer" />
                            <IconesBanco src={bradesco} alt="Logo da 4Used" class="img-logo-footer" />
                            <IconesBanco src={itau} alt="Logo da 4Used" class="img-logo-footer" />
                            <IconesBanco src={santander} alt="Logo da 4Used" class="img-logo-footer" />
                        </PagamentoContainer>
                    </SecoesContainer>
                    <SecoesContainer>
                        <TituloSecoes>Segue aqui</TituloSecoes>
                        <Link href="index.html" target="_blank">
                            <IconesRedesSociais src={fb} alt="Logo da 4Used" class="img-logo-footer" />
                        </Link>
                        <Link href="index.html" target="_blank">
                        <IconesRedesSociais src={twitter} alt="Logo da 4Used" class="img-logo-footer" />
                        </Link>
                        <Link href="index.html" target="_blank">
                        <IconesRedesSociais src={insta} alt="Logo da 4Used" class="img-logo-footer" />
                        </Link>
                    </SecoesContainer>
                    <Copyright>4Used &copy; 2021  - Todos os direitos reservados</Copyright>
                </FooterStyle>
            </div>
        )
	}
}
