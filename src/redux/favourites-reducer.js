import { favouritesAPI } from "../api/api";

const SET_FAVOURITES_BREEDS = 'dogs-info/favourites/SET_FAVOURITES_BREEDS';
const SET_PRELOADER = 'dogs-info/favourites/SET_PRELOADER';

let initialState = {
	favouritesBreeds: [
		{
			bred_for: "Small rodent hunting, lapdog",
			breed_group: "Toy",
			height: { imperial: '9 - 11.5', metric: '23 - 29' },
			id: 1,
			image: { id: 'BJa4kxc4X', width: 1600, height: 1199, url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg' },
			life_span: "10 - 12 years",
			name: "Affenpinscher",
			origin: "Germany, France",
			reference_image_id: "BJa4kxc4X",
			temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
			weight: { imperial: '6 - 13', metric: '3 - 6' }
		},
		{
			bred_for: "Coursing and hunting",
			breed_group: "Hound",
			country_code: "AG",
			height: {imperial: '25 - 27', metric: '64 - 69'},
			id: 2,
			image: {id: 'hMyT4CDXR', width: 606, height: 380, url: 'https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg'},
			life_span: "10 - 13 years",
			name: "Afghan Hound",
			origin: "Afghanistan, Iran, Pakistan",
			reference_image_id: "hMyT4CDXR",
			temperament: "Aloof, Clownish, Dignified, Independent, Happy",
			weight: {imperial: '50 - 60', metric: '23 - 27'}			
		}
	],
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