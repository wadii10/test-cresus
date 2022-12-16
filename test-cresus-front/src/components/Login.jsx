import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/action';
import Modal from 'react-modal'
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const { user } = useSelector((state) => state);

    //state
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");

    //dispatch the action
    const dispatch = useDispatch();
    //login action
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin({ email, motdepasse }));
        closeModal();
    };

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
            <Button onClick={openModal} variant="primary"> Login </Button>

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <Form onSubmit={handleSubmit} >
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Votre Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Mot De Passe" value={motdepasse} onChange={e => setMotdepasse(e.target.value)} required />
                </Form.Group>

                {/* <Link to="/login"> <Button variant="secondary">Login</Button> </Link> */}
                <Button variant="primary" type="submit"> Login </Button>
            </Form>
            
            </Modal>
    
        </div>
    )
}

export default Login