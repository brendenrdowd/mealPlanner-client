import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { withContext } from 'shallow-with-context';
import DashboardPage from './DashboardPage';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const context = { date: new Date() };
    const ComponentWithContext = withContext(DashboardPage, context);
    const wrapper = shallow(<ComponentWithContext />, { context });
    ReactDOM.render(<BrowserRouter>wrapper</BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})