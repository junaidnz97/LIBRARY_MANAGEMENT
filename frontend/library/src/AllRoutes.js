import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import App from './App.js';
import Admin from './Admin.js';

const AllRoutes = () => {
	return(
		<Switch>
			<Route exact path="/login" component={Login} /> 
		    <Route exact path="/" component={App} />
		    <Route path="/admin" component={Admin} />
		</Switch>
	);
}

export default AllRoutes;
