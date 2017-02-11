import ParkPlace from '../park-place/park-place';


const ParkStack = ({ stackName, places }) => {
  const parkComponents = places.map((content, i) => <ParkPlace content={content} key={i} />);

  return (<div style={{ border: '1px solid yellow' }}>
    <div>This is stack {stackName}</div>
    {parkComponents}
  </div>);
};

ParkStack.propTypes = {
  stackName: React.PropTypes.string,
  places: React.PropTypes.array,
};

ParkStack.defaultProps = {
  stackName: 'some stack',
  places: [],
};


export default ParkStack;
