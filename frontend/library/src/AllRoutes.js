import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Bookcatalog from './Bookcatalog.js';
import Navbar from './Navbar.js'
import Profile from './Profile.js';
import Footer from './Footer.js'
import './Main.css';
import App from './App.js';
import Admin from './Admin.js';
import Suggest from './Suggest.js';
import Donate from './Donate.js';
import Payfine from './Payfine.js';
import Book from './Book.js';

const Structure = ({ Comp, hist, loc }) => (
	<React.Fragment>
		<Navbar />
		{/* <Bookcatalog po={p}/> */}
			<Comp history={hist} location={loc}/>
		<Footer />
	</React.Fragment>
)

const AllRoutes = () => {
	return(
		<Switch> 
		    <Route exact path="/login" component={Login} />
			<Route exact path='/catalogue' component={p => <Structure Comp={Bookcatalog} hist={p.history}/>}/>
		    <Route exact path="/" component={p => <Structure Comp={Bookcatalog} hist={p.history}/>} />
			<Route path='/profile' component={p => <Structure Comp={Profile} hist={p.history}/>}/>
			<Route path="/admin" component={Admin} />
			<Route path='/book' component={p => <Structure Comp={Book} hist={p.history} loc={p.location}/>} />
			<Route path='/suggest' component={p => <Structure Comp={Suggest} hist={p.history}/>} />
			<Route path='/donate' component={p => <Structure Comp={Donate} hist={p.history}/>} />
			<Route path='/fine' component={p => <Structure Comp={Payfine} hist={p.history}/>} />
		</Switch>
	);
}

export default AllRoutes;
