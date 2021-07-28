import factoryLabel from '../../../utils/factoryLabel'
import Text from '../../atoms/Text'
import { useSearch } from '../../../context/useSearch'
import { Container } from './styles'
import Button from '../../atoms/Button'
import Outdoor from '../../atoms/Outdoor'
import InputLabel from '../../molecules/inputLabel'
import React, { useState, createContext, useContext} from 'react'
import axios from 'axios'

function ShowWords() {

    // Cérebro
    const [placeholderInput, setPlaceholderInput] = useState('Insert Words')
    const [textOutdoor, setTextOutdoor] = useState(['', ''])
    const {word, setWords} = useSearch()
    
    const getWord = (value) => {
        setTextOutdoor(value)
        setWords(value)
    }

    const searchWord = () => {
        // query: https://dictionaryapi.dev/
        try {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/pt-BR/${word}`)
            .then(res => {
                setTextOutdoor(res.data[0].meanings[0].definitions[0].definition)
            })
        }catch (error) {
            console.log(error)
            setTextOutdoor('Word not finded... Sorry, try other.')
        }
        
    }

    return (
        <Container>
            <Text color={'#f0ad4e'} font={'1.6em'}>Search any world in english here and see your meaning in Outdoor  :D</Text>
            <Outdoor bg={"#efefef"}  color={"black"}>{(textOutdoor)}</Outdoor>
            <hr></hr>
            <InputLabel label={'Search for new words'} actionMol={getWord} bg={"#efefef"}  color={"black"} placeholder={placeholderInput}/>
            <div className='btn'> 
                <Button bg={"#5cb85c"}  color={"white"} action={searchWord}>Search</Button>
            </div>
        </Container>
    )
}

export default ShowWords
