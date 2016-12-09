import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/users/SignUp'
import SignIn from '../components/users/SignIn'
import NewCard from '../components/cards/NewCard'
import SignOut from '../components/users/SignOut'
import { signIn, signUp,showNewCard,addPeriod,showPeriods,allFalse } from '../ducks/userAccess'
import signOutUser from '../ducks/signout'
import '../../public/css/navbar.css'

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

class Navbar extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div id="navbar">
        <span id="title">Debt Free</span>
//       JK: You can just return null, as opposed to spans here.
//       Maybe also set the default state of current.user equal to null, so you don't need three different conditionals here.
//       condense this into 
//       if(this.props.current.user){
//       }
        {this.props.current.user === "" ? <button onClick={handleTabs.bind(this)}>Sign Up</button> : null }
        {this.props.current.user === "" ? <button onClick={handleTabs.bind(this)}>Sign In</button> : <span />}
        {this.props.current.user ? <button onClick={handleClick.bind(this)}>Sign Out</button> : <span />}
        <button onClick={handleTabs.bind(this)}>{this.props.current.user ? "Add" : "Try"} a Credit Card</button>
        {this.props.current.user ? <button onClick={handleTabs.bind(this)}>Add a Period</button> : <span />}
        {this.props.current.user ? <button onClick={handleTabs.bind(this)}>View Periods</button> : <span />}
        <br />
//           What does userAccess depend on?  Is it something with authorization where you should redirect to a differennt page?
        {this.props.userAccess.showSignUp && this.props.signingup ? <SignUp /> : <p />}
        {this.props.userAccess.showSignIn ? <SignIn /> : <p />}
        {this.props.userAccess.addCreditCard ? <NewCard current={this.props.current} /> : <p />}
        {}
      </div>
    )
}}

export default connect(null, {signIn,signUp,showNewCard,addPeriod,showPeriods,allFalse, signOutUser})(Navbar)
