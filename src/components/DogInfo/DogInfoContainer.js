import { useEffect, useState } from "react";
import { favouritesAPI } from "../../api/api";
import DogInfo from "./DogInfo";

function DogInfoContainer ({imageId, imageUrl, breed }) {
  
  const [isFavourite, setIsFavourite] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    favouritesAPI.getFavourites().then(data => {
      if (data.find((value) => value.image_id === imageId)) {
        setIsFavourite(true);
      } else{
        setIsFavourite(false);
      } 
      setShowPreloader(false);
    });
  }, [needUpdate, imageId]);

  function addToFavourites() {
    setShowPreloader(true);
    favouritesAPI.postFavourites(imageId).then(data => {
      setNeedUpdate(!needUpdate);
    });
  }
  
  function removeFromFavourites() {
    setShowPreloader(true);
    favouritesAPI.getFavourites().then(data =>{
      let favouriteId = data.filter(favouriteItem => 
        favouriteItem.image_id === imageId)[0].id;
      favouritesAPI.deleteFavourite(favouriteId).then(data => {
        setNeedUpdate(!needUpdate);
      });
    });
  }

  return(
    <DogInfo 
      imageId={imageId}
      imageUrl={imageUrl}
      breed={breed}
      isFavourite={isFavourite}
      showPreloader={showPreloader}
      addToFavourites={addToFavourites}
      removeFromFavourites={removeFromFavourites}
    />
  );
}

export default DogInfoContainer;