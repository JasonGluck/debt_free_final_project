import React, {Component} from 'react'
import NavBarUser from './NavBarUser.js'
import Table from './Table'
import Form from '../components/Form'
import {connect} from 'react-redux'
import {persistStore} from 'redux-persist'
class UserHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (
    <div>
      <NavBarUser />
        {this.props.children}
        <Form />
        <Table />
    </div>
  )
}

}

function mapStateToProps(state){
  return {currentCard: state.current.card.name}

}

export default connect(mapStateToProps)(UserHome)
