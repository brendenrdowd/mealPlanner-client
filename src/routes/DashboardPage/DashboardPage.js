import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import history from '../../history'
import Recipe from '../../components/Recipe/Recipe'
import ApiContext from '../../contexts/ApiContext'
import UserService from '../../services/user-api-service'
import RecipeApiService from '../../services/recipe-api-service'
import './Dashboard.css'

export class DashboardPage extends Component {
  static contextType = ApiContext;
  state = {
    username: '',
    recipes: [],
    error: ""
  }

  static defaultProps = {
    history: {
      push: () => { },
    },
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
      .then(results => results.map(recipe => {
        return RecipeApiService.getRecipeInfo(recipe.recipes)
          .then(res => {
            Object.assign(res, { recipeId: recipe.id });
            this.setState({
              recipes: [
                ...this.state.recipes,
                res
              ]
            })
          }).catch(e => {
            this.setState({ error: e.error })
          })
      })
      ).catch(e => {
        this.setState({ error: e.error })
      })
  }
  // don't feel like I need this now that I refactored the backend, but it breaks without it despite that?
  convertToSQLTime() {
    return new Date(this.context.date).toISOString().slice(0, 19).replace('T', ' ');
  }
  // path history rerender?
  onDelete = () => {
    history.push('/')
  }


  render() {
    const { date } = this.context
    const { username, recipes, error } = this.state
    let recipeList
    if (recipes.length === 0) {
      recipeList = <Link to="/search" className="CTA"><h5>Let's find some recipes</h5></Link>
    }
    else {
      recipeList = recipes.map(r => {
        return <Recipe delete={this.onDelete} key={r.id} recipe={r} inDatabase={true} />
      })
    }
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
