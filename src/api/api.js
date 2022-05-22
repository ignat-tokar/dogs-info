import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://api.thedogapi.com/v1/',
  headers: {
    "x-api-key": "8ec182bb-2325-41d5-ba4b-82fbb2f961e5"
  }
});

const instanceGet = path => instance.get(path).then(response => response.data);

const instancePost = (path, data) => instance.post(path, data)
  .then(response => response.data);

const instanceDelete = path => instance.delete(path).then(response => response.data);

export const breedsAPI = {
  getBreeds: (page = 0, limit = 5) => 
    instanceGet(`breeds?limit=${limit}&page=${page}`),
  getBreedById: (breed_id = 2) => instanceGet(`breeds/${breed_id}`)
}

export const imagesAPI = {
  getImageById: id => instanceGet(`images/${id}`),
  getBreedInfoByImageId: id => instanceGet(`images/${id}/breeds`),
  getRandomImage: () => instanceGet('images/search')
}

export const favouritesAPI = {
  getFavourites: () => instanceGet('favourites'),
  postFavourites: image_id => instancePost('favourites', {image_id}),
  deleteFavourite: favourite_id => instanceDelete(`favourites/${favourite_id}`)
}

export const votesAPI = {
  getVotes: () => instanceGet('votes'),
  // Off post-process for votes, because deleting not working.
  // postVotes: image_id => instancePost('votes', {image_id, value: 0}),
  // Don't work deleting of votes.
  // deleteVote: vote_id => instanceDelete(`votes/${vote_id}`)
}