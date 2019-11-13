import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 'K78N2P9',
      name: 'John Doe',
      email: 'doemasterjohn@john.com'
    },
    {
      id: 'L34J1O5',
      name: 'Sally Jones',
      email: 'sallysmells@sallyconsulting.com'
    }
  ];

  const wrapper = shallow(
    <CardList robots={mockRobots} />
  );

  expect(wrapper).toMatchSnapshot();
});