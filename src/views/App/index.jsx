import * as React from "react";
import axios from "axios";

import { message } from "antd";

import Header from "../Header";
import Content from "../Content";
import { setAirports } from "../../state/airports";
import { setFlights } from "../../state/flights";
import { setUser } from "../../state/users";
import { useDispatch } from 'react-redux'

export default function App() {

  

  const dispatch = useDispatch();

 
  React.useEffect(() => {
    // fetch airporst
    axios
      .get("/api/airports")
      .then(({ data }) => dispatch(setAirports(data)))
      .catch((err) => message.error(`Error: ${err.message}`, 5));
    // fetch flights
    axios
      .get("/api/flights")
      .then(({ data }) => dispatch(setFlights(data)))
      .catch((err) => message.error(`Error: ${err.message}`, 5)); // Oceanic Flight 815
  }, []);


  return (
    <>
      <Header/>
      <Content/>
    </>
  );
}
