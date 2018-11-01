import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import './Main.css';
import App from './App.js';

const AllRoutes = () => {
	return(
		<Switch> 
		    <Route exact path="/login" component={Login} />
		    <Route path="/" component={App} />
		</Switch>
	);
}

export default AllRoutes;
