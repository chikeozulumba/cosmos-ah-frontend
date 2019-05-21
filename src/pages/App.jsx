import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import { ConnectedRegister } from './Register';
import { connectedLogin } from './Login';
import Profile from './Profile';
import { ConnectedHandleSocialAuth } from '../components/HandleSocialAuth';
import '../assets/css/App.css';
import ForgotPassword from './ForgotPassword';
import { connectedFeed } from './Feeds';
import CreateArticle from './CreateArticle';
import ViewArticle from './ViewArticle';
import ResetPassword from './ResetPassword';
import { PrivateRoute } from '../lib/authenticateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={connectedLogin} />
      <Route path="/signup" component={ConnectedRegister} />
      <PrivateRoute path="/profile/:id?" exact component={Profile} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path='/handlesocialauth' component={ConnectedHandleSocialAuth} />
      <Route path="/feeds" component={connectedFeed} />
      <PrivateRoute path="/article/create" exact component={CreateArticle} />
      <PrivateRoute path="/articles/:id?" exact component={ViewArticle} />
      <Route path="/password-reset/:resetToken" component={ResetPassword} />
    </Switch>
  </Router>
);

export default App;
