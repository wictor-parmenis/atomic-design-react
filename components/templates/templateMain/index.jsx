import React from 'react'
import { Container } from './styles'

function TemplateMain({children}) {
    return (
        <Container>
            <div>{children[0]}</div>
            <div>{children[1]}</div>
            <div>{children[2]}</div>
        </Container>
    )
}

export default TemplateMain
