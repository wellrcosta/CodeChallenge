import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Results from './Pages/Results';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/efetivar' component={Results} />
			</Switch>
		</Router>
	);
}
