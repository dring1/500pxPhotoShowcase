import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import { Router, Route, DefaultRoute } from 'react-router';


export default (
<Route name="app" path="/" handler={Main}>
    <Route path="*" handler={Home} />
    <DefaultRoute handler={Home} />
  </Route>
);
