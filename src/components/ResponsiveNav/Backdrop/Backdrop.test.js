import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { BrowserRouter } from 'react-router-dom';

describe('Backdrop Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> <Backdrop /> </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})