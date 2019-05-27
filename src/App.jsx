import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './config/routes';

const App = () => (
	<div className="app">
		<Switch>
			{routes.map(route => (
				<Route {...route} />
			))}
		</Switch>
	</div>
);

export default App;