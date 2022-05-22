import { useEffect, useState } from "react";
import { imagesAPI } from "../../api/api";
import RandomPage from "./RandomPage";
import Preloader from "./../../common/Preloader/Preloader";

function RandomPageContainer() {

  const [breedInfo, setBreedInfo] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  function getImage() {
    setBreedInfo(null);
    imagesAPI.getRandomImage().then(randomImage => {
      setImageId(randomImage[0].id);
      setImageUrl(randomImage[0].url); 
      imagesAPI.getBreedInfoByImageId(randomImage[0].id).then(data => {
        setBreedInfo(data[0]);
        console.log(data[0]);
      });
    });
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      {breedInfo && imageId && imageUrl
        ? <>
          <RandomPage
            imageId={imageId}
            imageUrl={imageUrl}
            breed={breedInfo} />
        </>
        : <Preloader />
      }
      <button onClick={getImage}>Random</button>
    </>
  );
}

export default RandomPageContainer;