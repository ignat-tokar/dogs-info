import { favouritesAPI } from '../../../api/api';
import styles from './DogInfo.modules.css';

function BreedInfo ({title, info}){
  return (
    <h3><span style={styles}>{title}</span>{info}</h3>
  );
}

function DogInfo({ url, breed }) {

  return (
    <>
      <div>
        <img src={url} />
      </div>
      <h2>"{breed.name}"</h2>
      <BreedInfo title="Life span: " info={`${breed.life_span} years`} />
      <BreedInfo title="Bred for: " info={breed.bred_for} />
      <BreedInfo title="Breed group: " info={breed.breed_group} />
      <BreedInfo title="Height: " info={`${breed.height.metric} cm`} />
      <BreedInfo title="Wieght: " info={`${breed.weight.metric} kg`} />
      <BreedInfo title="Temperament: " info={breed.temperament} />
    </>
  );
}

export default DogInfo;