import { useEffect, useState } from "react";
import FavouritesPage from "./FavouritesPage";
import Preloader from "./../../common/Preloader/Preloader";
import { favouritesAPI, imagesAPI } from "../../api/api";
import { NavLink } from "react-router-dom";

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
        ? <>
          <NavLink to="/dogs-info">Go Back</NavLink>
          <p>  </p>
          <FavouritesPage favourites={favourites} />
        </>
        : <Preloader />
      }
    </>
  );
}

export default FavouritesPageContainer;