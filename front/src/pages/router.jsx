import { Router, Route, browserHistory } from 'react-router';
import Root from './root/root';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} />
  </Router>
);
export default AppRouter;
