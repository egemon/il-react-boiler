import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX); // toEqualJSX, ToIncludeJSX
import Links from './links';
import renderComponent from '../../test-helpers/render-component';
import {Link} from 'react-router';


describe('Links', () => {
  it('should render brand', () => {
    const actual = renderComponent(<Links/>);
    const expected = <Link to="/">React-Bootstrap</Link>;
    expect(actual).toIncludeJSX(expected);
  });
});
