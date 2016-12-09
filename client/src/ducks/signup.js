import $ from 'jquery';
import { browserHistory } from 'react-router'
import {initialState, setInitial} from './tableData'
import {setCurrentUser} from './current'
import {fetchUser} from './fetchUser'
import {loginUser} from './signin'
import {showNewCard} from './userAccess'

export function createUser(formData){
  return function(dispatch){
    dispatch(findingUser())
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({auth: {name: formData.name, email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).then((response) => {
      localStorage.setItem('token', response.jwt)
      dispatch(fetchUser(response.user.id))
      dispatch(loginNewUser())
      dispatch(loginUser(response))
      dispatch(showNewCard())
    }).catch((response)=>{
      let error = response.responseJSON.error.join(', ')
      dispatch(errorMessage(error))
    })
  }
}

export default(state = {creating_user: false, error: '', signingup: true}, action) => {
  switch (action.type) {
    case 'FINDING_USER':
      return Object.assign({}, state, {creating_user: true, signingup: true})
    case 'LOGIN_CREATED_USER':
      return Object.assign({}, state, {creating_user: false, error: '', signingup: false})
    case 'SIGN_UP_ERROR':
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

export const errorMessage = (input) => ({type: 'SIGN_UP_ERROR', payload: input})
export const findingUser = () => ({type: 'FINDING_USER'})
export const loginNewUser = (response) => ({type: 'LOGIN_CREATED_USER'})
