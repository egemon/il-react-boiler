import Car from '../car/car';

const SedanCar = ({ park, unpark }) => (
  <Car type={'sedan'} park={park} unpark={unpark} />
);

SedanCar.propTypes = {
  park: React.PropTypes.func,
  unpark: React.PropTypes.func,
};

SedanCar.defaultProps = {
  park: function park() { console.warn('park  !!!'); },
  unpark: function unpark() { console.warn('unpark  !!!'); },
};

export default SedanCar;
