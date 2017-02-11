const ParkingInfo = ({ parkingInfo }) => {
  if (parkingInfo) {
    return (<div>
      It is parked in stack {parkingInfo.stack} at {parkingInfo.position}
    </div>);
  }
  return <div>Not parked</div>;
};

ParkingInfo.propTypes = {
  parkingInfo: React.PropTypes.func,
};

ParkingInfo.defaultProps = {
  parkingInfo: function unpark() { console.warn('unpark  !!!'); },
};


export default ParkingInfo;
