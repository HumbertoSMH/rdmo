import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoviesScreen } from '../components/MoviesScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div className="main__container">
				<Switch>
					<Route path="/" component={MoviesScreen} />
				</Switch>
			</div>
		</Router>
	);
};
