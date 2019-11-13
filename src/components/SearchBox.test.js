import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('renders SearchBox component', () => {
  const wrapper = shallow(<SearchBox />);

  expect(wrapper).toMatchSnapshot();
});
