import React, { Component } from 'react';
import { connect } from 'react-redux'
import {editPeriod} from '../../ducks/newperiod'
import {addPeriodToUser} from '../../ducks/current'

class PeriodEdit extends Component {
  constructor(props){
    super(props)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let edited_start_month = (months.indexOf(this.props.item.start_month)+1).toString()
    edited_start_month = (edited_start_month.length < 2) ? ("0" + edited_start_month) : edited_start_month
    let edited_end_month = (months.indexOf(this.props.item.end_month)+1).toString()
    edited_end_month = (edited_end_month.length < 2) ? ("0" + edited_end_month) : edited_end_month
    let start_full_date = this.props.item.start_year + '-' + edited_start_month
    let end_full_date = this.props.item.end_year + '-' + edited_end_month
    this.state = {start_full_date: start_full_date, end_full_date: end_full_date, start_month: this.props.item.start_month, start_year: this.props.item.start_year, end_month: this.props.item.end_month, end_year: this.props.item.end_year, expenditure: this.props.item.expenditure, payment: this.props.item.payment, credit_card_id: this.props.item.credit_card_id, name: this.props.item.name, id: this.props.item.id}
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
    this.props.editPeriod(this.state)
    this.props.submittedPeriodDetails()
  }

  render(){
    return(
      <div className="twelve columns" id="editperiodform">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label id="userLabel">Name<input type="text" id="period[name]" defaultValue={this.props.item.name} onChange={this.handleName.bind(this)}/></label>
        <label id="userLabel">Start Date<input type="month" id="period[start_date]" defaultValue={this.state.start_full_date} onChange={this.handleStartDate.bind(this)}/></label>
        <label id="userLabel">End Date<input type="month" id="period[end_date]" defaultValue={this.state.end_full_date} onChange={this.handleEndDate.bind(this)}/></label>
        <label id="userLabel">Monthly Expenditure<input type="number" id="period[expenditure]" defaultValue={this.props.item.expenditure} step="100" onChange={this.handleExpenditure.bind(this)} /></label>
        <label id="userLabel">Monthly Payment<input type="number" id="period[payment]" step="100" defaultValue={this.props.item.payment} onChange={this.handlePayment.bind(this)} /></label>
        <input type="submit"/>
      </form>
      </div>
      )
  }
}

export default connect(null, { editPeriod, addPeriodToUser })(PeriodEdit)
