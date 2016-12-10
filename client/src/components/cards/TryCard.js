import React from 'react'
import TryForm from '../TryForm'
import Table from '../../containers/Table'

export default class TryCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TryForm />
        <Table />
      </div>
    )
  }
}
