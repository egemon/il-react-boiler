import {Link} from 'react-router';

import {active} from './links.styl';

const Links = () => (
  <nav>
    <div>
      <Link activeClassName={active} to="/">
        About
      </Link>
    </div>
    <div>
      <Link activeClassName={active} to="/message/3">
        Message
      </Link>
    </div>
    <div>
      <Link activeClassName={active} to="/news">
        News
      </Link>
    </div>
    <div>
      <Link activeClassName={active}
        to={{
          pathname: '/contacts',
          query: {
            subject: 'Yo'
          }
        }}
      >
        Contact
      </Link>
    </div>
  </nav>
);

export default Links;
