import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Admin from './Admin.js'
import App from './App.js';
import AllRoutes from './AllRoutes.js';
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<AllRoutes/>
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
