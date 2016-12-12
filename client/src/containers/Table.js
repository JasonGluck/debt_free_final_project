const React = require('react')
import Results from '../components/table/Results'
import Chart from '../components/Chart'
import { connect } from 'react-redux'


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function parseData(data){
  var parts= String(parseFloat(data).toFixed(2)).split(".")
  parts = String(parts[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "")
  return parts
}

function dataPresent(data){
  if (data){
    return (data.payment && data.expenditure && data.interest && data.debt)
  }
  else {
    return false
  }
}

function allPeriods(periods, current_month, current_year) {
  for (let i = 0; i < periods.length; i++){
    let current_date = new Date(current_month+" 1, "+current_year.toString())
    let period_start_date = new Date(periods[i].start_month+" 1, "+periods[i].start_year.toString())
    let period_end_date = new Date(periods[i].end_month+" 1, "+periods[i].end_year.toString())
    if (period_start_date <= current_date && current_date <= period_end_date) {
      return periods[i]
    }
  }
  return false
}

class Table extends React.Component {
  render() {
    let future_data = []
    let theDebt = this.props.data.debt
    let current_month = parseFloat(this.props.data.start_month) === NaN ? this.props.data.start_month : months[this.props.data.start_month]
    let current_year = new Date().getFullYear()
    let i = 0, payment = this.props.data.payment, expenditure = this.props.data.expenditure, period = "Default";
    let total_interest = 0
    let payment_array = []

    while (theDebt > 0 && i < 360 && dataPresent(this.props.data)){
      let inPeriod = allPeriods(this.props.current.periods, current_month, current_year)
      if (inPeriod) {
        payment = inPeriod.payment
        expenditure = inPeriod.expenditure
        period = inPeriod.name
      }
      else {
        payment = this.props.data.payment
        expenditure = this.props.data.expenditure
        period = "Default"
      }
      payment_array.push({Month:i + 1, Payment: parseFloat(payment.toFixed(2)), Expenditure: parseFloat(expenditure.toFixed(2)), Interest: parseFloat((theDebt * (this.props.data.interest / 1200)).toFixed(2)), Balance: parseFloat((theDebt - payment + expenditure + (theDebt * (this.props.data.interest / 1200))).toFixed(2))})
      total_interest += (theDebt * (this.props.data.interest / 1200))
      future_data.push(
      <tr key={i}>
        <td key={0} className="text-left">{period}</td>
        <td key={1} className="text-left">{current_year}</td>
        <td key={2} className="text-left">{current_month}</td>
        <td key={3} className="text-left">${parseData(theDebt)}</td>
        <td key={4} className="text-left">${parseData(payment)}</td>
        <td key={5} className="text-left">${parseData(expenditure)}</td>
        <td key={6} className="text-left">${parseData(theDebt * (this.props.data.interest / 1200))}</td>
        <td key={7} className="text-left">${parseData(theDebt - payment + expenditure + (theDebt * (this.props.data.interest / 1200)))}</td>
      </tr>)
      if (months.indexOf(current_month) + 1 > months.length - 1){
        current_month = "January"
        current_year += 1
      } else {
        current_month = months[months.indexOf(current_month) + 1]
      }
      theDebt = theDebt - payment + expenditure + (theDebt * (this.props.data.interest / 1200))
      i += 1
      if (theDebt > this.props.data.debt && i >= 60) {i = 360}
    }

    return (
      <div>
        <Results debt={this.props.data.debt} i={i} total_interest={parseData(total_interest)}/>
        <Chart className="six columns" id="chart" tableData={this.props} futureData={future_data} data={payment_array}/>
      </div>
    )
  }
}

// module.exports = Table
function mapStateToProps(state){
  return {data: state.tableData, current: state.current}
}
export default connect(mapStateToProps)(Table)
