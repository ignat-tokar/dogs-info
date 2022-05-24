import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToFavouritesThunk, removeFromFavouritesThunk } from "../../redux/favourites-reducer";
import DogInfo from "./DogInfo";

function DogInfoContainer({
  imageId,
  imageUrl,
  breed,
  preloader,
  favouritesBreeds,
  addToFavouritesThunk,
  removeFromFavouritesThunk
}) {

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(false);
    favouritesBreeds.map(favouriteBreed => {
      if(favouriteBreed.image_id === imageId) 
        setIsFavourite(true);
    });
  }, [favouritesBreeds]);

  const addToFavourites = () => {
    addToFavouritesThunk(imageId);
  }
  const removeFromFavourites = () => {
    removeFromFavouritesThunk(imageId);
  }

  return (
    <DogInfo
      imageId={imageId}
      imageUrl={imageUrl}
      breed={breed}
      isFavourite={isFavourite}
      showPreloader={preloader}
      addToFavourites={addToFavourites}
      removeFromFavourites={removeFromFavourites}
    />
  );
}

function mapStateToProps(state) {
  return {
    favouritesBreeds: state.favouritesPage.favouritesBreeds,
    preloader: state.favouritesPage.preloader
  }
}

export default connect(mapStateToProps, {
  addToFavouritesThunk,
  removeFromFavouritesThunk,
})(DogInfoContainer);