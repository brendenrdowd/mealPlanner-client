import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    console.log("success")
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage container'>
        <header>
          <h2>Sign Up!</h2>
        </header>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
