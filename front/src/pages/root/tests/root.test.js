import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX); // toEqualJSX, ToIncludeJSX
import Root from '../root';

describe('Root', () => {
  it('should render header', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Root>Hello</Root>);
    const output = renderer.getRenderOutput();
    console.log('output', output);

    const actual = renderer.getRenderOutput();
    const expected = <h1>Our Site</h1>;
    expect(actual).toIncludeJSX(expected);
  });
});