import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';

import '../styles/App.scss';
import SearchPage from '../pages/SearchPage';
import { DetailsPage } from '../pages/DetailsPage';

function App() {
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Search</Link>
                            </li>
                            <li>
                                <Link to="/details">Details</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        {/* TODO: here will be parameters */}
                        <Route path="/details">
                            <DetailsPage />
                        </Route>
                        <Route exact path="/">
                            <SearchPage />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </>
    );
}

export default App;
