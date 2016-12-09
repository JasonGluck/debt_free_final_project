import { combineReducers } from 'redux'
import userAccess from './userAccess.js'
import tableData from './tableData.js'
import signup from './signup.js'
import signin from './signin.js'
import newCard from './newcard.js'
import newPeriod from './newperiod.js'
import current from './current.js'
import { Router, Route, browserHistory } from 'react-router'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  tableData,
  userAccess,
  signup,
  signin,
  newCard,
  newPeriod,
  current, 
  routing: routerReducer
})

export default rootReducer
