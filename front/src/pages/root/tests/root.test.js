import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Root from '../root';
import Links from 'components/links/links';


describe('Root', () => {
  it('should render header', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Root>Hello</Root>);
    const output = renderer.getRenderOutput();
    console.log('output', output);

    const actual = renderer.getRenderOutput();
    const expected = (
      <div>
        <h1>Our Site</h1>
        <Links/>
        Hello
      </div>
    );
    expect(actual).toEqual(expected);
  });
});