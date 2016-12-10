import React from 'react'
import { connect } from 'react-redux'
import '../../public/css/navbar.css'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'
import {resetCurrent} from '../ducks/current'
import {setValue} from '../ducks/tableData'



class NavBarUser extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick(event){
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.resetCurrent()
    this.props.setValue({debt: null, start_month: null, start_year: null, creditcard: null, payment:null, expenditure: null, interest:null})
    browserHistory.push('/')
  }
  render() {
    console.log(this.props)
    return (
      <div id="navbar">
        <span id="title">Debt Free</span>
        <button onClick={this.handleClick.bind(this)}>Sign Out</button>
        <Link to="/cards/new">Add a Credit Card</Link>
        <Link to="/periods/new">Add a Period</Link>
        <Link to="/periods/show">View Periods</Link>

      </div>
    )
}}

export default connect(null, {resetCurrent, setValue})(NavBarUser)
//
