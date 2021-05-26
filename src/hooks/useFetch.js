import { useState, useEffect } from 'react';
import { API_URL, CONFIG_FETCH_GET, getUrlPoster } from '../config/config';

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [films, setFilms] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(API_URL, CONFIG_FETCH_GET)
			.then(resp => resp.json())
			.then(data => {
				data.forEach(film => {
					fetch(getUrlPoster(film.title))
						.then(response => response.json())
						.then(posterRes => {
							film = { ...film, poster: posterRes.Poster };
							setFilms(films => [...films, film]);
						});
				});
			});
		setLoading(false);
		setError(null);
	}, [API_URL]);

	return {
		loading,
		films,
		error
	};
};

export const useFetchFilm = (id) => {
	const [loading, setLoading] = useState(true);
	const [film, setFilm] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log('llamda a films');
		fetch(`${API_URL}/${id}`, CONFIG_FETCH_GET)
			.then(resp => resp.json())
			.then(data => {
				fetch(getUrlPoster(data.title), CONFIG_FETCH_GET)
					.then(response => response.json())
					.then(posters => {
						setFilm({ ...data, poster: posters.Poster });
					});
				setLoading(false);
				setError(null);
			});
	}, [id]);

	return {
		loading,
		film,
		error
	};
};
