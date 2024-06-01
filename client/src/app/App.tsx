import React, {useState} from 'react';
import './App.css';
import Login from "../components/Login/Login";
import useLocalStorage from "../shared/hooks/useLocalStorage";
import Dashboard from "../components/Dashboard/Dashboard";
import {ContactsProvider} from "../shared/contexts/ContactsProvider/ContactsProvider";
import {ConversationsProvider} from "../shared/contexts/ConversationProvider/ConversationProvider";
import SocketProvider from "../shared/contexts/SocketProvider";

function App() {
    const [id, setId] = useLocalStorage('id')

    const dashboard = (
        <SocketProvider id={id}>
            <ContactsProvider>
                <ConversationsProvider id={id}>
                    <Dashboard id={id}/>
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>

    )
    return (
        <div className="App">
            {id ? dashboard : <Login onIdSubmit={setId}/>}
        </div>
    );
}

export default App;
