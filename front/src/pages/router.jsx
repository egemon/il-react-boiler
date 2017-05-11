import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './root/index';
import Home from './home/index';
import Login from './login/index';
import Messages from './messages/index';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="messages" component={Messages} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);
export default AppRouter;
