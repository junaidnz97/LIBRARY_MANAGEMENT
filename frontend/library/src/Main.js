import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookcatalog from './Bookcatalog.js';
import Book from './Book.js';
import Profile from './Profile.js';
import Suggest from './Suggest.js';
import Donate from './Donate.js';
import Payfine from './Payfine.js';
import './Main.css';

const Main = () => {
	
	return (
		<div className='Main'>
		    <Switch>
			    <Route exact path='/fe/' component={Bookcatalog}/>
			    <Route exact path='/fe/catalogue' component={Bookcatalog}/>
			    <Route path='/fe/book' component={Book} />
			    <Route path='/fe/profile' component={Profile}/>
			    <Route path='/fe/suggest' component={Suggest} />
			    <Route path='/fe/donate' component={Donate} />
			    <Route path='/fe/fine' component={Payfine} />
		    </Switch>
		</div>
	);
}

export default Main;