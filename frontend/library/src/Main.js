import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bookcatalog from './Bookcatalog.js'

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
		     {/* <Route path='/roster' component={Roster}/>
		      <Route path='/schedule' component={Schedule}/> */}
		    </Switch>
		</div>
	);
}

export default Main;