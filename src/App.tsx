import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import './styles/global.scss';
import { DetailsPage } from './pages/DetailsPage';
import logo from './assets/images/logo.svg';
import { api } from './utils/api';
import { SearchPage } from './pages/SearchPage';

function Header() {
  return (
    <header style={{
      marginBottom: '25px',
    }}
    >
      <img id="logo" src={logo} alt="logo" />
    </header>
  );
}

function Main() {
  useEffect(() => {
    (async () => {
      console.log(await api.search('new'));
    })();
  }, []);

  return (
    <main>
      <Router>
        {/* <nav> */}
        {/*  <ul> */}
        {/*    <li> */}
        {/*      <Link to="/">Search</Link> */}
        {/*    </li> */}
        {/*    <li> */}
        {/*      <Link to="/details">Details</Link> */}
        {/*    </li> */}
        {/*  </ul> */}
        {/* </nav> */}

        <Switch>
          {/* TODO: here will be parameters */}
          <Route path="/details">
            <DetailsPage />
          </Route>
          <Route exact path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

function App() {
  return (
    <div id={styles.layoutWrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
