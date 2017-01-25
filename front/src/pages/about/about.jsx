import { connect } from 'react-redux';
import Counter from '../../components/counter/counter';
import changeCountAction from '../../actions/counter';
import { getAboutCount } from '../../reducers/root-reducer';

const About = ({ count, changeCount }) => (
  <div>
    <h1>About</h1>
    <Counter
      count={count}
      changeCount={changeCount}
    />
  </div>
);

About.propTypes = {
  count: React.PropTypes.number,
  changeCount: React.PropTypes.func.isRequired,
};

About.defaultProps = {
  count: 0,
};

export default connect(getAboutCount, {
  changeCount: changeCountAction.bind(null, 'ABOUT'),
})(About);
