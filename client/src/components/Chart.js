import React from 'react'
import TableHead from './table/TableHead'
import TableBody from './table/TableBody'
import {LineChart, AreaChart, Area, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  return(
    <div>
      <table id="the_table" className="table-fill five columns">
        <TableHead />
        <TableBody data={props.futureData} />
      </table>
      <div id="chartTitle" className="six columns">Debt Balance</div>
      <AreaChart className="areachart six columns" width={600} height={350} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis stroke="blue"/>
        <Tooltip/>
        <Area type='monotone' dataKey='Balance' stroke='blue' fill='blue' />
        <Legend />
      </AreaChart>
      <span id="chartTitle" className="six columns">Finance Tracker</span>
      <LineChart className="linechart six columns" width={600} height={350} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis yAxisId="left" orientation="left" stroke="brown"/>
        <YAxis yAxisId="right" orientation="right" stroke="orange"/>
        <Tooltip/>
        <Line yAxisId="left" type="monotone" dataKey="Payment" stroke="green"/>
        <Line yAxisId="left" type="monotone" dataKey="Expenditure" stroke="red"/>
        <Line yAxisId="right" type="monotone" dataKey="Interest" stroke="orange"/>
        <Legend />
      </LineChart>
    </div>
  )
}

module.exports = Chart
