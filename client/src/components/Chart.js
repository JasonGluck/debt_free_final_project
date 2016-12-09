import React from 'react'
import TableHead from './table/TableHead'
import TableBody from './table/TableBody'
import {LineChart, AreaChart, Area, Brush, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  console.log(props)
  return(
    <div>
      <table id="the_table" className="table-fill five columns">
        <TableHead />
        {(props.tableData.data.start_month !== undefined && props.tableData.data.start_year && props.tableData.data.expenditure !== undefined && props.tableData.data.payment && props.tableData.data.debt) ?<TableBody data={props.futureData} /> : <tbody></tbody>}
      </table>
      <div id="chartTitle" className="six columns">Remaining Debt over Time</div>
      <AreaChart className="areachart six columns" width={600} height={350} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis stroke="blue"/>
        <Tooltip/>
        <Area type='monotone' dataKey='Balance' stroke='blue' fill='blue' />
        <Legend />
      </AreaChart>
      <span id="chartTitle" className="six columns">Monthly Invoice</span>
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
