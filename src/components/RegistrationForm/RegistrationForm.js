import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, diet, email, password, confirm, interolances } = ev.target

    this.setState({ error: null });
    // if(password !== confirm){
    //   this.setState({ error: 'Passwords must match' })

    // }
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      confirm:confirm.value,
      name: name.value,
      diet: diet.value,
      interolances: interolances.value,
    })
    // should just replace this with the 
      .then(res => {
        name.value = ''
        diet.value = ''
        interolances.value = ''
        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      // why isn't this triggering?
      .catch(e => {
        this.setState({ error: e})
      })
  }

  // change interolances to a select field 
  // dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat

  render() {
    const { error } = this.state
    return (
      <form

        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
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
          <label htmlFor='RegistrationForm__interolances'>
            Restrictions, Interolances or Allergies
          </label>
          <Input
            name='interolances'
            type='text'
            id='interolances'>
          </Input>
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
