import React from 'react';
import { MovieContext } from './components/MovieContext';
import { useFetch } from './hooks/useFetch';
import { AppRouter } from './router/AppRouter';

export const GhibliApp = () => {
	const { loading, films } = useFetch();
	return (
		<>
			<div className="header">
				<img src="https://cdn.worldvectorlogo.com/logos/studio-ghibli-logo.svg" className="header__img" />
				<i>header</i>
			</div>
			<div className="main">
				<MovieContext.Provider value={{ loading, films }}>
					<AppRouter ></AppRouter>
				</MovieContext.Provider>
			</div>
		</>
	);
};
