import { useEffect, useState } from "react";
import FavouritesPage from "./FavouritesPage";
import Preloader from "./../../common/Preloader/Preloader";
import { favouritesAPI, imagesAPI } from "../../api/api";

function FavouritesPageContainer() {

  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    let array = [];
    favouritesAPI.getFavourites().then(data=>{
      data.map(favourite=>{
        imagesAPI.getBreedInfoByImageId(favourite.image_id)
          .then(breedData=>{
            array = [...array, breedData];
            if(array.length === data.length){
              setFavourites(array);
            }
          });
      })
    });
  }, []);
  
  function showFav(){
    console.log(favourites);
  }

  return (
    <>
      <button onClick={showFav}>Show</button>
      {favourites
        ? <FavouritesPage favourites={favourites} />
        : <Preloader />
      }
    </>
  );
}

export default FavouritesPageContainer;