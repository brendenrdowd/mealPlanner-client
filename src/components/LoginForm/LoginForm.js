import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { email, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, password.value)
    )

    email.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { email, password } = ev.target

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess(res.id)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div>
          <label htmlFor='LoginForm__email'>
            Email
          </label>
          <Input
            required
            name='email'
            id='LoginForm__email'>
          </Input>
        </div>
        <div>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit' className="submit-btn">
          Login
        </Button>
      </form>
    )
  }
}
