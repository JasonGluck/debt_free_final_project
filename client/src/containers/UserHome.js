import React, {Component} from 'react'
import NavBarUser from './NavBarUser.js'
import Table from './Table'
import Form from '../components/Form'
import {connect} from 'react-redux'
class UserHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (<div> 

  <NavBarUser />
    <h1>Currently Showing: {this.props.currentCard}</h1>
    {this.props.children}
    <Form />
    <Table /> 
  </div>)
}

}

function mapStateToProps(state){
  return {currentCard: state.current.card.name}

}

export default connect(mapStateToProps)(UserHome)
