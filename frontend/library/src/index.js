import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Admin from './Admin.js'
import App from './App.js';
import Book from './Book.js';
import Login from './Login.js';
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<Login/>
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
