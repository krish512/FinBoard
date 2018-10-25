import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeContainer from './pages/homeContainer';
import Login from './pages/login';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost);

// ReactDOM.render(<App />, document.getElementById('root'));

const Main = () =>
    <Router>
        <Switch>
            <Route path='/' component={HomeContainer} />
            <Route path='/login' component={Login} />
        </Switch>
    </Router>

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
