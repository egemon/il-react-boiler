import Car from '../../components/car/car';

const ParkPlace = ({ content }) => {
  if (content === 'empty') {
    return <div>This place is vacant</div>;
  }
  return (
    <div style={{ border: '1px solid green' }}>
      <Car type={content.type} parkingInfo={content.parkingInfo} />
    </div>
  );
};

ParkPlace.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]),
};

ParkPlace.defaultProps = {
  content: 'empty',
};


export default ParkPlace;
