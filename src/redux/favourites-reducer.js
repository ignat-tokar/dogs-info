import { favouritesAPI } from "../api/api";

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

export default favouritesReducer;