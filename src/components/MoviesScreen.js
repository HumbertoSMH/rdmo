import React from 'react';

export const MoviesScreen = () => {
	const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{
				movies.map(i => (
					<div className="col-3" key={i}>
						<div className="card" >
							Movies
						</div>
					</div>
				))
			}

		</>
	);
};
