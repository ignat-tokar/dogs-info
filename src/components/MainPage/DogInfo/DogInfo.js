import { useEffect, useState } from 'react';
import { favouritesAPI } from '../../../api/api';
import styles from './DogInfo.modules.css';
import Preloader from './../../../common/Preloader/Preloader';

function BreedInfo({ title, info }) {
  return (
    <h3><span style={styles}>{title}</span>{info}</h3>
  );
}

function DogInfo({ url, breed }) {

  const [isFavourite, setIsFavourite] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    favouritesAPI.getFavourites().then(data => {
      if (data.find((value) => value.image_id === breed.image.id)) {
        setIsFavourite(true);
        setShowPreloader(false);
      }
    });
  }, [needUpdate]);

  function addToFavourites() {
    setShowPreloader(true);
    favouritesAPI.postFavourites(breed.image.id).then(data => {
      setNeedUpdate(true);
    });
  }

  return (
    <>
      {showPreloader
        ? <Preloader />
        : <>
          
          <div>
            <img src={url} />
            {isFavourite
              ? <>Is favourite</>
              : <button onClick={addToFavourites}>Add to favourite</button>
            }
          </div>
          <h2>"{breed.name}"</h2>
          <BreedInfo title="Life span: " info={`${breed.life_span} years`} />
          <BreedInfo title="Bred for: " info={breed.bred_for} />
          <BreedInfo title="Breed group: " info={breed.breed_group} />
          <BreedInfo title="Height: " info={`${breed.height.metric} cm`} />
          <BreedInfo title="Wieght: " info={`${breed.weight.metric} kg`} />
          <BreedInfo title="Temperament: " info={breed.temperament} />
        </>
      }
    </>
  );
}

export default DogInfo;