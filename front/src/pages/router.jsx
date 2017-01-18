import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import Root from 'pages/root/root';
import Contacts from 'pages/contacts/contacts';
import About from 'pages/about/about';
import Message from 'pages/messages/messages';
import News from 'pages/news/news';


const AppRouter =() => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={About}/>
      <Route path="contacts" component={Contacts}/>
      <Route path="news" component={News}/>
      <Route path="message(/:id)" component={Message}/>
      <Redirect from="home" to="/" />
    </Route>
  </Router>
);
export default AppRouter;
