import * as React from "react";
import axios from "axios";

import { message } from "antd";

import Header from "../Header";
import Content from "../Content";

export default function App() {
  const [user, setUser] = React.useState({});
  const [airports, setAirports] = React.useState([]);
  const [flights, setFlights] = React.useState([]);

  const sendLoginRequest = () => {
    // fetch fake user
    axios
      .post("/api/login")
      .then(({ data }) => {
        setUser(data);
        message.success(`Success login: welcome back ${data.name}`);
      })
      .catch((err) => {
        message.error(`Failed login: ${err.message}`, 5);
      });
  };

  React.useEffect(() => {
    // fetch airporst
    axios
      .get("/api/airports")
      .then(({ data }) => setAirports(data))
      .catch((err) => message.error(`Error: ${err.message}`, 5));
    // fetch flights
    axios
      .get("/api/flights")
      .then(({ data }) => setFlights(data))
      .catch((err) => message.error(`Error: ${err.message}`, 5)); // Oceanic Flight 815
  }, []);

  const addToFavorite = (flightId) => {
    if (!user._id) {
      return message.error(`To add a favorite you need to be logged in.`);
    }

    axios
      .put(`/api/favorites?userId=${user._id}&flightId=${flightId}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        message.success(`Flight added to favorites`);
      })
      .catch((err) => {
        message.error(`Error: ${err.message}`, 5);
      });
  };

  const removeFromFavorite = (flightId) => {
    axios
      .delete(`/api/favorites?userId=${user._id}&flightId=${flightId}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        message.success(`Flight removed from favorites`);
      })
      .catch((err) => {
        message.error(`Error: ${err.message}`, 5);
      });
  };

  // const flights = [
  //   {
  //     id: 1,
  //     origin: "Buenos Aires",
  //     destination: "Bogotá",
  //     departure: {
  //       day: "monday",
  //       hour: "20:00",
  //     },
  //     arrival: {
  //       day: "tuesday",
  //       hour: "02:00",
  //     },
  //     code: 1234,
  //   },
  //   {
  //     id: 2,
  //     origin: "Londres",
  //     destination: "Lima",
  //     departure: {
  //       day: "saturday",
  //       hour: "10:00",
  //     },
  //     arrival: {
  //       day: "sunday",
  //       hour: "05:00",
  //     },
  //     code: 1534,
  //   },
  //   {
  //     id: 3,
  //     origin: "Londres",
  //     destination: "Lima",
  //     departure: {
  //       day: "saturday",
  //       hour: "10:00",
  //     },
  //     arrival: {
  //       day: "sunday",
  //       hour: "05:00",
  //     },
  //     code: 1534,
  //   },
  //   {
  //     id: 4,
  //     origin: "Londres",
  //     destination: "Lima",
  //     departure: {
  //       day: "saturday",
  //       hour: "10:00",
  //     },
  //     arrival: {
  //       day: "sunday",
  //       hour: "05:00",
  //     },
  //     code: 1534,
  //   },
  // ];
  console.log("USER", user);
  return (
    <>
      <Header user={user} handleLoginClick={sendLoginRequest} />
      <Content
        user={user}
        flights={flights}
        airports={airports}
        addToFavorite={addToFavorite}
        removeFromFavorite={removeFromFavorite}
      />
    </>
  );
}
