import {useState, createContext} from 'react'
import React from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [character, setCharacter] = useState([])

    return (
        <UserContext.Provider value= {[character, setCharacter]}>
            {children}
        </UserContext.Provider>
    )
}