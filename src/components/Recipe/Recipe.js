import React, { Component } from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext'
import RecipeApiService from '../../services/recipe-api-service'

export class recipe extends Component {
  static contextType = ApiContext;
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleSuccess = (res) => {
    console.log(res)
    this.props.history.push('/dashboard')
  }

  deleteRecipe = recipeId => {
    console.log("delete: ",recipeId,this.props)
    RecipeApiService.deleteRecipe(recipeId)
    .then(
      this.props.delete()
    )
  }

  render() {
    console.log(this.props)
    const { image, title, id,recipeId } = this.props.recipe
    const recipeButton = (this.props.inDatabase) ? <button className="CTA" onClick={this.deleteRecipe.bind(this,recipeId)}>Delete</button> : <Link className="link Button" to={'/recipe/' + id}>View Recipe</Link>//<RecipeForm recipeId={recipeId} onSuccess={this.handleSuccess} />
    return (
      <li className="recipe-item card">
        <Link className="link" to={'/recipe/' + id}>
          <div>
            <img src={image} alt={title} />
            <div className="container card-body">
              <h4>{title}</h4>
            </div>
          </div>
        </Link>
        {recipeButton}
      </li>
    )
  }
}

export default recipe
