import React from 'react'
import styled from 'styled-components'
import '../../../assets/style/style.css'

const ContainerIcone = styled.div`
    display: flex;
    flex-direction: column;

    width: 298px;
    height: 95px;

    justify-content: center;
    align-items: center;
    text-align: center;

    columns: 1;

    :nth-child(even) {

    position: relative;

    ::after {
    content: ' ';

    z-index: 1;
    position: absolute;
    right: 0;
    top: 25%;

    height: 37px;
    width: 0.6px;
    
    background-color: #828282;
    }


    ::before {
    content: ' ';

    z-index: 1;
    position: absolute;
    left: 0;
    top: 25%;

    height: 37px;
    width: 0.6px;
    
    background-color: #828282;
    }
}
`
const ImgIcone = styled.img`
    max-width: 36px;
    max-height: 36px;
`

const H3 = styled.h3`
    font-family: 'Cormorant';
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    text-align: center;

    color: #1C86A4;

`

const P = styled.p`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #727272;
`

export const Icones = (props) => {
    return (
    <ContainerIcone>
        <ImgIcone src={props.src} alt={props.alt} />
        <H3>{props.title}</H3>
        <P>{props.text}</P>
  </ContainerIcone>
    )
}

export default Icones;