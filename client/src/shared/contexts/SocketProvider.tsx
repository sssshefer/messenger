import React, {createContext, FC, useContext, useEffect, useState} from 'react'
import io, {Socket} from 'socket.io-client'

const SocketContext = createContext<null|Socket>(null)

export function useSocket() {
    return useContext(SocketContext)
}

interface SocketProviderProps {
    id: string,
    children: React.ReactNode
}

export const SocketProvider:FC<SocketProviderProps> = ({id, children}) => {
    const [socket, setSocket] = useState<null|Socket>(null)

    useEffect(() => {
        const newSocket = io(
            'http://localhost:5000',
            {query: {id}}
        )
        setSocket(newSocket)

        return () => {newSocket.close()}
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;