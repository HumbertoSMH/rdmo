import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilmFilter } from '../helpers/MovieHelper';
import { Search } from './AutoComplete';
// import { useFetch } from '../hooks/useFetch';
import { MovieContext } from './MovieContext';

export const MoviesScreen = () => {
	const { loading, films } = useContext(MovieContext);
	const [filmsFilters, setFilmsFilters] = useState(getFilmFilter(' ', films));

	useEffect(() => {
		setFilmsFilters(getFilmFilter(' ', films));
	}, [films]);

	const handleOnchange = (e) => {
		setFilmsFilters(getFilmFilter(e.target.value, films));
	};

	return (
		<>
			<Search data={filmsFilters} />
			<div>
				<input
					type="text"
					onChange={handleOnchange}
				/>
				<ul>
					{
						filmsFilters.map(p => (
							<li key={p?.id} >
								<Link to={`/link/${p?.id}`}>{p?.title}</Link>
							</li>
						))
					}
				</ul>
			</div>
			{
				!loading
					? (filmsFilters?.map((i, idx) => (
						<div className="col-3" key={idx} id={i?.title.toLowerCase().trim()}>
							<div className="card" >
								{i.title}
								<img src={i.poster} width="100" />
							</div>
						</div>
					)))
					: <h1> </h1>
			}
		</>
	);
};
