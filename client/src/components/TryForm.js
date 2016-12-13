import React from 'react'
import InputBoxDoneTyping from 'react-input-box-done-typing'
import {connect} from 'react-redux'
// import { addPeriod } from '../ducks/userAccess'
import { overWritePeriods, setCard, resetCurrent} from '../ducks/current'
import {setValue, removeValues} from '../ducks/tableData'

class TryForm extends React.Component  {
  
  componentWillMount(){
    this.props.resetCurrent()
    this.props.removeValues()
  }
  
  constructor(props){
    super(props)
  }

   handleChange (event) {
    let result = {}; let id = event.target.id;
    let val = event.target.value ? parseFloat(event.target.value) : null
    result[id] = val
    // debugger
    let date = new Date()

    this.props.setValue({creditcard: "fake"})
    this.props.setValue({start_year: date.getYear()+1900})
    this.props.setValue({start_month: date.getMonth()})
    this.props.setValue(result)
  }

    handleCard (event)  {
    let newCardName = event.target.value
    let newCard = this.props.current.user.credit_cards.filter(card=>{return card.name === newCardName})[0]
    this.props.setCard(newCard)
    this.props.setValue(newCard)
    let cardId = newCard.id
    let newPeriods = this.props.current.user.periods.filter(period=>{return period.credit_card_id === newCard.id})
    this.props.overWritePeriods(newPeriods)
  }
render(){
  let user_cards
  if (this.props.current.user && this.props.current.user.credit_cards) {
    user_cards =
    this.props.current.user.credit_cards.map((card, i)=> {
      return (<option key={i} id={card.id}>{card.name}</option>)
    })
  }

  return (
    <div className="allforms">
      <div className="container" id="tableform" >
        <h2>Input Your Debt</h2>
        <div>
          <label id="userLabel">Total Debt: $<input type="number" id="debt" placeholder="i.e.123.45" onChange={this.handleChange.bind(this)} /></label>
          <label id="userLabel">Interest Rate: <input type="number" id="interest" placeholder="i.e.123.45" onChange={this.handleChange.bind(this)} />%</label>
          <label id="userLabel">Monthly Payment: $<input type="number" id="payment" placeholder="i.e.123.45" onChange={this.handleChange.bind(this)} /></label>
          <label id="userLabel">Monthly Expenditure: $<input type="number" id="expenditure" placeholder="i.e.123.45" onChange={this.handleChange.bind(this)} /></label>
        </div>
        <br/>
      </div>
    </div>
  )
  }
}

function mapStateToProps(state){
  return {current: state.current, data: state.tableData}
}

export default connect(mapStateToProps, {overWritePeriods, setValue, setCard, resetCurrent, removeValues})(TryForm)
