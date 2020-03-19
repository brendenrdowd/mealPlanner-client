import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import './RecipePage.css'
import RecipeApiService from '../../services/recipe-api-service'

export class recipePage extends Component {
  state = {
    recipe: {},
    steps: [],
    ingredients: []
  }

  static contextType = ApiContext;
  componentDidMount() {
    const { recipeId } = this.props.match.params;
    RecipeApiService.getRecipeInfo(recipeId)
      .then(res => {
        console.log(res)
        this.setState({
          recipe: res,
          steps: res.analyzedInstructions[0].steps.map(step => {
            return <li className="recipe-list-item" key={step.number}>{step.number}. {step.step}</li>
          }),
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
  render() {
    const { recipe, steps, ingredients } = this.state
    console.log("RECIPE: ", recipe)
    return (
      <section className="recipe">
        <header>
          <img src={recipe.image} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          {/* add to calendar/ 'on calendar' toggle */}
        </header>
        <div>
          <table class="ingredient-table">
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
