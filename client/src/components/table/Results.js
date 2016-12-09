import React from 'react'

const Results = (props) => {
  return(
    <div id="results">
      {(props.debt && props.i==360) ? <h4>Inadequate investment to pay off debt</h4> : <h4>Months to Debt Free: {(props.i - 1).toString()}<br />
      Total Interest Paid (in Today's Dollars): ${props.total_interest} </h4>}
    </div>
  )
}

module.exports = Results
