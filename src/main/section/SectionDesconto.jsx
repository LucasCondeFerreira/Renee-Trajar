import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import ButtonGold from '../../components/data-display/Button/ButtonGold'
import Terno from '../../assets/images/Terno-section-5.png'
import UlStyleVector from '../../assets/images/ul-style-vector.svg'
import Fundo from '../../assets/images/fundo-section-5.png'

const ContainerDesconto = styled.div`
     
     position: relative;

    padding: 26px 35px 26px 136px;

    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    columns: 2;
    flex-wrap: wrap;
    width: 100%;
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


const H2 = styled.h2`
    font-family: 'Cormorant';
    font-size: 53px;
    font-weight: 400;

    color: #BE9667;
`

const H4 = styled.h4`
    font-family: 'Cormorant';
    font-style: italic;
    font-size: 30px;
    font-weight: 400;

    color: #BE9667;
`

const List = styled.ul`
    list-style-image: url(${UlStyleVector});
`

const ListItem = styled.li`
    font-size: 22px;
    font-weight: 300;

    line-height: 28px;
    margin-bottom: 20px;

    color: #C4C4C4;
`

const Span = styled.span`
    font-size: 22px;
    font-weight: 400;

    color: #C4C4C4;
`

const DivLimit = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
`

export const SectionDesconto = () => {
    return (
    <ContainerDesconto>
      <DivLimit>
              <Row>
              <div className="col-md-7 pr-3">
                  <H2>Condição Imperdível</H2>
                  <H4>Compre hoje e garanta:</H4>
                  <List>
                    <ListItem>
                      12% de desconto e pagamento em até <Span>3x sem juros;</Span>
                    </ListItem>
                    <ListItem>
                    Até <Span>10 meses</Span> para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;
                    </ListItem>
                    <ListItem>
                      Condição muito especial <Span>por tempo limitado</Span>;
                    </ListItem>
                    <ListItem>
                        Poder presentear alguém com uma roupa de alta costura, <Span>exclusiva.</Span>
                    </ListItem>
                  </List>

                  <ButtonGold href="facebook.com" className="mt-4" text='Garanta essa condição especial!' />
                </div>
                <div className="col-md-5">
                  <img src={Terno} alt="Terno" />
                </div>
              </Row>
          </DivLimit>
  </ContainerDesconto>
    )
}

export default SectionDesconto;