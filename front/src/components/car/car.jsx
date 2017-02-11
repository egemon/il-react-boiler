import { connect } from 'react-redux';

const ParkingInfo = ({ parkingInfo }) => {
  if (parkingInfo) {
    return (<div>
      It is parked in stack {parkingInfo.stack} at {parkingInfo.position}
    </div>);
  }
  return <div>Not parked</div>;
};

const Car = ({ park, unpark, type, parkingInfo }) => (
  <div style={{ border: '1px solid black' }}>
    This is car of type {type}
    <ParkingInfo parkingInfo={parkingInfo} />
    <button
      onClick={() => park({ type })}
    >Park</button>
    <button
      onClick={() => unpark({ type })}
    >unpark</button>
  </div>
);

Car.propTypes = {
  park: React.PropTypes.func,
  unpark: React.PropTypes.func,
  type: React.PropTypes.string,
  parkingInfo: React.PropTypes.object,
};

Car.defaultProps = {
  park: function park() { console.warn('park  !!!'); },
  unpark: function unpark() { console.warn('unpark  !!!'); },
  type: 'sedan',
  parkingInfo: null,
};

function mapDispatchToProps(dispatch) {
  return {
    park({ type }) {
      dispatch({
        type: 'CAR_ARRIVED',
        payload: { type },
      });
    },
    unpark({ type }) {
      dispatch({
        type: 'CAR_LEFT',
        payload: { type },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(Car);
