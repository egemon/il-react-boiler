import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const Links = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React-Bootstrap
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/message/3">
        <NavItem>
          Message
        </NavItem>
      </LinkContainer>

      <LinkContainer to="/news">
        <NavItem>News</NavItem>
      </LinkContainer>
      <LinkContainer
        to={{ pathname: '/contacts',
        query: { subject: 'Yo' } }}
      >
        <NavItem>Contacts</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default Links;
