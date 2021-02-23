import * as React from "react";

import Card from "../../components/Card";

import s from "./style.module.scss";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../state/users';
import { message } from "antd";

export default function Grid({ flights }) {
  // Si no hay vuelos muestro el loading
  const dispatch= useDispatch();

  const handleFavorites = (id) => {
    

    dispatch(addToFavorites(id)).then((data) => {
      if (data.error) message.error(`Failed: ${data.error.message}.`);
      else message.success(`Flight added to favorites`);
    });
  };

  if (!flights.length) {
    return (
      <section className={s.grid}>
        <Card.Loading />
      </section>
    );
  }

  // Si hay vuelos listo las tarjetas
  return (
    <section className={s.grid}>
      {flights.map((flight) => (
        <Card key={flight._id} flight={flight} addToFavorite={handleFavorites} />
      ))}
    </section>
  );
}
