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
import Bookcatalogsearch from './Bookcatalogsearch.js';

const Structure = ({ Comp, hist, loc }) => (
	<React.Fragment>
		<Navbar />
		{/* <Bookcatalog po={p}/> */}
			<Comp history={hist} location={loc}/>
		<Footer />
	</React.Fragment>
)

const AllRoutes = (props) => {
	return(
		<Switch> 
		    <Route exact path="/fe/login" component={Login} />
			<Route exact path='/fe/catalogue' component={p => <Structure Comp={Bookcatalog} hist={p.history} />}/>
		    <Route exact path="/fe/" component={p => <Structure Comp={Bookcatalog} hist={p.history}/>} />
			<Route path='/fe/cataloguesearch' component={p => <Structure Comp={Bookcatalogsearch} hist={p.history} />}/>
			<Route path='/fe/profile' component={p => <Structure Comp={Profile} hist={p.history}/>}/>
			<Route path="/fe/admin" component={Admin} />
			<Route path='/fe/book' component={p => <Structure Comp={Book} hist={p.history} loc={p.location}/>} />
			<Route path='/fe/suggest' component={p => <Structure Comp={Suggest} hist={p.history}/>} />
			<Route path='/fe/donate' component={p => <Structure Comp={Donate} hist={p.history}/>} />
			<Route path='/fe/fine' component={p => <Structure Comp={Payfine} hist={p.history}/>} />
		</Switch>
	);
}

export default AllRoutes;
