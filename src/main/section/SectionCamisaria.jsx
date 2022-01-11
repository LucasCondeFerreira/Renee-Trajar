import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import ButtonBlue from '../../components/data-display/Button/ButtonBlue'
import Camisa1 from '../../assets/images/Camisa-1.png'



const ContainerCamisaria = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;

    padding: 80px 35px 26px 136px;

    max-height: 635px;

    display: flex;
    flex-wrap: wrap;
`
    
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;     

  flex-direction: row;


  margin-right: -15px;
  margin-left: -15px; 
`

const DivImagem = styled.div`
    position: relative;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%; 
`

const Img = styled.img`
    position: absolute;
`

const BordaImagem = styled.div`
    top: 2%;
    left: -1.6%;

    width: 550px;
    height: 464px;

    z-index: 1;
    position: absolute;

    border: solid 1px #1C86A4;
`


const DivTexto = styled.div`
    position: relative;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%; 

  margin-top: 2.5rem;
  padding-top: 2rem;
`

const BordaTexto = styled.div`
    top: 2%;
    right: 1%;

    width: 1100px;
    height: 385px;

    z-index: -1;
    position: absolute;

    border: solid 1px #1C86A4;
`


const H2 = styled.h2`
    font-family: 'Cormorant';
    font-size: 62px;
    font-weight: 300;

    text-transform: uppercase;

    padding: 0;
    margin: 0 0 -15px 0;

    color: #014561;
`

const H5 = styled.h5`
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 400;
    
    text-transform: uppercase;

    color: #C4C4C4;
`

const DivList = styled.div`
    gap: 80px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px; 
`

const ListItem = styled.li`
    font-family: 'Cormorant';
    font-style: italic;
    font-size: 24px;
    font-weight: 400;

    color: #727272;
`


export const SectionCamisaria = () => {
    return (
    <ContainerCamisaria>
              <Row>
                <DivImagem>
                  <Img src={Camisa1} alt="" />
                  <BordaImagem></BordaImagem>
                </DivImagem>
                <DivTexto>
                  <H2>Camisaria</H2>
                  <H5>confeccionadas artesanalmente</H5>
                  <DivList>
                    <ul>
                      <ListItem>
                        100% algodão
                      </ListItem>
                      <ListItem>
                        Monograma
                      </ListItem>
                      <ListItem>
                        Slim
                      </ListItem>
                    </ul>
                    <ul>
                      <ListItem>
                        Nacionais e Importadas
                      </ListItem>
                      <ListItem>
                        Tradicionais e Esportivas
                      </ListItem>
                      <ListItem>
                        Casamentos
                      </ListItem>
                    </ul>
                    <BordaTexto></BordaTexto>
                  </DivList>
                  <ButtonBlue href="facebook.com"   text='Quero um orçamento' />
                </DivTexto>
              </Row>
  </ContainerCamisaria>
    )
}

export default SectionCamisaria;