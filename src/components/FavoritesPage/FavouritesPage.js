import { useEffect, useState } from "react";
import { favouritesAPI, imagesAPI } from "../../api/api";
import DogInfoContainer from "./../DogInfo/DogInfoContainer";

function FavouriteDog({ favouriteId, imageId, imageUrl }) {

  const [breed, setBreed] = useState(null);

  useEffect(() => {
    imagesAPI.getBreedInfoByImageId(imageId).then(data => {
      setBreed(data[0]);
    });
  }, []);

  function removeFromFavourite(){
    favouritesAPI.deleteFavourite(favouriteId);
  }

  return (
    <>
      {breed
        ? <>
          <DogInfoContainer imageId={imageId} imageUrl={imageUrl} breed={breed}  />
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
          <div key={dog.id}>
            <FavouriteDog 
              favouriteId={dog.id} 
              imageId={dog.image.id} 
              imageUrl={dog.image.url}
            />
          </div>
        )
      })}
    </>
  );
}

export default FavouritesPage;