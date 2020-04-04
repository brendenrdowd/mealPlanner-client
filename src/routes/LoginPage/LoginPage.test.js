import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';

describe('Login Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})