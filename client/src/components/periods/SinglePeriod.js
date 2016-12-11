import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePeriodFromRails } from '../../ducks/current'

class SinglePeriod extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  deleteThing(event){
    this.props.deletePeriodFromRails(event.target.id)
  }


  render(){
    return (
      <span id={this.props.item.id}>{
        this.props.showChildren && (this.props.calledChild === this.props.item.name) ?
          <ul className="middleList">
            <li>Start Date: {this.props.item.start_month} {this.props.item.start_year} </li>
            <li>End Date: {this.props.item.end_month} {this.props.item.end_year} </li>
            <li>Payment: ${this.props.item.payment} </li>
            <li>Expenditure: ${this.props.item.expenditure} </li>
            <input type="button" id={this.props.item.id} onClick={this.deleteThing.bind(this)} value="delete period" />
            <input type="button" id={this.props.item.id} onClick={this.props.editButton} value="edit period" />
          </ul>  : <span></span> }</span>
    )
  }

}

const connector = connect(null, {deletePeriodFromRails})
const connectedComponent = connector(SinglePeriod)

export default connectedComponent
