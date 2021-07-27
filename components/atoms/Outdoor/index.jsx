import React from 'react'
import {Container} from './styles'

function Outdoor({color, bg, children}) {
    return (
        <Container color={color}  bg={bg}>
            {children}
        </Container>
    )
}

export default Outdoor
