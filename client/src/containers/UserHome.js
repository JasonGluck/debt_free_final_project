import React, {Component} from 'react'
import NavBarUser from './NavBarUser.js'
import Table from './Table'
import Form from '../components/Form'
export default class UserHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (<div> 

  <NavBarUser />
    {this.props.children}
    <Form />
    <Table /> 
  </div>)
}

}