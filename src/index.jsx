import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './app/routes';

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.getElementById('app')
);