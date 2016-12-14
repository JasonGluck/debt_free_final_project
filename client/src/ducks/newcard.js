import $ from 'jquery';
import { browserHistory } from 'react-router'
import {setCard, addNewCardtoUser, removeCardFromCurrent, removeCardFromUser, overWritePeriods} from './current'


export function createCard(formData){
  return function(dispatch){
    dispatch(findingCard())
    $.ajax({
      url: 'http://localhost:3000/credit_cards',
      type: 'POST',
      data: {card: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).then((response) => {
      dispatch(setCard(response.card))
      dispatch(addNewCardtoUser(response.card))
      dispatch(foundCard())
      dispatch(overWritePeriods(''))
      browserHistory.push('/user')
    }).catch((response)=>{
      let errors = response.responseJSON.error.join(', ')
      dispatch(cardError(errors))
    })
  }
}

export function editCard(formData){
  return function(dispatch){
    dispatch(findingCard())
    $.ajax({
      url: `http://localhost:3000/credit_cards/` + formData.id,
      type: 'PATCH',
      data: {card: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      dispatch(removeCardFromUser(response.card.id))
      dispatch(setCard(response.card))
      dispatch(addNewCardtoUser(response.card))
      dispatch(foundCard())
      browserHistory.push('/user')
    })
  }
}

export default(state = {finding_card: false, error: ''}, action) => {
  switch (action.type) {
    case 'FINDING_CARD':
      return Object.assign({}, state, {finding_card: true})
    case 'FOUND_CARD':
      return Object.assign({}, state, {finding_card: false, error: ''})
    case 'NEW_CARD_ERROR':
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}


export const findingCard = () => ({type: 'FINDING_CARD'})
export const foundCard = () => ({type: 'FOUND_CARD'})
export const cardError = (input) => ({type: 'NEW_CARD_ERROR', payload: input})
// export const persistCard = (response) => ({type: 'PERSIST_CARD', card: response.card})
