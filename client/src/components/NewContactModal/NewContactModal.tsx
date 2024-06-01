import React, {FC, useRef} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {useContacts} from '../../shared/contexts/ContactsProvider/ContactsProvider'

interface NewContactModalProps {
    closeModal: () => void
}

export const NewContactModal: FC<NewContactModalProps> = ({closeModal}) => {
    const idRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const {createContact} = useContacts()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(idRef.current === null || nameRef.current === null) return
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewContactModal;