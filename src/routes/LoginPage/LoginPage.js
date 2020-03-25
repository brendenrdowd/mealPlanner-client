import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import ApiContext from '../../ApiContext'
import UserService from '../../services/user-api-service'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  static contextType = ApiContext

  handleLoginSuccess = (res) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    UserService.saveUser(res)
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage container'>
        <header>
          <h2>Login</h2>
        </header>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
