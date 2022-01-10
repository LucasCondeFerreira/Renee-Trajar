import React from 'react'
import styled from 'styled-components'
import ImageTitle from '../../../assets/images/ImageTitle.png'

const ContainerImage = styled.div`
    display: flex;
    position: absolute;
    width: 405px;
    height: 169px;
`

export const ImageTitle = () => {
    <ContainerImage>
        <img src={ImageTitle} alt="Título da home" />
    </ContainerImage>
}

export default ImageTitle;