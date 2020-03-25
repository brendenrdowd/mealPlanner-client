import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import './RecipePage.css'
import RecipeApiService from '../../services/recipe-api-service'
import Link from 'react-router-dom'
import DatePicker from 'react-date-picker';

export class recipePage extends Component {
  state = {
    recipe: {},
    steps: [],
    ingredients: [],
    date: new Date()
  }

  static contextType = ApiContext;
  componentDidMount() {
    const { recipeId } = this.props.match.params;
    RecipeApiService.getRecipeInfo(recipeId)
      .then(res => {
        this.setState({
          recipe: res,
          steps: res.analyzedInstructions[0].steps.map(step => {
            return <li className="recipe-list-item" key={step.number}>{step.number}. {step.step}</li>
          }) || [],
          ingredients: res.extendedIngredients.map(ingredient => {
            return <tr key={ingredient.id}>
              <td>
                <input type="checkbox" name={ingredient.original} id={ingredient.id} />
              </td>
              <td>{ingredient.original}</td>
            </tr>
          })
        })
      })
  }

  onChange = date => this.setState({ date })

  render() {
    const { recipe, steps, ingredients } = this.state
    return (
      <section className="recipe">
        <header>
          <img src={recipe.image} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          {/* form? */}
          {/* add to calendar/ 'on calendar' toggle */}
          {/* <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        /> */}
        {/* end form? */}
          {/* <Link></Link> */}
        </header>
        <div>
          <table className="ingredient-table">
            <tbody>
              {ingredients}
            </tbody>
          </table>
          <hr />
          <ol>{steps}</ol>
        </div>
      </section>
    )
  }
}

export default recipePage
