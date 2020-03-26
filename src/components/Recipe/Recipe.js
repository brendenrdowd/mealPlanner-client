import React, { Component } from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext'
import RecipeApiService from '../../services/recipe-api-service'

export class recipe extends Component {
  static contextType = ApiContext;
  state = {
    recipe:{}
  }

  componentDidMount() {
    RecipeApiService.getRecipeInfo(this.props.recipe)
      .then(res => {
        this.setState({
          recipe: res
        })
      }).catch(e => {
        this.setState({ error: e })
      })
  }

  deleteRecipe = recipeId => {
    RecipeApiService.deleteRecipe(recipeId)
  }

  render() {
    const { image, title, id } = this.state.recipe
    return (
      <li className="recipe-item">
        <Link className="link" to={'/recipe/' + id}>
          <div className="card">
            <img src={image} alt={title} />
            <div className="container card-body">
              <h4>{title}</h4>
            </div>
          </div>
        </Link>
        <button class="CTA" onClick={this.deleteRecipe(id)}>Delete</button>
      </li>
    )
  }
}

export default recipe
