import { Container } from './styles'
import Button from '../../atoms/Button'
import Outdoor from '../../atoms/Outdoor'
import InputLabel from '../../molecules/inputLabel'
import React, { useState } from 'react'

function ShowWords() {

    // Cérebro
    const [placeholderInput, setPlaceholderInput] = useState('Insert Words')
    const [textOutdoor, setTextOutdoor] = useState()
    
    const getWord = (value) => {
        console.log(value)
        setTextOutdoor(value)
    }

    return (
        <Container>
            <Outdoor bg={"#efefef"}  color={"black"}>{textOutdoor}</Outdoor>
            <InputLabel actionMol={getWord} bg={"#efefef"}  color={"black"} placeholder={placeholderInput}/>
            <Button bg={"#efefef"}  color={"#fff"} ></Button>
        </Container>
    )
}

export default ShowWords
