import React, {Component} from 'react'
import NavBarUser from './NavBarUser.js'
export default class GuestHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (<div> 

  <NavBarUser />
    {this.props.children}
  </div>)
}

}