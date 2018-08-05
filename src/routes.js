import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';
import About from './containers/About';


export default (
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>
            <IndexRoute component={Home} />
        </Route>
        <Route path={"about"} component={About} />

    </Router>
);