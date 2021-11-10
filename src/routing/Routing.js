import React from 'react';
import HomePage from '../homePage/HomePage';
import Signup from '../login/Signup';
import ListDisplay from '../listDisplay/ListDisplay';
import './Routing.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default function PageRouter() {
    return(
        <div>
        <Router>
            <main>
            <div class="position">
            <nav>
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/signup"> Sign Up </Link></li>
                <li> <Link to="/opportunities"> Opportunities </Link></li>
            </ul>
            </nav>
            </div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signup" component={Signup} />
                <Route path="/opportunities" component={ListDisplay} />
            </Switch>
            </main>
        </Router>
        </div>
    )
}