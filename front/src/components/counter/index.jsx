const Counter = ({ count, changeCount }) => (
  <div>
    <button
      onClick={() => changeCount(count - 1)}
    >-</button>
    {count}
    <button
      onClick={() => changeCount(count + 1)}
    >+</button>
  </div>
);

Counter.propTypes = {
  count: React.PropTypes.number,
  changeCount: React.PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
