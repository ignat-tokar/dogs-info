import { favouritesAPI } from "../api/api";

const SET_IS_FAVOURITE = 'dogs-info/info/SET_IS_FAVOURITE';
const SET_PRELOADER = 'dogs-info/info/SET_PRELOADER';

let initialState = {
  isFavourite: false,
  preloader: false,
}

function dogInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_FAVOURITE: {
      return {
        ...state,
        isFavourite: action.isFavourite
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

const setIsFavourite = (isFavourite) => ({ type: SET_IS_FAVOURITE, isFavourite });
const setPreloader = (preloader) => ({ type: SET_PRELOADER, preloader });

export const checkIsFavourite = (imageId) => async (dispatch) => {
  dispatch(setPreloader(true));
  const response = await favouritesAPI.getFavourites();
  if (response.find((value) => value.image_id === imageId)) {
    dispatch(setIsFavourite(true));
  } else {
    dispatch(setIsFavourite(false));
  }
  dispatch(setPreloader(false));
}

export const addToFavouritesThunk = (imageId) => async (dispatch) => {
  dispatch(setPreloader(true));
  // Need fixing bug here AxiosError - HTTP 400 'BAD REQUEST'
  // 
  // const response = await favouritesAPI.postFavourites(imageId);
  dispatch(setIsFavourite(true));
  dispatch(setPreloader(false));
}

export const removeFromFavouritesThunk = (imageId) => async (dispatch) => {
  dispatch(setPreloader(true));
  const response = await favouritesAPI.getFavourites();
  const favouriteId = response.filter(favouriteItem =>
    favouriteItem.image_id === imageId)[0].id;
  const deleteResponse = await favouritesAPI.deleteFavourite(favouriteId);
  dispatch(setIsFavourite(false));
  dispatch(setPreloader(false));
}

export default dogInfoReducer;