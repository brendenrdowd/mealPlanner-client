import React, { Component } from 'react'

export default class NotFoundPage extends Component {
  render() {
    return (
      <header className='NotFoundPage'>
        <h1>404!</h1>
        {/* add illustrator empty plate */}
        <h2>Page not found</h2>
        <p>Try going back to your previous page.</p>
      </header>
    )
  }
}
