import { useEffect, useState } from "react";
import { imagesAPI } from "../../api/api";
import DogInfoContainer from "./../DogInfo/DogInfoContainer";

function FavouriteDog({ favouriteId, imageId, imageUrl }) {

  const [breed, setBreed] = useState(null);

  useEffect(() => {
    imagesAPI.getBreedInfoByImageId(imageId).then(data => {
      setBreed(data[0]);
    });
  }, [imageId]);

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