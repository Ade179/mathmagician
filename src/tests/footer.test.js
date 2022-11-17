import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

test('should match the snapshot', () => {
  const home = renderer.create(<Footer />);
  const tree = home.toJSON();
  expect(tree).toMatchSnapshot();
});
