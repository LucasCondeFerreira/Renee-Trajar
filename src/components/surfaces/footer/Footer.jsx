import React from 'react'
import styled from 'styled-components'
import '../../../assets/style/style.css'
import LogoFooter from '../../../assets/images/Logo-Footer.png'
import ArrowUp from '../../../assets/images/Arrow-Up.png'

const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    columns: 1;

    position: relative;

    padding: 15px 49px 40px 198px;
    
    width: 100%;
    max-height: 175px;

    border-top: solid 1px #BE9667;
`

const Div = styled.div`
    display: flex;
    position: relative;

    margin-top: 0.7rem;

    justify-content: space-between;

`

const P = styled.p`
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 400;

    color: #929292;
` 

const A = styled.a`
    display: block;
    position: absolute;

    width: 40px;
    height: 40px;

    bottom: 0;
    right: 0;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
`
const Img = styled.img`
    margin-top: 0.3rem;
    margin-left: 0.7rem;
`

export const Footer = () => {
    return (
        <ContainerFooter>
            <Div>
            <img src={LogoFooter} alt='Logo do rodapé' />
            <A href="facebook.com">
                <Img src={ArrowUp} alt='Arrow up' />
            </A>
            </Div>
            <Div>
                <P>CNPJ:04.487.685/0001-01</P>
                <P>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</P>
            </Div>
        </ContainerFooter>
    )
}

export default Footer;