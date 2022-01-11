import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../../../assets/images/Logo-Header.png'
import '../../../assets/style/style.css'

const ContainerHeader = styled.header`
    display: flex;
    flex-direction: row;
    background: linear-gradient(180deg, #000000 29.73%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    max-height: 112px;
    padding: 25px 0 0;

    z-index: 3;
    position: fixed;
    justify-content: space-around;
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 28px;   

    list-style: none;
`

const Links = styled.a`
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 300;

    color: #949494;    
`

export const Header = () => {
    return (
    <ContainerHeader>
        <img src={LogoHeader} id='topo' alt='Logo do site' />
        <nav>
            <List>
                <li>
                    <Links href="facebook.com">Empresa</Links>
                </li>

                <li>
                    <Links href="facebook.com">Camisaria</Links>
                </li>

                <li>
                    <Links href="facebook.com">Alfaiataria</Links>
                </li>

                <li>
                    <Links href="facebook.com">Depoimentos</Links>
                </li>

                <li>
                    <Links href="facebook.com">Contato</Links>
                </li>
            </List>
        </nav>
    </ContainerHeader>
    )
}

export default Header;