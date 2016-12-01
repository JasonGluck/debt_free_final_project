import React, { Component } from 'react';
import { findUser } from '../../ducks/signin';
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {email: '', password: ''}
  }

  handleOnEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleOnPasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){ 
    event.preventDefault()
    this.props.findUser(this.state)
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <h2> Sign In</h2>
            <p>
            <label> Email </label>
            <input type="text" placeholder="your email" onChange={this.handleOnEmailChange.bind(this)}/>
            </p>
            <p>
            <label> Password </label>
            <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} />
            </p>
            <p> <input type="submit" /> </p>
        </form>
      </div>
    )
  }
}

export default connect(null, { findUser })(SignIn)