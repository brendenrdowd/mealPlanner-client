import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function LandingPage() {
  return (
    <section className="container">
      <header className="onboard">
        <h1><span className="preamble">Welcome to</span> Nutrionist</h1>
        <h4>Nutrionist lets you find recipes based on ingredients, cusines, diets and more and add them to a weekly meal plan.</h4>
        <p>To get quickstarted, log in using the email 'test@gmail.com' and password 'Password', or 'vegan@gmail.com and 'Animals'.</p>
      </header>
      {/* fix button scaling on desktop */}
      <div className="buttonbar">
        <Link to='/login' className="Button">Log In</Link>
        <Link to='/register' className="Button">Sign Up</Link>
      </div>
    </section>
  )
}
