import * as React from "react";
import { Card, Avatar } from "antd";

import Favorite from "./Favorite";

import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

import s from "./style.module.scss";

function CardComponent({ flight, addToFavorite }) {
  const { origin, destination, departure, arrival, code, id } = flight;
  return (
    <Card
      className={s.card}
      title={`Flight #${code}`}
      extra={<Favorite onClick={() => addToFavorite(id)} />}
    >
      <Card.Meta
        className={s.entry}
        avatar={<Avatar className={s.icon} icon={<FaPlaneDeparture />} />}
        title={`Departure: ${origin}`}
        description={`${departure.day.toUpperCase()} - ${departure.hour} hs`}
      />
      <Card.Meta
        className={s.entry}
        avatar={<Avatar icon={<FaPlaneArrival />} />}
        title={`Arrival: ${destination}`}
        description={`${arrival.day.toUpperCase()} - ${arrival.hour} hs`}
      />
    </Card>
  );
}

CardComponent.Loading = () => <Card className={s.card} loading={true} />;

export default CardComponent;
