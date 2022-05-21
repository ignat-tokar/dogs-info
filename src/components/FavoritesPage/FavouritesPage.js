import { useEffect, useState } from "react";
import { favouritesAPI, imagesAPI } from "../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import DogInfo from "../MainPage/DogInfo/DogInfo";

function FavouriteDog({ favourite_id, image_id, image_url }) {

  const [breed, setBreed] = useState(null);

  useEffect(() => {
    imagesAPI.getBreedInfoByImageId(image_id).then(data => {
      setBreed(data[0]);
    });
  }, []);

  function removeFromFavourite(){
    favouritesAPI.deleteFavourite(favourite_id);
  }

  return (
    <>
      {breed
        ? <>
          <DogInfo url={image_url} breed={breed} imageId={image_id} />
          <button onClick={removeFromFavourite}>Remove from favourite</button>
          <hr />
        </>
        : <p>Loading ...</p>
      }
    </>
  );
}

function FavouritesPage({ favourites }) {

  return (
    <>
      {favourites.map(dog => {
        return (
          <>
            <FavouriteDog 
              favourite_id={dog.id} 
              image_id={dog.image.id} 
              image_url={dog.image.url}
            />
          </>
        )
      })}
    </>
  );
}

export default FavouritesPage;