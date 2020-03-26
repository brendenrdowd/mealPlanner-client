import React, { Component } from 'react'
// import DatePicker from 'react-date-picker'
import ApiContext from './../../contexts/ApiContext'
import RecipeApiService from '../../services/recipe-api-service'
import { Button } from '../Utils/Utils'
import './RecipeForm.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class RecipeForm extends Component {
  static contextType = ApiContext;
  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })

  handleSubmit = ev => {
    ev.preventDefault()
    const userId = this.context.user.id
    console.log(userId)
    const { date } = this.state
    const { recipeId } = this.props
    RecipeApiService.postRecipe(userId, date, recipeId)
      .then(res => {
        this.props.onSuccess(res)
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      < form onSubmit={this.handleSubmit} >
          <DatePicker
            onChange={this.onChange}
            selected={this.state.date}
            calendarAriaLabel="true"
            clearAriaLabel="true"
            dayAriaLabel="true"
          />
        <Button type='submit' className="submit-btn">
          Save
        </Button>
      </form >
    )
  }
}

export default RecipeForm
