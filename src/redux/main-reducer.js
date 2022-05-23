import { breedsAPI } from "../api/api";

const SET_BREEDS = 'dogs-info/main/SET_BREEDS';
const SET_PRELOADER = 'dogs-info/mainSET_PRELOADER';

let initialState = {
	breeds: [
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
};

const mainReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_BREEDS: {
			return {
				...state,
				breeds: action.breeds
			}
		}
		case SET_PRELOADER: {
			return {
				...state,
				preloader: action.preloader
			}
		}
		default:
			return state;
	}
}
export const setBreeds = (breeds) => ({ type: SET_BREEDS, breeds });
export const setPreloader = (preloader) => ({ type: SET_PRELOADER, preloader});

function setData(breeds, preloader) {
	return dispatch => {
		dispatch(setBreeds(breeds));
		dispatch(setPreloader(preloader));
	}
}

export const getBreeds = (currentPage) => async (dispatch) => {
	dispatch(setPreloader(true));
	const response = await breedsAPI.getBreeds(currentPage);
	dispatch(setData(response, false));
}

export default mainReducer;