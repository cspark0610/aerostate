import * as React from "react";

import Item from "../../components/Item";

export default function Sidebar({ user, removeFromFavorite }) {
  const { favorites } = user;
  if (!favorites || !favorites.length) return <Item.Empty />;

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
