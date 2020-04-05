import React from 'react';
import { shallow } from 'enzyme';
import RecipePage from './RecipePage';

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})

describe('recipe page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RecipePage match={{ params: { recipeId: 1 }, isExact: true, path: "", url: "" }} />, { attachTo: window.domNode });
  });
})