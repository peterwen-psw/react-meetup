import { useContext } from "react";
import FavoritesContext from "../store/favorites-comtext";
import MeetupsList from "../components/meetups/MeetupsList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupsList meetups={favoritesCtx.favorites}></MeetupsList>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
