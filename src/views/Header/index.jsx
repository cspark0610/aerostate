import * as React from "react";

import { Button, PageHeader, Avatar, Image } from "antd";

import { FaPlane } from "react-icons/fa";

import s from "./style.module.scss";
import { useSelector ,useDispatch } from 'react-redux';
import { sendLoginRequest } from '../../state/users';
import { message } from "antd";

export default function Header( ) {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch( );
  
  const handleClick = () => {
    dispatch(sendLoginRequest())
      .then((data) =>{
        console.log(data);
        message.success(`Success login: welcome back ${data.payload.name}`)
      })
      .catch((err) => message.error(`Failed login: ${err.message}`, 5));
  };

  return (
    <header>
      <PageHeader
        className={s.brand}
        avatar={{ icon: <FaPlane /> }}
        title="Aerostates"
        subTitle="Flights and state managment"
      />
      {user._id ? (
        <div className={s.user}>
          <p>Welcome {user.name}!</p>
          <Avatar src={<Image src={user.img} />} />
        </div>
      ) : (
        <Button type="primary" size="large" onClick={handleClick}>
          Login
        </Button>
      )}
    </header>
  );
}
