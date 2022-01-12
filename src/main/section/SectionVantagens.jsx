import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import Icones from '../../components/data-display/Icones/Icones'
import Icone1 from '../../assets/images/Icone-1.png'
import Icone2 from '../../assets/images/Icone-2.png'
import Icone3 from '../../assets/images/Icone-3.png'

const ContainerVantagens = styled.div`
     
    position: relative;

    display: flex;
    flex-direction: column;
    columns: 3;
    flex-wrap: wrap;
    width: 98%;
`
    
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  margin: 4% -15px 4% -15px;
  justify-content: space-around;
`


const DivLimit = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
`


export const SectionVantagens = () => {
    return (
    <ContainerVantagens>
      <DivLimit>
              <Row>
                <Icones src={Icone1} title='Qualidade' text='Camisaria e Alfaiataria 100% artesanal' />
                <Icones src={Icone2} title='Confiança' text='Atendimento personalizado no escritório ou residência' />
                <Icones src={Icone3} title='Experiência' text='Tradição e modernidade proporcionando elegância' />
              </Row>
        </DivLimit>
  </ContainerVantagens>
    )
}

export default SectionVantagens;