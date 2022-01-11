import React from 'react'
import styled from 'styled-components'
import '../../../assets/style/style.css'

const ContainerSlide = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 60%; 

    position: relative;

    padding: 26px 0;
    margin: 0 auto;
    max-height: 635px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

`
const ImgSlide = styled.img`
    max-width: 121px;
    max-height: 121px;

    padding: 0;
    margin: 0 auto;

    border: solid 3px #BE9667;
    border-radius: 100%;
`

const P = styled.p`
    font-family: 'Cormorant';
    font-style: italic;
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    text-align: center;

    display: block;

    margin: 16px auto;
    padding: 0;

    color: #C4C4C4;
`

const H3 = styled.h3`
    font-family: Cormorant;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    display: block;
    width: 100%;

    margin: 0 auto;
    padding: 0;

    color: #BE9667;
`
const H5 = styled.h5`
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    display: block;
    width: 100%;

    margin: 0 auto;
    padding: 0;

    color: #949494;
`

export const SlideItem = (props) => {
    return (
    <ContainerSlide>
        <ImgSlide src={props.src} alt={props.alt} />
        <P>{props.text}</P>
        <H3>{props.title}</H3>
        <H5>{props.subtitle}</H5>
  </ContainerSlide>
    )
}

export default SlideItem;