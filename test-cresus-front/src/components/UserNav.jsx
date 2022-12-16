import React from 'react';
import { Button } from 'react-bootstrap';
import { Avatar } from 'primereact/avatar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Login from './Login';
import SignUP from './SignUP';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../redux/action';
import { Link } from 'react-router-dom';

const UserNav = () => {
    const { oneUser } = useSelector( (state) => state );

    const dispatch = useDispatch();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home" >Test Cresus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Link style={{textDecoration: "none"}} to="addUser"><Nav.Link href="#action2">add user</Nav.Link></Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            {oneUser ? (<div className='my-account'>
                            <Avatar className='me-2' icon="pi pi-user" shape="circle" size="medium" /> 
                            <Button onClick={() => dispatch(userLogOut())} variant="primary"> Logout </Button>
                            </div> ): (<div className="btns-connection">
                                <SignUP />
                                <Login />
                            </div>)}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default UserNav