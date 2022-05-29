import { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import { getBreedDataByImageId } from "../../redux/favourites-reducer";
import DogInfoContainer from "../DogInfo/DogInfoContainer";

function FavouriteDog({ favouriteId, imageId, imageUrl }) {

  const [breed, setBreed] = useState(null);

  useEffect(() => {
    getBreedDataByImageId(imageId, setBreed);
  }, [imageId, setBreed ]);
  
  return (
    <>
      {breed
        ? <>
          <DogInfoContainer 
            imageId={imageId}
            imageUrl={imageUrl}
            breed={breed}
          />
        </>
        : <Preloader />
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