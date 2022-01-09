import React from 'react';
import styled from 'styled-components';
import '@/assets/style/style.css'

const Div = styled.div`

        display: flex;
        flex-wrap: wrap;
        
    h2 {
        text-align: flex-start;
        font-style: italic;
        font-size: 32px;
        color: #BE9667;
        margin: 0;
    }

    h1 {
        font-size: 90px;
        color: #024B68;
        margin: 0;
    }

    h3 {
        text-align: flex-end;
        font-style: italic;
        font-size: 32px;
        color: #BE9667;
        margin: 0;
    }

`;

export const PageTitle = () => (
        <Div>
            <h2>
               Elegante é ter um
            </h2>
            <h1>Alfaiate</h1>
            <h3>para chamar de seu</h3>
        </Div>
)

export default PageTitle;