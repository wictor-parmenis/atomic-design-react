import React from 'react'
import {Container} from './styles'
// Átomo = 1 elemento;

function Button({bg, color, children, action}) {
    return (
        <Container bg={bg} color={color} onClick={() => action()}>{children}</Container>
    )
}

export default Button
