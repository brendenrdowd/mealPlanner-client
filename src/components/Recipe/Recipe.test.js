  
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Recipe from './Recipe';

configure({ adapter: new Adapter() });

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
  
    const container = shallow(<Recipe key={recipe.id} recipe={recipe} onDelete={() => {}} inDatabase={true}/>,{ attachTo: window.domNode });
  });
})