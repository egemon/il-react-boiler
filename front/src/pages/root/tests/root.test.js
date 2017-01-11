import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX); // toEqualJSX, ToIncludeJSX
import Root from '../root';
import renderComponent from '../../../test-helpers/render-component';


describe('Root', () => {
  it('should render header', () => {
    const actual = renderComponent(<Root>Hello</Root>);
    const expected = <h1>Our Site</h1>;
    expect(actual).toIncludeJSX(expected);
  });
});