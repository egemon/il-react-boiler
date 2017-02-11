const Summary = ({ parking }) => {
  const truckNumber = parking.trucks.filter(content => content === null);

  return (
    <div style={{ border: '1px solid black' }}>
      <ul>
        <li>Here is {truckNumber} trucks</li>
        <li>Here is {sedanNumber} sedans</li>
        <li>Here is {disabledNumber} disableds</li>
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
