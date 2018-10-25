import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import Profile from './Profile.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Profile/>, document.getElementById('root'));
registerServiceWorker();
