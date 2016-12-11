// to be deleted this is no longer being used

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Navbar from '../containers/Navbar'
// import Form from '../components/Form'
// import Table from './Table'
// import NewCard from '../components/cards/NewCard'
// import NewPeriod from '../components/periods/NewPeriod'
// import PeriodList from '../components/periods/PeriodList'
// import { setValue } from '../ducks/tableData'
// import {setCard, setPeriod, removePeriodFromCurrent} from '../ducks/current'
//
// import '../../public/css/App.css';
//
// class App extends Component {
//   render() {
//     let contents = (
//       <div>
//         <div className="container">
//           <Navbar signingup={this.props.signup.signingup} userAccess={this.props.userAccess} current={this.props.current} />
//         </div>
//         <div className="container">
//           {this.props.userAccess.showPeriodList && <PeriodList data={this.props.current} removePeriodFromCurrent={this.props.removePeriodFromCurrent} setPeriod={this.props.setPeriod} />}
//         </div>
//         <div className="container">
//           {((this.props.userAccess.showNewCard || this.props.current.user ==="") || (this.props.current.user && !this.props.current.user.credit_cards) || (this.props.current.user === "" && this.props.userAccess.showSignIn === false && this.props.userAccess.showSignUp === false)) && <NewCard current={this.props.current}/>}
//         </div>
//         <div className="container">
//           {this.props.userAccess.addPeriod && <NewPeriod card={this.props.current.card.id} />}
//         </div>
//         <div className="container">
//           {((this.props.current.card && this.props.userAccess.showNewCard) || (this.props.current.user && this.props.current.user.credit_cards)) && <Form data={this.props.data} current={this.props.current} setValue={this.props.setValue} setCard={this.props.setCard} />}
//         </div>
//         <div className="twelve columns" >
//           {((this.props.userAccess.showNewCard || this.props.current.user) && this.props.data.debt) && <Table data={this.props.data} current={this.props.current} />}
//         </div>
//       </div>)
//     return (
//       <div className="App">
//         {this.props.children}
//         {contents}
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state){
//   return {data: state.tableData, current: state.current, userAccess: state.userAccess, signup: state.signup}
// }
//
// function mapDispatchToProps(dispatch){
//   return {
//     setValue: (obj) => {
//       dispatch(setValue(obj))
//     },
//     setCard: (obj) => {
//       dispatch(setCard(obj))
//     },
//     removePeriodFromCurrent: (obj) => {
//       dispatch(removePeriodFromCurrent(obj))
//     },
//     setPeriod: (obj) =>{
//       dispatch(setPeriod(obj))
//     }
//   }
// }
//
// const connector = connect(mapStateToProps, mapDispatchToProps)
// const connectedComponent = connector(App)
//
// export default connectedComponent
