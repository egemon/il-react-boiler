import Car from '../car/car';

const DisabledCar = ({ park, unpark }) => (
  <Car type={'disabled'} park={park} unpark={unpark} />
);

DisabledCar.propTypes = {
  park: React.PropTypes.func,
  unpark: React.PropTypes.func,
};

DisabledCar.defaultProps = {
  park: function park() { console.warn('park  !!!'); },
  unpark: function unpark() { console.warn('unpark  !!!'); },
};

export default DisabledCar;
