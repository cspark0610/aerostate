import * as React from "react";

import Bookmark from "./Bookmark";

import s from "./style.module.scss";

export default function Sidebar({ user, removeFromFavorite }) {
  return (
    <aside className={s.sidebar}>
      <h2>Save flights and keep them in track!</h2>
      <Bookmark
        favorites={user.favorites || []}
        removeFromFavorite={removeFromFavorite}
      />
    </aside>
  );
}
