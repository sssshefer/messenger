import React, {FC, useRef} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import cl from "./Login.module.css";
import {v4} from "uuid";

interface LoginProps {
    onIdSubmit: (id: string) => void;
}

const Login:FC<LoginProps> = ({onIdSubmit}) => {
    const idRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(idRef.current?.value);
        onIdSubmit(idRef.current?.value as string);
    }

    const createNewId = () => {
        onIdSubmit(v4());
    }

    return (
        <Container className={`align-items-center d-flex ${cl.wrap}`}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create a new Id</Button>
            </Form>
        </Container>
    );
};

export default Login;