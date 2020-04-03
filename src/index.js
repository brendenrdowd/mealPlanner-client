import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './history'
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt, faHome,faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import './index.css';

library.add(fab,faSignOutAlt,faHome,faSearch,faBars )

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));
