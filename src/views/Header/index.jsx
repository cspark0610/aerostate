import * as React from "react";

import Filters from "./Filters";

import s from "./style.module.scss";

export default function Header() {
  return (
    <header>
      <h3>Aerostates</h3>
      <Filters />
    </header>
  );
}
