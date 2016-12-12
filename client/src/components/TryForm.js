import React from 'react'
import InputBoxDoneTyping from 'react-input-box-done-typing'
import {connect} from 'react-redux'
// import { addPeriod } from '../ducks/userAccess'
import { overWritePeriods, setCard, } from '../ducks/current'
import {setValue} from '../ducks/tableData'
// import {browserHistory} from 'react-router'
const TryForm = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id;
    let val = event.target.value ? parseFloat(event.target.value) : null
    result[id] = val
    let date = new Date()

    props.setValue({start_year: date.getYear()+1900})
    props.setValue({start_month: date.getMonth()})
    props.setValue(result)
  }

  const handleCard = (event) => {
    let newCardName = event.target.value
    let newCard = props.current.user.credit_cards.filter(card=>{return card.name === newCardName})[0]
    props.setCard(newCard)
    props.setValue(newCard)
    let cardId = newCard.id
    let newPeriods = props.current.user.periods.filter(period=>{return period.credit_card_id === newCard.id})
    props.overWritePeriods(newPeriods)
  }

  let user_cards
  if (props.current.user && props.current.user.credit_cards) {
    user_cards =
    props.current.user.credit_cards.map((card, i)=> {
      return (<option key={i} id={card.id}>{card.name}</option>)
    })
  }

  return (
    <div className="allforms">
      <div className="container" id="tableform" >
        <h2>What's Your Situation?</h2>
        <div>
          <label id="userLabel">Debt: $<input type="number" id="debt" placeholder="i.e.123.45" onChange={handleChange.bind(props)} /></label>
          <label id="userLabel">Interest Rate: <input type="number" id="interest" placeholder="i.e.123.45" onChange={handleChange.bind(props)} />%</label>
          <label id="userLabel">Monthly Payment: $<input type="number" id="payment" placeholder="i.e.123.45" onChange={handleChange.bind(props)} /></label>
          <label id="userLabel">Monthly Expenditure: $<input type="number" id="expenditure" placeholder="i.e.123.45" onChange={handleChange.bind(props)} /></label>
        </div>
        <br/>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {current: state.current, data: state.tableData}
}

export default connect(mapStateToProps, {overWritePeriods, setValue, setCard})(TryForm)
