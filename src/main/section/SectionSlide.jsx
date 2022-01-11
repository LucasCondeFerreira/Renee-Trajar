import React, {Component} from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import SlideItem from '../../components/data-display/SlideItem/SlideItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/style/carrousel.css'
import Fundo from '../../assets/images/Fundo-Slide.png'
import William from '../../assets/images/William.png'
import Domingos from '../../assets/images/Domingos.png'
import Jose from '../../assets/images/Jose.png'
import Custodio from '../../assets/images/Custodio.png'

const ContainerSlide = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;
    margin: 8% auto;
    height: 610px;

    background-image: url(${Fundo});

    flex-wrap: wrap;
`
const Div1 = styled.div`
    width: 100%;
    position: relative;

    align-items: center;
    text-align: center;

    bottom: -10%;
    
`
const Div2 = styled.div`
    width: 100%;
    position: absolute;

    align-items: center;
    text-align: center;
    
    bottom: 15%;
`

const H4 = styled.h4`
    font-family: 'Cormorant';
    font-weight: 300;
    font-size: 38px;
    line-height: 46px;
    display: block;

    position: absolute;
    top: 5%;
    left: 44%;
    margin: 0 auto;
    align-items: center;
    text-align: center;

    color: #F2F2F2;

    ::before {
    content: '';
    position: absolute;

    border-bottom: 3px solid #70B0C4;
    width: 45px;
    
    left: 35%;
    bottom: 0;
    }
    :hover::before {
    border-bottom: 3px solid #70B0C4;
    width: 250px;
    
    left: -15%;
    }
`

export default class SectionSlide extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
      <ContainerSlide>
          <Div1>
            <H4>Depoimentos</H4>
          </Div1>
          <Div2>
            <Slider {...settings}>
                <SlideItem 
                    src={William} 
                    text='“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já têm uma história de décadas com o querido Renee.
                            O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”'
                    title='William H. M. Garey'
                    subtitle='Advogado  |   Nelson Garey Advogados Associados' />
                <SlideItem 
                    src={Domingos} 
                    text='“Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta.
                    Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”
                    '
                    title='Domingos Orestes Chiomento'
                    subtitle='DOC Contabilidade Empresarial' />
                <SlideItem 
                    src={Jose} 
                    text='“Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”'
                    title='José Mauro Marques'
                    subtitle='Advogado' />
                <SlideItem 
                    src={Custodio} 
                    text='“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”'
                    title='Custódio Pereira'
                    subtitle='Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP' />
            </Slider>
        </Div2>
    </ContainerSlide>
  );
    }
}