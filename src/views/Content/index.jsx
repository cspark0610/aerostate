import * as React from "react";

import Grid from "./Grid";
import Filters from "./Filters";
import Sidebar from "../Sidebar";

import { FaSearch } from "react-icons/fa";

import s from "./style.module.scss";

export default function Content({
  user,
  flights,
  airports,
  addToFavorite,
  removeFromFavorite,
}) {
  const [filteredFlights, setFilteredFlights] = React.useState([]);
  const [filters, setFilters] = React.useState({ origin: "", destination: "" });

  // Selecciona los vuelos a mostrar en base a las busquedas aplicadas.
  React.useEffect(() => {
    const { origin, destination } = filters;
    let selection = flights; // El estado inicial son todos los vuelos, se mantiene si no hay filtros

    // Aplica los filtros solo si origin y destination estan setteados.
    if (origin && destination) {
      selection = flights.filter(
        (flight) =>
          flight.origin.value === origin &&
          flight.destination.value === destination
      );
    }
    setFilteredFlights(selection);
  }, [flights, filters]);

  return (
    <main>
      <section className={s.content}>
        <div className={s.title}>
          <FaSearch />
          <h2>Search between like 10 different places or so!</h2>
        </div>

        <Filters options={airports} onSelect={setFilters} />

        <Grid flights={filteredFlights} addToFavorite={addToFavorite} />
      </section>
      <Sidebar user={user} removeFromFavorite={removeFromFavorite} />
    </main>
  );
}
