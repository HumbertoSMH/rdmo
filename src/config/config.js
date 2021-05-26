export const API_URL = 'https://ghibliapi.herokuapp.com/films';
export const CONFIG_FETCH_GET = {
	method: 'GET'
};
export const API_KEY_FILMS = '43172ad';
export const API_POSTER_FILMS_URL = 'http://www.omdbapi.com/?t=';
export const getUrlPoster = (filmName) => `${API_POSTER_FILMS_URL}${filmName}&apikey=${API_KEY_FILMS}`;
