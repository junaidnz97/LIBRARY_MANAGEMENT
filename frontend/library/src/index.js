import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import App from './App.js';
import Book from './Book.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Book/>, document.getElementById('root'));
registerServiceWorker();
