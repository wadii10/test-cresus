import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/action";

const ListUsers = () => {
  const  { users }  = useSelector((state) => state);

  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="users-list">
      {users && React?.Children?.toArray(users?.map((el) => <UserCard oneUser={el} />))}
    </div>
  );
};

export default ListUsers;
