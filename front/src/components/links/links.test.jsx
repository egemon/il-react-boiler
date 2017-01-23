import expect from 'expect';
import { Link } from 'react-router';
import expectJSX from 'expect-jsx';
import Links from './links';
import renderComponent from '../../test-helpers/render-component';

expect.extend(expectJSX); // toEqualJSX, ToIncludeJSX

describe('Links', () => {
  it('should render brand', () => {
    const actual = renderComponent(<Links />);
    const expected = <Link to="/">React-Bootstrap</Link>;
    expect(actual).toIncludeJSX(expected);
  });
});
