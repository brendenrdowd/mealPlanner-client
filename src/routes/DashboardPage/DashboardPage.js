import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Recipe from '../../components/Recipe/Recipe'
import ApiContext from '../../ApiContext'
import UserService from '../../services/user-api-service'

export class DashboardPage extends Component {
  // I will need to use context.date to access saved recipes in calendar db
  static contextType = ApiContext;
  state = {
    username: '',
    todaysRecipes:[]
  }
  componentDidMount() {
    UserService.getUser()
      .then(res => {
        this.context.updateUser(res)
        this.setState({
          username: res.name.split(' ')[0]
        })
      })
      // grab todaysRecipes
  }

  render() {
    const { recipes, date } = this.context
    const { username } = this.state
    const recipeList = recipes.map(r => {
      // replace props with context?
      return <Recipe key={r.id} recipe={r} />
    })
    return (
      <section className="Dashboard">
        <header>
          <h2>{username}'s Meals <span className="suffix">for</span></h2>
          <Link to="/calendar" className="link">
            <div className="date-card">
              <h5 className="banner">{date.toDateString().split(' ')[1]}</h5>
              <h1>{date.getDate()}</h1>
              <h5 className="banner">{date.getFullYear()}</h5>
            </div>
          </Link>
          {/* <Link to="" className="Button">Groceries</Link> */}
        </header>
        <h3>TODAY'S MENU</h3>
        <ul className="recipes">
          {recipeList.slice(0, 3)}
        </ul>
      </section>
    )
  }
}

export default DashboardPage
