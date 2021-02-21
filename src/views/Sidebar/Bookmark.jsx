import * as React from "react";

import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import s from "./style.module.scss";

export default function Sidebar({ favorites, removeFromFavorite }) {
  // empty favorites
  if (!favorites.length) {
    return (
      <div className={s.favorite}>
        <p>Add flights to favorites to see them here!</p>
      </div>
    );
  }

  return (
    <>
      {favorites.map((fav) => (
        <div key={fav.id} className={s.favorite}>
          <span>
            <FaStar />
            <p>
              {fav.origin} &gt; {fav.destination}
            </p>
          </span>
          <FaTrash
            style={{ cursor: "pointer" }}
            onClick={() => removeFromFavorite(fav.id)}
          />
        </div>
      ))}
    </>
  );
}
