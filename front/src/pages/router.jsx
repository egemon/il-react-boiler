import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './root/index';
import About from './about/index';
import Messages from './messages/index';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={About} />
      <Route path="messages" component={Messages} />
    </Route>
  </Router>
);
export default AppRouter;
