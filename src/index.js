import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Webpack can import css files too
import './styles/styles.css'; // Webpack can import css files too

const store = configureStore(); // store is returned value from createStore in configureStore function
store.dispatch(loadCourses());

render( // React render
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('app') // root element of react app
);