import $ from 'jquery';
import { browserHistory } from 'react-router'
import {setPeriod, addPeriodToUser, removePeriodFromUser, removePeriodFromCurrent} from './current'


export function createPeriod(formData){
  return function(dispatch){
    dispatch(findingPeriod())
    $.ajax({
      url: 'http://localhost:3000/periods',
      type: 'POST',
      data: {period: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).then((response) => {

      dispatch(setPeriod([response.period]))
      dispatch(addPeriodToUser(response.period))
      dispatch(foundPeriod())
      browserHistory.push('/periods/show')
    }).catch((response)=>{
      let errors = response.responseJSON.error.join(', ')
      dispatch(periodError(errors))
    })
  }
}

export function editPeriod(formData){
  return function(dispatch){
    dispatch(findingPeriod())
    $.ajax({
      url: `http://localhost:3000/periods/` + formData.id,
      type: 'PATCH',
      data: {period: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      dispatch(removePeriodFromCurrent(response.period.id))
      dispatch(removePeriodFromUser(response.period.id))
      dispatch(setPeriod([response.period]))
      dispatch(addPeriodToUser(response.period))
      dispatch(foundPeriod())
    })
  }
}

export default(state = {finding_period: false, error: ''}, action) => {
  switch (action.type) {
    case 'FINDING_PERIOD':
      return Object.assign({}, state, {finding_period: true})
    case 'FOUND_PERIOD':
      return Object.assign({}, state, {finding_period: false, error: ''})
    case 'PERIOD_ERROR':
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

export const periodError = (input) => ({type: 'PERIOD_ERROR', payload: input})
export const findingPeriod = () => ({type: 'FINDING_PERIOD'})
export const foundPeriod = () => ({type: 'FOUND_PERIOD'})
