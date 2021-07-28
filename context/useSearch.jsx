import { createContext, useContext, useState } from "react";


const ContextWords = createContext({})

const ContextWordsProvider = ({children}) => {

    const [word, setWords] = useState('nothing')

    return (
        <ContextWords.Provider value={{word, setWords}}>
            {children}
        </ContextWords.Provider>
    )
}

export const useSearch = () => {
    return useContext(ContextWords)
}

export default ContextWordsProvider