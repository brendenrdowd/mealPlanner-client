import React, { Component } from 'react'
import ApiContext from '../../contexts/ApiContext'
import './RecipePage.css'
import RecipeApiService from '../../services/recipe-api-service'
import RecipeForm from '../../components/RecipeForm/RecipeForm'


export class recipePage extends Component {
  state = {
    recipeId: "",
    recipe: {},
    steps: [],
    ingredients: []
  }

  static contextType = ApiContext;
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleSuccess = (res) => {
    this.props.history.push('/dashboard')
  }

  componentDidMount() {
    const { recipeId } = this.props.match.params;
    RecipeApiService.getRecipeInfo(recipeId)
      .then(res => {
        this.setState({
          recipeId,
          recipe: res,
          steps: (res.analyzedInstructions[0]) && res.analyzedInstructions[0].steps.map(step => {
            return <li className="recipe-list-item" key={step.number}>{step.number}. {step.step}</li>
          }),
          ingredients: res.extendedIngredients.map((ingredient,index) => {
            return <tr key={index}>
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
    const { recipeId, recipe, steps, ingredients } = this.state
    return (
      <section className="recipe">
        <div className="headline">
          <img src={recipe.image} alt={recipe.title} />
          <h1>{recipe.title}</h1>
        </div>
        {/* need to add the ternary check */}
        <RecipeForm recipeId={recipeId} onSuccess={this.handleSuccess} />
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
