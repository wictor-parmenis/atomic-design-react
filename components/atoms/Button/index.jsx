import React from 'react'
import {Container} from './styles'
// Átomo = 1 elemento;

function Button({bg, color, children}) {
    return (
        <Container bg={bg} color={color}>{children}</Container>
    )
}

export default Button
