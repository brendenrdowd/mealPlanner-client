import React, { Component } from 'react'
import Calendar from 'react-calendar'
import ApiContext from './../../ApiContext'
import { Link } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import './Calendar.css'

export class CalendarPage extends Component {
  static contextType = ApiContext;
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  selectDate = date => this.context.updateDate(date)
  render() {
    const { date } = this.context;
    return (
      <section className="container calendar">
        <header>
          <h2>Your Calendar</h2>
        </header>
        <hr />
        <Calendar onChange={this.selectDate} value={date} />
        <Link className="Button cal-btn" to="/dashboard">See Plan</Link>
      </section>
    )
  }
}

export default CalendarPage
