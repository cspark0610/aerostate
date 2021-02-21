import * as React from "react";

import Autocomplete from "../../components/Autocomplete";

import s from "./style.module.scss";

export default function Filter({ options, onSelect }) {
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");

  // Cuando ambos campos esten setteados se aplica el filtro
  React.useEffect(() => {
    if (origin && destination) onSelect({ origin, destination });
  }, [onSelect, origin, destination]);

  return (
    <section className={s.filters}>
      <h3>Where are you going?</h3>
      <Autocomplete
        placeholder="from"
        options={options}
        onSelect={(value) => setOrigin(value)}
        header="Pick the city of departure"
      />
      <Autocomplete
        placeholder="to"
        options={options}
        onSelect={(value) => setDestination(value)}
        header="Pick the city of arrival"
      />
    </section>
  );
}
