import styles from './../../assets/styles/DogInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import backgroundImageLeft from './../../assets/images/dog_info_background_left.png';
import backgroundImageRight from './../../assets/images/dog_info_background_right.png';
import lifeSpanGrey from './../../assets/images/life_span_grey.png';
import bredForGrey from './../../assets/images/bred_for_grey.png';
import breedGroupGrey from './../../assets/images/breed_group_grey.png';
import heightGrey from './../../assets/images/height_grey.png';
import weightGrey from './../../assets/images/weight_grey.png';
import temperamentGrey from './../../assets/images/temperament_grey.png';

import lifeSpanYellow from './../../assets/images/life_span_yellow.png';
import bredForYellow from './../../assets/images/bred_for_yellow.png';
import breedGroupYellow from './../../assets/images/breed_group_yellow.png';
import heightYellow from './../../assets/images/height_yellow.png';
import weightYellow from './../../assets/images/weight_yellow.png';
import temperamentYellow from './../../assets/images/temperament_yellow.png';

import favouriteBorderGrey from './../../assets/images/favourite_border_grey.png';
import favouriteFillGrey from './../../assets/images/favourite_fill_grey.png';
import favouriteBorderYellow from './../../assets/images/favourite_border_yellow.png';
import favouriteFillYellow from './../../assets/images/favourite_fill_yellow.png';

function BreedInfo({ image, info }) {
  return (
    <div className={styles.breedInfo}>
      <img src={image} />
      <h3>{info}</h3>
    </div>
  );
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
      backgroundImage: (window.outerWidth >= 480) 
        ? (isLeftPosition)
          ? `url(${backgroundImageLeft})`
          : `url(${backgroundImageRight})`
        : 'none',
      backgroundColor: (window.outerWidth <= 480)
        ? (isLeftPosition)
          ? '#FFC337'
          : '#3B332B'
        : 'none'
    }}>
      {showPreloader
        ? <Preloader />
        : <>
          <div className={styles.imageWrapper} style={{
            borderStyle: 'solid',
            borderWidth: '5pt',
            borderColor: (window.outerWidth >= 480) 
              ? (isLeftPosition) ? '#FFC337' : '#3B332B'
              : (isLeftPosition) ? '#3B332B' : '#FFC337'
          }}>
            <img style={{
              height: `${imageHeight}pt`,
              width: `${imageWidth}pt`,
            }} src={imageUrl} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={(isLeftPosition)
              ? styles.infoWrapperLeft
              : styles.infoWrapperRight
            }>
              <h1>"{breed.name}"</h1>
              {isLeftPosition
                ? <>
                  {breed.life_span && <BreedInfo image={lifeSpanGrey} info={`${breed.life_span} years`} />}
                  {breed.bred_for && <BreedInfo image={bredForGrey} info={breed.bred_for} />}
                  {breed.breed_group && <BreedInfo image={breedGroupGrey} info={breed.breed_group} />}
                  {breed.height.metric && <BreedInfo image={heightGrey} info={`${breed.height.metric} cm`} />}
                  {breed.weight.metric && <BreedInfo image={weightGrey} info={`${breed.weight.metric} kg`} />}
                  {breed.temperament && <BreedInfo image={temperamentGrey} info={breed.temperament} />}
                </>
                : <>
                  {breed.life_span && <BreedInfo image={lifeSpanYellow} info={`${breed.life_span} years`} />}
                  {breed.bred_for && <BreedInfo image={bredForYellow} info={breed.bred_for} />}
                  {breed.breed_group && <BreedInfo image={breedGroupYellow} info={breed.breed_group} />}
                  {breed.height.metric && <BreedInfo image={heightYellow} info={`${breed.height.metric} cm`} />}
                  {breed.weight.metric && <BreedInfo image={weightYellow} info={`${breed.weight.metric} kg`} />}
                  {breed.temperament && <BreedInfo image={temperamentYellow} info={breed.temperament} />}
                </>
              }
            </div>
          </div>
          <div className={styles.favouriteWrapper}>
            {(window.outerWidth >= 480) 
              ? isFavourite
                ? <img src={favouriteFillGrey} onClick={removeFromFavourites} />
                : <img src={favouriteBorderGrey} onClick={addToFavourites} />
              : isLeftPosition
                ? isFavourite
                  ? <img src={favouriteFillGrey} onClick={removeFromFavourites} />
                  : <img src={favouriteBorderGrey} onClick={addToFavourites} />
                : isFavourite
                ? <img src={favouriteFillYellow} onClick={removeFromFavourites} />
                : <img src={favouriteBorderYellow} onClick={addToFavourites} />
            }
          </div>
        </>
      }
    </div>
  );
}

export default DogInfo;