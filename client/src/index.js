import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './ducks'
// import { setInitial } from './ducks/userAccess.js'
 import SignIn from './components/users/SignIn'
 import SignUp from './components/users/SignUp'

import NavBarGuest from './containers/NavBarGuest'
import Table from './containers/Table'
import NewPeriod from './components/periods/NewPeriod'
import EditPeriod from './components/periods/PeriodEdit'
import NewCard from './components/cards/NewCard'
import EditCard from './components/cards/EditCard'
import PeriodList from './components/periods/PeriodList'
 // , SignOut  from '.'
// import App from './containers/App.js';

import { composeWithDevTools } from 'redux-devtools-extension';
import '../public/css/table.css';
import GuestHome from './containers/GuestHome'
import UserHome from './containers/UserHome'
import { Router, Route, browserHistory } from 'react-router'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={GuestHome} >
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Route>
    <Route path="/user" component={UserHome}>
      <Route path="/table" component={Table} />
      <Route path="/periods/new" component={NewPeriod} />
      <Route path="/periods/edit" component={EditPeriod} />
      <Route path="/cards/new" component={NewCard} />
      <Route path="/cards/edit" component={EditCard} />
      <Route path="/periods/show" component={PeriodList} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


