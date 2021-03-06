import React from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faSearch )

describe('Search Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})