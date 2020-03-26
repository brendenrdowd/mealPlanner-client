import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Recipe from '../../components/Recipe/Recipe'
import ApiContext from '../../contexts/ApiContext'
import UserService from '../../services/user-api-service'
import RecipeApiService from '../../services/recipe-api-service'

export class DashboardPage extends Component {
  // I will need to use context.date to access saved recipes in calendar db
  static contextType = ApiContext;
  state = {
    username: '',
    recipes: [],
    error: ""
  }
  componentDidMount() {
    UserService.getUser()
      .then(res => {
        this.context.updateUser(res)
        this.setState({
          username: res.name.split(' ')[0]
        })
      })
    RecipeApiService.getRecipes(this.convertToSQLTime())
      .then(res => {
        console.log("recipes:", res)
        this.setState({
          recipes: res.recipes.split(',')
        })
      })
      .catch(e => {
        this.setState({ error: e.error })
      })
  }

  convertToSQLTime() {
    return new Date(this.context.date).toISOString().slice(0, 19).replace('T', ' ');
  }

  render() {
    const { date } = this.context
    // move recipes to state
    const { username, recipes, error } = this.state
    let recipeList
    if(recipes.length < 1){
      recipeList = <Link to="/search" className="CTA"><h5>Let's find some recipes</h5></Link>
    }
    else{recipeList = recipes.map(r => {
      return <Recipe key={r} recipe={r} />
    })}
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
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <ul className="recipes">
          {recipeList}
        </ul>
      </section>
    )
  }
}

export default DashboardPage
