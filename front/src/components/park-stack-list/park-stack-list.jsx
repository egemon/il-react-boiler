import ParkStack from '../park-stack/park-stack';

const ParkStackList = ({ parking }) => {
  const parkings = Object.keys(parking).map(
    key => (<ParkStack stackName={key} places={parking[key]} key={key} />),
  );

  return (
    <div style={{ border: '1px solid blue' }}>
      {parkings}
    </div>
  );
};

ParkStackList.propTypes = {
  parking: React.PropTypes.object,
};

ParkStackList.defaultProps = {
  parking: {},
};


export default ParkStackList;
