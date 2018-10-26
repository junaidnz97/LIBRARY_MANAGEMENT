import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
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
