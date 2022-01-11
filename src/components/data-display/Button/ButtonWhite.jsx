import React from 'react'
import styled from 'styled-components'
import '../../../assets/style/style.css'

const Btn = styled.a`
    width: 270px;
    height: 50px;
    display: block;

    padding: 0.4rem 4.5rem;

    color: #1C86A4;
    background-color: transparent;
    border: solid 1px #1C86A4;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    :hover{
    color: #E5E5E5;
    background-color: #013145;
    }
`


export const ButtonWhite = (props) => {
    return (
        <Btn href={props.href} className={props.className}>{props.text}</Btn>
    )
}

export default ButtonWhite;