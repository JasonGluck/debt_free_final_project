import $ from 'jquery';
import {setCurrentUser, setCard, setPeriod} from './current'
import {findUser, loginUser} from './signin'
import {setValue} from './tableData'
import { browserHistory } from 'react-router'

export function fetchUser(id){
  return function(dispatch){
    dispatch(findUser())
    $.ajax({
      url: `http://localhost:3000/users/${id}`,
      type: 'GET',
      data: id,
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      dispatch(loginUser())
      dispatch(setCurrentUser(response))
      if (response.credit_cards.length > 0 ){
        let recentCard = response.credit_cards[0]
        let recentCardPeriods = response.periods.filter(per=>{
          return per.credit_card_id === recentCard.id
        })
        let recentPeriod = recentCardPeriods[recentCardPeriods.length-1]
        dispatch(setCard(recentCard))
        dispatch(setPeriod(recentCardPeriods))
        let averageExpenditure = recentCardPeriods.reduce((a,b)=>{return a + b.expenditure}, 0)/recentCardPeriods.length
        let averagePayment = recentCardPeriods.reduce((a,b)=>{return a + b.payment}, 0)/recentCardPeriods.length
        const newValues = {debt: recentCard.debt,
                        start_month: new Date().getMonth(),
                        start_year: new Date().getFullYear(),
                        // end_month: recentPeriod.end_month,
                        // end_year: recentPeriod.end_year,
                        creditcard: recentCard.name,
                        payment: averagePayment,
                        expenditure: averageExpenditure,
                        interest: recentCard.interest_rate}
        dispatch(setValue(newValues))
        browserHistory.push('/user')
      }
    else {
    browserHistory.push('/cards/new')}
    })
  }
}
