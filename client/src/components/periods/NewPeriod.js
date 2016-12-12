import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createPeriod} from '../../ducks/newperiod'
import {addPeriodToUser} from '../../ducks/current'

class NewPeriod extends Component {
  constructor(props){
    super(props)
    this.state = {start_month: '', start_year: '', end_month: '', end_year: '', expenditure:'', payment: '', credit_card_id: this.props.current.card.id, name: ''}
  }

  handleStartDate(event){
    let array_date = event.target.value.split('-')
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.setState({start_year: array_date[0], start_month: months[array_date[1]-1]})
  }

  handleEndDate(event){
    let array_date = event.target.value.split('-')
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.setState({end_year: array_date[0], end_month: months[array_date[1]-1]})
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleExpenditure(event){
    this.setState({expenditure: event.target.value})
  }

  handlePayment(event){
    this.setState({payment: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createPeriod(this.state)
  }

  render(){
    return(
      <div className="allforms">
        <div className="twelve columns" id="newperiodform">
        <h2>Add A Period to {this.props.current.card.name}</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="userLabel">Name<input type="text" id="period[name]" placeholder="Christmas Bonus" onChange={this.handleName.bind(this)}/></label>
          <label id="userLabel">Start Date<input type="month" id="period[start_date]" placeholder="December" onChange={this.handleStartDate.bind(this)}/></label>
          <label id="userLabel">End Date<input type="month" id="period[end_date]" placeholder="January" onChange={this.handleEndDate.bind(this)}/></label>
          <label id="userLabel">Monthly Expenditure<input type="number" id="period[expenditure]" onChange={this.handleExpenditure.bind(this)} /></label>
          <label id="userLabel">Monthly Payment<input type="number" id="period[payment]" onChange={this.handlePayment.bind(this)} /></label>
          <input type="submit"/>
        </form>
          {this.props.newPeriod.error ? <h2 className="error">{this.props.newPeriod.error}</h2> : <span /> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {newPeriod: state.newPeriod, current: state.current}
}

export default connect(mapStateToProps, { createPeriod, addPeriodToUser })(NewPeriod)
