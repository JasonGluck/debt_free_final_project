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


class NavBarUser extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div id="navbar">
        <span id="title">Debt Free</span>
        <Link to="/signout">Sign Out</Link>
        <Link to="/cards/new">Add a Credit Card</Link>
        <Link to="/periods/new">Add a Period</Link>
        <Link to="/periods/show">View Periods</Link>
      </div>
    )
}}

export default connect(null, {signIn,signUp,showNewCard,addPeriod,showPeriods,allFalse, signOutUser})(NavBarUser)
// 