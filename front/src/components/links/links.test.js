import expect from 'expect';
import Links from './links';
import renderComponent from '../../test-helpers/render-component';

describe('Links', () => {
  it('should render nav block', () => {
    const actual = renderComponent(<Links/>).type;
    const expected = 'nav';
    expect(actual).toEqual(expected);
  });
});