import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import ButtonHome from '../../components/data-display/Button/ButtonHome'
import Banner from '../../assets/images/Banner_3.png'
import ImageTitle from '../../assets/images/ImageTitle.png'


const ContainerHome = styled.div`
    
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;

    position: relative;
    margin: 0 auto;
    padding: 50px 10%;

    display: flex;
    flex-direction: column;
    columns: 1;
    flex-wrap: wrap;
    width: 100%;
    height: 630px;
`
const Section = styled.section`
    width: 438px;

    position: absolute;

    bottom: 2.60rem;
`

const H3 = styled.h3` 
    font-family: 'Lato';
    font-weight: 300;
    font-size: 24px;
    color: #E5E5E5;

`

const Span = styled.span`
    font-weight: 700;
    font-size: 24px;
`


const DivLimit = styled.div`
    max-width: 1300px;
    display: flex;
`

export const SectionHome = () => {
    return (
    <ContainerHome>
    <DivLimit>
    <Section>
      <img src={ImageTitle} width={'100%'} className='pb-5' alt='Title' />
      <H3 className='pb-4 '>COMPRE HOJE, <Span>PAGUE EM ATÉ 3X COM 12% DE DESCONTO</Span> E TENHA 10 MESES PARA CONFECCIONAR!</H3>
      <ButtonHome href="facebook.com" text='FAÇA JÁ UM ORÇAMENTO' />
    </Section>
    </DivLimit>
  </ContainerHome>
    )
}

export default SectionHome;