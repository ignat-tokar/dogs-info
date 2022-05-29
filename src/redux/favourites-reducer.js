import { favouritesAPI, imagesAPI } from "../api/api";

const SET_FAVOURITES_BREEDS = 'dogs-info/favourites/SET_FAVOURITES_BREEDS';
const SET_PRELOADER = 'dogs-info/favourites/SET_PRELOADER';

let initialState = {
	favouritesBreeds: [],
	preloader: true  
}

function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVOURITES_BREEDS: {
      return {
        ...state,
        favouritesBreeds: action.favouritesBreeds
      }
    }
    case SET_PRELOADER: {
      return {
        ...state,
        preloader: action.preloader
      }
    }
    default: {
      return state
    }
  }
}

const setFavouritesBreeds = (favouritesBreeds) => ({ type: SET_FAVOURITES_BREEDS, favouritesBreeds });
const setPreloader = (preloader) => ({ type: SET_PRELOADER, preloader });

export const getFavouritesBreeds = () => async (dispatch) => {
  dispatch(setPreloader(true));
  const response = await favouritesAPI.getFavourites();
  dispatch(setFavouritesBreeds(response));
  dispatch(setPreloader(false));
}

export const addToFavouritesThunk = (imageId) => async (dispatch) => {
  dispatch(setPreloader(true));
  await favouritesAPI.postFavourites(imageId);
  dispatch(getFavouritesBreeds());
}

export const removeFromFavouritesThunk = (imageId) => async (dispatch) => {
  dispatch(setPreloader(true));
  const response = await favouritesAPI.getFavourites();
  const favouriteId = response.filter(favouriteItem =>
    favouriteItem.image_id === imageId)[0].id;
  await favouritesAPI.deleteFavourite(favouriteId);
  dispatch(getFavouritesBreeds());
}

export const getBreedDataByImageId = (imageId, setBreed) => {
  imagesAPI.getBreedInfoByImageId(imageId).then(breedData => {
    imagesAPI.getImageById(imageId).then(imageData => {
      setBreed({...breedData[0], image: 
        {width: imageData.width, height: imageData.height}});
    });      
  });
}

export default favouritesReducer;