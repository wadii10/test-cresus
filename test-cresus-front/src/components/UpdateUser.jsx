import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-modal';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { useDispatch } from 'react-redux';
import { editeUser } from '../redux/action';

const UpdateUser = ({ updateUser }) => {

    //state
    const [nom, setNom] = useState(updateUser.nom);
    const [prenom, setPrenom] = useState(updateUser.prenom);
    const [email, setEmail] = useState(updateUser.email);

    //dispatch
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedUser = { id: updateUser.id, nom, prenom, email };
        dispatch(editeUser(editedUser));
        closeModal();
    }

    // modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');

    return (
        <div>
            <Button onClick={openModal} label="Modifier" icon="pi pi-user-edit" />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" >
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Votre Nom" value={nom} onChange={e => setNom(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Votre Prenom" value={prenom} onChange={e => setPrenom(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Votre Email" value={email} onChange={e => setEmail(e.target.value)} required />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Button type="submit" label="Modifier" icon="pi pi-user-edit" />
                    <Button label="annuler" icon="pi pi-times" className="p-button-secondary" onClick={() => closeModal()} />

                </Form>

            </Modal>
        </div>
    )
}

export default UpdateUser