//to be deleted this is no longer being used


// import React, { Component } from 'react';
// import { logoutUser } from '../../ducks/signout';
// import { connect } from 'react-redux'
// class SignOut extends Component {
//   constructor(props){
//     super(props)
//   }

//   handleClick(event){
//     event.preventDefault()
//     localStorage.removeItem("token")
//     this.props.resetCurrent()
//     this.props.setValue({debt: null, start_month: null, start_year: null, creditcard: null, payment:null, expenditure: null, interest:null})
//     browserHistory.push('/')
//   }

//   render(){

//     return(
//       <div className="twelve columns">
//         <button onClick={this.handleClick.bind(this)}>Sign Out</button>
//       </div>
//     )
//   }
// }

// export default connect(null, { resetCurrent, setValue })(SignOut)
