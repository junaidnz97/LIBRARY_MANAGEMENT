import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
//import Profile from './Profile.js'
//import Suggest from './Suggest.js'
//import Donate from './Donate.js'
//import Payfine from './Payfine.js'
import Admin from './Admin.js'
import App from './App.js';
import Book from './Book.js'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
