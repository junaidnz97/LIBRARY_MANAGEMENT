import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
//import Profile from './Profile.js'
//import Suggest from './Suggest.js'
//import Donate from './Donate.js'
//import Payfine from './Payfine.js'
import Admin from './Admin.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin/>, document.getElementById('root'));
registerServiceWorker();
