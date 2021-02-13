import React from 'react';
import Layout from '../';
import renderer from 'react-test-renderer';
import {describe, it} from '@jest/globals';

describe('layout Component', () => {

  it('matches the navbar snapshots', () => {
    const tree = renderer.create(
      <Layout/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});