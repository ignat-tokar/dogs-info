import { useEffect, useState } from 'react';
import { favouritesAPI } from '../../api/api';
import styles from './DogInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

function BreedInfo({ title, info }) {
  return <h3><span style={styles}>{title}</span>{info}</h3>;
}

function DogInfo(props) {

  const { 
    imageId, 
    imageUrl, 
    breed, 
    isFavourite, 
    showPreloader, 
    addToFavourites,
    removeFromFavourites
  } = props;
  
  return (
    <>
      {showPreloader
        ? <Preloader />
        : <>
          <div>
            <img src={imageUrl} />
            {isFavourite
              ? <button onClick={removeFromFavourites}>Remove from favourites</button>
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