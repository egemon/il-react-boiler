import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import Root from './root/root';
import Contacts from './contacts/contacts';
import About from './about/about';
import Messages from './messages/messages';
import News from './news/news';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={About} />
      <Route path="contacts" component={Contacts} />
      <Route path="news" component={News} />
      <Route path="messages" component={Messages} />
      <Redirect from="home" to="/" />
    </Route>
  </Router>
);
export default AppRouter;
