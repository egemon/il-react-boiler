import Counter from 'components/counter/counter';
import {changeCount} from 'components/counter/actions';
import {connect} from 'react-redux';


const About = ({count, changeCount}) => (
  <div>
    <h1>About</h1>
    <Counter
      count={count}
      changeCount={changeCount}
    />
  </div>
);

function mapStateToProps ({about: {count}}) {
  return {count};
}

function mapDispatchToProps (dispatch) {
  return {
    changeCount: (count) => {
      dispatch(changeCount('ABOUT', count))
    }
  };
}

About.propTypes = {
  count: React.PropTypes.number,
  changeCount: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
