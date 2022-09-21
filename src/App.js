import React, { useState } from 'react';
import data from './assets/data.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import Home from './components/Home';
import Playback from './components/Playback';
import './index.css';

export const App = () => {
  console.log(data);

  return (
    <>
      <SearchBar placeholder='Search' data={data} />
      <Router>
        <Switch>
          <Route path='/'>
            <Home data={data} />
          </Route>
        </Switch>
        <Switch>
          <Route path='/playback'>
            <Playback />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
