import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import validator from 'validator'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: [] }

  handleSubmit = ev => {
    ev.preventDefault()
    let { name, diet, email, password, confirm, interolances } = ev.target
    this.setState({ error: [] });
    let errors = []

    // validations
    if (password.value !== confirm.value) {
      errors = [
        ...errors,
        'Passwords must match'
      ]
    }
    name.value = name.value.trim()
    if (name.value.length <= 1) {
      errors = [
        ...errors,
        'Name must be longer than one character'
      ]
    }
    if (!validator.isEmail(email.value)) {
      errors = [
        ...errors,
        'Please Enter a valid Email'
      ]
    }
    if (errors.length > 0)
      return this.setState({ error: errors })
    // if validaitons pass, create a new user from user entered fields. 
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      confirm: confirm.value,
      name: name.value,
      diet: diet.value,
      interolances: interolances.value,
    })
    // and then reset fields, if its successful, we'll move to the next page with the onRegistrationSuccess function
      .then(res => {
        name.value = ''
        diet.value = ''
        interolances.value = ''
        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(e => {
        this.setState({ error: [e] })
      })
  }

  render() {
    const { error } = this.state
    let errors
    if (error.length > 0) {
      errors = error.map((e, idx) => {
        return <li key={idx} className='red'>{e}</li>
      })
    }
    return (
      <form

        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {errors && <ul>{errors}</ul>}
        </div>
        <div>
          <label htmlFor='RegistrationForm__name'>
            Full name <Required />
          </label>
          <Input
            name='name'
            type='text'
            required
            id='RegistrationForm__name'>
          </Input>
        </div>
        <div >
          <label htmlFor='RegistrationForm__email'>
            Email <Required />
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <div >
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div >
          <label htmlFor='confirm'>
            Confirm Password <Required />
          </label>
          <Input
            name='confirm'
            type='password'
            required
            id='confirm'>
          </Input>
        </div>
        {/* select for interolances */}
        <div>
          <label htmlFor="interolances">Allergies or Interolances</label>
          <select id="interolances" multiple>
            <option value="dairy">Dairy</option>
            <option value="egg">Egg</option>
            <option value="gluten">Gluten</option>
            <option value="peanut">Peanut</option>
            <option value="sesame">Sesame</option>
            <option value="seafood">Seafood</option>
            <option value="shellfish">Shellfish</option>
            <option value="soy">Soy</option>
            <option value="sulfite">Sulfite</option>
            <option value="tree nut">Tree nut</option>
            <option value="wheat">Wheat</option>
          </select>
        </div>
        {/* select for diet */}
        <div>
          <label htmlFor="diet">Diet</label>
          <select id="diet">
            <option value="">none</option>
            <option value="paleo">Paleo</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="primal">Primal</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </div>
        <Button type='submit' className="submit-btn">
          Register
        </Button>
      </form>
    )
  }
}
