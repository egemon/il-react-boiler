import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Links from './links';

describe('Links', () => {
  it('should render nav block', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Links/>);
    const actual = renderer.getRenderOutput().type;
    const expected = 'nav';
    expect(actual).toEqual(expected);
  });
});