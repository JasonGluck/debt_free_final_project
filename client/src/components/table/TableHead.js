import React from 'react'

const TableHead = () => {
  let headers = ["Period", "Year", "Month", "Debt", "Payment", "Expenditure", "Interest Payment", "New Balance"]
  let header_elements = headers.map((element, i) => {
    return <th key={i} className="text-center">{element}</th>
  })

  return (
    <thead>
      <tr>
        {header_elements}
      </tr>
    </thead>
  )
}

module.exports = TableHead
