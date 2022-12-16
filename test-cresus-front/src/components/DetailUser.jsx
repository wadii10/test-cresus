import { Card } from 'primereact/card';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getOneUser } from '../redux/action';

const DetailUser = () => {

    const { users } = useSelector((state) => state);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneUser(id));
    }, [dispatch, id]);

    
    const header = <img  alt='waiting' src={`${process.env.PUBLIC_URL}/assets/utilisateur.png`} />;
    const footer = <span style={{ display:'flex',justifyContent: 'space-around' }}>
        <Link to="/" ><Button ><i className="pi pi-window-maximize"></i>Back</Button></Link>
    </span>;
    return (
        
            <div className="user-detail">
                <Card style={{ width: '25em', display: 'block' }} title={users.nom} subTitle={users.email} footer={footer} header={header} >
                </Card>
            </div>
        
    )
}

export default DetailUser