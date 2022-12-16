import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import 'primeicons/primeicons.css';
import { deleteUser } from '../redux/action';
import UpdateUser from './UpdateUser';
import { Link } from 'react-router-dom';

const UserCard = ({ oneUser }) => {

    const dispatch = useDispatch();

    const header = <img alt="/public/userPhoto.webp" src='userPhoto.webp' />;
    const footer = <span style={{ display:'flex',justifyContent: 'space-around' }}>
        
        
            <Button ><Link style={{textDecoration: "none", color:"white"}} to={`/detailUser/${oneUser.id}`} ><i className="pi pi-window-maximize"></i>Détail</Link> </Button>

        <UpdateUser updateUser={oneUser} />
        <Button  onClick={() => { dispatch(deleteUser(oneUser.id))} } variant='danger' >
            <i className="pi pi-trash "></i>Supprimer</Button>
    </span>;
    return (
        <div className="user-card">
            <Card style={{ width: '25em', display:'block' }} title={oneUser.nom} subTitle={oneUser.email} footer={footer} header={header} >
            </Card>
        </div>
    )
}

export default UserCard