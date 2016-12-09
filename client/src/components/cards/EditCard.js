import React, { Component } from 'react';
import { connect } from 'react-redux'
import {editCard} from '../../ducks/newcard'
import { setCard, setPeriod } from '../../ducks/current'
import { setValue } from '../../ducks/tableData'

class EditCard extends Component {
  constructor(props){
    super(props)
    let id = this.props.id
    let submitName
    this.state = {name: '', debt: '', interest_rate:'', id: id}
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
    // this.props.setPeriod({payment: payment, expenditure: 0})
    // const newValues = {debt: this.state.debt,
    //                 start_month: date.getMonth(),
    //                 start_year: date.getYear()+1900,
    //                 creditcard: this.state.name,
    //                 payment: payment,
    //                 expenditure: this.state.expenditure,
    //                 interest: this.state.interest_rate}
    // this.props.setValue(newValues)
    // if (this.submitName === "store"){
      this.props.editCard(this.state)
    // }
  }
  // setSubmit(button){
  //   this.submitName = button.target.value
  // }

  render(){
    return(
      <div className="twelve columns" id="forms">
      <h2>Edit Card</h2>
      <form onSubmit={this.handleSubmit.bind(this)} >
         <p><label id="userLabel">Card Name</label><input type="text" id="card_name" placeholder="My Visa" onChange={this.handleName.bind(this)}/></p>
         <p><label id="userLabel">Total Debt</label><input type="number" id="debt" step=".01" onChange={this.handleDebt.bind(this)} /></p>
         <p><label id="userLabel">Interest Rate</label><input type="number" id="interest_rate" step=".01" onChange={this.handleInterest.bind(this)} />%</p>
         <p><input type="submit" id="submit" value="submit" /></p>
      </form>
      {this.props.editCard.error ? <h2 className="error">{this.props.editCard.error}</h2> : null }
      </div>
      )

  }

}
function mapStateToProps(state){
  return {newCard: state.newCard, id: state.current.user.id}
}
export default connect(mapStateToProps, { editCard,setCard,setPeriod,setValue })(EditCard)
