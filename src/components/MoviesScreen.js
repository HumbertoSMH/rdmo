import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MoviesScreen = () => {
	const { loading, films, poster } = useFetch();
	return (
		<>
			<div>{JSON.stringify(poster)}</div>
			{
				!loading
					? (films?.map((i, idx) => (
						<div className="col-3" key={idx}>
							<div className="card" >
								{i.title}
								<img src={i.poster} width="100" />
							</div>
						</div>
					)))
					: <h1>Cargando</h1>
			}
		</>
	);
};
