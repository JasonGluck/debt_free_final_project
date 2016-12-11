import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './ducks'
import App from './containers/App.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import '../public/css/table.css';
import GuestHome from './components/containers/GuestHome'
import { Router, Route, browserHistory } from 'react-router'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/guesthome" component={GuestHome} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
