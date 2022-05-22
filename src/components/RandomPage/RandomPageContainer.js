import { useEffect, useState } from "react";
import { breedsAPI, imagesAPI } from "../../api/api";
import RandomPage from "./RandomPage";
import Preloader from "./../../common/Preloader/Preloader";

function RandomPageContainer() {

  const [breed, setBreed] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  } 

  function getImage() {
    setBreed(null);
    let randomId = getRandomInt(99);
    breedsAPI.getBreeds(0, 100).then(data => {
      setBreed(data[randomId]);    
    });
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      {breed
        ? <>
          <RandomPage
            imageId={breed.image.id}
            imageUrl={breed.image.url}
            breed={breed} />
          <button onClick={getImage}>Again</button>
        </>
        : <Preloader />
      }
    </>
  );
}

export default RandomPageContainer;