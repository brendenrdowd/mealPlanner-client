import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import ApiContext from '../../contexts/ApiContext'
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
        <div className="headline">
          <h2>Login</h2>
          <p>To get quickstarted, log in using the email 'test@gmail.com' and password 'Password'</p>
        </div>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
