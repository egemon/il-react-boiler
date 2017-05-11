import Navigation from '../../components/navigation';

const Home = ({ children }) => (
  <div>
    <h1>Our Site</h1>
    <Navigation />
    {children}
  </div>

);

Home.propTypes = {
  children: React.PropTypes.node,
};

Home.defaultProps = {
  children: [],
};

export default Home;
