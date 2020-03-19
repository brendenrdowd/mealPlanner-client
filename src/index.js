import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { ThingListProvider } from './contexts/ThingListContext'
// import { ThingProvider } from './contexts/ThingContext'
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt, faHome,faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import './index.css';

library.add(fab,faSignOutAlt,faHome,faSearch,faBars )

ReactDOM.render(
  <BrowserRouter>
    {/* <ThingListProvider>
    <ThingProvider> */}
    <App />
    {/* </ThingProvider>
  </ThingListProvider> */}
  </BrowserRouter>,
  document.getElementById('root'));
