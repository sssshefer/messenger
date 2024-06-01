import React, {FC} from 'react';

interface MessageProps {
    message: {
        text: string;
        fromMe: boolean;
        senderName: string;
        time: string;
    };
    lastMessage: boolean;
    setRef: (node: HTMLDivElement | null) => void;
    index: number;
}

const Message:FC<MessageProps> = ({message, lastMessage, setRef, index}) => {
    return (
        <div
            ref={lastMessage ? setRef : null}
            key={index}
            className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}>
            <div
                className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                {message.text}
            </div>
            <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                {message.time}
            </div>
            <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                {message.fromMe ? 'You' : message.senderName}
            </div>
        </div>
    );
};

export default Message;