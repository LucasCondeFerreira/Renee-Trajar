import React from 'react';
import styled from 'styled-components'
import Header from '../components/surfaces/header/Header'
import SectionHome from './section/SectionHome'
import SectionRenee from './section/SectionRenee'
import SectionVantagens from './section/SectionVantagens'
import SectionNelson from './section/SectionNelson'
import SectionDesconto from './section/SectionDesconto'
import SectionCamisaria from './section/SectionCamisaria'
import SectionAlfaiataria from './section/SectionAlfaiataria'
import SectionSlide from './section/SectionSlide'
import SectionContato from './section/SectionContato'
import Footer from '../components/surfaces/footer/Footer'
import '../assets/style/style.css'
import '../assets/style/section.css'

const LimitContainer = styled.div`
  max-width: 100vw;
`

export default class Container extends React.Component  {
    render() {
        return (
          <LimitContainer>
            <Header />
            <SectionHome />
            <SectionRenee />
            <SectionNelson />
            <SectionVantagens />
            <SectionDesconto />
            <SectionCamisaria />
            <SectionAlfaiataria />
            <SectionSlide />
            <SectionContato />
            <Footer />
          </LimitContainer>
        )
      }
}