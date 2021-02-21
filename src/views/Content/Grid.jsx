import * as React from "react";

import Card from "../../components/Card";

import s from "./style.module.scss";

export default function Grid({ flights, addToFavorite }) {
  // Si no hay vuelos muestro el loading
  if (!flights.length) {
    return (
      <section className={s.grid}>
        {[1, 2, 3].map((e, i) => (
          <Card.Loading key={i} />
        ))}
      </section>
    );
  }

  // Si hay vuelos listo las tarjetas
  return (
    <section className={s.grid}>
      {flights.map((flight) => (
        <Card key={flight.id} flight={flight} addToFavorite={addToFavorite} />
      ))}
    </section>
  );
}
