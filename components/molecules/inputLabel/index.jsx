import React from 'react'
import Input from '../../atoms/Input'
import { Container } from './styles'

function InputLabel({bg, color, placeholder, actionMol, label}) {

    return (
        <Container>
            <label htmlFor="" >{label}</label>
            <Input bg={bg}  action={actionMol} color={color} placeholder={placeholder}/>
        </Container>
    )
}

export default InputLabel
