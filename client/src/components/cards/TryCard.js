import React from 'react'
import TryForm from '../TryForm'
import Table from '../../containers/Table'
import {connect} from 'react-redux'

class TryCard extends React.Component {
  constructor(props) {
    super(props)
  }

  checkValues(){
    if (Object.keys(this.props.data).length < 5 || Object.values(this.props.data).includes(null)){
      return false
    } 
    return true
  }

  render() {
    return (
      <div>
        <TryForm />
        {this.checkValues() && <Table />}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {data: state.tableData}
}

export default connect(mapStateToProps)(TryCard)
