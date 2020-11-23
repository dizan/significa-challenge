import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';

import '../styles/App.scss';
import MainPage from './MainPage';
import Dish from './Dish';

class App extends Component {


    render() {

        return (
            <>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Main</Link>
                                </li>
                                <li>
                                    <Link to="/dish">Add dish</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/dish">
                                <Dish />
                            </Route>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </>
        );
    }
}

export default App;

