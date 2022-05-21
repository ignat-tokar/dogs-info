import { useEffect, useState } from "react";
import FavouritesPage from "./FavouritesPage";
import Preloader from "./../../common/Preloader/Preloader";
import { favouritesAPI, imagesAPI } from "../../api/api";

function FavouritesPageContainer() {

  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    favouritesAPI.getFavourites().then(data=>{
      setFavourites(data);
    });
  }, []);

  return (
    <>
      {favourites
        ? <FavouritesPage favourites={favourites} />
        : <Preloader />
      }
    </>
  );
}

export default FavouritesPageContainer;