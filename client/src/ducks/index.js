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


// const rootReducer = (state, action) => {
// if (action.type === 'USER_LOGOUT') {
//     const { routing } = state
//     state = { routing } 
// }
// return appReducer(state, action)
// }
// http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
// // 