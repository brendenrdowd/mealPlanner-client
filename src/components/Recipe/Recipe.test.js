  
import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './Recipe';

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})
describe('recipe component', ()=>{
  it('renders without crashing', () => {
    const recipe = {
      id: 246916,
      recipeId:5,
      image: "https:spoonacular.com/recipeImages/246916-556x370.jpg",
      title: "Bison Burger"
    }
  
    const wrapper = shallow(<Recipe key={recipe.id} recipe={recipe} onDelete={() => {}} inDatabase={true}/>,{ attachTo: window.domNode });
  });
})