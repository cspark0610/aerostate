import * as React from "react";

import Bookmark from "./Bookmark";

import s from "./style.module.scss";

export default function Sidebar({ user, flights, removeFromFavorite }) {
  const [favorites, setFavorites] = React.useState([]);

  // selecciona los vuelos favoritos desde el usuario
  React.useEffect(() => {
    if (!user.id) return;
    const favFlights = flights.filter((flight) =>
      user.favorites.includes(flight.id)
    );
    setFavorites(favFlights);
  }, [user, flights]);

  return (
    <aside className={s.sidebar}>
      <h2>Save flights and keep them in track!</h2>
      <Bookmark favorites={favorites} removeFromFavorite={removeFromFavorite} />
    </aside>
  );
}
