import * as React from "react";

import { Button, PageHeader, Avatar, Image } from "antd";

import { FaPlane } from "react-icons/fa";

import s from "./style.module.scss";

export default function Header({ user, handleLoginClick }) {
  return (
    <header>
      <PageHeader
        className="site-page-header"
        avatar={{ icon: <FaPlane /> }}
        title="Aerostates"
        subTitle="Flights and state managment"
      />
      {user ? (
        <div className={s.user}>
          <p>Welcome {user.name}!</p>
          <Avatar src={<Image src={user.img} />} />
        </div>
      ) : (
        <Button type="primary" size="large" onClick={handleLoginClick}>
          Login
        </Button>
      )}
    </header>
  );
}
