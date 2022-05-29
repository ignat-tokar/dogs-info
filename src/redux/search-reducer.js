import { breedsAPI, imagesAPI } from "../api/api";

const SET_FOUND_BREEDS = 'dogs-info/search/SET_FOUND_BREEDS';
const SET_PRELOADER = 'dogs-info/search/SET_PRELOADER';
const SET_DETAIL_PRELOADER = 'dogs-info/search/SET_DETAIL_PRELOADER';
const SET_DETAIL_INFO = 'dogs-info/search/SET_DETAIL_INFO';

let initialState = {
	foundBreeds: [],
  detailInfo: null,
	preloader: false,
  detailPreloader: false
}

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOUND_BREEDS: {
      return {
        ...state,
        foundBreeds: action.foundBreeds
      }
    }
    case SET_PRELOADER: {
      return {
        ...state,
        preloader: action.preloader
      }
    }
    case SET_DETAIL_PRELOADER: {
      return {
        ...state,
        preloader: action.detailPreloader
      }
    }
    case SET_DETAIL_INFO: {
      return {
        ...state,
        detailInfo: action.detailInfo
      }
    }    
    default: {
      return state
    }
  }
}

const setFoundBreeds = (foundBreeds) => ({ type: SET_FOUND_BREEDS, foundBreeds });
const setPreloader = (preloader) => ({ type: SET_PRELOADER, preloader });
const setDetailPreloader = (detailPreloader) => ({ type: SET_DETAIL_PRELOADER, detailPreloader });
const setDetailInfo = (detailInfo) => ({ type: SET_DETAIL_INFO, detailInfo });

export const getFoundBreeds = (inputValue) => async (dispatch) => {
  dispatch(setPreloader(true));
  dispatch(setDetailInfo(null));
  const response = await breedsAPI.getBreedByName(inputValue);
  dispatch(setFoundBreeds(response));
  dispatch(setPreloader(false));
}

export const getDetailInfo = (id) => async (dispatch) => {
  dispatch(setDetailPreloader(true));
  const breedData = await breedsAPI.getBreedById(id);
  const imageData = await imagesAPI.getImageById(breedData.reference_image_id);
  dispatch(setDetailInfo({...breedData, image: {id: imageData.id, width: imageData.width, height:
    imageData.height, url: imageData.url}}));
  dispatch(setDetailPreloader(false));
}

export default searchReducer;