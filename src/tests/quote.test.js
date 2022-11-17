import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('should match the snapshot', () => {
  const quote = renderer.create(<Quote />);
  const tree = quote.toJSON();
  expect(tree).toMatchSnapshot();
});
