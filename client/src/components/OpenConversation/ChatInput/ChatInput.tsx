import React, {FC} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";

interface ChatInputProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput:FC<ChatInputProps> = ({text, setText, handleSubmit}) => {
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="m-2">
                <InputGroup>
                    <Form.Control
                        as="textarea"
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{height: '75px', resize: 'none'}}
                    />
                    <Button type="submit">Send</Button>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};

export default ChatInput;