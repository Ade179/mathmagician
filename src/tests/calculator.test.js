import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

test('should match the snapshot', () => {
  const calc = renderer.create(<Calculator />);
  const tree = calc.toJSON();
  expect(tree).toMatchSnapshot();
});
