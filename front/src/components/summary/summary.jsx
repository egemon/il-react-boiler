function getNumberOfCars(type, allCars) {
  return allCars.filter(car => car.type === type).length;
}
const Summary = ({ parking }) => {
  const allPlaces = Object.keys(parking)
  .reduce((cars, key) => cars.concat(parking[key]), []);
  const allCars = allPlaces.filter(el => !!el);

  console.log('allCars', allCars);

  return (
    <div style={{ border: '1px solid black' }}>
      <ul>
        <li>There are {allPlaces.length - allCars.length} free places </li>
        <li>Here is {getNumberOfCars('truck', allCars)} trucks</li>
        <li>Here is {getNumberOfCars('sedan', allCars)} sedans</li>
        <li>Here is {getNumberOfCars('disabled', allCars)} disableds</li>
      </ul>
    </div>
  );
};

Summary.propTypes = {
  parking: React.PropTypes.object,
};

Summary.defaultProps = {
  parking: {},
};

export default Summary;
