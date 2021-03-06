import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import store from './state/store';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min';
import auth from './utils/auth';
  auth();
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
