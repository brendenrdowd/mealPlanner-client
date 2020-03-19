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
    const { full_name, nick_name, user_name, password } = ev.target

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
      .then(user => {
        full_name.value = ''
        nick_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res =>{
        this.setState({error:res.error})
      })
  }

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
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
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
          <label htmlFor='RegistrationForm__confirm'>
            Confirm Password <Required />
          </label>
          <Input
            name='confirm'
            type='password'
            required
            id='RegistrationForm__confirm'>
          </Input>
        </div>
        {/* select for meal type */}
        {/* select for cuisine */}
        {/* <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </Input>
        </div> */}
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
