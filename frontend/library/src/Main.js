import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookcatalog from './Bookcatalog.js';
import Book from './Book.js';
import Profile from './Profile.js';
import Suggest from './Suggest.js';
import Donate from './Donate.js';
import Payfine from './Payfine.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => {
	
	return (
		<div>
		    <Switch>
			    <Route exact path='/' component={Bookcatalog}/>
			    <Route path='/book' component={Book} />
			    <Route path='/profile' component={Profile}/>
			    <Route path='/suggest' component={Suggest} />
			    <Route path='/donate' component={Donate} />
			    <Route path='/fine' component={Payfine} />
		    </Switch>
		</div>
	);
}

export default Main;