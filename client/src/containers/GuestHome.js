import React, {Component} from 'react'
import SignIn from '../components/users/SignIn.js'
import SignUp from '../components/users/SignUp.js'
import NavBarGuest from './NavBarGuest.js'
export default class GuestHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (
    <div>
      <NavBarGuest />
      {this.props.children}
    </div>
  )
}

}
