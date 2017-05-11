import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React-Bootstrap
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer
        to={{ pathname: '/messages' }}
      >
        <NavItem>Messages</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default Navigation;
