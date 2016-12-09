import React from 'react'
import InputBoxDoneTyping from 'react-input-box-done-typing'
import EditCard from './cards/EditCard'
import {connect} from 'react-redux'
import { addPeriod,editCard,allFalse } from '../ducks/userAccess.js'
import { overWritePeriods } from '../ducks/current.js'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id;
    let val = event.target.value ? parseFloat(event.target.value) : 0
    result[id] = val
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

  const handleEditCard = () => {
    // debugger
    if (!props.userAccess.editCard){
      props.allFalse()
      props.editCard()
    }
    else {
      props.allFalse()
    }
  }

  const handleNewPeriod = () => {
    props.addPeriod()
  }

  let user_cards
  if (props.current.user) {
    user_cards =
    props.current.user.credit_cards.map((card, i)=> {
      return (<option key={i} id={card.id}>{card.name}</option>)
    })
  }
  return (
    <div className="container" id="tableform" >
      {props.current.user !== "" && <div><h3> Credit Card(s): </h3> {props.current.card !== "" ? <select onChange={handleCard.bind(props)}>{user_cards}</select> : <p></p>}<button onClick={handleEditCard.bind(this)}>Edit</button></div>}
      {props.userAccess.editCard && <EditCard current={props.current} />}
      <h2>Default Financial Data</h2>
      {props.data.payment &&
      <div>
        <label id="userLabel">Monthly Payment: $</label><InputBoxDoneTyping id="payment" defaultValue={+(props.data.payment).toFixed(2)} placeholder="i.e.$123.45" doneTyping={handleChange.bind(props)} doneTypingInterval={150} />
        <label id="userLabel">Monthly Expenditure: $</label><InputBoxDoneTyping id="expenditure" defaultValue={+(props.data.expenditure).toFixed(2)} placeholder="i.e.$123.45" doneTyping={handleChange.bind(props)} doneTypingInterval={150} />
      </div>}
      {props.current.user !== "" && <button onClick={handleNewPeriod.bind(props)}>Add A Period</button>}
      <br />
    </div>
  )
}

export default connect(null, {addPeriod, overWritePeriods, allFalse, editCard})(Form)
