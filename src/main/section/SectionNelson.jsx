import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import Fundo from '../../assets/images/fundo-section-3.png'
import NelsonGarey from '../../assets/images/Nelson-Garey.png'


const ContainerDepoimento = styled.div`
    position: relative;

    padding: 0 35px 0 98px;

    background-image: url(${Fundo});
    background-repeat: no-repeat;

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


const Div = styled.div`
        
    :nth-child(odd) {
    padding-top: 90px;
}
`
const P = styled.p`
    font-size: 24px;

    text-align: center;
    
    color: #828282;
`

const H4 = styled.h4`
    font-family: 'Cormorant';
    font-size: 28px;
    font-weight: 400;
    font-style: italic;

    margin: 47px 0 0;

    text-align: center;

    color: #014561;
`
    
const H5 = styled.h5`
    font-size: 20px;

    text-align: center;

    color: #BE9667;
`


export const SectionRenee = () => {
    return (
    <ContainerDepoimento>
              <Row>
                <section className="col-md-7">
                  <Div>
                    <P>
                    “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!”
                    </P>
                  </Div>
                  <Div className='mt-4'>
                    <H4>
                      Nelson Garey
                    </H4>
                    <H5>Advogado  |  Nelson Garey Advogados Associados</H5>
                  </Div>
                </section>
                <section className="col-md-2 mr-4">
                  <img src={NelsonGarey} alt='Nelson Garey' />
                </section>
                <section className="col-md-2"></section>
              </Row>
  </ContainerDepoimento>
    )
}

export default SectionRenee;