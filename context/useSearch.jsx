import { createContext, useContext, useState } from "react";


const ContextWords = createContext({})

const ContextWordsProvider = ({children}) => {

    const [word, setWords] = useState('nothing')
    const [language, setLanguage] = useState("en_US")

    return (
        <ContextWords.Provider value={{word, setWords, language, setLanguage}}>
            {children}
        </ContextWords.Provider>
    )
}

export const useSearch = () => {
    return useContext(ContextWords)
}

export default ContextWordsProvider