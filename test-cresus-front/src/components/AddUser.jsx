import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { userSignUp } from '../redux/action';

const AddUser = () => {

    //state
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");

    //dispatch
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { nom, prenom, email, motdepasse };
        dispatch(userSignUp(newUser));
    };

    return (
        <div style={{ margin:"2rem" }}>
            <Container  >

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
                    <Button variant="primary" type="submit"> Add User </Button>
                </Form>

            </Container>
        </div>
    )
}

export default AddUser