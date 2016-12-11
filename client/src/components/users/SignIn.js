import React, { Component } from 'react';
import { locateAndLoginUser } from '../../ducks/signin';
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

    this.props.locateAndLoginUser(this.state)
  }

  render(){
    return(
      <div className="allforms">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <h2> Sign In </h2>
            <p><label id="userLabel"> Email </label>
            <input type="text" placeholder="your email" onChange={this.handleOnEmailChange.bind(this)}/></p>
            <p><label id="userLabel"> Password </label>
            <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} /></p>
            <input type="submit" />
        </form>
        {this.props.signin.error ? <h2 className="error">{this.props.signin.error}</h2> : <span /> }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {signin: state.signin}
}

export default connect(mapStateToProps, { locateAndLoginUser })(SignIn)
