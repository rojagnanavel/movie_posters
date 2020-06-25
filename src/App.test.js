import React from "react";
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Topnav from './components/topnav/Topnav'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  let component;
  beforeEach(() => {
    Date.parse = jest.fn(() => 1482363367071);
    component = shallow(<App />);
  });
  it('render routing', () => {
    expect(component.find('Route')).toHaveLength(2);
  });
  it('render Topnav component', () => {
    expect(component.find(Topnav)).toHaveLength(1);
  });
});
