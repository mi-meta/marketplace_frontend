import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../providers';
import './header.style.scss';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {
  Row,
  Image,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
} from 'react-bootstrap';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <Row>
      <Navbar bg={`${theme}`} variant={`${theme === 'dark' ? 'dark' : 'light'}`} expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <Image src="/icons/logo.svg" className="img-brand" />
            <span>mi-meta</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <InputGroup className="d-flex">
              <InputGroup.Text id="basic-addon1">
                <Image src={`/icons/lens.svg`} />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search items and collections"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </InputGroup>
            <Nav className="me-auto pull-width" />
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '140px' }} navbarScroll>
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <Link to="/explore">Marketplace</Link>
                <Link to="/auctions">Auctions</Link>
                <Link to="/collection">Collections</Link>
                <Link to="/drops">New Drops</Link>
              </NavDropdown>
              <Link to="/activity">Activity</Link>
              <Link to="/learn">Learn</Link>
              <Link to="/create">Create</Link>
              <Link to="/profile">
                <Image src="/icons/user.svg" />
              </Link>
              {/* <Nav.Link href="#action1">
                <Image src="/icons/user.svg" />
              </Nav.Link> */}
              <Nav.Link href="#action1">
                <Image src="/icons/save.svg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export { Header };
