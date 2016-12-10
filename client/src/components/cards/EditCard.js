import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createCard, editCard} from '../../ducks/newcard'
import { setCard, setPeriod } from '../../ducks/current'
import { setValue } from '../../ducks/tableData'

class EditCard extends Component {
  constructor(props){
    super(props)
    this.state = {name: this.props.current.card.name, debt: this.props.current.card.debt, interest_rate:this.props.current.card.interest_rate, user_id: this.props.current.user.id, id: this.props.current.card.id}
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleDebt(event){
    this.setState({debt: parseFloat(event.target.value)})
  }

  handleInterest(event){
    this.setState({interest_rate: parseFloat(event.target.value)})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.setCard(this.state)
    const newValues = {debt: this.state.debt,
                    creditcard: this.state.name,
                    interest: this.state.interest_rate}
    this.props.setValue(newValues)
    this.props.editCard(this.state)

  }
  setSubmit(button){
    this.submitName = button.target.value
  }

  render(){
    return(
      <div className="twelve columns" id="forms">
      <h2>Edit Card</h2>
      <form onSubmit={this.handleSubmit.bind(this)} >
         <p><label id="userLabel">Card Name</label><input type="text" id="card_name" defaultValue={this.props.current.card.name} placeholder="My Visa" onChange={this.handleName.bind(this)}/></p>
         <p><label id="userLabel">Total Debt</label><input type="number" defaultValue={this.props.current.card.debt} id="debt" step=".01" onChange={this.handleDebt.bind(this)} /></p>
         <p><label id="userLabel">Interest Rate</label><input type="number" defaultValue={this.props.current.card.interest_rate} id="interest_rate" step=".01" onChange={this.handleInterest.bind(this)} />%</p>
        <p><input type="submit" onClick={this.setSubmit.bind(this)} id="submit" value="Save Card" /></p>
      </form>
      {this.props.newCard.error ? <h2 className="error">{this.props.newCard.error}</h2> : <span /> }
      </div>
      )

  }

}
function mapStateToProps(state){
  return {newCard: state.newCard, current: state.current}
}
export default connect(mapStateToProps, { editCard,setCard,setPeriod,setValue })(EditCard)
