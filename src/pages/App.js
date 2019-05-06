import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Home from './Index';

const App = () => (
  <div className='ui container'>
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
    </Switch>
    </Router>
    </div>
);

export default App;
