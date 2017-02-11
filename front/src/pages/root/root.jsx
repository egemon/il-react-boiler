import { connect } from 'react-redux';
import ParkStackList from '../../components/park-stack-list/park-stack-list';
import Summary from '../../components/summary/summary';

const carTypes = ['sedan', 'truck', 'disabled'];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }

  switchParking() {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        const nubmer = Math.round(Math.random() * 10) % carTypes.length;
        this.props.park({ type: carTypes[nubmer] });
      }, 500);

      this.setState({ intervalId });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  }
  render() {
    const { parking, park } = this.props;

    return (
      <div>
        This is parking:
        <ul>
          <li>
            <button onClick={() => park({ type: 'sedan' })}>Park sedan</button>
          </li>
          <li>
            <button onClick={() => park({ type: 'truck' })}>Park truck</button>
          </li>
          <li>
            <button onClick={() => park({ type: 'disabled' })}>Park disabled</button>
          </li>
        </ul>
        <button onClick={() => this.switchParking()}>{
          this.state.intervalId ? 'Stop this shit' : 'Start this shit'
        }</button>
        <Summary parking={parking} />
        <ParkStackList parking={parking} />
      </div>
    );
  }
}

Home.propTypes = {
  parking: React.PropTypes.object,
  park: React.PropTypes.func,
};

Home.defaultProps = {
  parking: {},
  park: () => {},
};

function mapStateToProps(state) {
  return {
    parking: state.parking,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    park(car) {
      dispatch({
        type: 'CAR_ARRIVED',
        payload: car,
      });
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
