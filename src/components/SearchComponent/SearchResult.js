import { useEffect, useState } from "react";
import { breedsAPI, imagesAPI } from "../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import DogInfoContainer from "../DogInfo/DogInfoContainer";

function SearchResult({ foundBreeds }) {

  const [breed, setBreed] = useState(null);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(()=>{},[breed]);

  function showDetailInfo(e) {
    setShowPreloader(true);
    breedsAPI.getBreedById(e.target.id).then(breedData => {
      imagesAPI.getImageById(breedData.reference_image_id).then(data => {
        setBreed(data);
        setShowPreloader(false);
      });
    });
  }

  return (
    <>
      {showPreloader
        ? <Preloader />
        : <>{breed && <DogInfoContainer 
          imageId={breed.id} 
          imageUrl={breed.url}
          breed={breed.breeds[0]}  
        />}</>
      }
   
      {foundBreeds.map(breed => {
        return (
          <p key={breed.id}>
            <button id={breed.id}onClick={showDetailInfo}>{breed.name}</button>
          </p>
        );
      })}
    </>
  );
}

export default SearchResult;