import React from 'react'
import { Container } from './styles'

function Select({options, width, color, height, action}) {
    return (
        <Container width={width} color={color} height={height} onClick={(e) => action(e.target.value)}>
            {
                options.map((item, index) => (
                    <option key={index}  value={item}>{item}</option>
                ))
            }
        </Container>
    )
}

export default Select
