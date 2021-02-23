import * as React from "react";
import {useSelector , useDispatch } from 'react-redux';
import Item from "../../components/Item";
import {message} from  "antd";
import {removeFromFavorites} from '../../state/users'

export default function Sidebar( ) {

  const { favorites } = useSelector(state => state.user);
  const dispatch= useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id)).then((data) => {
      if (data.error) message.error(`Failed: ${data.error.message}.`);
      else message.success(`Flight removed from favorites`);
    });
  };

  if (!favorites || !favorites.length) return <Item.Empty />;

  return (
    <>
      {favorites.map((fav) => (
        <Item
          key={fav._id}
          flight={fav}
          removeFromFavorite={handleRemoveFromFavorites}
        />
      ))}
    </>
  );
}
