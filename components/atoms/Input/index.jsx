import React from 'react'
import { Container } from './styles'

function Input({bg, color, placeholder, action}) {
    console.log(action, 'input simple atom')
    return (
        <Container bg={bg} color={color} placeholder={placeholder} onChange={(e) => action(e.target.value)}>
            
        </Container>
    )
}

export default Input
