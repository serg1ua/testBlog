import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App/App';
import PostDetails from './controllers/post-detailes';
import NewPost from './controllers/new-post';

import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

const Root = () => (
  <Router basename='/'>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/posts/:id' component={PostDetails} />
      <Route path='/new' component={NewPost} />
    </Switch>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
