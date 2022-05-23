import { useEffect } from "react";
import { connect } from "react-redux";
import { addToFavouritesThunk, checkIsFavourite, removeFromFavouritesThunk } from "../../redux/dog-info-reducer";
import DogInfo from "./DogInfo";

function DogInfoContainer ({ 
  imageId,
  imageUrl,
  breed,
  isFavourite,
  preloader,
  checkIsFavourite,
  addToFavouritesThunk,
  removeFromFavouritesThunk
 }) {

  useEffect(() => {checkIsFavourite(imageId)}, [imageId, checkIsFavourite]);

  const addToFavourites = () => {
    addToFavouritesThunk(imageId);
  }
  const removeFromFavourites = () => {
    removeFromFavouritesThunk(imageId);
  }

  return(
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
    isFavourite: state.dogInfoComponent.isFavourite,
    preloader: state.dogInfoComponent.preloader
  }
}

export default connect(mapStateToProps, { 
  checkIsFavourite,
  addToFavouritesThunk,
  removeFromFavouritesThunk
 })(DogInfoContainer);