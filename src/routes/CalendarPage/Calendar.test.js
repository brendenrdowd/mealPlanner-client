import React from 'react';
import ReactDOM from 'react-dom';
import CalendarPage from './CalendarPage';
import { BrowserRouter } from 'react-router-dom';

describe('Calendar Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> <CalendarPage /> </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})