import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookcatalog from './Bookcatalog.js';
import Book from './Book.js';
import Profile from './Profile.js';
import Suggest from './Suggest.js';
import Donate from './Donate.js';
import Payfine from './Payfine.js';
import Login from './Login.js';
import './Main.css';

const Main = () => {
	
	return (
		<div className='Main'>
		    <Switch>
			    <Route exact path='/' component={Bookcatalog}/>
			    <Route exact path='/catalogue' component={Bookcatalog}/>
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