import Links from 'components/links/links';

const Home = ({children}) => (
  <div>
    <h1>Our Site</h1>
    <Links/>
    {children}
  </div>

);
export default Home;