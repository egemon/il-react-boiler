import { connect } from 'react-redux';
import ParkStackList from '../../components/park-stack-list/park-stack-list';


const Home = ({ parking, park }) => (<div>
  This is parking:
  <ul>
    <li>
      <button onClick={() => park({ type: 'sedan' })}>Park sedan</button>
    </li>
    <li>
      <button onClick={() => park({ type: 'truck' })}>Park truck</button>
    </li>
    <li>
      <button onClick={() => park({ type: 'disabled' })}>Park disabled</button>
    </li>
  </ul>
  <ParkStackList parking={parking} />
</div>);

Home.propTypes = {
  parking: React.PropTypes.object,
  park: React.PropTypes.func,
};

Home.defaultProps = {
  parking: {},
  park: ()=>{},
};

function mapStateToProps(state) {
  return {
    parking: state.parking,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    park(car) {
      dispatch({
        type: 'CAR_ARRIVED',
        payload: car,
      });
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
