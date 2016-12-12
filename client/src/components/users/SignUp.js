import React, { Component } from 'react';
import { createUser } from '../../ducks/signup';
import { connect } from 'react-redux'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {name: '', email: '', password: ''}
  }

  handleOnNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleOnPasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render(){
    return(
      <div className="allforms">
        <form id="userAccess" onSubmit={this.handleSubmit.bind(this)}>
            <h2>Sign Up</h2>
            <p><label id="userLabel"> Name </label>
            <input type="text" placeholder="Your Name" onChange={this.handleOnNameChange.bind(this)}/></p>
            <p><label id="userLabel"> Email </label>
            <input type="text" placeholder="email@email.com" onChange={this.handleOnEmailChange.bind(this)}/></p>
            <p><label id="userLabel"> Password </label>
            <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} /></p>
            <input type="submit" />
        </form>
          {this.props.signup.error ? <h2 className="error">{this.props.signup.error}</h2> : <span /> }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {signup: state.signup}
}

export default connect(mapStateToProps, { createUser })(Signup)
