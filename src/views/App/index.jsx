import * as React from "react";
import axios from "axios";

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
      })
      .catch((err) => {
        alert(err);
      });
  };

  // fetch flights

  // fetch favs?

  return (
    <>
      <Header user={user} handleLoginClick={sendLoginRequest} />
      <Content />
    </>
  );
}
