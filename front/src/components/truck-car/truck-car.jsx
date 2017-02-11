import Car from '../car/car';

const TruckCar = ({ park, unpark }) => (
  <Car type={'truck'} park={park} unpark={unpark} />
);

TruckCar.propTypes = {
  park: React.PropTypes.func,
  unpark: React.PropTypes.func,
};

TruckCar.defaultProps = {
  park: function park() { console.warn('park  !!!'); },
  unpark: function unpark() { console.warn('unpark  !!!'); },
};

export default TruckCar;
