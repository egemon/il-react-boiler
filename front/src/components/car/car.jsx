import { connect } from 'react-redux';
import ParkingInfo from '../parking-info/parking-info';

const Car = ({ unpark, type, parkingInfo }) => (
  <div style={{ border: '1px solid black' }}>
    This is car of type {type}
    <ParkingInfo parkingInfo={parkingInfo} />
    <button
      onClick={() => unpark({ type, parkingInfo })}
    >unpark</button>
  </div>
);

Car.propTypes = {
  unpark: React.PropTypes.func,
  type: React.PropTypes.string,
  parkingInfo: React.PropTypes.object,
};

Car.defaultProps = {
  unpark: function unpark() { console.warn('unpark  !!!'); },
  type: 'sedan',
  parkingInfo: null,
};

function mapDispatchToProps(dispatch) {
  return {
    unpark(car) {
      dispatch({
        type: 'CAR_LEFT',
        payload: car,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(Car);
