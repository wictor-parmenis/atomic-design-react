import Text from '../../atoms/Text'
import { useSearch } from '../../../context/useSearch'
import { Container } from './styles'
import Button from '../../atoms/Button'
import Outdoor from '../../atoms/Outdoor'
import InputLabel from '../../molecules/inputLabel'
import React, { useState, createContext, useContext} from 'react'
import axios from 'axios'
import Select from '../../atoms/select'

function ShowWords() {

    // Cérebro
    const [placeholderInput, setPlaceholderInput] = useState('Insert Words')
    const [textOutdoor, setTextOutdoor] = useState(['', ''])
    const {word, setWords} = useSearch()
    const {language, setLanguage} = useSearch()
    const [options, setOptions] = useState([
        "Select a language", "en_US", "es", "fr", "pt-BR	"
    ])
    
    const getWord = (value) => {
        setTextOutdoor(value)
        setWords(value)
    }

    const getLanguage = (value) => {
        setLanguage(value)
    }

    const searchWord = () => {
        // query: https://dictionaryapi.dev/
        if (language !== "Select a language"){
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
            .then(res => {
                console.log(res.status)
                if (res.status == 200) {
                    setTextOutdoor(res.data[0].meanings[0].definitions[0].definition)
                }else if (res.status == 404){
                    setTextOutdoor('Word not finded... Sorry, try other.')
                }
            }).catch(err => {
                console.log(err)
                setTextOutdoor('Word not finded... Sorry, try other.')
            })
        
    }else{
        setTextOutdoor('Please, select a language.')
    }}

    return (
        <Container>
            <Text color={'#f0ad4e'} font={'1.6em'}>Search any world in english here and see your meaning in Outdoor  :D</Text>
            <Outdoor bg={"#efefef"}  color={"black"}>{(textOutdoor)}</Outdoor>
            <div className='select'><Select action={getLanguage} width={'28em'} height={'3em'} options={options}/></div>
            <hr></hr>
            <InputLabel label={'Search for new words'} actionMol={getWord} bg={"#efefef"}  color={"black"} placeholder={placeholderInput}/>
            <div className='btn'> 
                <Button bg={"#5cb85c"}  color={"white"} action={searchWord}>Search</Button>
            </div>
        </Container>
    )
}

export default ShowWords
