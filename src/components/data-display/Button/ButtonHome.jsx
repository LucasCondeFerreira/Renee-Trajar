import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    border: none;

    width: 297px;
    height: 50px;

    align-items: center;
    padding: 0.675rem 0.75rem;

    font-weight: 300;
    font-size: 18px;
    color: #E5E5E5;
    background-color: #014561;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    :hover{
    color: #E5E5E5;
    background-color: transparent;
    border: solid 1px #BE9667;
    }
`


export const ButtonHome = (props) => {
    return (
        <Btn href={props.href} className={props.className}>{props.text}</Btn>
    )
}

export default ButtonHome;