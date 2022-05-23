import { breedsAPI } from "../api/api";

const SET_RANDOM_BREED = 'dogs-info/random/SET_RANDOM_BREED';
const SET_PRELOADER = 'dogs-info/random/SET_PRELOADER';

let initialState = {
	randomBreed: {
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
	preloader: true  
}

function randomReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RANDOM_BREED: {
      return {
        ...state,
        randomBreed: action.randomBreed
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

const setRandomBreed = (randomBreed) => ({ type: SET_RANDOM_BREED, randomBreed });
const setPreloader = (preloader) => ({ type: SET_PRELOADER, preloader });

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomBreed = () => async (dispatch) => {
  dispatch(setPreloader(true));
  let randomId = getRandomInt(99);
  const response = await breedsAPI.getBreeds(0, 100);
  dispatch(setRandomBreed(response[randomId]));
  dispatch(setPreloader(false));
}

export default randomReducer;