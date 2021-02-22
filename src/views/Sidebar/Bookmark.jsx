import * as React from "react";

import Item from "../../components/Item";

export default function Sidebar({ favorites, removeFromFavorite }) {
  if (!favorites.length) return <Item.Empty />;

  return (
    <>
      {favorites.map((fav) => (
        <Item
          key={fav._id}
          flight={fav}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </>
  );
}
