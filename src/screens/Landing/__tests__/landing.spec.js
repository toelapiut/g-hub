import React from 'react';
import Landing from '../';
import renderer from 'react-test-renderer';
import {describe, it} from '@jest/globals';

describe('landing page Component', () => {

  it('matches the landing page snapshots', () => {
    const tree = renderer.create(
      <Landing/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});