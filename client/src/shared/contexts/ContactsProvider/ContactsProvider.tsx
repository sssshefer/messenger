import React, {createContext, FC, useContext} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import {IContact} from "../../models/IContact";


interface IContactsContext {
    contacts: IContact[],
    createContact: (id: string, name: string) => void

}

const ContactsContext = createContext<IContactsContext>({
    contacts: [],
    createContact: () => {
    }
})

export function useContacts() {
    return useContext(ContactsContext)
}

interface ContactsProviderProps {
    children: React.ReactNode
}


export const ContactsProvider: FC<ContactsProviderProps> = ({children}) => {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(id: string, name: string) {
        setContacts((prevContacts: IContact []) => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}