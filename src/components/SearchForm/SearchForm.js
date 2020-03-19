import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import RecipeApiService from '../../services/recipe-api-service'
import { Required } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchForm.css'



export class SearchForm extends Component {
  static contextType = ApiContext;
  state = {
    query: {
      value: "",
      touched: false
    },
    excludeIngredients: {
      value: "",
      touched: false
    },
    type: {
      value: "",
      touched: false
    },
    cuisine: {
      value: "",
      touched: false
    }
  }

  updateQuery(query) {
    this.setState({
      query: {
        value: query,
        touched: true
      }
    });
  }
  updateExcludeIngredients(excludeIngredients) {
    this.setState({
      excludeIngredients: {
        value: excludeIngredients,
        touched: true
      }
    });
  }
  updateType(type) {
    this.setState({
      type: {
        value: type,
        touched: true
      }
    });
  }
  updateCuisine(cuisine) {
    this.setState({
      cuisine: {
        value: cuisine,
        touched: true
      }
    });
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { intolerances, diet } = this.context.user
    const q = {
      diet,
      excludeIngredients:this.state.excludeIngredients.value,
      intolerances,
      type:this.state.type.value,
      query:this.state.query.value,
      cuisine:this.state.cuisine.value
    }
    RecipeApiService.getSearchResults(q)
    .then(res => {
      // this is weird, why do I have to go down a layer?
      this.context.updateSearchResults(res.results)
      this.props.onSearchSuccess()
    })
    .catch(this.context.setError)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* need to update css */}
        <div>
          <label htmlFor='query'>
            Keyword <Required  />
          </label>
          <input
            required
            name='query' type="text" onChange={e => this.updateQuery(e.target.value)} />
        </div>
        <div>
          <label htmlFor='excludeIngredients'>
            Exclude Ingredients
          </label>
          <input
            name='excludeIngredients'  type="text" onChange={e => this.updateExcludeIngredients(e.target.value)} />
        </div>
        <div>
        <label htmlFor='type'>
            Meal Type
          </label>
          <select name="type" onChange={e => this.updateType(e.target.value)} >
            <option value="">All</option>
            <option value="main course">Main Course</option>
            <option value="side course">Side Course</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="salad">Salad</option>
            <option value="bread">Bread</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="sauce">Sauce</option>
          </select>
        </div>
        <div>
        <label htmlFor='cuisine' onChange={e => this.updateCuisine(e.target.value)} >
            Cuisine
          </label>
          <select name="cuisine">
            <option value="">All</option>
            <option value="african">African</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="thai">Thai</option>
            <option value="indian">Indian</option>
            <option value="british">British</option>
            <option value="irish">Irish</option>
            <option value="french">French</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="spanish">Spanish</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="jewish">Jewish</option>
            <option value="american">American</option>
            <option value="cajun">Cajun</option>
            <option value="southern">Southern</option>
            <option value="greek">Greek</option>
            <option value="german">German</option>
            <option value="nordic">Nordic</option>
            <option value="eastern european">Eastern European</option>
            <option value="caribbean">Caribbean</option>
            <option value="latin american">Latin American</option>
          </select>
        </div>
        <button className="Button submit-btn" type="submit">
          <FontAwesomeIcon icon="search" /> Find Recipes
        </button>
      </form>
    )
  }
}

export default SearchForm
