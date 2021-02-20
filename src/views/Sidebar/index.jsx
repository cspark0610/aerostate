import * as React from "react";

import Bookmark from "./Bookmark";

import s from "./style.module.scss";

export default function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <p>Sidebar</p>
      <Bookmark />
    </aside>
  );
}
