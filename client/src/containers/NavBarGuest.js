import React from 'react'
import {Link} from 'react-router'
import '../../public/css/navbar.css'

const NavBarGuest = () => {
  return (
    <div id="navbar">
      <Link to="/"><span id="title">Debt Free</span></Link>
      <Link id="title" to="/signup">Sign Up</Link>
      <Link id="title" to="/signin">Sign In</Link>
      <Link id="title" to="/try">Try a Credit Card</Link>
    </div>
  )
}

module.exports = NavBarGuest
