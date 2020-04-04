import React from 'react';
import ReactDOM from 'react-dom';
import ResultPage from './ResultPage';

describe('Result Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})