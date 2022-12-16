import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfil } from '../redux/action';

const Profile = () => {
    const { oneUser, loading } = useSelector((state) => state);
    // console.log(oneUser);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProfil())
    }, [dispatch])
    
  return (
    <div>
        {
            loading ? <h1>waiting</h1> : <div>{oneUser && <h1>{oneUser.nom}</h1>}</div>
        }
    </div>
  )
}

export default Profile