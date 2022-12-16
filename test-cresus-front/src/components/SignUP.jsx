import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { userSignUp } from '../redux/action';
import Modal from 'react-modal'

const SignUP = () => {
    // const {loading} = useSelector(state => state.userReducer);
    //state
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");

    //dispatch
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { nom, prenom, email, motdepasse};
        dispatch(userSignUp(newUser));
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
            <Button className='me-2' onClick={openModal} variant="secondary"> Sign Up </Button>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Mot De Passe" value={motdepasse} onChange={e => setMotdepasse(e.target.value)} required />
                </Form.Group>

                {/* <Link to="/login"> <Button variant="secondary">Login</Button> </Link> */}
                <Button variant="primary" type="submit"> Sign Up </Button>
            </Form>
            </Modal>
        </div>
    )
}

export default SignUP