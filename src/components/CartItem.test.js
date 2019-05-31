import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import { shallow } from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<CartItem title="test book" price="6" />);
})
it('renders without crashing', () => {
  //const component = shallow(<CartItem title="test book" price="6" />);
  expect(component.text()).toEqual('test book6');
});