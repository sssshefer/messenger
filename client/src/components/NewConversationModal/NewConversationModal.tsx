import React, {FC, useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {useContacts} from '../../shared/contexts/ContactsProvider/ContactsProvider'
import {useConversations} from '../../shared/contexts/ConversationProvider/ConversationProvider'

interface NewConversationModalProps {
    closeModal: () => void
}

export const NewConversationModal: FC<NewConversationModalProps> = ({closeModal}) => {
    const [selectedContactIds, setSelectedContactIds] = useState<string[]>([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    function handleCheckboxChange(contactId:string) {
        setSelectedContactIds((prevSelectedContactIds:string[]) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                checked={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewConversationModal;