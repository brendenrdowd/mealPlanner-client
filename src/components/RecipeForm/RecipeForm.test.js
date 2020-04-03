import React from 'react'
import ReactDOM from 'react-dom'
import RecipeForm from './RecipeForm'

describe('Recipe Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})