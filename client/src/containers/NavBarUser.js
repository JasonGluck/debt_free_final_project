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
        <span id="logo">DebtFree</span>
        {this.props.current.card && <Link id="title" to="/user">Home</Link>}
        {!this.props.current.card && <Link id="title" to="/cards/new">Home</Link>}
        <Link id="title" to="/cards/new">Add a Credit Card</Link>
        {this.props.current.card && <Link id="title" to="/periods/new">Add a Period</Link>}
        {this.props.current.periods.length != 0 && <Link id="title" to="/periods/show">View Periods</Link>}
        <a id="title" onClick={this.handleClick.bind(this)}>Sign Out</a>

      </div>
    )
}}

function mapStateToProps(state){
  return {current: state.current}
}

export default connect(mapStateToProps, {resetCurrent, setValue})(NavBarUser)
//
