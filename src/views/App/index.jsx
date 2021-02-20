import * as React from "react";
import axios from "axios";

import { message } from "antd";

import Header from "../Header";
import Content from "../Content";

export default function App() {
  const [user, setUser] = React.useState({});

  const sendLoginRequest = () => {
    // fetch fake user
    axios
      .post("/api/login")
      .then(({ data }) => {
        setUser(data);
        message.success(`Success login: welcome back ${user.name}`);
      })
      .catch((err) => {
        message.error(`Failed login: ${err.message}`);
      });
  };

  // fetch airports
  const airports = [
    { value: "Buenos Aires" },
    { value: "Barcelona" },
    { value: "Londres" },
    { value: "Bogota" },
    { value: "Lima" },
  ];

  // fetch flights
  const flights = [
    {
      id: 1,
      origin: "Buenos Aires",
      destination: "Bogota",
      code: 1234,
      duration: "3 hours",
    },
    {
      id: 2,
      origin: "Londres",
      destination: "Lima",
      code: 1534,
      duration: "13 hours",
    },
  ];

  return (
    <>
      <Header user={user} handleLoginClick={sendLoginRequest} />
      <Content flights={flights} airports={airports} />
    </>
  );
}
