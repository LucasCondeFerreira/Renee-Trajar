import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import ButtonBlue from '../../components/data-display/Button/ButtonBlue'
import FundoCitacao from '../../assets/images/fundo-citacao.png'
import ReneePicture from '../../assets/images/ReneePicture.png'


const ContainerSobre = styled.div`
    position: relative;

    padding: 50px 0 50px 98px;

    display: flex;
    flex-direction: column;
    columns: 2;
    flex-wrap: wrap;
    width: 98.5%;
`
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px; 
`

const H3 = styled.h3`
    font-family: 'Cormorant';

    position: relative;
    text-align: left;
    color: #014561;

    font-weight: 300;
    font-size: 38px;
    
    ::before {
    content: '';
    position: absolute;

    border-bottom: 3px solid #014561;
    width: 45px;
    
    left: 8%;
    bottom: 0;
    }
    :hover::before {
    border-bottom: 3px solid #014561;
    width: 250px;
    
    left: -5%;
    }
`

const P1 = styled.p`
    color: #333333;

`

const DivCitacao = styled.div`
    position: relative;
`

const ImgCitacao = styled.img` 
    position: absolute;
    z-index: -1;

    right: 0;

    top: -25%;
`

const P2 = styled.p`
    color: #1C86A4;

    font-family: 'Cormorant';
    font-style: italic;
    font-size: 25px;
`

export const SectionRenee = () => {
    return (
    <ContainerSobre>
        <Row>
        <section className="col-md-4 mr-4">
            <img src={ReneePicture} alt='Renee Trajar' />
        </section>
        <section className="col-md-7">
            <H3>Rene Trajar</H3>
            <P1>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. 

            Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
            </P1>
            <DivCitacao>
            <P2>
            “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” 
            </P2>
            <ImgCitacao src={FundoCitacao} alt="Fundo citação" />
            </DivCitacao>

            <ButtonBlue href="facebook.com" className='mt-3' text='Agende uma visita' />
        </section>
        </Row>
  </ContainerSobre>
    )
}

export default SectionRenee;