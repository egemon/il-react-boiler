import { connect } from 'react-redux';
import Counter from '../../components/counter/counter';
import changeCountAction from '../../components/counter/counter-actions-creators';

const About = ({ count, changeCount }) => (
  <div>
    <h1>About</h1>
    <Counter
      count={count}
      changeCount={changeCount}
    />
  </div>
);

const mapStateToProps = ({ about: { count } }) => ({ count });

const mapDispatchToProps = dispatch => ({
  changeCount: (count) => {
    dispatch(changeCountAction('ABOUT', count));
  },
});

About.propTypes = {
  count: React.PropTypes.number,
  changeCount: React.PropTypes.func.isRequired,
};

About.defaultProps = {
  count: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
