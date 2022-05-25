import styles from './DogInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import backgroundImageLeft from './../../assets/images/dog_info_background_left.png';
import backgroundImageRight from './../../assets/images/dog_info_background_right.png';
import lifeSpanGrey from "./../../assets/images/life_span_grey.png";

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

  let scaleImage = breed.image.height > breed.image.width
    ? 300 / breed.image.width : 300 / breed.image.height;
  let imageHeight = breed.image.height * scaleImage;
  let imageWidth = breed.image.width * scaleImage;

  let isLeftPosition = breed.id % 2 > 0 ? true : false;

  return (
    <div className={styles.dogInfoWrapper} style={{
      backgroundImage: isLeftPosition
        ? `url(${backgroundImageLeft})`
        : `url(${backgroundImageRight})`
    }}>
      {showPreloader
        ? <Preloader />
        : <>
          <div className={styles.imageWrapper}><img style={{
            height: `${imageHeight}pt`,
            width: `${imageWidth}pt`
          }} src={imageUrl} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={(isLeftPosition)
              ? styles.infoWrapperLeft
              : styles.infoWrapperRight
            }>
              <h1>"{breed.name}"</h1>
              <BreedInfo title="Life span: " info={`${breed.life_span} years`} />
              <BreedInfo title="Bred for: " info={breed.bred_for} />
              <BreedInfo title="Breed group: " info={breed.breed_group} />
              <BreedInfo title="Height: " info={`${breed.height.metric} cm`} />
              <BreedInfo title="Wieght: " info={`${breed.weight.metric} kg`} />
              <BreedInfo title="Temperament: " info={breed.temperament} />
              <div>
                <img src={lifeSpanGrey} />
                <h3>{`${breed.life_span} years`}</h3>
              </div>
              {isFavourite
                ? <button onClick={removeFromFavourites}>Remove from favourites</button>
                : <button onClick={addToFavourites}>Add to favourite</button>
              }
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default DogInfo;