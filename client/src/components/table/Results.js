import React from 'react'

const Results = (props) => {
  return (
    <div className="allforms" id="results">
      {(props.debt && props.i==360) ? <h4>Inadequate Net Payment To Pay Off Debt</h4> : <h4>Months to Debt Free: {(props.i - 1).toString()}<br />
      Total Interest Paid : ${props.total_interest} </h4>}
    </div>
  )
}

module.exports = Results
