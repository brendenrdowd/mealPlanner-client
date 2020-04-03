import React from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt, faHome,faSearch,faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faSignOutAlt,faHome,faSearch,faBars )

describe('Search Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})