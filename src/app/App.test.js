import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should match snapshot', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
