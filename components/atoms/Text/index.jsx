import React from 'react'
import { Container } from './styles'


function Text({children, color, font}) {
    return (
        <Container color={color} font={font}>
            {children}
        </Container>
    )
}

export default Text
