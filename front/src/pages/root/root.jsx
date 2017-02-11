import { connect } from 'react-redux';
import Car from '../../components/car/car';
import Sedan from '../../components/sedan-car/sedan-car';
import Disabled from '../../components/disabled-car/disabled-car';
import Truck from '../../components/truck-car/truck-car';
import ParkStackList from '../../components/park-stack-list/park-stack-list';


const Home = ({ parking }) => (<div>
    This is parking
    <Car />
  <Sedan />
  <Truck />
  <Disabled />
  <ParkStackList parking={parking} />
</div>);

Home.propTypes = {
  parking: React.PropTypes.object,
};

Home.defaultProps = {
  parking: {},
};

function mapStateToProps(state) {
  return {
    parking: state.parking,
  };
}


export default connect(mapStateToProps)(Home);
