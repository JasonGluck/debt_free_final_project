import React from 'react'
import Recharts from 'recharts'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  return(
    <div className="container">
      <LineChart width={800} height={500} data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Payment" stroke="black"/>
        <Line type="monotone" dataKey="Expenditure" stroke="red"/>
        <Line type="monotone" dataKey="Interest" stroke="green"/>
        <Line type="monotone" dataKey="Balance" stroke="blue"/>
        <CartesianGrid />
    </LineChart>
    </div>
  )
}

module.exports = Chart
