import React from 'react'
import SinglePeriod from './SinglePeriod'
import PeriodEdit from './PeriodEdit'
import {removePeriodFromCurrent, setPeriod} from '../../ducks/current'
import {connect} from 'react-redux'

 class PeriodList extends React.Component {
  constructor(props){
    super(props)
    this.state = {showChildren: false, calledChild: "", showEditForm: false, editChild: ""}
  }

  showChildren(event){
    if (this.state.calledChild !== event.target.innerHTML && this.state.calledChild !== ""){
      this.setState({calledChild: event.target.innerHTML})
    }
    else if (this.state.calledChild === event.target.innerHTML){
      this.setState({showChildren: !this.state.showChildren, calledChild: ""})
    }
    else {this.setState({showChildren: !this.state.showChildren, calledChild: event.target.innerHTML})
    }
  }

  editPeriodDetails(event){
    this.setState({showEditForm: !this.state.showEditForm, editChild: event.target.id})
  }

  submittedPeriodDetails(){
    this.setState({showEditForm: false, editChild: ""})
  }

  editShownPeriod(event){
    let thing = this.props.current.periods.filter(item=>{ if (item.id == event.target.id)
      {return item}})
      
      if (thing.length >= 1)
          {this.props.removePeriodFromCurrent(event.target.id)}
      else {
        let period = this.props.current.user.periods.filter(item=>{return item.id == event.target.id})
        this.props.setPeriod(period)
        }
  }

  render(){
    let shownPeriod, showThis
    if (this.props.current.user){
      shownPeriod = this.props.current.user.periods.filter(period=>{
        return period.credit_card_id === this.props.current.card.id
      })
    }
    if (shownPeriod) {
      showThis = shownPeriod.map((item, index)=>{
        return (
          <div key={index}>
            <span><h4 className="clickable" onClick={this.showChildren.bind(this)}>{item.name}</h4><input type="checkbox" defaultChecked="true" onClick={this.editShownPeriod.bind(this)} id={item.id} /></span>
            {((this.state.showEditForm === true) && (this.state.editChild == item.id)) ? <PeriodEdit item={item} submittedPeriodDetails={this.submittedPeriodDetails.bind(this)} /> :
             <SinglePeriod editButton={this.editPeriodDetails.bind(this)} item={item} showChildren={this.state.showChildren} calledChild={this.state.calledChild} />}
          </div>
        )
      })
    }

  return(
    <div className="allforms">
      <div className="periodList">
        {this.props.current.periods.length === 0 ? <h2>Please Add a Period</h2> : <h2>Payment Periods</h2>}
          <ul>
            {showThis}
          </ul>
      </div>
    </div>
  )
  }
}
function mapStateToProps(state){
  return {current: state.current}
}

export default connect(mapStateToProps, {removePeriodFromCurrent, setPeriod})(PeriodList)
