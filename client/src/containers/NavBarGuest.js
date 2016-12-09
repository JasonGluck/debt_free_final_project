import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/users/SignUp'
import SignIn from '../components/users/SignIn'
import NewCard from '../components/cards/NewCard'
import SignOut from '../components/users/SignOut'
import { signIn, signUp,showNewCard,addPeriod,showPeriods,allFalse } from '../ducks/userAccess'
import signOutUser from '../ducks/signout'
import '../../public/css/navbar.css'
import {Link} from 'react-router'

function handleTabs(event){
  this.props.allFalse()
  if (event.target.innerText === "SIGN UP"){
    this.props.signUp()
  }
  else if (event.target.innerText === "SIGN IN"){
    this.props.signIn()
  }
  else if (event.target.innerText === "TRY A CREDIT CARD" || event.target.innerText === "ADD A CREDIT CARD"){
    this.props.showNewCard()
  }
  else if (event.target.innerText === "ADD A PERIOD") {
    this.props.addPeriod()
  }
  else if (event.target.innerText === "VIEW PERIODS") {
    this.props.showPeriods()
  }
}

function handleClick(event){
  event.preventDefault()
  this.props.signOutUser()
}

class NavBarGuest extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <div id="navbar">
        <Link to="/"><span id="title">Debt Free</span></Link>
        <Link id="title" to="/signup">Sign Up</Link>
        <Link id="title" to="/signin">Sign In</Link> 
        <button onClick={handleTabs.bind(this)}> Try a Credit Card</button>
      </div>

      </div>
    )
}}

export default connect(null, {signIn,signUp,showNewCard,addPeriod,showPeriods,allFalse, signOutUser})(NavBarGuest)
